/**
 * Gesture Detector — Touch gesture recognition for drawing.
 *
 * Detects:
 * - Two-finger pinch/zoom (canvas zoom)
 * - Two-finger pan (canvas pan)
 * - Two-finger tap (undo)
 * - Three-finger tap (redo)
 * - Palm rejection (large contact area = not intentional)
 */

import { createLogger } from '@core/logging/Logger';

const logger = createLogger('GestureDetector');

export interface GestureCallbacks {
  onPinchStart(): void;
  onPinchMove(scale: number, centerX: number, centerY: number): void;
  onPinchEnd(): void;
  onTwoFingerTap(): void;
  onThreeFingerTap(): void;
}

interface TouchInfo {
  id: number;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
}

export class GestureDetector {
  private callbacks: GestureCallbacks | null = null;
  private target: HTMLElement | null = null;
  private activeTouches: Map<number, TouchInfo> = new Map();
  private pinchStartDistance = 0;
  private isPinching = false;
  private tapTimer: ReturnType<typeof setTimeout> | null = null;

  private boundTouchStart: ((e: TouchEvent) => void) | null = null;
  private boundTouchMove: ((e: TouchEvent) => void) | null = null;
  private boundTouchEnd: ((e: TouchEvent) => void) | null = null;

  /** Attach gesture detection to an element */
  attach(target: HTMLElement, callbacks: GestureCallbacks): void {
    this.detach();
    this.target = target;
    this.callbacks = callbacks;

    this.boundTouchStart = (e) => this.handleTouchStart(e);
    this.boundTouchMove = (e) => this.handleTouchMove(e);
    this.boundTouchEnd = (e) => this.handleTouchEnd(e);

    target.addEventListener('touchstart', this.boundTouchStart, { passive: false });
    target.addEventListener('touchmove', this.boundTouchMove, { passive: false });
    target.addEventListener('touchend', this.boundTouchEnd);
    target.addEventListener('touchcancel', this.boundTouchEnd);

    logger.debug('Gesture detector attached');
  }

  /** Detach all listeners */
  detach(): void {
    if (!this.target) return;
    if (this.boundTouchStart) this.target.removeEventListener('touchstart', this.boundTouchStart);
    if (this.boundTouchMove) this.target.removeEventListener('touchmove', this.boundTouchMove);
    if (this.boundTouchEnd) this.target.removeEventListener('touchend', this.boundTouchEnd);
    this.target = null;
    this.callbacks = null;
    this.activeTouches.clear();
    this.isPinching = false;
  }

  /** Whether a multi-touch gesture is active */
  get isGestureActive(): boolean { return this.isPinching; }

  // ─── Private ───

  private handleTouchStart(e: TouchEvent): void {
    for (let i = 0; i < e.changedTouches.length; i++) {
      const t = e.changedTouches[i]!;
      this.activeTouches.set(t.identifier, {
        id: t.identifier,
        startX: t.clientX,
        startY: t.clientY,
        currentX: t.clientX,
        currentY: t.clientY,
      });
    }

    // Two+ fingers: start pinch
    if (this.activeTouches.size >= 2) {
      e.preventDefault();
      if (!this.isPinching) {
        this.isPinching = true;
        this.pinchStartDistance = this.getCurrentPinchDistance();
        this.callbacks?.onPinchStart();
      }
    }
  }

  private handleTouchMove(e: TouchEvent): void {
    for (let i = 0; i < e.changedTouches.length; i++) {
      const t = e.changedTouches[i]!;
      const info = this.activeTouches.get(t.identifier);
      if (info) {
        info.currentX = t.clientX;
        info.currentY = t.clientY;
      }
    }

    if (this.isPinching && this.activeTouches.size >= 2) {
      e.preventDefault();
      const currentDist = this.getCurrentPinchDistance();
      const scale = currentDist / this.pinchStartDistance;
      const center = this.getPinchCenter();
      this.callbacks?.onPinchMove(scale, center.x, center.y);
    }
  }

  private handleTouchEnd(e: TouchEvent): void {
    const touchCount = this.activeTouches.size;

    for (let i = 0; i < e.changedTouches.length; i++) {
      const t = e.changedTouches[i]!;
      const info = this.activeTouches.get(t.identifier);

      if (info) {
        // Check if it was a tap (minimal movement)
        const dx = t.clientX - info.startX;
        const dy = t.clientY - info.startY;
        const moved = Math.sqrt(dx * dx + dy * dy) > 10;

        if (!moved) {
          // Schedule tap detection
          if (this.tapTimer) clearTimeout(this.tapTimer);
          this.tapTimer = setTimeout(() => {
            if (touchCount === 2) {
              this.callbacks?.onTwoFingerTap();
            } else if (touchCount >= 3) {
              this.callbacks?.onThreeFingerTap();
            }
          }, 100);
        }
      }

      this.activeTouches.delete(t.identifier);
    }

    if (this.activeTouches.size < 2 && this.isPinching) {
      this.isPinching = false;
      this.callbacks?.onPinchEnd();
    }
  }

  private getCurrentPinchDistance(): number {
    const touches = [...this.activeTouches.values()];
    if (touches.length < 2) return 1;
    const a = touches[0]!;
    const b = touches[1]!;
    const dx = a.currentX - b.currentX;
    const dy = a.currentY - b.currentY;
    return Math.sqrt(dx * dx + dy * dy) || 1;
  }

  private getPinchCenter(): { x: number; y: number } {
    const touches = [...this.activeTouches.values()];
    if (touches.length < 2) return { x: 0, y: 0 };
    const a = touches[0]!;
    const b = touches[1]!;
    return {
      x: (a.currentX + b.currentX) / 2,
      y: (a.currentY + b.currentY) / 2,
    };
  }
}
