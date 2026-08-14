import { describe, it, expect } from 'vitest';
import { Stabilizer } from '@drawing/input/Stabilizer';
import type { SmoothedPoint } from '@drawing/input/Stabilizer';

function pt(x: number, y: number): SmoothedPoint {
  return { x, y, pressure: 0.5, timestamp: 0 };
}

describe('Stabilizer', () => {
  it('OFF level passes through unchanged', () => {
    const s = new Stabilizer();
    s.setLevel('off');
    const input = pt(10, 20);
    const output = s.process(input);
    expect(output.x).toBe(10);
    expect(output.y).toBe(20);
  });

  it('LOW level smooths with window 2', () => {
    const s = new Stabilizer();
    s.setLevel('low');
    s.reset();
    const p1 = s.process(pt(0, 0));
    expect(p1.x).toBe(0); // only 1 point in buffer
    const p2 = s.process(pt(10, 10));
    // average of (0,0) and (10,10) = (5,5)
    expect(p2.x).toBe(5);
    expect(p2.y).toBe(5);
  });

  it('MEDIUM level uses window 4', () => {
    const s = new Stabilizer();
    s.setLevel('medium');
    s.reset();
    s.process(pt(0, 0));
    s.process(pt(10, 0));
    s.process(pt(20, 0));
    const p4 = s.process(pt(30, 0));
    // average of 0,10,20,30 = 15
    expect(p4.x).toBe(15);
  });

  it('HIGH level uses window 6', () => {
    const s = new Stabilizer();
    s.setLevel('high');
    expect(s.getLevel()).toBe('high');
  });

  it('reset clears buffer', () => {
    const s = new Stabilizer();
    s.setLevel('low');
    s.process(pt(100, 100));
    s.reset();
    const p = s.process(pt(0, 0));
    expect(p.x).toBe(0); // buffer was reset, no averaging with old data
  });

  it('processAll handles multiple points', () => {
    const s = new Stabilizer();
    s.setLevel('off');
    const results = s.processAll([pt(1, 1), pt(2, 2), pt(3, 3)]);
    expect(results).toHaveLength(3);
    expect(results[0]!.x).toBe(1);
    expect(results[2]!.x).toBe(3);
  });
});
