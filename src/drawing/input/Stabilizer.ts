/**
 * Stabilizer — Stroke smoothing for natural drawing.
 *
 * Applies moving average smoothing to raw pointer input.
 * 4 levels: OFF (pass-through), LOW, MEDIUM, HIGH.
 *
 * Higher stabilization = smoother lines but slightly more latency.
 * The smoothing window determines how many historical points are averaged.
 */

import type { StabLevel } from '@drawing/domain/ToolTypes';
import { STAB_WINDOW } from '@drawing/domain/ToolTypes';

/** Smoothed point output */
export interface SmoothedPoint {
  readonly x: number;
  readonly y: number;
  readonly pressure: number;
  readonly timestamp: number;
}

export class Stabilizer {
  private level: StabLevel = 'medium';
  private buffer: SmoothedPoint[] = [];

  /** Set stabilization level */
  setLevel(level: StabLevel): void {
    this.level = level;
    this.reset();
  }

  /** Get current level */
  getLevel(): StabLevel {
    return this.level;
  }

  /** Reset the smoothing buffer (call at stroke start) */
  reset(): void {
    this.buffer = [];
  }

  /**
   * Process a raw point through the stabilizer.
   * Returns the smoothed point.
   */
  process(point: SmoothedPoint): SmoothedPoint {
    const windowSize = STAB_WINDOW[this.level];

    // OFF = pass-through
    if (windowSize === 0) return point;

    // Add to buffer
    this.buffer.push(point);

    // Keep buffer at window size
    if (this.buffer.length > windowSize) {
      this.buffer.shift();
    }

    // Moving average
    let sx = 0, sy = 0, sp = 0;
    const len = this.buffer.length;

    for (const p of this.buffer) {
      sx += p.x;
      sy += p.y;
      sp += p.pressure;
    }

    return {
      x: sx / len,
      y: sy / len,
      pressure: sp / len,
      timestamp: point.timestamp, // Keep original timestamp
    };
  }

  /**
   * Process multiple points in sequence.
   * Returns smoothed versions of all input points.
   */
  processAll(points: SmoothedPoint[]): SmoothedPoint[] {
    return points.map((p) => this.process(p));
  }
}
