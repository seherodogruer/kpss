/**
 * Drawing Engine — Canvas setup, input handling, and rendering.
 *
 * Features ported from the original KPSS Defterim:
 * - Retina/DPR-aware canvas sizing
 * - Pointer events (pen/mouse only, touch always scrolls)
 * - Apple Pencil pressure sensitivity
 * - Coalesced events for smooth lines
 * - requestAnimationFrame batched rendering
 * - PNG-based save/load via localStorage (legacy, Phase 6 migrates to IDB)
 */

import { createLogger } from '@core/logging/Logger';
import type { DrawPoint, DrawingToolState, StrokeSettings } from './models/DrawingTypes';
import { computeStrokeSettings } from './models/DrawingTypes';

const logger = createLogger('DrawingEngine');

const DRAW_KEY_PREFIX = 'kpss-defterim-cizim-';
const SAVE_DEBOUNCE_MS = 350;

export class DrawingEngine {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private currentTopicId: number | null = null;
  private dpr = 1;
  private cssWidth = 0;
  private cssHeight = 0;

  // Drawing state
  private drawing = false;
  private lastX = 0;
  private lastY = 0;
  private activePointerId: number | null = null;
  private pendingPoints: DrawPoint[] = [];
  private rafId: number | null = null;
  private saveTimer: ReturnType<typeof setTimeout> | null = null;

  // Callbacks
  private onSaveIndicator: (() => void) | null = null;

  constructor(private readonly toolState: DrawingToolState) {}

  /** Set callback for save indicator flash */
  setOnSaveIndicator(cb: () => void): void {
    this.onSaveIndicator = cb;
  }

  /** Setup canvas for a specific topic page */
  setup(topicId: number): void {
    const page = document.querySelector('.notebook-page') as HTMLElement | null;
    this.canvas = document.getElementById('drawCanvas') as HTMLCanvasElement | null;
    if (!page || !this.canvas) {
      logger.warn('Canvas or page element not found');
      return;
    }

    this.currentTopicId = topicId;
    this.cssWidth = page.offsetWidth;
    this.cssHeight = page.scrollHeight;
    this.dpr = window.devicePixelRatio || 1;

    // Size canvas to match page
    this.canvas.style.width = this.cssWidth + 'px';
    this.canvas.style.height = this.cssHeight + 'px';
    this.canvas.style.touchAction = 'pan-y';
    this.canvas.width = Math.round(this.cssWidth * this.dpr);
    this.canvas.height = Math.round(this.cssHeight * this.dpr);

    // Get context with desynchronized hint for lower latency
    this.ctx = this.canvas.getContext('2d', { desynchronized: true });
    if (!this.ctx) {
      logger.warn('Could not get 2d context');
      return;
    }

    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    // Load saved drawing (legacy PNG from localStorage)
    this.loadSavedDrawing(topicId);

    // Attach pointer event handlers
    this.attachHandlers();

    logger.debug(`Canvas setup for topic ${topicId}: ${this.cssWidth}x${this.cssHeight} @${this.dpr}x`);
  }

  /** Clear all drawings on current canvas */
  clear(): void {
    if (!this.ctx || !this.canvas || this.currentTopicId === null) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    try {
      localStorage.removeItem(DRAW_KEY_PREFIX + this.currentTopicId);
    } catch {
      // ignore
    }
  }

  /** Detach all handlers and release resources */
  destroy(): void {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this.saveTimer) {
      clearTimeout(this.saveTimer);
      this.saveTimer = null;
    }
    this.drawing = false;
    this.canvas = null;
    this.ctx = null;
    this.pendingPoints = [];
  }

  // ─── Private Methods ───

  private loadSavedDrawing(topicId: number): void {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(DRAW_KEY_PREFIX + topicId);
    } catch {
      // ignore
    }

    if (saved && this.ctx) {
      const img = new Image();
      img.onload = () => {
        this.ctx?.drawImage(img, 0, 0, this.cssWidth, this.cssHeight);
      };
      img.src = saved;
    }
  }

  private attachHandlers(): void {
    if (!this.canvas) return;

    const canvas = this.canvas;

    canvas.addEventListener('pointerdown', (e: PointerEvent) => {
      // Touch always scrolls — never draw with finger
      if (e.pointerType === 'touch') return;

      this.drawing = true;
      this.activePointerId = e.pointerId;
      e.preventDefault();

      const pos = this.getPos(e);
      this.lastX = pos.x;
      this.lastY = pos.y;

      try { canvas.setPointerCapture(e.pointerId); } catch { /* ignore */ }

      // Draw initial dot
      this.drawDot(pos);
    }, { passive: false });

    canvas.addEventListener('pointermove', (e: PointerEvent) => {
      if (!this.drawing || e.pointerType === 'touch' || e.pointerId !== this.activePointerId) return;
      e.preventDefault();

      // Process coalesced events for smooth Apple Pencil lines
      const events = (typeof e.getCoalescedEvents === 'function') ? e.getCoalescedEvents() : [e];
      const list = (events && events.length > 0) ? events : [e];
      for (const evt of list) {
        this.queuePoint(this.getPos(evt));
      }
    }, { passive: false });

    const endStroke = (e: PointerEvent) => {
      if (!this.drawing) return;
      if (e.pointerId !== undefined && e.pointerId !== this.activePointerId) return;

      this.drawing = false;
      this.activePointerId = null;

      if (this.rafId !== null) {
        cancelAnimationFrame(this.rafId);
        this.flushPoints();
      }
      this.scheduleSave();
    };

    canvas.addEventListener('pointerup', endStroke);
    canvas.addEventListener('pointercancel', endStroke);
    canvas.addEventListener('pointerleave', endStroke);
  }

  private getPos(e: PointerEvent): DrawPoint {
    if (!this.canvas) return { x: 0, y: 0, pressure: 0 };
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      pressure: e.pressure,
    };
  }

  private drawDot(pos: DrawPoint): void {
    if (!this.ctx) return;
    const s = this.getStrokeSettings(pos.pressure);
    this.ctx.globalCompositeOperation = s.composite;
    this.ctx.globalAlpha = s.alpha;
    this.ctx.fillStyle = s.color;
    this.ctx.beginPath();
    this.ctx.arc(pos.x, pos.y, s.width / 2, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.globalAlpha = 1;
  }

  private queuePoint(pos: DrawPoint): void {
    this.pendingPoints.push(pos);
    if (this.rafId === null) {
      this.rafId = requestAnimationFrame(() => this.flushPoints());
    }
  }

  private flushPoints(): void {
    this.rafId = null;
    if (!this.ctx || this.pendingPoints.length === 0) return;

    for (const pos of this.pendingPoints) {
      const s = this.getStrokeSettings(pos.pressure);
      this.ctx.globalCompositeOperation = s.composite;
      this.ctx.globalAlpha = s.alpha;
      this.ctx.strokeStyle = s.color;
      this.ctx.lineWidth = s.width;
      this.ctx.beginPath();
      this.ctx.moveTo(this.lastX, this.lastY);
      this.ctx.lineTo(pos.x, pos.y);
      this.ctx.stroke();
      this.ctx.globalAlpha = 1;
      this.lastX = pos.x;
      this.lastY = pos.y;
    }
    this.pendingPoints = [];
  }

  private getStrokeSettings(pressure: number): StrokeSettings {
    return computeStrokeSettings(this.toolState, pressure);
  }

  private scheduleSave(): void {
    if (this.saveTimer) clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => {
      if (!this.canvas || this.currentTopicId === null) return;
      try {
        const dataUrl = this.canvas.toDataURL('image/png');
        localStorage.setItem(DRAW_KEY_PREFIX + this.currentTopicId, dataUrl);
        this.onSaveIndicator?.();
      } catch (e) {
        logger.warn('Drawing save failed', e);
      }
    }, SAVE_DEBOUNCE_MS);
  }
}
