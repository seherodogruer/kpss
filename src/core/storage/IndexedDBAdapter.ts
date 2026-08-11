/**
 * Promise-based IndexedDB wrapper.
 * 
 * Provides a clean async API for IndexedDB operations.
 * Used for drawing data storage (strokes, legacy PNGs).
 * 
 * Supports schema versioning for future migrations.
 */

import { InfrastructureError } from '@core/errors/AppError';
import { createLogger } from '@core/logging/Logger';

const logger = createLogger('IndexedDB');

export interface DBSchema {
  name: string;
  version: number;
  stores: StoreSchema[];
}

export interface StoreSchema {
  name: string;
  keyPath: string;
  autoIncrement?: boolean;
  indexes?: IndexSchema[];
}

export interface IndexSchema {
  name: string;
  keyPath: string;
  unique?: boolean;
}

export class IndexedDBAdapter {
  private db: IDBDatabase | null = null;
  private readonly schema: DBSchema;

  constructor(schema: DBSchema) {
    this.schema = schema;
  }

  /**
   * Open the database connection.
   * Creates object stores and indexes on first open or version upgrade.
   */
  async open(): Promise<void> {
    if (this.db) return;

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.schema.name, this.schema.version);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        logger.info(`Upgrading database to version ${this.schema.version}`);

        for (const store of this.schema.stores) {
          if (!db.objectStoreNames.contains(store.name)) {
            const objectStore = db.createObjectStore(store.name, {
              keyPath: store.keyPath,
              autoIncrement: store.autoIncrement,
            });

            if (store.indexes) {
              for (const index of store.indexes) {
                objectStore.createIndex(index.name, index.keyPath, {
                  unique: index.unique ?? false,
                });
              }
            }

            logger.info(`Created object store: ${store.name}`);
          }
        }
      };

      request.onsuccess = (event) => {
        this.db = (event.target as IDBOpenDBRequest).result;
        logger.info(`Database opened: ${this.schema.name} v${this.schema.version}`);
        resolve();
      };

      request.onerror = (event) => {
        const error = (event.target as IDBOpenDBRequest).error;
        logger.error('Failed to open database', error);
        reject(
          new InfrastructureError(
            `Failed to open IndexedDB: ${error?.message ?? 'unknown error'}`,
            'IDB_OPEN_FAILED',
            { dbName: this.schema.name },
          ),
        );
      };
    });
  }

  /**
   * Get a single record by key from a store.
   */
  async get<T>(storeName: string, key: IDBValidKey): Promise<T | undefined> {
    this.ensureOpen();
    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const request = store.get(key);
      request.onsuccess = () => resolve(request.result as T | undefined);
      request.onerror = () => reject(this.txError('get', storeName, request.error));
    });
  }

  /**
   * Get all records from a store.
   */
  async getAll<T>(storeName: string): Promise<T[]> {
    this.ensureOpen();
    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result as T[]);
      request.onerror = () => reject(this.txError('getAll', storeName, request.error));
    });
  }

  /**
   * Put (insert or update) a record in a store.
   */
  async put<T>(storeName: string, value: T): Promise<void> {
    this.ensureOpen();
    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const request = store.put(value);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(this.txError('put', storeName, request.error));
    });
  }

  /**
   * Delete a record by key from a store.
   */
  async delete(storeName: string, key: IDBValidKey): Promise<void> {
    this.ensureOpen();
    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const request = store.delete(key);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(this.txError('delete', storeName, request.error));
    });
  }

  /**
   * Close the database connection.
   */
  close(): void {
    if (this.db) {
      this.db.close();
      this.db = null;
      logger.info('Database closed');
    }
  }

  private ensureOpen(): void {
    if (!this.db) {
      throw new InfrastructureError(
        'Database not open. Call open() first.',
        'IDB_NOT_OPEN',
      );
    }
  }

  private txError(op: string, store: string, error: DOMException | null): InfrastructureError {
    return new InfrastructureError(
      `IndexedDB ${op} failed on '${store}': ${error?.message ?? 'unknown'}`,
      'IDB_TX_FAILED',
      { operation: op, store },
    );
  }
}
