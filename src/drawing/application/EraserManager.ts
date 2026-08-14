/**
 * Eraser Manager — Stroke and point eraser logic.
 *
 * Stroke Eraser: removes entire strokes that intersect with the eraser path.
 * Point Eraser: splits strokes at the eraser point, removing only the touched segments.
 */

import type { StrokeData } from '@drawing/domain/StrokeModel';
import { isPointNearStroke, computeBoundingBox, isPointInBounds, generateStrokeId, STROKE_DATA_VERSION } from '@drawing/domain/StrokeModel';
import type { EraserMode, EraserSize } from '@drawing/domain/ToolTypes';
import { ERASER_SIZES } from '@drawing/domain/ToolTypes';
import type { StrokeManager } from './StrokeManager';

export class EraserManager {
  private mode: EraserMode = 'stroke';
  private size: EraserSize = 'medium';

  constructor(private readonly strokeManager: StrokeManager) {}

  /** Set eraser mode */
  setMode(mode: EraserMode): void { this.mode = mode; }

  /** Set point eraser size */
  setSize(size: EraserSize): void { this.size = size; }

  /** Get eraser radius in CSS pixels */
  getRadius(): number { return ERASER_SIZES[this.size]; }

  /**
   * Process an eraser point — check for intersections and erase.
   * Called on each pointer move during eraser operation.
   */
  processPoint(x: number, y: number): void {
    const radius = this.getRadius();

    if (this.mode === 'stroke') {
      this.eraseStrokeMode(x, y, radius);
    } else {
      this.erasePointMode(x, y, radius);
    }
  }

  // ─── Stroke Eraser ───

  private eraseStrokeMode(x: number, y: number, radius: number): void {
    const strokes = this.strokeManager.getStrokes();
    const toDelete: string[] = [];

    for (const stroke of strokes) {
      // Quick bounding box check first
      const bb = computeBoundingBox(stroke);
      if (!isPointInBounds(x, y, {
        minX: bb.minX - radius,
        minY: bb.minY - radius,
        maxX: bb.maxX + radius,
        maxY: bb.maxY + radius,
      })) continue;

      // Detailed hit test
      if (isPointNearStroke(x, y, stroke, radius)) {
        toDelete.push(stroke.id);
      }
    }

    if (toDelete.length > 0) {
      this.strokeManager.deleteStrokes(toDelete);
    }
  }

  // ─── Point Eraser ───

  private erasePointMode(x: number, y: number, radius: number): void {
    const strokes = this.strokeManager.getStrokes();
    const toDelete: string[] = [];
    const toAdd: StrokeData[] = [];

    for (const stroke of strokes) {
      const bb = computeBoundingBox(stroke);
      if (!isPointInBounds(x, y, {
        minX: bb.minX - radius,
        minY: bb.minY - radius,
        maxX: bb.maxX + radius,
        maxY: bb.maxY + radius,
      })) continue;

      // Check if any points are within eraser radius
      const fragments = this.splitStroke(stroke, x, y, radius);
      if (fragments !== null) {
        toDelete.push(stroke.id);
        toAdd.push(...fragments);
      }
    }

    if (toDelete.length > 0) {
      this.strokeManager.deleteStrokes(toDelete);
      for (const frag of toAdd) {
        this.strokeManager.addStroke(frag);
      }
    }
  }

  /**
   * Split a stroke at the eraser point.
   * Returns fragments (parts that survive), or null if no intersection.
   */
  private splitStroke(stroke: StrokeData, ex: number, ey: number, radius: number): StrokeData[] | null {
    const points = stroke.points;
    if (points.length === 0) return null;

    // Find which points are within the eraser radius
    const eraseRadius = radius + stroke.width / 2;
    const keep: boolean[] = points.map(
      (p) => Math.sqrt((p.x - ex) ** 2 + (p.y - ey) ** 2) > eraseRadius,
    );

    // If no points erased, no intersection
    if (keep.every((k) => k)) return null;

    // If all points erased, delete entire stroke
    if (keep.every((k) => !k)) return [];

    // Split into contiguous segments of kept points
    const fragments: StrokeData[] = [];
    let segStart = -1;

    for (let i = 0; i <= points.length; i++) {
      if (i < points.length && keep[i]) {
        if (segStart === -1) segStart = i;
      } else {
        if (segStart !== -1) {
          const segPoints = points.slice(segStart, i);
          if (segPoints.length >= 2) {
            fragments.push({
              ...stroke,
              id: generateStrokeId(),
              version: STROKE_DATA_VERSION,
              points: segPoints,
              timestamp: Date.now(),
            });
          }
          segStart = -1;
        }
      }
    }

    return fragments;
  }
}
