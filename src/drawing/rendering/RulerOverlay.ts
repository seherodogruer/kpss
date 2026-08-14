/**
 * Ruler Overlay — Visual ruler/guide on the overlay canvas.
 *
 * Shows a horizontal or vertical ruler line that snaps to grid.
 * Useful for creating straight lines and aligned content.
 */

import type { CanvasLayer } from './CanvasManager';

const RULER_COLOR = '#e74c3c';
const RULER_WIDTH = 1;
const RULER_DASH = [8, 4];
const TICK_SIZE = 6;
const TICK_INTERVAL = 50; // px

export class RulerOverlay {
  private active = false;
  private orientation: 'horizontal' | 'vertical' = 'horizontal';
  private position = 0; // Y for horizontal, X for vertical

  /** Toggle ruler on/off */
  setActive(active: boolean): void { this.active = active; }
  isActive(): boolean { return this.active; }

  /** Set ruler orientation */
  setOrientation(o: 'horizontal' | 'vertical'): void { this.orientation = o; }

  /** Set ruler position (Y for horizontal, X for vertical) */
  setPosition(pos: number): void {
    // Snap to nearest 5px
    this.position = Math.round(pos / 5) * 5;
  }

  /** Render ruler on overlay canvas */
  render(layer: CanvasLayer): void {
    if (!this.active) return;

    const { ctx, canvas } = layer;
    const w = canvas.width / (window.devicePixelRatio || 1);
    const h = canvas.height / (window.devicePixelRatio || 1);

    ctx.save();
    ctx.strokeStyle = RULER_COLOR;
    ctx.lineWidth = RULER_WIDTH;
    ctx.setLineDash(RULER_DASH);
    ctx.globalAlpha = 0.6;

    if (this.orientation === 'horizontal') {
      // Horizontal line
      ctx.beginPath();
      ctx.moveTo(0, this.position);
      ctx.lineTo(w, this.position);
      ctx.stroke();

      // Tick marks
      ctx.setLineDash([]);
      ctx.globalAlpha = 0.4;
      for (let x = 0; x < w; x += TICK_INTERVAL) {
        ctx.beginPath();
        ctx.moveTo(x, this.position - TICK_SIZE / 2);
        ctx.lineTo(x, this.position + TICK_SIZE / 2);
        ctx.stroke();
      }
    } else {
      // Vertical line
      ctx.beginPath();
      ctx.moveTo(this.position, 0);
      ctx.lineTo(this.position, h);
      ctx.stroke();

      // Tick marks
      ctx.setLineDash([]);
      ctx.globalAlpha = 0.4;
      for (let y = 0; y < h; y += TICK_INTERVAL) {
        ctx.beginPath();
        ctx.moveTo(this.position - TICK_SIZE / 2, y);
        ctx.lineTo(this.position + TICK_SIZE / 2, y);
        ctx.stroke();
      }
    }

    ctx.restore();
  }
}
