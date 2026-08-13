/**
 * Legacy PNG Migration — localStorage → IndexedDB
 *
 * Migrates drawing data from the legacy format (base64 PNG DataURLs in
 * localStorage) to IndexedDB Blob storage. This runs once on first load
 * of the new system and cleans up localStorage keys after successful migration.
 *
 * Legacy key format: 'kpss-defterim-cizim-{topicId}'
 * New storage: IndexedDB 'kpss-defterim-drawings' → 'drawings' store
 */

import { createLogger } from '@core/logging/Logger';

const logger = createLogger('LegacyMigration');

const LEGACY_PREFIX = 'kpss-defterim-cizim-';
const MIGRATION_FLAG = 'kpss-defterim-migration-v1-done';
const DB_NAME = 'kpss-defterim-drawings';
const DB_VERSION = 1;
const STORE_NAME = 'drawings';

export interface MigrationResult {
  readonly migrated: number;
  readonly failed: number;
  readonly skipped: boolean;
}

/**
 * Check if migration has already been completed
 */
export function isMigrationDone(): boolean {
  try {
    return localStorage.getItem(MIGRATION_FLAG) === '1';
  } catch {
    return false;
  }
}

/**
 * Find all legacy drawing keys in localStorage
 */
function findLegacyKeys(): { key: string; topicId: number }[] {
  const keys: { key: string; topicId: number }[] = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(LEGACY_PREFIX)) {
        const idStr = key.substring(LEGACY_PREFIX.length);
        const topicId = parseInt(idStr, 10);
        if (!isNaN(topicId)) {
          keys.push({ key, topicId });
        }
      }
    }
  } catch {
    // localStorage may be unavailable
  }
  return keys;
}

/**
 * Convert a base64 DataURL to a Blob
 */
function dataUrlToBlob(dataUrl: string): Blob | null {
  try {
    const parts = dataUrl.split(',');
    if (parts.length !== 2) return null;

    const mimeMatch = parts[0]!.match(/:(.*?);/);
    if (!mimeMatch) return null;

    const mime = mimeMatch[1]!;
    const byteString = atob(parts[1]!);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mime });
  } catch {
    return null;
  }
}

/**
 * Open (or create) the IndexedDB database for drawings
 */
function openDrawingsDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'topicId' });
      }
    };
  });
}

/**
 * Save a single drawing blob to IndexedDB
 */
function saveToIDB(db: IDBDatabase, topicId: number, blob: Blob): Promise<void> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put({ topicId, data: blob, migratedAt: Date.now() });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

/**
 * Run the legacy PNG migration.
 *
 * This is idempotent — it checks a flag before running and marks completion.
 * Returns the migration result.
 */
export async function runLegacyMigration(): Promise<MigrationResult> {
  if (isMigrationDone()) {
    return { migrated: 0, failed: 0, skipped: true };
  }

  const legacyKeys = findLegacyKeys();
  if (legacyKeys.length === 0) {
    // No legacy data — mark as done
    try { localStorage.setItem(MIGRATION_FLAG, '1'); } catch { /* ignore */ }
    logger.info('No legacy drawing data found, migration skipped');
    return { migrated: 0, failed: 0, skipped: true };
  }

  logger.info(`Found ${legacyKeys.length} legacy drawing(s) to migrate`);

  let db: IDBDatabase;
  try {
    db = await openDrawingsDB();
  } catch (e) {
    logger.warn('Could not open IndexedDB for migration', e);
    return { migrated: 0, failed: legacyKeys.length, skipped: false };
  }

  let migrated = 0;
  let failed = 0;

  for (const { key, topicId } of legacyKeys) {
    try {
      const dataUrl = localStorage.getItem(key);
      if (!dataUrl) {
        failed++;
        continue;
      }

      const blob = dataUrlToBlob(dataUrl);
      if (!blob) {
        logger.warn(`Failed to convert DataURL for topic ${topicId}`);
        failed++;
        continue;
      }

      await saveToIDB(db, topicId, blob);

      // Remove from localStorage after successful migration
      try { localStorage.removeItem(key); } catch { /* ignore */ }

      migrated++;
      logger.debug(`Migrated drawing for topic ${topicId} (${blob.size} bytes)`);
    } catch (e) {
      logger.warn(`Migration failed for topic ${topicId}`, e);
      failed++;
    }
  }

  db.close();

  // Mark migration as done
  try { localStorage.setItem(MIGRATION_FLAG, '1'); } catch { /* ignore */ }

  logger.info(`Migration complete: ${migrated} migrated, ${failed} failed`);
  return { migrated, failed, skipped: false };
}
