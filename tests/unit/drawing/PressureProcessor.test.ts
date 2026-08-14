import { describe, it, expect } from 'vitest';
import { PressureProcessor, hasPressureSupport } from '@drawing/input/PressureProcessor';

describe('PressureProcessor', () => {
  it('returns midpoint when pressure is 0 (no data)', () => {
    const pp = new PressureProcessor();
    const mult = pp.getWidthMultiplier(0, 'ball-pen');
    expect(mult).toBeCloseTo(1.0, 1); // (0.85+1.15)/2 = 1.0
  });

  it('returns midpoint when disabled', () => {
    const pp = new PressureProcessor();
    pp.setEnabled(false);
    expect(pp.isEnabled()).toBe(false);
    const mult = pp.getWidthMultiplier(0.8, 'ball-pen');
    expect(mult).toBeCloseTo(1.0, 1);
  });

  it('ball-pen has subtle variation', () => {
    const pp = new PressureProcessor();
    const light = pp.getWidthMultiplier(0.1, 'ball-pen');
    const heavy = pp.getWidthMultiplier(0.9, 'ball-pen');
    expect(heavy - light).toBeLessThan(0.4);
  });

  it('brush has dramatic variation', () => {
    const pp = new PressureProcessor();
    const light = pp.getWidthMultiplier(0.1, 'brush');
    const heavy = pp.getWidthMultiplier(0.9, 'brush');
    expect(heavy - light).toBeGreaterThan(1.0);
  });

  it('fountain is more responsive than ball-pen', () => {
    const pp = new PressureProcessor();
    const bpRange = pp.getWidthMultiplier(1, 'ball-pen') - pp.getWidthMultiplier(0.01, 'ball-pen');
    const fpRange = pp.getWidthMultiplier(1, 'fountain') - pp.getWidthMultiplier(0.01, 'fountain');
    expect(fpRange).toBeGreaterThan(bpRange);
  });

  it('opacity variation works for pencil', () => {
    const pp = new PressureProcessor();
    const light = pp.getOpacityVariation(0.2, 0.8);
    const heavy = pp.getOpacityVariation(0.9, 0.8);
    expect(light).toBeLessThan(heavy);
    expect(heavy).toBeLessThanOrEqual(1.0);
  });

  it('opacity returns base when disabled', () => {
    const pp = new PressureProcessor();
    pp.setEnabled(false);
    expect(pp.getOpacityVariation(0.5, 0.7)).toBe(0.7);
  });
});
