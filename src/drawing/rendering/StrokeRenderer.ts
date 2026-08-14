/**
 * Stroke Renderer — Renders stroke data to canvas.
 *
 * This is the rendering layer — it takes StrokeData and draws it.
 * Uses quadraticCurveTo for smooth curves instead of raw lineTo.
 * Supports per-point width interpolation via pressure data.
 *
 * Canvas is ONLY a display layer. All state lives in StrokeData.
 */

import type { CanvasLayer } from './CanvasManager';
import type { StrokeData, StrokePoint } from '@drawing/domain/StrokeModel';
import { getTransformedPoints } from '@drawing/domain/StrokeModel';
import type { PenToolType } from '@drawing/domain/ToolTypes';
import { PRESSURE_CURVES, HIGHLIGHTER_WIDTH_MULTIPLIER } from '@drawing/domain/ToolTypes';

/**
 * Render a single stroke onto a canvas layer.
 */
export function renderStroke(layer: CanvasLayer, stroke: StrokeData): void {
  const { ctx } = layer;
  const points = getTransformedPoints(stroke);
  if (points.length === 0) return;

  ctx.save();

  // Apply tool-specific rendering
  switch (stroke.tool) {
    case 'highlighter':
      renderHighlighter(ctx, points, stroke);
      break;
    case 'pencil':
      renderPencil(ctx, points, stroke);
      break;
    case 'brush':
      renderVariableWidth(ctx, points, stroke, true);
      break;
    case 'fountain':
      renderVariableWidth(ctx, points, stroke, false);
      break;
    case 'ball-pen':
    default:
      renderBallPen(ctx, points, stroke);
      break;
  }

  ctx.restore();
}

/**
 * Render all strokes in a document onto the ink canvas.
 */
export function renderAllStrokes(layer: CanvasLayer, strokes: StrokeData[]): void {
  for (const stroke of strokes) {
    renderStroke(layer, stroke);
  }
}

/**
 * Render a stroke segment in real-time during active drawing.
 * Draws only the latest segment (from lastPoint to newPoints) for performance.
 */
export function renderLiveSegment(
  layer: CanvasLayer,
  tool: PenToolType,
  color: string,
  baseWidth: number,
  opacity: number,
  lastPoint: StrokePoint,
  newPoints: StrokePoint[],
): void {
  const { ctx } = layer;
  ctx.save();

  if (tool === 'highlighter') {
    ctx.globalAlpha = Math.min(opacity, 0.5);
    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = color;
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'round';
    const w = baseWidth * HIGHLIGHTER_WIDTH_MULTIPLIER;
    ctx.lineWidth = w;
    ctx.beginPath();
    ctx.moveTo(lastPoint.x, lastPoint.y);
    for (const p of newPoints) {
      ctx.lineTo(p.x, p.y);
    }
    ctx.stroke();
  } else if (tool === 'pencil') {
    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = color;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    let prev = lastPoint;
    for (const p of newPoints) {
      const w = getWidthForPressure(baseWidth, p.pressure, tool);
      const alpha = opacity * (0.6 + (p.pressure > 0 ? p.pressure * 0.4 : 0.4));
      ctx.globalAlpha = Math.min(1, alpha);
      ctx.lineWidth = w;
      ctx.beginPath();
      ctx.moveTo(prev.x, prev.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      prev = p;
    }
  } else if (tool === 'brush' || tool === 'fountain') {
    ctx.globalAlpha = opacity;
    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = color;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    let prev = lastPoint;
    for (const p of newPoints) {
      const w = getWidthForPressure(baseWidth, p.pressure, tool);
      ctx.lineWidth = w;
      ctx.beginPath();
      ctx.moveTo(prev.x, prev.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      prev = p;
    }
  } else {
    // ball-pen — clean uniform stroke
    ctx.globalAlpha = opacity;
    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = color;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    let prev = lastPoint;
    for (const p of newPoints) {
      const w = getWidthForPressure(baseWidth, p.pressure, tool);
      ctx.lineWidth = w;
      ctx.beginPath();
      ctx.moveTo(prev.x, prev.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      prev = p;
    }
  }

  ctx.restore();
}

/**
 * Render a single dot at a point (for stroke start / single tap).
 */
export function renderDot(
  layer: CanvasLayer,
  x: number,
  y: number,
  tool: PenToolType,
  color: string,
  baseWidth: number,
  opacity: number,
  pressure: number,
): void {
  const { ctx } = layer;
  ctx.save();

  const w = getWidthForPressure(baseWidth, pressure, tool);

  if (tool === 'highlighter') {
    ctx.globalAlpha = Math.min(opacity, 0.5);
    ctx.fillStyle = color;
    ctx.fillRect(x - w * 3, y - w * 0.8, w * 6, w * 1.6);
  } else {
    ctx.globalAlpha = tool === 'pencil'
      ? opacity * (0.6 + (pressure > 0 ? pressure * 0.4 : 0.4))
      : opacity;
    ctx.fillStyle = color;
    ctx.globalCompositeOperation = 'source-over';
    ctx.beginPath();
    ctx.arc(x, y, w / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

// ─── Private: Tool-specific full-stroke renderers ───

function renderBallPen(ctx: CanvasRenderingContext2D, points: StrokePoint[], stroke: StrokeData): void {
  ctx.globalAlpha = stroke.opacity;
  ctx.globalCompositeOperation = 'source-over';
  ctx.strokeStyle = stroke.color;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  if (points.length === 1) {
    const p = points[0]!;
    const w = getWidthForPressure(stroke.width, p.pressure, stroke.tool);
    ctx.fillStyle = stroke.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, w / 2, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  // For ball-pen, use smooth quadratic curves
  if (stroke.pressureUsed) {
    // Variable width — draw segment by segment
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1]!;
      const curr = points[i]!;
      const w = getWidthForPressure(stroke.width, curr.pressure, stroke.tool);
      ctx.lineWidth = w;
      ctx.beginPath();
      ctx.moveTo(prev.x, prev.y);
      ctx.lineTo(curr.x, curr.y);
      ctx.stroke();
    }
  } else {
    // Fixed width — one smooth path
    ctx.lineWidth = stroke.width;
    drawSmoothPath(ctx, points);
  }
}

function renderHighlighter(ctx: CanvasRenderingContext2D, points: StrokePoint[], stroke: StrokeData): void {
  const w = stroke.width * HIGHLIGHTER_WIDTH_MULTIPLIER;
  ctx.globalAlpha = Math.min(stroke.opacity, 0.5);
  ctx.globalCompositeOperation = 'source-over';
  ctx.strokeStyle = stroke.color;
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'round';
  ctx.lineWidth = w;

  if (points.length === 1) {
    const p = points[0]!;
    ctx.fillStyle = stroke.color;
    ctx.fillRect(p.x - w / 2, p.y - w / 4, w, w / 2);
    return;
  }

  drawSmoothPath(ctx, points);
}

function renderPencil(ctx: CanvasRenderingContext2D, points: StrokePoint[], stroke: StrokeData): void {
  ctx.globalCompositeOperation = 'source-over';
  ctx.strokeStyle = stroke.color;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  if (points.length === 1) {
    const p = points[0]!;
    const w = getWidthForPressure(stroke.width, p.pressure, 'pencil');
    ctx.globalAlpha = stroke.opacity * 0.7;
    ctx.fillStyle = stroke.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, w / 2, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  // Pencil: per-segment opacity + width variation
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1]!;
    const curr = points[i]!;
    const w = getWidthForPressure(stroke.width, curr.pressure, 'pencil');
    const alpha = stroke.opacity * (0.6 + (curr.pressure > 0 ? curr.pressure * 0.4 : 0.4));
    ctx.globalAlpha = Math.min(1, alpha);
    ctx.lineWidth = w;
    ctx.beginPath();
    ctx.moveTo(prev.x, prev.y);
    ctx.lineTo(curr.x, curr.y);
    ctx.stroke();
  }
}

function renderVariableWidth(
  ctx: CanvasRenderingContext2D,
  points: StrokePoint[],
  stroke: StrokeData,
  isBrush: boolean,
): void {
  const tool = isBrush ? 'brush' : 'fountain';
  ctx.globalAlpha = stroke.opacity;
  ctx.globalCompositeOperation = 'source-over';
  ctx.strokeStyle = stroke.color;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  if (points.length === 1) {
    const p = points[0]!;
    const w = getWidthForPressure(stroke.width, p.pressure, tool);
    ctx.fillStyle = stroke.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, w / 2, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  // Segment-by-segment with variable width
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1]!;
    const curr = points[i]!;
    const w = getWidthForPressure(stroke.width, curr.pressure, tool);
    ctx.lineWidth = w;
    ctx.beginPath();
    ctx.moveTo(prev.x, prev.y);
    ctx.lineTo(curr.x, curr.y);
    ctx.stroke();
  }
}

// ─── Helpers ───

function getWidthForPressure(baseWidth: number, pressure: number, tool: PenToolType): number {
  const curve = PRESSURE_CURVES[tool];
  if (pressure <= 0) {
    return baseWidth * ((curve.min + curve.max) / 2);
  }
  const p = Math.max(0, Math.min(1, pressure));
  const shaped = Math.pow(p, curve.exponent);
  const multiplier = curve.min + shaped * (curve.max - curve.min);
  return baseWidth * multiplier;
}

function drawSmoothPath(ctx: CanvasRenderingContext2D, points: StrokePoint[]): void {
  if (points.length < 2) return;

  ctx.beginPath();
  ctx.moveTo(points[0]!.x, points[0]!.y);

  if (points.length === 2) {
    ctx.lineTo(points[1]!.x, points[1]!.y);
  } else {
    // Use quadratic curves through midpoints for smoothing
    for (let i = 1; i < points.length - 1; i++) {
      const curr = points[i]!;
      const next = points[i + 1]!;
      const midX = (curr.x + next.x) / 2;
      const midY = (curr.y + next.y) / 2;
      ctx.quadraticCurveTo(curr.x, curr.y, midX, midY);
    }
    // Draw to last point
    const last = points[points.length - 1]!;
    ctx.lineTo(last.x, last.y);
  }

  ctx.stroke();
}
