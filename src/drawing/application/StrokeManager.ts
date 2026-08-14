/**
 * Stroke Manager — CRUD operations on stroke collections.
 *
 * Manages the stroke collection for the current topic.
 * Integrates with History for undo/redo support.
 * Notifies the rendering system when strokes change.
 */

import { createLogger } from '@core/logging/Logger';
import type { StrokeData, DrawingDocument } from '@drawing/domain/StrokeModel';
import { createDrawingDocument } from '@drawing/domain/StrokeModel';
import { History } from '@drawing/domain/History';

const logger = createLogger('StrokeManager');

export class StrokeManager {
  private document: DrawingDocument;
  private readonly history: History;
  private onChangeCallback: (() => void) | null = null;

  constructor(history: History) {
    this.history = history;
    this.document = createDrawingDocument(0);
  }

  /** Get the History instance for UI binding */
  getHistory(): History { return this.history; }

  /** Load a drawing document (e.g., from IndexedDB) */
  loadDocument(doc: DrawingDocument): void {
    this.document = doc;
    this.history.clear();
    this.notifyChange();
    logger.debug(`Loaded ${doc.strokes.length} strokes for topic ${doc.topicId}`);
  }

  /** Get current document (for saving) */
  getDocument(): DrawingDocument {
    return {
      ...this.document,
      updatedAt: Date.now(),
    };
  }

  /** Get all strokes */
  getStrokes(): readonly StrokeData[] {
    return this.document.strokes;
  }

  /** Get current topic ID */
  getTopicId(): number {
    return this.document.topicId;
  }

  /** Set change callback (triggers re-render) */
  setOnChange(cb: () => void): void {
    this.onChangeCallback = cb;
  }

  // ─── Stroke Operations ───

  /** Add a new stroke */
  addStroke(stroke: StrokeData): void {
    this.document = {
      ...this.document,
      strokes: [...this.document.strokes, stroke],
      updatedAt: Date.now(),
    };

    this.history.push({ type: 'add', stroke });
    this.notifyChange();
  }

  /** Delete strokes by ID */
  deleteStrokes(ids: string[]): void {
    const idSet = new Set(ids);
    const deleted = this.document.strokes.filter((s) => idSet.has(s.id));
    if (deleted.length === 0) return;

    this.document = {
      ...this.document,
      strokes: this.document.strokes.filter((s) => !idSet.has(s.id)),
      updatedAt: Date.now(),
    };

    this.history.push({ type: 'delete', strokes: deleted });
    this.notifyChange();
  }

  /** Replace strokes (for transform, recolor, split operations) */
  replaceStrokes(updates: Map<string, StrokeData>): void {
    this.document = {
      ...this.document,
      strokes: this.document.strokes.map((s) => updates.get(s.id) ?? s),
      updatedAt: Date.now(),
    };
    this.notifyChange();
  }

  /** Clear all strokes on current page */
  clearAll(): void {
    if (this.document.strokes.length === 0) return;

    this.history.push({ type: 'clear', strokes: [...this.document.strokes] });

    this.document = {
      ...this.document,
      strokes: [],
      updatedAt: Date.now(),
    };
    this.notifyChange();
  }

  // ─── Undo / Redo ───

  /** Undo the last operation */
  undo(): boolean {
    const entry = this.history.undo();
    if (!entry) return false;

    switch (entry.type) {
      case 'add':
        // Remove the added stroke
        this.document = {
          ...this.document,
          strokes: this.document.strokes.filter((s) => s.id !== entry.stroke.id),
          updatedAt: Date.now(),
        };
        break;

      case 'delete':
        // Re-add deleted strokes
        this.document = {
          ...this.document,
          strokes: [...this.document.strokes, ...entry.strokes],
          updatedAt: Date.now(),
        };
        break;

      case 'clear':
        // Re-add all cleared strokes
        this.document = {
          ...this.document,
          strokes: [...entry.strokes],
          updatedAt: Date.now(),
        };
        break;

      case 'transform':
        // Restore before transforms
        this.applyTransformRestore(entry.strokeIds, entry.beforeTransforms);
        break;

      case 'recolor':
        // Restore before colors
        this.applyColorRestore(entry.strokeIds, entry.beforeColors);
        break;

      case 'split':
        // Remove fragments, restore original
        this.document = {
          ...this.document,
          strokes: [
            ...this.document.strokes.filter((s) => !entry.fragments.some((f) => f.id === s.id)),
            entry.original,
          ],
          updatedAt: Date.now(),
        };
        break;
    }

    this.notifyChange();
    return true;
  }

  /** Redo the last undone operation */
  redo(): boolean {
    const entry = this.history.redo();
    if (!entry) return false;

    switch (entry.type) {
      case 'add':
        this.document = {
          ...this.document,
          strokes: [...this.document.strokes, entry.stroke],
          updatedAt: Date.now(),
        };
        break;

      case 'delete':
        {
          const idSet = new Set(entry.strokes.map((s) => s.id));
          this.document = {
            ...this.document,
            strokes: this.document.strokes.filter((s) => !idSet.has(s.id)),
            updatedAt: Date.now(),
          };
        }
        break;

      case 'clear':
        this.document = {
          ...this.document,
          strokes: [],
          updatedAt: Date.now(),
        };
        break;

      case 'transform':
        this.applyTransformSet(entry.strokeIds, entry.afterTransforms);
        break;

      case 'recolor':
        this.applyColorSet(entry.strokeIds, entry.afterColor);
        break;

      case 'split':
        this.document = {
          ...this.document,
          strokes: [
            ...this.document.strokes.filter((s) => s.id !== entry.original.id),
            ...entry.fragments,
          ],
          updatedAt: Date.now(),
        };
        break;
    }

    this.notifyChange();
    return true;
  }

  // ─── Private ───

  private applyTransformRestore(
    strokeIds: string[],
    transforms: (import('@drawing/domain/StrokeModel').StrokeTransform | undefined)[],
  ): void {
    const updates = new Map<string, StrokeData>();
    for (let i = 0; i < strokeIds.length; i++) {
      const id = strokeIds[i]!;
      const stroke = this.document.strokes.find((s) => s.id === id);
      if (stroke) {
        updates.set(id, { ...stroke, transform: transforms[i] });
      }
    }
    this.replaceStrokes(updates);
  }

  private applyTransformSet(
    strokeIds: string[],
    transforms: import('@drawing/domain/StrokeModel').StrokeTransform[],
  ): void {
    const updates = new Map<string, StrokeData>();
    for (let i = 0; i < strokeIds.length; i++) {
      const id = strokeIds[i]!;
      const stroke = this.document.strokes.find((s) => s.id === id);
      if (stroke) {
        updates.set(id, { ...stroke, transform: transforms[i] });
      }
    }
    this.replaceStrokes(updates);
  }

  private applyColorRestore(strokeIds: string[], colors: string[]): void {
    const updates = new Map<string, StrokeData>();
    for (let i = 0; i < strokeIds.length; i++) {
      const id = strokeIds[i]!;
      const stroke = this.document.strokes.find((s) => s.id === id);
      if (stroke) {
        updates.set(id, { ...stroke, color: colors[i]! });
      }
    }
    this.replaceStrokes(updates);
  }

  private applyColorSet(strokeIds: string[], color: string): void {
    const updates = new Map<string, StrokeData>();
    for (const id of strokeIds) {
      const stroke = this.document.strokes.find((s) => s.id === id);
      if (stroke) {
        updates.set(id, { ...stroke, color });
      }
    }
    this.replaceStrokes(updates);
  }

  private notifyChange(): void {
    this.onChangeCallback?.();
  }
}
