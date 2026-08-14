/**
 * Selection Overlay — Visual feedback for selection operations.
 *
 * Renders on the overlay canvas:
 * - Lasso path (dashed line following pointer)
 * - Rectangle selection (dashed rectangle)
 * - Bounding box around selected strokes with handles
 */

import type { CanvasLayer } from './CanvasManager';
import type { BoundingBox } from '@drawing/domain/StrokeModel';

const HANDLE_SIZE = 8;
const HANDLE_BORDER = 2;
const DASH_PATTERN = [6, 4];
const LASSO_COLOR = '#1a5fd6';
const SELECTION_COLOR = '#1a5fd6';

export class SelectionOverlay {
  /** Draw a lasso path on the overlay */
  renderLasso(layer: CanvasLayer, points: readonly { x: number; y: number }[]): void {
    if (points.length < 2) return;
    const { ctx } = layer;
    ctx.save();

    ctx.strokeStyle = LASSO_COLOR;
    ctx.lineWidth = 1.5;
    ctx.setLineDash(DASH_PATTERN);
    ctx.globalAlpha = 0.7;

    ctx.beginPath();
    ctx.moveTo(points[0]!.x, points[0]!.y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i]!.x, points[i]!.y);
    }
    ctx.stroke();

    // Draw closing line (back to start) with lower opacity
    ctx.globalAlpha = 0.3;
    ctx.lineTo(points[0]!.x, points[0]!.y);
    ctx.stroke();

    ctx.restore();
  }

  /** Draw a selection rectangle on the overlay */
  renderRect(layer: CanvasLayer, x: number, y: number, w: number, h: number): void {
    const { ctx } = layer;
    ctx.save();

    // Fill
    ctx.fillStyle = SELECTION_COLOR;
    ctx.globalAlpha = 0.08;
    ctx.fillRect(x, y, w, h);

    // Border
    ctx.strokeStyle = SELECTION_COLOR;
    ctx.lineWidth = 1.5;
    ctx.setLineDash(DASH_PATTERN);
    ctx.globalAlpha = 0.6;
    ctx.strokeRect(x, y, w, h);

    ctx.restore();
  }

  /** Draw bounding box with resize/rotate handles */
  renderBoundingBox(layer: CanvasLayer, bounds: BoundingBox): void {
    const { ctx } = layer;
    const { minX, minY, maxX, maxY } = bounds;
    const w = maxX - minX;
    const h = maxY - minY;

    ctx.save();

    // Bounding box border
    ctx.strokeStyle = SELECTION_COLOR;
    ctx.lineWidth = 1.5;
    ctx.setLineDash(DASH_PATTERN);
    ctx.globalAlpha = 0.7;
    ctx.strokeRect(minX, minY, w, h);

    // Reset dash for handles
    ctx.setLineDash([]);
    ctx.globalAlpha = 1;

    // Corner handles
    this.drawHandle(ctx, minX, minY);              // top-left
    this.drawHandle(ctx, maxX, minY);              // top-right
    this.drawHandle(ctx, minX, maxY);              // bottom-left
    this.drawHandle(ctx, maxX, maxY);              // bottom-right

    // Edge midpoint handles
    this.drawHandle(ctx, minX + w / 2, minY);      // top-center
    this.drawHandle(ctx, minX + w / 2, maxY);      // bottom-center
    this.drawHandle(ctx, minX, minY + h / 2);      // left-center
    this.drawHandle(ctx, maxX, minY + h / 2);      // right-center

    // Rotate handle (above top-center)
    const rotateY = minY - 24;
    const rotateX = minX + w / 2;

    // Line from top to rotate handle
    ctx.strokeStyle = SELECTION_COLOR;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.moveTo(rotateX, minY);
    ctx.lineTo(rotateX, rotateY);
    ctx.stroke();

    // Rotate handle circle
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = SELECTION_COLOR;
    ctx.lineWidth = HANDLE_BORDER;
    ctx.beginPath();
    ctx.arc(rotateX, rotateY, HANDLE_SIZE / 2 + 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Rotate icon inside
    ctx.strokeStyle = SELECTION_COLOR;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(rotateX, rotateY, 3, -Math.PI * 0.8, Math.PI * 0.3);
    ctx.stroke();

    ctx.restore();
  }

  /** Clear the overlay canvas */
  clear(layer: CanvasLayer): void {
    layer.ctx.clearRect(0, 0, layer.canvas.width, layer.canvas.height);
  }

  // ─── Private ───

  private drawHandle(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    const half = HANDLE_SIZE / 2;
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = SELECTION_COLOR;
    ctx.lineWidth = HANDLE_BORDER;
    ctx.fillRect(x - half, y - half, HANDLE_SIZE, HANDLE_SIZE);
    ctx.strokeRect(x - half, y - half, HANDLE_SIZE, HANDLE_SIZE);
  }
}
