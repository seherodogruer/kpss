/**
 * Floating Pen Button (FAB) — Entry point to the drawing system.
 *
 * Features:
 * - Round floating button (52px) at bottom-right
 * - Drag to reposition (with 5px threshold for click vs drag)
 * - Lock position option
 * - Click → opens CompactToolbar
 * - Position persisted in localStorage
 * - Theme-aware styling via CSS variables
 * - Stays within viewport bounds
 */

import { createLogger } from '@core/logging/Logger';
import { SettingsStorage } from '@drawing/infrastructure/SettingsStorage';
import type { FabPosition } from '@drawing/infrastructure/SettingsStorage';

const logger = createLogger('FloatingPenButton');

const DRAG_THRESHOLD = 5; // px — movement below this is treated as click
const FAB_SIZE = 52;
const VIEWPORT_MARGIN = 8;

/** SVG pen icon — clean, professional, monochrome */
const PEN_ICON_SVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
  <path d="m15 5 4 4"/>
</svg>`;

export class FloatingPenButton {
  private el: HTMLButtonElement | null = null;
  private readonly settings = new SettingsStorage();
  private position: FabPosition;
  private locked: boolean;
  private visible = true;

  // Drag state
  private dragging = false;
  private dragStartX = 0;
  private dragStartY = 0;
  private dragStartRight = 0;
  private dragStartBottom = 0;
  private hasMoved = false;

  // Callbacks
  private onClickCallback: (() => void) | null = null;

  constructor() {
    this.position = this.settings.getFabPosition();
    this.locked = this.settings.getFabLocked();
  }

  /** Set callback for click (opens toolbar) */
  onClick(cb: () => void): void {
    this.onClickCallback = cb;
  }

  /** Create and mount the FAB to the document */
  mount(): void {
    if (this.el) return;

    const btn = document.createElement('button');
    btn.id = 'drawing-fab';
    btn.className = 'drawing-fab';
    btn.setAttribute('aria-label', 'Çizim aracını aç');
    btn.setAttribute('title', 'Çizim Aracı');
    btn.innerHTML = PEN_ICON_SVG;

    // Apply saved position
    this.applyPosition(btn);

    document.body.appendChild(btn);
    this.el = btn;

    this.attachEvents();
    logger.debug('FAB mounted');
  }

  /** Remove FAB from DOM */
  unmount(): void {
    if (this.el) {
      this.el.remove();
      this.el = null;
    }
  }

  /** Show the FAB */
  show(): void {
    if (!this.el) return;
    this.el.style.display = '';
    this.visible = true;
  }

  /** Hide the FAB (when toolbar is open) */
  hide(): void {
    if (!this.el) return;
    this.el.style.display = 'none';
    this.visible = false;
  }

  /** Whether FAB is currently visible */
  isVisible(): boolean { return this.visible; }

  /** Get current position */
  getPosition(): FabPosition { return { ...this.position }; }

  /** Set lock state */
  setLocked(locked: boolean): void {
    this.locked = locked;
    this.settings.setFabLocked(locked);
  }

  /** Get lock state */
  isLocked(): boolean { return this.locked; }

  /** Get FAB element (for toolbar positioning) */
  getElement(): HTMLButtonElement | null { return this.el; }

  // ─── Private ───

  private applyPosition(el: HTMLElement): void {
    el.style.position = 'fixed';
    el.style.right = this.position.right + 'px';
    el.style.bottom = this.position.bottom + 'px';
    el.style.zIndex = '10000';
  }

  private attachEvents(): void {
    if (!this.el) return;
    const el = this.el;

    el.addEventListener('pointerdown', (e) => this.handlePointerDown(e), { passive: false });
    el.addEventListener('pointermove', (e) => this.handlePointerMove(e), { passive: false });
    el.addEventListener('pointerup', (e) => this.handlePointerUp(e));
    el.addEventListener('pointercancel', () => this.handlePointerCancel());
    // Prevent context menu on long press
    el.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  private handlePointerDown(e: PointerEvent): void {
    e.preventDefault();
    e.stopPropagation();

    this.dragStartX = e.clientX;
    this.dragStartY = e.clientY;
    this.dragStartRight = this.position.right;
    this.dragStartBottom = this.position.bottom;
    this.hasMoved = false;
    this.dragging = true;

    try { this.el?.setPointerCapture(e.pointerId); } catch { /* ignore */ }
  }

  private handlePointerMove(e: PointerEvent): void {
    if (!this.dragging || !this.el) return;
    if (this.locked) return;

    const dx = e.clientX - this.dragStartX;
    const dy = e.clientY - this.dragStartY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < DRAG_THRESHOLD && !this.hasMoved) return;

    this.hasMoved = true;
    e.preventDefault();

    // Calculate new position (right/bottom based)
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let newRight = this.dragStartRight - dx;
    let newBottom = this.dragStartBottom - dy;

    // Clamp to viewport
    newRight = Math.max(VIEWPORT_MARGIN, Math.min(vw - FAB_SIZE - VIEWPORT_MARGIN, newRight));
    newBottom = Math.max(VIEWPORT_MARGIN, Math.min(vh - FAB_SIZE - VIEWPORT_MARGIN, newBottom));

    this.position.right = newRight;
    this.position.bottom = newBottom;

    this.el.style.right = newRight + 'px';
    this.el.style.bottom = newBottom + 'px';
    this.el.style.transition = 'none';
  }

  private handlePointerUp(e: PointerEvent): void {
    if (!this.dragging) return;
    this.dragging = false;

    try { this.el?.releasePointerCapture(e.pointerId); } catch { /* ignore */ }

    if (this.hasMoved) {
      // Was a drag — save position
      this.settings.setFabPosition(this.position);
      this.el!.style.transition = '';
    } else {
      // Was a click — trigger callback
      this.onClickCallback?.();
    }
  }

  private handlePointerCancel(): void {
    this.dragging = false;
    this.hasMoved = false;
  }
}
