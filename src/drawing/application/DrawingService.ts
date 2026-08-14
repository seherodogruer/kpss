/**
 * Drawing Service — Facade that orchestrates the entire Digital Ink Engine.
 *
 * Coordinates:
 * - CanvasManager (multi-layer rendering)
 * - PointerHandler (input events)
 * - Stabilizer (smoothing)
 * - PressureProcessor (per-tool pressure curves)
 * - StrokeManager (stroke CRUD + undo/redo)
 * - StrokeStorage (IndexedDB persistence)
 * - SettingsStorage (preferences)
 * - StrokeRenderer (canvas rendering)
 *
 * This is the single entry point for the drawing system.
 * App.ts should only interact with DrawingService.
 */

import { createLogger } from '@core/logging/Logger';
import { CanvasManager } from '@drawing/rendering/CanvasManager';
import { renderAllStrokes, renderLiveSegment, renderDot } from '@drawing/rendering/StrokeRenderer';
import { PointerHandler } from '@drawing/input/PointerHandler';
import type { RawPointerPoint, PointerCallbacks } from '@drawing/input/PointerHandler';
import { Stabilizer } from '@drawing/input/Stabilizer';
import { PressureProcessor } from '@drawing/input/PressureProcessor';
import { StrokeManager } from './StrokeManager';
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

  constructor() {
    // Load persisted tool state
    this.toolState = this.settings.getToolState();

    // Apply settings
    this.stabilizer.setLevel(this.toolState.stabilization);
    this.pressure.setEnabled(this.toolState.pressureEnabled);
    this.pointer.setFingerDrawing(this.toolState.fingerDrawing);

    // Wire up stroke manager change events → re-render
    this.strokeManager.setOnChange(() => this.renderInk());
  }

  // ─── Public API ───

  /** Initialize the drawing system for a topic */
  async init(topicId: number, pageElement: HTMLElement): Promise<void> {
    // Save current topic before switching
    if (this.currentTopicId !== null && this.currentTopicId !== topicId) {
      await this.saveCurrentDocument();
    }

    this.currentTopicId = topicId;

    // Setup canvas layers
    this.canvas.setup(pageElement);

    // Setup resize handler
    this.canvas.setOnResize(() => this.renderInk());

    // Load stroke data from IndexedDB
    const doc = await this.storage.load(topicId);
    this.strokeManager.loadDocument(doc);

    // Attach pointer events
    const inputTarget = this.canvas.getInputTarget();
    if (inputTarget) {
      this.pointer.attach(inputTarget, this.createPointerCallbacks());
    }

    // Initial render
    this.renderInk();

    this.initialized = true;
    logger.info(`Drawing initialized for topic ${topicId}`);
  }

  /** Switch to a different topic */
  async switchTopic(topicId: number, pageElement: HTMLElement): Promise<void> {
    await this.init(topicId, pageElement);
  }

  /** Save current document to IndexedDB */
  async saveCurrentDocument(): Promise<void> {
    if (this.currentTopicId === null) return;
    const doc = this.strokeManager.getDocument();
    if (doc.strokes.length > 0) {
      this.storage.save(doc);
    }
  }

  /** Destroy the drawing system (cleanup) */
  async destroy(): Promise<void> {
    await this.saveCurrentDocument();
    this.pointer.detach();
    this.canvas.destroy();
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.storage.close();
    this.initialized = false;
    logger.info('Drawing service destroyed');
  }

  /** Whether the drawing system is initialized */
  isInitialized(): boolean { return this.initialized; }

  // ─── Tool State API ───

  /** Get current tool state */
  getToolState(): DrawingToolState { return this.toolState; }

  /** Update tool state */
  updateToolState(partial: Partial<DrawingToolState>): void {
    this.toolState = { ...this.toolState, ...partial };
    this.settings.setToolState(this.toolState);

    // Apply to sub-systems
    if (partial.stabilization !== undefined) {
      this.stabilizer.setLevel(partial.stabilization);
    }
    if (partial.pressureEnabled !== undefined) {
      this.pressure.setEnabled(partial.pressureEnabled);
    }
    if (partial.fingerDrawing !== undefined) {
      this.pointer.setFingerDrawing(partial.fingerDrawing);
    }
  }

  /** Get the active pen tool type (convenience) */
  getActivePenTool(): PenToolType | null {
    if (this.toolState.activeTool.kind === 'pen') {
      return this.toolState.activeTool.type;
    }
    return null;
  }

  // ─── Drawing Operations API ───

  /** Undo last operation */
  undo(): boolean {
    const result = this.strokeManager.undo();
    if (result) this.scheduleAutoSave();
    return result;
  }

  /** Redo last undone operation */
  redo(): boolean {
    const result = this.strokeManager.redo();
    if (result) this.scheduleAutoSave();
    return result;
  }

  /** Whether undo is available */
  get canUndo(): boolean { return this.history.canUndo; }

  /** Whether redo is available */
  get canRedo(): boolean { return this.history.canRedo; }

  /** Subscribe to history changes (for toolbar button states) */
  onHistoryChange(cb: () => void): () => void {
    return this.history.onChange(cb);
  }

  /** Clear all strokes on current page (with confirmation assumed handled by UI) */
  clearCurrentPage(): void {
    this.strokeManager.clearAll();
    this.renderInk();
    this.scheduleAutoSave();
  }

  /** Get the canvas manager (for FAB/toolbar positioning) */
  getCanvasManager(): CanvasManager { return this.canvas; }

  // ─── Private: Pointer Event Pipeline ───

  private createPointerCallbacks(): PointerCallbacks {
    return {
      onStrokeStart: (raw) => this.handleStrokeStart(raw),
      onStrokeMove: (raws) => this.handleStrokeMove(raws),
      onStrokeEnd: () => this.handleStrokeEnd(),
    };
  }

  private handleStrokeStart(raw: RawPointerPoint): void {
    // Only handle pen tools in this phase (eraser/lasso/shapes come in later phases)
    if (this.toolState.activeTool.kind !== 'pen') return;

    const tool = this.toolState.activeTool.type;

    // Magic pen is temporary — skip stroke recording
    if (tool === 'magic-pen') {
      // TODO: Faz C+ — LaserRenderer handles this
      return;
    }

    this.stabilizer.reset();
    this.activeStrokePoints = [];
    this.lastPoint = null;
    this.strokeStartTime = raw.timestamp;
    this.pressureDetected = false;

    // Process through stabilizer
    const smoothed = this.stabilizer.process({
      x: raw.x,
      y: raw.y,
      pressure: raw.pressure,
      timestamp: raw.timestamp - this.strokeStartTime,
    });

    const point: StrokePoint = {
      x: smoothed.x,
      y: smoothed.y,
      pressure: smoothed.pressure,
      timestamp: smoothed.timestamp,
    };

    if (raw.pressure > 0 && raw.pressure < 1) {
      this.pressureDetected = true;
    }

    this.activeStrokePoints.push(point);
    this.lastPoint = point;

    // Draw initial dot
    const inkLayer = this.canvas.getInkLayer();
    if (inkLayer) {
      const baseWidth = this.getBaseWidth();
      renderDot(inkLayer, point.x, point.y, tool, this.getActiveColor(), baseWidth, this.toolState.opacity, point.pressure);
    }
  }

  private handleStrokeMove(raws: RawPointerPoint[]): void {
    if (this.toolState.activeTool.kind !== 'pen') return;
    if (this.toolState.activeTool.type === 'magic-pen') return;
    if (!this.lastPoint) return;

    const newPoints: StrokePoint[] = [];

    for (const raw of raws) {
      const smoothed = this.stabilizer.process({
        x: raw.x,
        y: raw.y,
        pressure: raw.pressure,
        timestamp: raw.timestamp - this.strokeStartTime,
      });

      const point: StrokePoint = {
        x: smoothed.x,
        y: smoothed.y,
        pressure: smoothed.pressure,
        timestamp: smoothed.timestamp,
      };

      if (raw.pressure > 0 && raw.pressure < 1) {
        this.pressureDetected = true;
      }

      this.activeStrokePoints.push(point);
      newPoints.push(point);
    }

    if (newPoints.length > 0) {
      this.pendingLivePoints.push(...newPoints);
      this.scheduleLiveRender();
    }
  }

  private handleStrokeEnd(): void {
    if (this.toolState.activeTool.kind !== 'pen') return;
    if (this.toolState.activeTool.type === 'magic-pen') return;

    // Flush any pending live render
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.flushLiveRender();
    }

    // Only create stroke if we have enough points
    if (this.activeStrokePoints.length > 0 && this.currentTopicId !== null) {
      const tool = this.toolState.activeTool.type;
      const stroke = createStroke({
        tool,
        points: this.activeStrokePoints,
        color: this.getActiveColor(),
        width: this.getBaseWidth(),
        opacity: this.toolState.opacity,
        pressureUsed: this.pressureDetected,
        topicId: this.currentTopicId,
      });

      this.strokeManager.addStroke(stroke);
      this.scheduleAutoSave();
    }

    // Reset active stroke
    this.activeStrokePoints = [];
    this.lastPoint = null;
    this.pendingLivePoints = [];
  }

  // ─── Private: Rendering ───

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

    const inkLayer = this.canvas.getInkLayer();
    if (!inkLayer) return;

    const tool = this.toolState.activeTool.kind === 'pen'
      ? this.toolState.activeTool.type
      : 'ball-pen';

    renderLiveSegment(
      inkLayer,
      tool,
      this.getActiveColor(),
      this.getBaseWidth(),
      this.toolState.opacity,
      this.lastPoint,
      this.pendingLivePoints,
    );

    // Update lastPoint to last rendered point
    this.lastPoint = this.pendingLivePoints[this.pendingLivePoints.length - 1] ?? this.lastPoint;
    this.pendingLivePoints = [];
  }

  // ─── Private: Helpers ───

  private getActiveColor(): string {
    if (this.toolState.activeTool.kind !== 'pen') return this.toolState.color;

    switch (this.toolState.activeTool.type) {
      case 'highlighter': return this.toolState.highlightColor;
      case 'magic-pen': return this.toolState.magicColor;
      default: return this.toolState.color;
    }
  }

  private getBaseWidth(): number {
    const base = WIDTH_PRESETS[this.toolState.width];
    if (this.toolState.activeTool.kind === 'pen' && this.toolState.activeTool.type === 'highlighter') {
      return base; // HIGHLIGHTER_WIDTH_MULTIPLIER is applied in renderer
    }
    return base;
  }

  private scheduleAutoSave(): void {
    if (this.currentTopicId === null) return;
    const doc = this.strokeManager.getDocument();
    this.storage.save(doc); // Already debounced inside StrokeStorage
  }
}
