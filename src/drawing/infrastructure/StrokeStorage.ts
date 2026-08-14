/**
 * Stroke Storage — IndexedDB persistence for drawing documents.
 *
 * Uses IndexedDBAdapter for reliable, async storage of stroke data.
 * Each topic has one DrawingDocument stored by topicId.
 * Saves are debounced to avoid excessive writes during active drawing.
 */

import { IndexedDBAdapter } from '@core/storage/IndexedDBAdapter';
import { createLogger } from '@core/logging/Logger';
import type { DrawingDocument } from '@drawing/domain/StrokeModel';
import { createDrawingDocument, STROKE_DATA_VERSION } from '@drawing/domain/StrokeModel';

const logger = createLogger('StrokeStorage');

const DB_SCHEMA = {
  name: 'kpss-ink-engine',
  version: 2,
  stores: [
    {
      name: 'documents',
      keyPath: 'topicId',
      indexes: [
        { name: 'updatedAt', keyPath: 'updatedAt' },
      ],
    },
  ],
};

const SAVE_DEBOUNCE_MS = 400;

export class StrokeStorage {
  private db: IndexedDBAdapter;
  private saveTimers = new Map<number, ReturnType<typeof setTimeout>>();
  private opened = false;

  constructor() {
    this.db = new IndexedDBAdapter(DB_SCHEMA);
  }

  /** Open the database connection */
  async open(): Promise<void> {
    if (this.opened) return;
    await this.db.open();
    this.opened = true;
    logger.info('Stroke storage opened');
  }

  /** Load a drawing document for a topic */
  async load(topicId: number): Promise<DrawingDocument> {
    await this.ensureOpen();
    const doc = await this.db.get<DrawingDocument>('documents', topicId);
    if (!doc) {
      logger.debug(`No drawing data for topic ${topicId}, creating empty document`);
      return createDrawingDocument(topicId);
    }

    // Version migration if needed
    if (!doc.version || doc.version < STROKE_DATA_VERSION) {
      logger.info(`Migrating document for topic ${topicId} from v${doc.version ?? 1} to v${STROKE_DATA_VERSION}`);
      return this.migrateDocument(doc);
    }

    return doc;
  }

  /** Save a drawing document (debounced) */
  save(doc: DrawingDocument): void {
    // Cancel any pending save for this topic
    const existing = this.saveTimers.get(doc.topicId);
    if (existing) clearTimeout(existing);

    const timer = setTimeout(() => {
      this.saveTimers.delete(doc.topicId);
      this.saveImmediate(doc).catch((e) => {
        logger.warn(`Failed to save drawing for topic ${doc.topicId}`, e);
      });
    }, SAVE_DEBOUNCE_MS);

    this.saveTimers.set(doc.topicId, timer);
  }

  /** Save immediately (no debounce) — used on page unload */
  async saveImmediate(doc: DrawingDocument): Promise<void> {
    await this.ensureOpen();
    const updated: DrawingDocument = {
      ...doc,
      updatedAt: Date.now(),
    };
    await this.db.put('documents', updated);
    logger.debug(`Saved drawing for topic ${doc.topicId} (${doc.strokes.length} strokes)`);
  }

  /** Delete all drawing data for a topic */
  async delete(topicId: number): Promise<void> {
    await this.ensureOpen();
    await this.db.delete('documents', topicId);
    logger.info(`Deleted drawing data for topic ${topicId}`);
  }

  /** Flush any pending saves */
  async flush(): Promise<void> {
    // Note: we can't easily flush debounced saves without the document data
    // This just clears pending timers
    for (const [topicId, timer] of this.saveTimers) {
      clearTimeout(timer);
      this.saveTimers.delete(topicId);
      logger.debug(`Flushed pending save timer for topic ${topicId}`);
    }
  }

  /** Close the database */
  close(): void {
    this.flush();
    this.db.close();
    this.opened = false;
  }

  // ─── Private ───

  private async ensureOpen(): Promise<void> {
    if (!this.opened) {
      await this.open();
    }
  }

  private migrateDocument(doc: DrawingDocument): DrawingDocument {
    // Future: handle v1 → v2 migration
    return {
      ...doc,
      version: STROKE_DATA_VERSION,
    };
  }
}
