/**
 * Pointer Handler — Unified pointer event management.
 *
 * Handles all pointer input for drawing:
 * - pointerdown / pointermove / pointerup / pointercancel
 * - setPointerCapture / releasePointerCapture
 * - getCoalescedEvents for smooth Apple Pencil input
 * - pointerType discrimination (pen=draw, mouse=draw, touch=scroll)
 * - Finger drawing toggle (default OFF)
 *
 * Ported from original DrawingEngine.ts pointer logic with enhancements.
 */

import { createLogger } from '@core/logging/Logger';

const logger = createLogger('PointerHandler');

/** Raw point data from a pointer event */
export interface RawPointerPoint {
  readonly x: number;
  readonly y: number;
  readonly pressure: number;
  readonly timestamp: number;
  readonly pointerType: string;
}

/** Callback interface for pointer handler consumers */
export interface PointerCallbacks {
  onStrokeStart(point: RawPointerPoint): void;
  onStrokeMove(points: RawPointerPoint[]): void;
  onStrokeEnd(): void;
}

export class PointerHandler {
  private target: HTMLCanvasElement | null = null;
  private callbacks: PointerCallbacks | null = null;
  private drawing = false;
  private activePointerId: number | null = null;
  private fingerDrawing = false;
  private cachedRect: DOMRect | null = null;

  // Bound handler references for cleanup
  private boundDown: ((e: PointerEvent) => void) | null = null;
  private boundMove: ((e: PointerEvent) => void) | null = null;
  private boundUp: ((e: PointerEvent) => void) | null = null;
  private boundCancel: ((e: PointerEvent) => void) | null = null;
  private boundLost: ((e: PointerEvent) => void) | null = null;

  /** Whether currently in an active stroke */
  get isDrawing(): boolean { return this.drawing; }

  /** Toggle finger drawing mode */
  setFingerDrawing(enabled: boolean): void {
    this.fingerDrawing = enabled;
  }

  /** Attach to a canvas element and start listening */
  attach(canvas: HTMLCanvasElement, callbacks: PointerCallbacks): void {
    this.detach(); // Clean up previous attachment

    this.target = canvas;
    this.callbacks = callbacks;

    this.boundDown = (e) => this.handleDown(e);
    this.boundMove = (e) => this.handleMove(e);
    this.boundUp = (e) => this.handleEnd(e);
    this.boundCancel = (e) => this.handleEnd(e);
    this.boundLost = (e) => this.handleEnd(e);

    canvas.addEventListener('pointerdown', this.boundDown, { passive: false });
    canvas.addEventListener('pointermove', this.boundMove, { passive: false });
    canvas.addEventListener('pointerup', this.boundUp);
    canvas.addEventListener('pointercancel', this.boundCancel);
    canvas.addEventListener('lostpointercapture', this.boundLost);

    logger.debug('Pointer handler attached');
  }

  /** Detach all event listeners */
  detach(): void {
    if (!this.target) return;

    if (this.boundDown) this.target.removeEventListener('pointerdown', this.boundDown);
    if (this.boundMove) this.target.removeEventListener('pointermove', this.boundMove);
    if (this.boundUp) this.target.removeEventListener('pointerup', this.boundUp);
    if (this.boundCancel) this.target.removeEventListener('pointercancel', this.boundCancel);
    if (this.boundLost) this.target.removeEventListener('lostpointercapture', this.boundLost);

    this.drawing = false;
    this.activePointerId = null;
    this.target = null;
    this.callbacks = null;
    this.boundDown = null;
    this.boundMove = null;
    this.boundUp = null;
    this.boundCancel = null;
    this.boundLost = null;

    logger.debug('Pointer handler detached');
  }

  // ─── Private Handlers ───

  private handleDown(e: PointerEvent): void {
    if (!this.shouldDraw(e)) return;

    this.drawing = true;
    this.activePointerId = e.pointerId;
    e.preventDefault();

    // Capture the pointer for reliable tracking
    try { this.target?.setPointerCapture(e.pointerId); } catch { /* ignore */ }

    // Cache rect once per stroke to avoid layout thrashing
    this.cachedRect = this.target?.getBoundingClientRect() ?? null;

    const point = this.extractPoint(e);
    this.callbacks?.onStrokeStart(point);
  }

  private handleMove(e: PointerEvent): void {
    if (!this.drawing || e.pointerId !== this.activePointerId) return;
    if (!this.shouldDraw(e)) return;

    e.preventDefault();

    // Use coalesced events for smooth Apple Pencil input
    const coalescedEvents = this.getCoalesced(e);
    const points = coalescedEvents.map((evt) => this.extractPoint(evt));

    if (points.length > 0) {
      this.callbacks?.onStrokeMove(points);
    }
  }

  private handleEnd(e: PointerEvent): void {
    if (!this.drawing) return;
    if (e.pointerId !== undefined && e.pointerId !== this.activePointerId) return;

    this.drawing = false;
    this.activePointerId = null;
    this.cachedRect = null;

    // Release pointer capture
    try { this.target?.releasePointerCapture(e.pointerId); } catch { /* ignore */ }

    this.callbacks?.onStrokeEnd();
  }

  // ─── Utilities ───

  /** Determine if this pointer event should trigger drawing */
  private shouldDraw(e: PointerEvent): boolean {
    // Pen (stylus/Apple Pencil) always draws
    if (e.pointerType === 'pen') return true;

    // Mouse always draws
    if (e.pointerType === 'mouse') return true;

    // Touch only draws if finger drawing is enabled
    if (e.pointerType === 'touch') return this.fingerDrawing;

    return false;
  }

  /** Extract normalized point data from a PointerEvent */
  private extractPoint(e: PointerEvent): RawPointerPoint {
    if (!this.target) return { x: 0, y: 0, pressure: 0, timestamp: 0, pointerType: 'mouse' };

    const rect = this.cachedRect ?? this.target.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      pressure: e.pressure,
      timestamp: e.timeStamp,
      pointerType: e.pointerType,
    };
  }

  /** Get coalesced events with fallback */
  private getCoalesced(e: PointerEvent): PointerEvent[] {
    if (typeof e.getCoalescedEvents === 'function') {
      const events = e.getCoalescedEvents();
      if (events && events.length > 0) return events;
    }
    return [e];
  }
}
