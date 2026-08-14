import { describe, it, expect } from 'vitest';
import {
  generateStrokeId,
  createDrawingDocument,
  createStroke,
  createShapeStroke,
  computeBoundingBox,
  transformPoint,
  getTransformedPoints,
  isPointInBounds,
  boxesOverlap,
  distance,
  isPointNearStroke,
  distanceToSegment,
  IDENTITY_TRANSFORM,
  STROKE_DATA_VERSION,
} from '@drawing/domain/StrokeModel';
import type { StrokeData, StrokePoint } from '@drawing/domain/StrokeModel';

const makePoints = (...coords: [number, number][]): StrokePoint[] =>
  coords.map(([x, y], i) => ({ x, y, pressure: 0.5, timestamp: i * 10 }));

describe('StrokeModel', () => {
  describe('generateStrokeId', () => {
    it('produces unique IDs', () => {
      const ids = new Set(Array.from({ length: 100 }, () => generateStrokeId()));
      expect(ids.size).toBe(100);
    });

    it('IDs start with s-', () => {
      expect(generateStrokeId()).toMatch(/^s-/);
    });
  });

  describe('createDrawingDocument', () => {
    it('creates with correct version and topicId', () => {
      const doc = createDrawingDocument(42);
      expect(doc.version).toBe(STROKE_DATA_VERSION);
      expect(doc.topicId).toBe(42);
      expect(doc.strokes).toEqual([]);
      expect(doc.createdAt).toBeGreaterThan(0);
      expect(doc.updatedAt).toBe(doc.createdAt);
    });
  });

  describe('createStroke', () => {
    it('creates with all required fields', () => {
      const s = createStroke({
        tool: 'ball-pen', points: makePoints([0, 0], [10, 10]),
        color: '#ff0000', width: 2, opacity: 1, pressureUsed: true, topicId: 5,
      });
      expect(s.id).toMatch(/^s-/);
      expect(s.version).toBe(2);
      expect(s.type).toBe('stroke');
      expect(s.tool).toBe('ball-pen');
      expect(s.points).toHaveLength(2);
      expect(s.color).toBe('#ff0000');
      expect(s.topicId).toBe(5);
    });
  });

  describe('createShapeStroke', () => {
    it('creates a shape with fill', () => {
      const s = createShapeStroke({
        tool: 'ball-pen', shape: 'circle',
        points: makePoints([50, 50], [100, 50]),
        color: '#000', width: 2, opacity: 1, topicId: 1,
        fill: '#ff0000', fillOpacity: 0.5,
      });
      expect(s.type).toBe('shape');
      expect(s.shape).toBe('circle');
      expect(s.fill).toBe('#ff0000');
      expect(s.fillOpacity).toBe(0.5);
    });
  });

  describe('computeBoundingBox', () => {
    it('computes correct bounds', () => {
      const s = createStroke({
        tool: 'ball-pen', points: makePoints([10, 20], [30, 40]),
        color: '#000', width: 4, opacity: 1, pressureUsed: false, topicId: 1,
      });
      const bb = computeBoundingBox(s);
      expect(bb.minX).toBe(10 - 2);
      expect(bb.minY).toBe(20 - 2);
      expect(bb.maxX).toBe(30 + 2);
      expect(bb.maxY).toBe(40 + 2);
    });

    it('returns zero box for empty stroke', () => {
      const s = createStroke({
        tool: 'ball-pen', points: [],
        color: '#000', width: 2, opacity: 1, pressureUsed: false, topicId: 1,
      });
      const bb = computeBoundingBox(s);
      expect(bb.minX).toBe(0);
    });
  });

  describe('transformPoint', () => {
    it('identity transform returns same point', () => {
      const p = transformPoint(10, 20, IDENTITY_TRANSFORM, 0, 0);
      expect(p.x).toBeCloseTo(10);
      expect(p.y).toBeCloseTo(20);
    });

    it('translation works', () => {
      const t = { ...IDENTITY_TRANSFORM, translateX: 5, translateY: -3 };
      const p = transformPoint(10, 20, t, 0, 0);
      expect(p.x).toBeCloseTo(15);
      expect(p.y).toBeCloseTo(17);
    });

    it('scale works around center', () => {
      const t = { ...IDENTITY_TRANSFORM, scaleX: 2, scaleY: 2 };
      const p = transformPoint(10, 10, t, 5, 5);
      expect(p.x).toBeCloseTo(15);
      expect(p.y).toBeCloseTo(15);
    });
  });

  describe('getTransformedPoints', () => {
    it('returns original points when no transform', () => {
      const s = createStroke({
        tool: 'ball-pen', points: makePoints([1, 2], [3, 4]),
        color: '#000', width: 2, opacity: 1, pressureUsed: false, topicId: 1,
      });
      const pts = getTransformedPoints(s);
      expect(pts).toBe(s.points);
    });
  });

  describe('geometry utilities', () => {
    it('isPointInBounds', () => {
      const bb = { minX: 0, minY: 0, maxX: 10, maxY: 10 };
      expect(isPointInBounds(5, 5, bb)).toBe(true);
      expect(isPointInBounds(15, 5, bb)).toBe(false);
    });

    it('boxesOverlap', () => {
      const a = { minX: 0, minY: 0, maxX: 10, maxY: 10 };
      const b = { minX: 5, minY: 5, maxX: 15, maxY: 15 };
      const c = { minX: 20, minY: 20, maxX: 30, maxY: 30 };
      expect(boxesOverlap(a, b)).toBe(true);
      expect(boxesOverlap(a, c)).toBe(false);
    });

    it('distance', () => {
      expect(distance(0, 0, 3, 4)).toBeCloseTo(5);
      expect(distance(0, 0, 0, 0)).toBe(0);
    });

    it('distanceToSegment', () => {
      expect(distanceToSegment(5, 5, 0, 0, 10, 0)).toBeCloseTo(5);
      expect(distanceToSegment(0, 0, 0, 0, 10, 0)).toBeCloseTo(0);
    });

    it('isPointNearStroke', () => {
      const s = createStroke({
        tool: 'ball-pen', points: makePoints([0, 0], [10, 0]),
        color: '#000', width: 2, opacity: 1, pressureUsed: false, topicId: 1,
      });
      expect(isPointNearStroke(5, 0, s, 1)).toBe(true);
      expect(isPointNearStroke(5, 50, s, 1)).toBe(false);
    });
  });
});
