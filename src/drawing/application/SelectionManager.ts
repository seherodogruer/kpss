/**
 * Selection Manager — Lasso and rectangle selection of strokes.
 *
 * Supports:
 * - Freehand lasso: draw a closed polygon to select strokes inside
 * - Rectangle select: drag a rectangle to select intersecting strokes
 */

import type { StrokeData, BoundingBox } from '@drawing/domain/StrokeModel';
import { computeBoundingBox, boxesOverlap, getTransformedPoints } from '@drawing/domain/StrokeModel';
import type { SelectionMode } from '@drawing/domain/ToolTypes';

export class SelectionManager {
  private selectedIds = new Set<string>();
  private mode: SelectionMode = 'lasso';
  private lassoPoints: { x: number; y: number }[] = [];
  private rectStart: { x: number; y: number } | null = null;
  private rectEnd: { x: number; y: number } | null = null;
  private onChangeCallback: (() => void) | null = null;

  /** Set selection mode */
  setMode(mode: SelectionMode): void { this.mode = mode; }
  getMode(): SelectionMode { return this.mode; }

  /** Set change callback */
  setOnChange(cb: () => void): void { this.onChangeCallback = cb; }

  /** Get selected stroke IDs */
  getSelectedIds(): ReadonlySet<string> { return this.selectedIds; }

  /** Check if any strokes are selected */
  hasSelection(): boolean { return this.selectedIds.size > 0; }

  /** Clear selection */
  clearSelection(): void {
    if (this.selectedIds.size === 0) return;
    this.selectedIds.clear();
    this.lassoPoints = [];
    this.rectStart = null;
    this.rectEnd = null;
    this.onChangeCallback?.();
  }

  // ─── Lasso Selection ───

  /** Start lasso at a point */
  startLasso(x: number, y: number): void {
    this.lassoPoints = [{ x, y }];
  }

  /** Add a lasso point */
  addLassoPoint(x: number, y: number): void {
    this.lassoPoints.push({ x, y });
  }

  /** Get current lasso points (for overlay rendering) */
  getLassoPoints(): readonly { x: number; y: number }[] {
    return this.lassoPoints;
  }

  /** Complete lasso and select strokes inside the polygon */
  completeLasso(strokes: readonly StrokeData[]): void {
    if (this.lassoPoints.length < 3) {
      this.lassoPoints = [];
      return;
    }

    this.selectedIds.clear();
    for (const stroke of strokes) {
      if (this.isStrokeInsideLasso(stroke)) {
        this.selectedIds.add(stroke.id);
      }
    }
    this.lassoPoints = [];
    this.onChangeCallback?.();
  }

  // ─── Rectangle Selection ───

  /** Start rectangle selection */
  startRect(x: number, y: number): void {
    this.rectStart = { x, y };
    this.rectEnd = { x, y };
  }

  /** Update rectangle end point */
  updateRect(x: number, y: number): void {
    this.rectEnd = { x, y };
  }

  /** Get current rect (for overlay rendering) */
  getRect(): { x: number; y: number; w: number; h: number } | null {
    if (!this.rectStart || !this.rectEnd) return null;
    const x = Math.min(this.rectStart.x, this.rectEnd.x);
    const y = Math.min(this.rectStart.y, this.rectEnd.y);
    const w = Math.abs(this.rectEnd.x - this.rectStart.x);
    const h = Math.abs(this.rectEnd.y - this.rectStart.y);
    return { x, y, w, h };
  }

  /** Complete rectangle and select strokes inside */
  completeRect(strokes: readonly StrokeData[]): void {
    const rect = this.getRect();
    if (!rect || rect.w < 3 || rect.h < 3) {
      this.rectStart = null;
      this.rectEnd = null;
      return;
    }

    const selectBox: BoundingBox = {
      minX: rect.x, minY: rect.y,
      maxX: rect.x + rect.w, maxY: rect.y + rect.h,
    };

    this.selectedIds.clear();
    for (const stroke of strokes) {
      const bb = computeBoundingBox(stroke);
      if (boxesOverlap(bb, selectBox)) {
        this.selectedIds.add(stroke.id);
      }
    }
    this.rectStart = null;
    this.rectEnd = null;
    this.onChangeCallback?.();
  }

  /** Get bounding box of all selected strokes */
  getSelectionBounds(strokes: readonly StrokeData[]): BoundingBox | null {
    if (this.selectedIds.size === 0) return null;

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const stroke of strokes) {
      if (!this.selectedIds.has(stroke.id)) continue;
      const bb = computeBoundingBox(stroke);
      if (bb.minX < minX) minX = bb.minX;
      if (bb.minY < minY) minY = bb.minY;
      if (bb.maxX > maxX) maxX = bb.maxX;
      if (bb.maxY > maxY) maxY = bb.maxY;
    }
    if (minX === Infinity) return null;
    return { minX, minY, maxX, maxY };
  }

  // ─── Private ───

  /** Check if any of a stroke's points are inside the lasso polygon */
  private isStrokeInsideLasso(stroke: StrokeData): boolean {
    const points = getTransformedPoints(stroke);
    if (points.length === 0) return false;

    // Check every Nth point for performance, but use smaller interval
    const checkInterval = Math.max(1, Math.floor(points.length / 30));

    for (let i = 0; i < points.length; i += checkInterval) {
      const p = points[i]!;
      if (this.pointInPolygon(p.x, p.y, this.lassoPoints)) {
        return true; // Any point inside → select
      }
    }

    // Also check last point
    const last = points[points.length - 1]!;
    return this.pointInPolygon(last.x, last.y, this.lassoPoints);
  }

  /** Point-in-polygon test (ray casting algorithm) */
  private pointInPolygon(x: number, y: number, polygon: { x: number; y: number }[]): boolean {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const pi = polygon[i]!;
      const pj = polygon[j]!;
      if ((pi.y > y) !== (pj.y > y) && x < (pj.x - pi.x) * (y - pi.y) / (pj.y - pi.y) + pi.x) {
        inside = !inside;
      }
    }
    return inside;
  }
}
