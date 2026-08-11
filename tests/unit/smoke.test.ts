import { describe, it, expect } from 'vitest';

describe('Build System', () => {
  it('should run tests successfully', () => {
    expect(1 + 1).toBe(2);
  });

  it('should support TypeScript strict mode', () => {
    const value: string = 'KPSS Defterim';
    expect(value).toBe('KPSS Defterim');
  });
});
