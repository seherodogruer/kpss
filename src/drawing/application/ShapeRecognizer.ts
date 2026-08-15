/**
 * Shape Recognizer — Draw-and-hold gesture to snap strokes to geometric shapes.
 *
 * Algorithm:
 * 1. User completes a freehand stroke
 * 2. 500ms hold timer starts
 * 3. If timer fires, analyze the stroke geometry
 * 4. If recognized as a shape, replace with clean geometric version
 *
 * Architecture is designed for future ML-based recognizer extension.
 */

import { createLogger } from '@core/logging/Logger';
import type { StrokeData, StrokePoint } from '@drawing/domain/StrokeModel';
import { createShapeStroke, distance } from '@drawing/domain/StrokeModel';
import type { ShapeType } from '@drawing/domain/ToolTypes';

const logger = createLogger('ShapeRecognizer');

const HOLD_DELAY_MS = 500;
const LINE_DEVIATION_THRESHOLD = 0.08; // 8% of length
const CIRCLE_FIT_THRESHOLD = 0.10;     // 10% deviation from ideal (was 15% — too aggressive)
const RECT_ANGLE_THRESHOLD = 20;       // degrees from 90° (was 25°)
const MIN_STROKE_POINTS = 5;

export interface RecognitionResult {
  recognized: boolean;
  shape?: ShapeType;
  replacement?: StrokeData;
}

/** Interface for pluggable recognizers (future ML extension) */
export interface ShapeRecognizerPlugin {
  recognize(points: StrokePoint[]): RecognitionResult | null;
}

export class ShapeRecognizer {
  private enabled = true;
  private holdTimer: ReturnType<typeof setTimeout> | null = null;
  private pendingStroke: StrokeData | null = null;
  private onRecognizedCallback: ((original: StrokeData, replacement: StrokeData) => void) | null = null;

  /** Enable/disable shape recognition */
  setEnabled(enabled: boolean): void { this.enabled = enabled; }
  isEnabled(): boolean { return this.enabled; }

  /** Set callback for when a shape is recognized */
  onRecognized(cb: (original: StrokeData, replacement: StrokeData) => void): void {
    this.onRecognizedCallback = cb;
  }

  /** Start analyzing a completed stroke (call on stroke end) */
  analyzeStroke(stroke: StrokeData): void {
    if (!this.enabled) return;
    if (stroke.points.length < MIN_STROKE_POINTS) return;

    this.cancelPending();
    this.pendingStroke = stroke;

    this.holdTimer = setTimeout(() => {
      this.holdTimer = null;
      if (this.pendingStroke) {
        this.attemptRecognition(this.pendingStroke);
        this.pendingStroke = null;
      }
    }, HOLD_DELAY_MS);
  }

  /** Cancel pending recognition (user started drawing again) */
  cancelPending(): void {
    if (this.holdTimer) {
      clearTimeout(this.holdTimer);
      this.holdTimer = null;
    }
    this.pendingStroke = null;
  }

  /** Immediate recognition attempt (for testing) */
  recognize(stroke: StrokeData): RecognitionResult {
    return this.doRecognize(stroke);
  }

  // ─── Private ───

  private attemptRecognition(stroke: StrokeData): void {
    const result = this.doRecognize(stroke);
    if (result.recognized && result.replacement) {
      logger.debug(`Recognized shape: ${result.shape}`);
      this.onRecognizedCallback?.(stroke, result.replacement);
    }
  }

  private doRecognize(stroke: StrokeData): RecognitionResult {
    const points = stroke.points;

    // Try line first (simplest)
    if (this.isLine(points)) {
      const replacement = this.createLine(stroke);
      return { recognized: true, shape: 'line', replacement };
    }

    // Try rectangle BEFORE circle (rectangles can be mistaken for circles)
    if (this.isRectangle(points)) {
      const replacement = this.createRectangle(stroke);
      return { recognized: true, shape: 'rectangle', replacement };
    }

    // Try triangle BEFORE circle
    if (this.isTriangle(points)) {
      const replacement = this.createTriangle(stroke);
      return { recognized: true, shape: 'triangle', replacement };
    }

    // Try circle/ellipse (only after ruling out polygons)
    if (this.isCircle(points)) {
      const replacement = this.createCircle(stroke);
      return { recognized: true, shape: 'circle', replacement };
    }

    return { recognized: false };
  }

  // ─── Shape Detection ───

  private isLine(points: StrokePoint[]): boolean {
    if (points.length < 2) return false;
    const first = points[0]!;
    const last = points[points.length - 1]!;
    const len = distance(first.x, first.y, last.x, last.y);
    if (len < 20) return false; // Too short

    // Check max deviation from the line
    let maxDev = 0;
    for (const p of points) {
      const d = this.pointToLineDistance(p.x, p.y, first.x, first.y, last.x, last.y);
      if (d > maxDev) maxDev = d;
    }

    return maxDev / len < LINE_DEVIATION_THRESHOLD;
  }

  private isCircle(points: StrokePoint[]): boolean {
    if (points.length < 8) return false;
    const first = points[0]!;
    const last = points[points.length - 1]!;

    // Must be roughly closed
    const closeDist = distance(first.x, first.y, last.x, last.y);
    const pathLen = this.pathLength(points);
    if (closeDist > pathLen * 0.2) return false;

    // Calculate centroid
    let cx = 0, cy = 0;
    for (const p of points) { cx += p.x; cy += p.y; }
    cx /= points.length;
    cy /= points.length;

    // Calculate average radius and deviation
    let sumR = 0;
    for (const p of points) { sumR += distance(p.x, p.y, cx, cy); }
    const avgR = sumR / points.length;
    if (avgR < 10) return false;

    let sumDev = 0;
    for (const p of points) {
      const r = distance(p.x, p.y, cx, cy);
      sumDev += Math.abs(r - avgR);
    }
    const avgDev = sumDev / points.length;

    return avgDev / avgR < CIRCLE_FIT_THRESHOLD;
  }

  private isRectangle(points: StrokePoint[]): boolean {
    if (points.length < 10) return false;
    const first = points[0]!;
    const last = points[points.length - 1]!;

    // Must be roughly closed
    const closeDist = distance(first.x, first.y, last.x, last.y);
    const pathLen = this.pathLength(points);
    if (closeDist > pathLen * 0.15) return false;

    // Find 4 corners by detecting direction changes
    const corners = this.findCorners(points);
    if (corners.length < 4 || corners.length > 6) return false;

    // Check angles at corners are roughly 90°
    const topCorners = corners.slice(0, 4);
    for (let i = 0; i < topCorners.length; i++) {
      const prev = topCorners[(i + topCorners.length - 1) % topCorners.length]!;
      const curr = topCorners[i]!;
      const next = topCorners[(i + 1) % topCorners.length]!;
      const angle = this.angleBetween(prev, curr, next);
      if (Math.abs(angle - 90) > RECT_ANGLE_THRESHOLD) return false;
    }

    return true;
  }

  private isTriangle(points: StrokePoint[]): boolean {
    if (points.length < 8) return false;
    const first = points[0]!;
    const last = points[points.length - 1]!;

    const closeDist = distance(first.x, first.y, last.x, last.y);
    const pathLen = this.pathLength(points);
    if (closeDist > pathLen * 0.25) return false;

    const corners = this.findCorners(points);
    // Triangle has exactly 3 corners
    if (corners.length < 3 || corners.length > 4) return false;

    // Verify the 3 corners form reasonable angles (not too flat)
    const top3 = corners.slice(0, 3);
    for (let i = 0; i < 3; i++) {
      const prev = top3[(i + 2) % 3]!;
      const curr = top3[i]!;
      const next = top3[(i + 1) % 3]!;
      const angle = this.angleBetween(prev, curr, next);
      // Triangle angles should be roughly between 20° and 160°
      if (angle < 15 || angle > 165) return false;
    }

    return true;
  }

  // ─── Shape Creation ───

  private createLine(stroke: StrokeData): StrokeData {
    const first = stroke.points[0]!;
    const last = stroke.points[stroke.points.length - 1]!;
    const now = performance.now();
    return createShapeStroke({
      tool: stroke.tool, shape: 'line',
      points: [
        { x: first.x, y: first.y, pressure: 0.5, timestamp: now },
        { x: last.x, y: last.y, pressure: 0.5, timestamp: now + 1 },
      ],
      color: stroke.color, width: stroke.width,
      opacity: stroke.opacity, topicId: stroke.topicId,
    });
  }

  private createCircle(stroke: StrokeData): StrokeData {
    const points = stroke.points;
    let cx = 0, cy = 0;
    for (const p of points) { cx += p.x; cy += p.y; }
    cx /= points.length;
    cy /= points.length;

    let sumR = 0;
    for (const p of points) { sumR += distance(p.x, p.y, cx, cy); }
    const r = sumR / points.length;

    // Generate circle points
    const circlePoints: StrokePoint[] = [];
    const segments = 36;
    const now = performance.now();
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      circlePoints.push({
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle),
        pressure: 0.5,
        timestamp: now + i,
      });
    }

    return createShapeStroke({
      tool: stroke.tool, shape: 'circle',
      points: circlePoints,
      color: stroke.color, width: stroke.width,
      opacity: stroke.opacity, topicId: stroke.topicId,
    });
  }

  private createRectangle(stroke: StrokeData): StrokeData {
    const points = stroke.points;
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const p of points) {
      if (p.x < minX) minX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.x > maxX) maxX = p.x;
      if (p.y > maxY) maxY = p.y;
    }

    const now = performance.now();
    const rectPoints: StrokePoint[] = [
      { x: minX, y: minY, pressure: 0.5, timestamp: now },
      { x: maxX, y: minY, pressure: 0.5, timestamp: now + 1 },
      { x: maxX, y: maxY, pressure: 0.5, timestamp: now + 2 },
      { x: minX, y: maxY, pressure: 0.5, timestamp: now + 3 },
      { x: minX, y: minY, pressure: 0.5, timestamp: now + 4 },
    ];

    return createShapeStroke({
      tool: stroke.tool, shape: 'rectangle',
      points: rectPoints,
      color: stroke.color, width: stroke.width,
      opacity: stroke.opacity, topicId: stroke.topicId,
    });
  }

  private createTriangle(stroke: StrokeData): StrokeData {
    const corners = this.findCorners(stroke.points).slice(0, 3);
    if (corners.length < 3) return stroke; // fallback

    const now = performance.now();
    const triPoints: StrokePoint[] = [
      { x: corners[0]!.x, y: corners[0]!.y, pressure: 0.5, timestamp: now },
      { x: corners[1]!.x, y: corners[1]!.y, pressure: 0.5, timestamp: now + 1 },
      { x: corners[2]!.x, y: corners[2]!.y, pressure: 0.5, timestamp: now + 2 },
      { x: corners[0]!.x, y: corners[0]!.y, pressure: 0.5, timestamp: now + 3 },
    ];

    return createShapeStroke({
      tool: stroke.tool, shape: 'triangle',
      points: triPoints,
      color: stroke.color, width: stroke.width,
      opacity: stroke.opacity, topicId: stroke.topicId,
    });
  }

  // ─── Geometry Utilities ───

  private pointToLineDistance(px: number, py: number, x1: number, y1: number, x2: number, y2: number): number {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    if (len === 0) return distance(px, py, x1, y1);
    return Math.abs(dy * px - dx * py + x2 * y1 - y2 * x1) / len;
  }

  private pathLength(points: StrokePoint[]): number {
    let len = 0;
    for (let i = 1; i < points.length; i++) {
      len += distance(points[i - 1]!.x, points[i - 1]!.y, points[i]!.x, points[i]!.y);
    }
    return len;
  }

  private findCorners(points: StrokePoint[]): StrokePoint[] {
    if (points.length < 5) return [];
    const corners: StrokePoint[] = [];
    const windowSize = Math.max(3, Math.floor(points.length / 12));
    const pathLen = this.pathLength(points);
    const minCornerDist = Math.max(15, pathLen * 0.08);

    for (let i = windowSize; i < points.length - windowSize; i++) {
      const prev = points[i - windowSize]!;
      const curr = points[i]!;
      const next = points[i + windowSize]!;
      const angle = this.angleBetween(prev, curr, next);

      if (angle < 140) {
        // Potential corner — check it's far enough from previous
        if (corners.length === 0 || distance(curr.x, curr.y, corners[corners.length - 1]!.x, corners[corners.length - 1]!.y) > minCornerDist) {
          corners.push(curr);
        }
      }
    }

    return corners;
  }

  private angleBetween(a: StrokePoint, b: StrokePoint, c: StrokePoint): number {
    const v1x = a.x - b.x;
    const v1y = a.y - b.y;
    const v2x = c.x - b.x;
    const v2y = c.y - b.y;
    const dot = v1x * v2x + v1y * v2y;
    const cross = v1x * v2y - v1y * v2x;
    return Math.abs(Math.atan2(cross, dot) * (180 / Math.PI));
  }
}
