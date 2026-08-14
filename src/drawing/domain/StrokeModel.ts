/**
 * Stroke Model — Core data structures for the Digital Ink Engine.
 *
 * This is the single source of truth for stroke data.
 * Canvas is only a rendering layer — all state lives here.
 *
 * Version 2 format: stroke-based / vector-like data.
 * Supports undo, redo, lasso, move, resize, rotate, copy, delete, recolor.
 */

import type { PenToolType, ShapeType } from './ToolTypes';

// ─── Constants ───

/** Current data format version */
export const STROKE_DATA_VERSION = 2;

// ─── Point Data ───

/** A single point in a stroke with pressure and timing */
export interface StrokePoint {
  readonly x: number;
  readonly y: number;
  /** Normalized pressure 0-1. 0 means no pressure data available. */
  readonly pressure: number;
  /** Timestamp in ms (performance.now() based, relative to stroke start) */
  readonly timestamp: number;
}

// ─── Transform ───

/** Affine transform applied to a stroke (after lasso operations) */
export interface StrokeTransform {
  readonly translateX: number;
  readonly translateY: number;
  readonly scaleX: number;
  readonly scaleY: number;
  /** Rotation in radians */
  readonly rotation: number;
}

export const IDENTITY_TRANSFORM: StrokeTransform = {
  translateX: 0,
  translateY: 0,
  scaleX: 1,
  scaleY: 1,
  rotation: 0,
};

// ─── Stroke Data ───

/**
 * A single stroke or shape on the canvas.
 * This is the atomic unit of the drawing system.
 */
export interface StrokeData {
  /** Unique identifier (UUID) */
  readonly id: string;
  /** Data format version */
  readonly version: typeof STROKE_DATA_VERSION;
  /** Whether this is freehand ink or a geometric shape */
  readonly type: 'stroke' | 'shape';
  /** Which tool created this stroke */
  readonly tool: PenToolType;
  /** Ordered array of points */
  readonly points: StrokePoint[];
  /** Stroke color (hex) */
  readonly color: string;
  /** Base width in CSS pixels */
  readonly width: number;
  /** Opacity 0-1 */
  readonly opacity: number;
  /** Whether pressure data was used during creation */
  readonly pressureUsed: boolean;
  /** Creation timestamp (Date.now()) */
  readonly timestamp: number;
  /** Associated topic/page ID */
  readonly topicId: number;

  // ─── Shape-specific fields ───

  /** Shape type (only when type === 'shape') */
  readonly shape?: ShapeType;
  /** Fill color (null = no fill, only when type === 'shape') */
  readonly fill?: string | null;
  /** Fill opacity (only when type === 'shape') */
  readonly fillOpacity?: number;

  // ─── Transform ───

  /** Applied transform (from lasso move/resize/rotate) */
  readonly transform?: StrokeTransform;
}

// ─── Bounding Box ───

/** Axis-aligned bounding box */
export interface BoundingBox {
  readonly minX: number;
  readonly minY: number;
  readonly maxX: number;
  readonly maxY: number;
}

// ─── Drawing Document ───

/**
 * Complete drawing data for a single topic/page.
 * This is what gets persisted to IndexedDB.
 */
export interface DrawingDocument {
  /** Data format version */
  readonly version: typeof STROKE_DATA_VERSION;
  /** Topic/page this drawing belongs to */
  readonly topicId: number;
  /** All strokes on this page (ordered by creation time) */
  readonly strokes: StrokeData[];
  /** Document creation time */
  readonly createdAt: number;
  /** Last modification time */
  readonly updatedAt: number;
}

// ─── Factory Functions ───

let _idCounter = 0;

/** Generate a unique stroke ID */
export function generateStrokeId(): string {
  _idCounter++;
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 8);
  const counter = _idCounter.toString(36);
  return `s-${ts}-${rand}-${counter}`;
}

/** Create a new empty drawing document for a topic */
export function createDrawingDocument(topicId: number): DrawingDocument {
  const now = Date.now();
  return {
    version: STROKE_DATA_VERSION,
    topicId,
    strokes: [],
    createdAt: now,
    updatedAt: now,
  };
}

/** Create a new stroke from collected points */
export function createStroke(params: {
  tool: PenToolType;
  points: StrokePoint[];
  color: string;
  width: number;
  opacity: number;
  pressureUsed: boolean;
  topicId: number;
}): StrokeData {
  return {
    id: generateStrokeId(),
    version: STROKE_DATA_VERSION,
    type: 'stroke',
    tool: params.tool,
    points: params.points,
    color: params.color,
    width: params.width,
    opacity: params.opacity,
    pressureUsed: params.pressureUsed,
    timestamp: Date.now(),
    topicId: params.topicId,
  };
}

/** Create a shape stroke */
export function createShapeStroke(params: {
  tool: PenToolType;
  shape: ShapeType;
  points: StrokePoint[];
  color: string;
  width: number;
  opacity: number;
  topicId: number;
  fill?: string | null;
  fillOpacity?: number;
}): StrokeData {
  return {
    id: generateStrokeId(),
    version: STROKE_DATA_VERSION,
    type: 'shape',
    tool: params.tool,
    shape: params.shape,
    points: params.points,
    color: params.color,
    width: params.width,
    opacity: params.opacity,
    pressureUsed: false,
    timestamp: Date.now(),
    topicId: params.topicId,
    fill: params.fill,
    fillOpacity: params.fillOpacity,
  };
}

// ─── Utility Functions ───

/** Compute the bounding box of a stroke (ignoring transform) */
export function computeBoundingBox(stroke: StrokeData): BoundingBox {
  if (stroke.points.length === 0) {
    return { minX: 0, minY: 0, maxX: 0, maxY: 0 };
  }

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const p of stroke.points) {
    if (p.x < minX) minX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.x > maxX) maxX = p.x;
    if (p.y > maxY) maxY = p.y;
  }

  // Expand by half stroke width
  const halfW = stroke.width / 2;
  return {
    minX: minX - halfW,
    minY: minY - halfW,
    maxX: maxX + halfW,
    maxY: maxY + halfW,
  };
}

/** Apply a transform to a point */
export function transformPoint(
  x: number,
  y: number,
  transform: StrokeTransform,
  cx: number,
  cy: number,
): { x: number; y: number } {
  // Translate to origin
  let px = x - cx;
  let py = y - cy;

  // Scale
  px *= transform.scaleX;
  py *= transform.scaleY;

  // Rotate
  if (transform.rotation !== 0) {
    const cos = Math.cos(transform.rotation);
    const sin = Math.sin(transform.rotation);
    const rx = px * cos - py * sin;
    const ry = px * sin + py * cos;
    px = rx;
    py = ry;
  }

  // Translate back + apply translation offset
  return {
    x: px + cx + transform.translateX,
    y: py + cy + transform.translateY,
  };
}

/** Get the effective points of a stroke (with transform applied) */
export function getTransformedPoints(stroke: StrokeData): StrokePoint[] {
  if (!stroke.transform) return stroke.points;

  const bb = computeBoundingBox({ ...stroke, transform: undefined });
  const cx = (bb.minX + bb.maxX) / 2;
  const cy = (bb.minY + bb.maxY) / 2;

  return stroke.points.map((p) => {
    const tp = transformPoint(p.x, p.y, stroke.transform!, cx, cy);
    return { ...p, x: tp.x, y: tp.y };
  });
}

/** Check if a point is inside a bounding box */
export function isPointInBounds(x: number, y: number, bb: BoundingBox): boolean {
  return x >= bb.minX && x <= bb.maxX && y >= bb.minY && y <= bb.maxY;
}

/** Check if two bounding boxes overlap */
export function boxesOverlap(a: BoundingBox, b: BoundingBox): boolean {
  return a.minX <= b.maxX && a.maxX >= b.minX && a.minY <= b.maxY && a.maxY >= b.minY;
}

/** Distance between two points */
export function distance(x1: number, y1: number, x2: number, y2: number): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

/** Check if a point is within radius of any point on a stroke */
export function isPointNearStroke(
  px: number,
  py: number,
  stroke: StrokeData,
  radius: number,
): boolean {
  const points = getTransformedPoints(stroke);
  for (let i = 0; i < points.length; i++) {
    const p = points[i]!;
    if (distance(px, py, p.x, p.y) <= radius + stroke.width / 2) {
      return true;
    }
    // Also check line segments between consecutive points
    if (i > 0) {
      const prev = points[i - 1]!;
      const d = distanceToSegment(px, py, prev.x, prev.y, p.x, p.y);
      if (d <= radius + stroke.width / 2) {
        return true;
      }
    }
  }
  return false;
}

/** Distance from a point to a line segment */
export function distanceToSegment(
  px: number, py: number,
  x1: number, y1: number,
  x2: number, y2: number,
): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lenSq = dx * dx + dy * dy;

  if (lenSq === 0) return distance(px, py, x1, y1);

  let t = ((px - x1) * dx + (py - y1) * dy) / lenSq;
  t = Math.max(0, Math.min(1, t));

  return distance(px, py, x1 + t * dx, y1 + t * dy);
}
