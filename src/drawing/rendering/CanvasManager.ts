/**
 * Canvas Manager — Multi-layer canvas setup and lifecycle.
 *
 * Manages 3 canvas layers:
 * 1. inkCanvas — permanent stroke rendering
 * 2. tempCanvas — temporary effects (laser/magic pen)
 * 3. overlayCanvas — selection, ruler, lasso visuals
 *
 * Handles:
 * - DPR-aware sizing (retina displays)
 * - Resize without data loss (re-render from stroke data)
 * - Proper canvas positioning over page content
 *
 * Ported DPR logic from original DrawingEngine.ts.
 */

import { createLogger } from '@core/logging/Logger';

const logger = createLogger('CanvasManager');

export interface CanvasLayer {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
}

export class CanvasManager {
  private inkLayer: CanvasLayer | null = null;
  private tempLayer: CanvasLayer | null = null;
  private overlayLayer: CanvasLayer | null = null;
  private container: HTMLElement | null = null;
  private pageElement: HTMLElement | null = null;

  private dpr = 1;
  private cssWidth = 0;
  private cssHeight = 0;
  private resizeObserver: ResizeObserver | null = null;
  private onResizeCallback: (() => void) | null = null;

  /** Get device pixel ratio */
  getDpr(): number { return this.dpr; }

  /** Get CSS dimensions */
  getCssWidth(): number { return this.cssWidth; }
  getCssHeight(): number { return this.cssHeight; }

  /** Get ink canvas layer */
  getInkLayer(): CanvasLayer | null { return this.inkLayer; }

  /** Get temporary effects layer */
  getTempLayer(): CanvasLayer | null { return this.tempLayer; }

  /** Get overlay layer (selection, ruler) */
  getOverlayLayer(): CanvasLayer | null { return this.overlayLayer; }

  /** Get the ink canvas element (for pointer event attachment) */
  getInputTarget(): HTMLCanvasElement | null {
    return this.overlayLayer?.canvas ?? null;
  }

  /** Set callback for resize events (triggers re-render) */
  setOnResize(cb: () => void): void {
    this.onResizeCallback = cb;
  }

  /**
   * Setup all canvas layers for a page element.
   * Creates or reconfigures canvases to match the page dimensions.
   */
  setup(pageElement: HTMLElement): void {
    this.pageElement = pageElement;
    this.dpr = window.devicePixelRatio || 1;

    // Find or create container
    let container = pageElement.parentElement?.querySelector('.drawing-layers') as HTMLElement | null;
    if (!container) {
      container = document.createElement('div');
      container.className = 'drawing-layers';
      container.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 10;
      `;
      pageElement.parentElement?.appendChild(container);
    }
    this.container = container;

    // Create layers
    this.inkLayer = this.createLayer(container, 'ink-canvas', 1);
    this.tempLayer = this.createLayer(container, 'temp-canvas', 2);
    this.overlayLayer = this.createLayer(container, 'overlay-canvas', 3);

    // The overlay canvas receives pointer events
    this.overlayLayer.canvas.style.pointerEvents = 'auto';
    // Touch should scroll through the canvas, only pen/mouse draws
    this.overlayLayer.canvas.style.touchAction = 'pan-y';

    // Size all layers
    this.updateSize();

    // Watch for resize
    this.setupResizeObserver();

    logger.debug(`Canvas setup: ${this.cssWidth}x${this.cssHeight} @${this.dpr}x`);
  }

  /** Resize canvases to match current page dimensions */
  updateSize(): void {
    if (!this.pageElement) return;

    this.dpr = window.devicePixelRatio || 1;
    this.cssWidth = this.pageElement.offsetWidth;
    // Use scrollHeight but cap at a reasonable max to avoid enormous canvases
    const rawHeight = this.pageElement.scrollHeight;
    this.cssHeight = Math.min(rawHeight, 8000);

    // Update container size
    if (this.container) {
      this.container.style.height = this.cssHeight + 'px';
    }

    // Resize each layer
    if (this.inkLayer) this.sizeCanvas(this.inkLayer);
    if (this.tempLayer) this.sizeCanvas(this.tempLayer);
    if (this.overlayLayer) this.sizeCanvas(this.overlayLayer);
  }

  /** Clear a specific layer */
  clearLayer(layer: CanvasLayer): void {
    layer.ctx.clearRect(0, 0, layer.canvas.width, layer.canvas.height);
  }

  /** Clear all layers */
  clearAll(): void {
    if (this.inkLayer) this.clearLayer(this.inkLayer);
    if (this.tempLayer) this.clearLayer(this.tempLayer);
    if (this.overlayLayer) this.clearLayer(this.overlayLayer);
  }

  /** Get CSS coordinates from a pointer event */
  getPointerPosition(e: PointerEvent): { x: number; y: number } {
    const target = this.overlayLayer?.canvas ?? this.inkLayer?.canvas;
    if (!target) return { x: 0, y: 0 };

    const rect = target.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  /** Destroy all layers and cleanup */
  destroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }

    if (this.container) {
      this.container.remove();
      this.container = null;
    }

    this.inkLayer = null;
    this.tempLayer = null;
    this.overlayLayer = null;
    this.pageElement = null;
    this.onResizeCallback = null;
  }

  // ─── Private ───

  private createLayer(container: HTMLElement, id: string, zIndex: number): CanvasLayer {
    // Reuse existing canvas if present
    let canvas = container.querySelector(`#${id}`) as HTMLCanvasElement | null;
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = id;
      canvas.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        pointer-events: none;
        z-index: ${zIndex};
      `;
      container.appendChild(canvas);
    }

    // Get context with desynchronized hint for lower latency
    const ctx = canvas.getContext('2d', { desynchronized: true });
    if (!ctx) {
      throw new Error(`Failed to get 2d context for ${id}`);
    }

    return { canvas, ctx };
  }

  private sizeCanvas(layer: CanvasLayer): void {
    const { canvas, ctx } = layer;

    canvas.style.width = this.cssWidth + 'px';
    canvas.style.height = this.cssHeight + 'px';
    canvas.width = Math.round(this.cssWidth * this.dpr);
    canvas.height = Math.round(this.cssHeight * this.dpr);

    // Apply DPR transform so we can draw in CSS pixel coordinates
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }

  private setupResizeObserver(): void {
    if (!this.pageElement || this.resizeObserver) return;

    let debounceTimer: ReturnType<typeof setTimeout> | null = null;

    this.resizeObserver = new ResizeObserver(() => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        this.updateSize();
        this.onResizeCallback?.();
      }, 150);
    });

    this.resizeObserver.observe(this.pageElement);
  }
}
