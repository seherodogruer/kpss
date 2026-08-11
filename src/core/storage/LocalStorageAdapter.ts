/**
 * Type-safe localStorage wrapper.
 * 
 * Provides structured access to localStorage with:
 * - JSON serialization/deserialization
 * - Error handling (private browsing, quota exceeded)
 * - Type safety via generics
 * 
 * Used for small application settings (theme, sidebar state, planner).
 * Drawing data uses IndexedDB instead.
 */

import { createLogger } from '@core/logging/Logger';

const logger = createLogger('LocalStorage');

export class LocalStorageAdapter {
  /**
   * Read a string value from localStorage.
   * Returns null if key doesn't exist or localStorage is unavailable.
   */
  getString(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      logger.warn(`Failed to read key: ${key}`);
      return null;
    }
  }

  /**
   * Write a string value to localStorage.
   * Silently fails if localStorage is unavailable (e.g. private browsing).
   */
  setString(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      logger.warn(`Failed to write key: ${key}`, e);
    }
  }

  /**
   * Read and parse a JSON value from localStorage.
   * Returns the fallback if key doesn't exist or parsing fails.
   */
  getJSON<T>(key: string, fallback: T): T {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return fallback;
      return JSON.parse(raw) as T;
    } catch {
      logger.warn(`Failed to parse JSON for key: ${key}`);
      return fallback;
    }
  }

  /**
   * Serialize and write a JSON value to localStorage.
   */
  setJSON<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      logger.warn(`Failed to write JSON for key: ${key}`, e);
    }
  }

  /**
   * Remove a key from localStorage.
   */
  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      logger.warn(`Failed to remove key: ${key}`, e);
    }
  }

  /**
   * Check if a key exists in localStorage.
   */
  has(key: string): boolean {
    try {
      return localStorage.getItem(key) !== null;
    } catch {
      return false;
    }
  }
}
