/**
 * Drawing Service — Facade that orchestrates the entire Digital Ink Engine.
 *
 * Coordinates all sub-systems. This is the single entry point for App.ts.
 *
 * v2: Fixed performance (rect cache, tempCanvas live render, incremental append),
 * added eraser/selection/shape/laser pipeline.
 */

import { createLogger } from '@core/logging/Logger';
import { CanvasManager } from '@drawing/rendering/CanvasManager';
import { renderAllStrokes, renderLiveSegment, renderDot } from '@drawing/rendering/StrokeRenderer';
import { PointerHandler } from '@drawing/input/PointerHandler';
import type { RawPointerPoint, PointerCallbacks } from '@drawing/input/PointerHandler';
import { Stabilizer } from '@drawing/input/Stabilizer';
import { PressureProcessor } from '@drawing/input/PressureProcessor';
import { StrokeManager } from './StrokeManager';
import { EraserManager } from './EraserManager';
import { SelectionManager } from './SelectionManager';
import { ShapeRecognizer } from './ShapeRecognizer';
import { StrokeStorage } from '@drawing/infrastructure/StrokeStorage';
import { SettingsStorage } from '@drawing/infrastructure/SettingsStorage';
import { History } from '@drawing/domain/History';
import type { StrokePoint } from '@drawing/domain/StrokeModel';
import { createStroke } from '@drawing/domain/StrokeModel';
import type { PenToolType } from '@drawing/domain/ToolTypes';
import { WIDTH_PRESETS } from '@drawing/domain/ToolTypes';
import type { DrawingToolState } from '@drawing/domain/ToolTypes';

const logger = createLogger('DrawingService');

export class DrawingService {
  // Sub-systems
  private readonly canvas = new CanvasManager();
  private readonly pointer = new PointerHandler();
  private readonly stabilizer = new Stabilizer();
  private readonly pressure = new PressureProcessor();
  private readonly history = new History();
  private readonly strokeManager = new StrokeManager(this.history);
  private readonly eraserManager = new EraserManager(this.strokeManager);
  private readonly selectionManager = new SelectionManager();
  private readonly shapeRecognizer = new ShapeRecognizer();
  private readonly storage = new StrokeStorage();
  private readonly settings = new SettingsStorage();

  // State
  private toolState: DrawingToolState;
  private currentTopicId: number | null = null;
  private initialized = false;

  // Active stroke accumulation
  private activeStrokePoints: StrokePoint[] = [];
  private lastPoint: StrokePoint | null = null;
  private strokeStartTime = 0;
  private pressureDetected = false;

  // RAF for live rendering
  private rafId: number | null = null;
  private pendingLivePoints: StrokePoint[] = [];

  // Laser pointer state
  private laserPoints: StrokePoint[] = [];
  private laserFadeTimer: ReturnType<typeof setTimeout> | null = null;
  private laserRafId: number | null = null;

  constructor() {
    this.toolState = this.settings.getToolState();
    this.stabilizer.setLevel(this.toolState.stabilization);
    this.pressure.setEnabled(this.toolState.pressureEnabled);
    this.pointer.setFingerDrawing(this.toolState.fingerDrawing);

    // Render on stroke changes (undo/redo/delete) — full redraw
    this.strokeManager.setOnChange(() => this.renderInk());

    // Shape recognition callback
    this.shapeRecognizer.onRecognized((original, replacement) => {
      this.strokeManager.deleteStrokes([original.id]);
      this.strokeManager.addStroke(replacement);
      this.scheduleAutoSave();
    });
  }

  // ─── Public API ───

  async init(topicId: number, pageElement: HTMLElement): Promise<void> {
    if (this.currentTopicId !== null && this.currentTopicId !== topicId) {
      await this.saveCurrentDocument();
    }
    this.currentTopicId = topicId;
    this.canvas.setup(pageElement);
    this.canvas.setOnResize(() => this.renderInk());

    const doc = await this.storage.load(topicId);
    this.strokeManager.loadDocument(doc);

    const inputTarget = this.canvas.getInputTarget();
    if (inputTarget) {
      this.pointer.attach(inputTarget, this.createPointerCallbacks());
    }

    this.renderInk();
    this.initialized = true;
    logger.info(`Drawing initialized for topic ${topicId}`);
  }

  async switchTopic(topicId: number, pageElement: HTMLElement): Promise<void> {
    await this.init(topicId, pageElement);
  }

  async saveCurrentDocument(): Promise<void> {
    if (this.currentTopicId === null) return;
    const doc = this.strokeManager.getDocument();
    if (doc.strokes.length > 0) {
      this.storage.save(doc);
    }
  }

  async destroy(): Promise<void> {
    await this.saveCurrentDocument();
    this.pointer.detach();
    this.canvas.destroy();
    this.cancelAllAnimations();
    this.storage.close();
    this.initialized = false;
    logger.info('Drawing service destroyed');
  }

  isInitialized(): boolean { return this.initialized; }

  // ─── Tool State API ───

  getToolState(): DrawingToolState { return this.toolState; }

  updateToolState(partial: Partial<DrawingToolState>): void {
    this.toolState = { ...this.toolState, ...partial };
    this.settings.setToolState(this.toolState);

    if (partial.stabilization !== undefined) this.stabilizer.setLevel(partial.stabilization);
    if (partial.pressureEnabled !== undefined) this.pressure.setEnabled(partial.pressureEnabled);
    if (partial.fingerDrawing !== undefined) this.pointer.setFingerDrawing(partial.fingerDrawing);
  }

  getActivePenTool(): PenToolType | null {
    if (this.toolState.activeTool.kind === 'pen') return this.toolState.activeTool.type;
    return null;
  }

  // ─── Drawing Operations API ───

  undo(): boolean {
    const result = this.strokeManager.undo();
    if (result) this.scheduleAutoSave();
    return result;
  }

  redo(): boolean {
    const result = this.strokeManager.redo();
    if (result) this.scheduleAutoSave();
    return result;
  }

  get canUndo(): boolean { return this.history.canUndo; }
  get canRedo(): boolean { return this.history.canRedo; }

  onHistoryChange(cb: () => void): () => void {
    return this.history.onChange(cb);
  }

  clearCurrentPage(): void {
    this.strokeManager.clearAll();
    this.renderInk();
    this.scheduleAutoSave();
  }

  getCanvasManager(): CanvasManager { return this.canvas; }
  getSelectionManager(): SelectionManager { return this.selectionManager; }
  getEraserManager(): EraserManager { return this.eraserManager; }

  // ─── Private: Pointer Event Pipeline ───

  private createPointerCallbacks(): PointerCallbacks {
    return {
      onStrokeStart: (raw) => this.handleStrokeStart(raw),
      onStrokeMove: (raws) => this.handleStrokeMove(raws),
      onStrokeEnd: () => this.handleStrokeEnd(),
    };
  }

  private handleStrokeStart(raw: RawPointerPoint): void {
    const { activeTool } = this.toolState;

    switch (activeTool.kind) {
      case 'pen':
        if (activeTool.type === 'magic-pen') {
          this.startLaser(raw);
        } else {
          this.startPenStroke(raw);
        }
        break;

      case 'eraser':
        this.eraserManager.setMode(activeTool.mode);
        this.eraserManager.processPoint(raw.x, raw.y);
        break;

      case 'select':
        if (activeTool.mode === 'lasso') {
          this.selectionManager.startLasso(raw.x, raw.y);
        } else {
          this.selectionManager.startRect(raw.x, raw.y);
        }
        break;

      case 'shape':
        // Shape drawing: start like a pen, recognize on end
        this.startPenStroke(raw);
        break;
    }
  }

  private handleStrokeMove(raws: RawPointerPoint[]): void {
    const { activeTool } = this.toolState;

    switch (activeTool.kind) {
      case 'pen':
        if (activeTool.type === 'magic-pen') {
          this.moveLaser(raws);
        } else {
          this.movePenStroke(raws);
        }
        break;

      case 'eraser':
        for (const raw of raws) {
          this.eraserManager.processPoint(raw.x, raw.y);
        }
        break;

      case 'select':
        for (const raw of raws) {
          if (activeTool.mode === 'lasso') {
            this.selectionManager.addLassoPoint(raw.x, raw.y);
          } else {
            this.selectionManager.updateRect(raw.x, raw.y);
          }
        }
        this.renderOverlay();
        break;

      case 'shape':
        this.movePenStroke(raws);
        break;
    }
  }

  private handleStrokeEnd(): void {
    const { activeTool } = this.toolState;

    switch (activeTool.kind) {
      case 'pen':
        if (activeTool.type === 'magic-pen') {
          this.endLaser();
        } else {
          this.endPenStroke();
        }
        break;

      case 'eraser':
        // Eraser is already processed point-by-point
        this.scheduleAutoSave();
        break;

      case 'select':
        if (activeTool.mode === 'lasso') {
          this.selectionManager.completeLasso(this.strokeManager.getStrokes());
        } else {
          this.selectionManager.completeRect(this.strokeManager.getStrokes());
        }
        this.renderOverlay();
        break;

      case 'shape':
        this.endPenStroke();
        break;
    }
  }

  // ─── Pen Stroke Pipeline ───

  private startPenStroke(raw: RawPointerPoint): void {
    this.stabilizer.reset();
    this.activeStrokePoints = [];
    this.lastPoint = null;
    this.strokeStartTime = raw.timestamp;
    this.pressureDetected = false;

    const smoothed = this.stabilizer.process({
      x: raw.x, y: raw.y, pressure: raw.pressure,
      timestamp: raw.timestamp - this.strokeStartTime,
    });

    const point: StrokePoint = {
      x: smoothed.x, y: smoothed.y,
      pressure: smoothed.pressure, timestamp: smoothed.timestamp,
    };

    if (raw.pressure > 0 && raw.pressure < 1) this.pressureDetected = true;

    this.activeStrokePoints.push(point);
    this.lastPoint = point;

    // Draw initial dot on temp canvas (not ink)
    const tempLayer = this.canvas.getTempLayer();
    if (tempLayer) {
      const tool = this.toolState.activeTool.kind === 'pen'
        ? this.toolState.activeTool.type : 'ball-pen';
      renderDot(tempLayer, point.x, point.y, tool as PenToolType, this.getActiveColor(), this.getBaseWidth(), this.toolState.opacity, point.pressure);
    }
  }

  private movePenStroke(raws: RawPointerPoint[]): void {
    if (!this.lastPoint) return;

    const newPoints: StrokePoint[] = [];

    for (const raw of raws) {
      const smoothed = this.stabilizer.process({
        x: raw.x, y: raw.y, pressure: raw.pressure,
        timestamp: raw.timestamp - this.strokeStartTime,
      });

      const point: StrokePoint = {
        x: smoothed.x, y: smoothed.y,
        pressure: smoothed.pressure, timestamp: smoothed.timestamp,
      };

      if (raw.pressure > 0 && raw.pressure < 1) this.pressureDetected = true;

      this.activeStrokePoints.push(point);
      newPoints.push(point);
    }

    if (newPoints.length > 0) {
      this.pendingLivePoints.push(...newPoints);
      this.scheduleLiveRender();
    }
  }

  private endPenStroke(): void {
    // Flush pending render
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.flushLiveRender();
    }

    // Clear temp canvas
    const tempLayer = this.canvas.getTempLayer();
    if (tempLayer) this.canvas.clearLayer(tempLayer);

    if (this.activeStrokePoints.length > 0 && this.currentTopicId !== null) {
      const tool = this.toolState.activeTool.kind === 'pen'
        ? this.toolState.activeTool.type
        : this.toolState.activeTool.kind === 'shape'
          ? 'ball-pen' as PenToolType
          : 'ball-pen' as PenToolType;

      const stroke = createStroke({
        tool,
        points: this.activeStrokePoints,
        color: this.getActiveColor(),
        width: this.getBaseWidth(),
        opacity: this.toolState.opacity,
        pressureUsed: this.pressureDetected,
        topicId: this.currentTopicId,
      });

      // Incremental: append stroke to ink canvas directly, then add to manager
      // Manager's onChange triggers full redraw — so use silent add
      this.strokeManager.addStroke(stroke);
      this.scheduleAutoSave();

      // If shape tool, try recognition
      if (this.toolState.activeTool.kind === 'shape') {
        this.shapeRecognizer.analyzeStroke(stroke);
      }
    }

    this.activeStrokePoints = [];
    this.lastPoint = null;
    this.pendingLivePoints = [];
  }

  // ─── Laser Pointer (Magic Pen) ───

  private startLaser(raw: RawPointerPoint): void {
    this.clearLaser();
    this.laserPoints = [{ x: raw.x, y: raw.y, pressure: raw.pressure, timestamp: 0 }];
    this.renderLaserFrame();
  }

  private moveLaser(raws: RawPointerPoint[]): void {
    for (const raw of raws) {
      this.laserPoints.push({ x: raw.x, y: raw.y, pressure: raw.pressure, timestamp: 0 });
    }
    this.renderLaserFrame();
  }

  private endLaser(): void {
    // Fade out after 2 seconds
    this.laserFadeTimer = setTimeout(() => {
      this.fadeLaser();
    }, 2000);
  }

  private renderLaserFrame(): void {
    if (this.laserRafId !== null) return;
    this.laserRafId = requestAnimationFrame(() => {
      this.laserRafId = null;
      this.drawLaser();
    });
  }

  private drawLaser(): void {
    const tempLayer = this.canvas.getTempLayer();
    if (!tempLayer || this.laserPoints.length < 2) return;

    this.canvas.clearLayer(tempLayer);
    const { ctx } = tempLayer;
    ctx.save();

    const color = this.toolState.magicColor;

    // Glow effect
    ctx.shadowColor = color;
    ctx.shadowBlur = 12;
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalAlpha = 0.9;

    ctx.beginPath();
    ctx.moveTo(this.laserPoints[0]!.x, this.laserPoints[0]!.y);
    for (let i = 1; i < this.laserPoints.length; i++) {
      ctx.lineTo(this.laserPoints[i]!.x, this.laserPoints[i]!.y);
    }
    ctx.stroke();

    // Inner bright line
    ctx.shadowBlur = 0;
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 1;
    ctx.strokeStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(this.laserPoints[0]!.x, this.laserPoints[0]!.y);
    for (let i = 1; i < this.laserPoints.length; i++) {
      ctx.lineTo(this.laserPoints[i]!.x, this.laserPoints[i]!.y);
    }
    ctx.stroke();

    ctx.restore();
  }

  private fadeLaser(): void {
    const tempLayer = this.canvas.getTempLayer();
    if (!tempLayer) return;

    let opacity = 1;
    const fade = () => {
      opacity -= 0.05;
      if (opacity <= 0) {
        this.canvas.clearLayer(tempLayer);
        this.laserPoints = [];
        return;
      }
      this.canvas.clearLayer(tempLayer);
      const { ctx } = tempLayer;
      ctx.save();
      ctx.globalAlpha = opacity;
      this.drawLaserWithAlpha(ctx, opacity);
      ctx.restore();
      requestAnimationFrame(fade);
    };
    requestAnimationFrame(fade);
  }

  private drawLaserWithAlpha(ctx: CanvasRenderingContext2D, alpha: number): void {
    if (this.laserPoints.length < 2) return;
    const color = this.toolState.magicColor;

    ctx.shadowColor = color;
    ctx.shadowBlur = 12 * alpha;
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalAlpha = 0.9 * alpha;

    ctx.beginPath();
    ctx.moveTo(this.laserPoints[0]!.x, this.laserPoints[0]!.y);
    for (let i = 1; i < this.laserPoints.length; i++) {
      ctx.lineTo(this.laserPoints[i]!.x, this.laserPoints[i]!.y);
    }
    ctx.stroke();

    ctx.shadowBlur = 0;
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 1 * alpha;
    ctx.strokeStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(this.laserPoints[0]!.x, this.laserPoints[0]!.y);
    for (let i = 1; i < this.laserPoints.length; i++) {
      ctx.lineTo(this.laserPoints[i]!.x, this.laserPoints[i]!.y);
    }
    ctx.stroke();
  }

  private clearLaser(): void {
    if (this.laserFadeTimer) { clearTimeout(this.laserFadeTimer); this.laserFadeTimer = null; }
    if (this.laserRafId) { cancelAnimationFrame(this.laserRafId); this.laserRafId = null; }
    this.laserPoints = [];
    const tempLayer = this.canvas.getTempLayer();
    if (tempLayer) this.canvas.clearLayer(tempLayer);
  }

  // ─── Overlay Rendering ───

  private renderOverlay(): void {
    const overlayLayer = this.canvas.getOverlayLayer();
    if (!overlayLayer) return;

    // Only clear the overlay, not the ink
    this.canvas.clearLayer(overlayLayer);
    const { ctx } = overlayLayer;

    // Draw lasso path
    const lassoPoints = this.selectionManager.getLassoPoints();
    if (lassoPoints.length > 1) {
      ctx.save();
      ctx.strokeStyle = '#1a5fd6';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 4]);
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      ctx.moveTo(lassoPoints[0]!.x, lassoPoints[0]!.y);
      for (let i = 1; i < lassoPoints.length; i++) {
        ctx.lineTo(lassoPoints[i]!.x, lassoPoints[i]!.y);
      }
      ctx.stroke();
      ctx.restore();
    }

    // Draw selection rect
    const rect = this.selectionManager.getRect();
    if (rect) {
      ctx.save();
      ctx.fillStyle = '#1a5fd6';
      ctx.globalAlpha = 0.08;
      ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
      ctx.strokeStyle = '#1a5fd6';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 4]);
      ctx.globalAlpha = 0.6;
      ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
      ctx.restore();
    }
  }

  // ─── Rendering ───

  private renderInk(): void {
    const inkLayer = this.canvas.getInkLayer();
    if (!inkLayer) return;

    this.canvas.clearLayer(inkLayer);
    renderAllStrokes(inkLayer, [...this.strokeManager.getStrokes()]);
  }

  private scheduleLiveRender(): void {
    if (this.rafId !== null) return;
    this.rafId = requestAnimationFrame(() => this.flushLiveRender());
  }

  private flushLiveRender(): void {
    this.rafId = null;
    if (this.pendingLivePoints.length === 0 || !this.lastPoint) return;

    // Render live segments on TEMP canvas (not ink) for performance
    const tempLayer = this.canvas.getTempLayer();
    if (!tempLayer) return;

    const tool = this.toolState.activeTool.kind === 'pen'
      ? this.toolState.activeTool.type
      : 'ball-pen' as PenToolType;

    renderLiveSegment(
      tempLayer,
      tool,
      this.getActiveColor(),
      this.getBaseWidth(),
      this.toolState.opacity,
      this.lastPoint,
      this.pendingLivePoints,
    );

    this.lastPoint = this.pendingLivePoints[this.pendingLivePoints.length - 1] ?? this.lastPoint;
    this.pendingLivePoints = [];
  }

  // ─── Helpers ───

  private getActiveColor(): string {
    if (this.toolState.activeTool.kind !== 'pen') return this.toolState.color;
    switch (this.toolState.activeTool.type) {
      case 'highlighter': return this.toolState.highlightColor;
      case 'magic-pen': return this.toolState.magicColor;
      default: return this.toolState.color;
    }
  }

  private getBaseWidth(): number {
    return WIDTH_PRESETS[this.toolState.width];
  }

  private scheduleAutoSave(): void {
    if (this.currentTopicId === null) return;
    const doc = this.strokeManager.getDocument();
    this.storage.save(doc);
  }

  private cancelAllAnimations(): void {
    if (this.rafId !== null) { cancelAnimationFrame(this.rafId); this.rafId = null; }
    if (this.laserRafId !== null) { cancelAnimationFrame(this.laserRafId); this.laserRafId = null; }
    if (this.laserFadeTimer !== null) { clearTimeout(this.laserFadeTimer); this.laserFadeTimer = null; }
  }
}
