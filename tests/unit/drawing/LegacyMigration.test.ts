import { describe, it, expect, vi, beforeEach } from 'vitest';
import { isMigrationDone } from '@drawing/LegacyMigration';

describe('LegacyMigration', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('reports migration not done when flag is absent', () => {
    expect(isMigrationDone()).toBe(false);
  });

  it('reports migration done when flag is set', () => {
    localStorage.setItem('kpss-defterim-migration-v1-done', '1');
    expect(isMigrationDone()).toBe(true);
  });

  it('returns false when localStorage throws', () => {
    const spy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('localStorage disabled');
    });
    expect(isMigrationDone()).toBe(false);
    spy.mockRestore();
  });
});
