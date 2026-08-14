/**
 * History — Undo/Redo system for the Digital Ink Engine.
 *
 * Tracks all drawing operations as immutable history entries.
 * Supports unlimited undo (limited by memory) and redo.
 *
 * When a new action is performed after undoing, the redo stack is cleared.
 */

import type { StrokeData, StrokeTransform } from './StrokeModel';

// ─── History Entry Types ───

/** Base interface for all history entries */
interface HistoryEntryBase {
  /** Unique entry ID */
  readonly id: string;
  /** When this action occurred */
  readonly timestamp: number;
}

/** A stroke was added */
export interface AddEntry extends HistoryEntryBase {
  readonly type: 'add';
  /** The stroke that was added */
  readonly stroke: StrokeData;
}

/** One or more strokes were deleted */
export interface DeleteEntry extends HistoryEntryBase {
  readonly type: 'delete';
  /** The strokes that were deleted (needed for undo) */
  readonly strokes: StrokeData[];
}

/** One or more strokes were transformed (move/resize/rotate) */
export interface TransformEntry extends HistoryEntryBase {
  readonly type: 'transform';
  /** Stroke IDs that were transformed */
  readonly strokeIds: string[];
  /** Transform state before the operation */
  readonly beforeTransforms: (StrokeTransform | undefined)[];
  /** Transform state after the operation */
  readonly afterTransforms: StrokeTransform[];
}

/** One or more strokes were recolored */
export interface RecolorEntry extends HistoryEntryBase {
  readonly type: 'recolor';
  /** Stroke IDs that were recolored */
  readonly strokeIds: string[];
  /** Colors before the operation */
  readonly beforeColors: string[];
  /** Color after the operation */
  readonly afterColor: string;
}

/** All strokes on a page were cleared */
export interface ClearEntry extends HistoryEntryBase {
  readonly type: 'clear';
  /** All strokes that were on the page (needed for undo) */
  readonly strokes: StrokeData[];
}

/** A stroke was split by point eraser */
export interface SplitEntry extends HistoryEntryBase {
  readonly type: 'split';
  /** Original stroke that was split */
  readonly original: StrokeData;
  /** Resulting stroke fragments */
  readonly fragments: StrokeData[];
}

/** Union of all history entry types */
export type HistoryEntry =
  | AddEntry
  | DeleteEntry
  | TransformEntry
  | RecolorEntry
  | ClearEntry
  | SplitEntry;

// ─── History Stack ───

let _entryCounter = 0;

/** Generate a unique history entry ID */
function generateEntryId(): string {
  _entryCounter++;
  return `h-${Date.now().toString(36)}-${_entryCounter.toString(36)}`;
}

/**
 * Undo/Redo history manager.
 *
 * Maintains two stacks:
 * - undoStack: actions that can be undone
 * - redoStack: actions that were undone and can be redone
 *
 * When a new action is pushed, the redo stack is cleared.
 */
export class History {
  private undoStack: HistoryEntry[] = [];
  private redoStack: HistoryEntry[] = [];
  private readonly maxSize: number;
  private listeners: Set<() => void> = new Set();

  constructor(maxSize: number = 100) {
    this.maxSize = maxSize;
  }

  /** Push a new action onto the undo stack */
  push(entry: Omit<HistoryEntry, 'id' | 'timestamp'>): void {
    const fullEntry = {
      ...entry,
      id: generateEntryId(),
      timestamp: Date.now(),
    } as HistoryEntry;

    this.undoStack.push(fullEntry);

    // Clear redo stack — new action after undo invalidates redo
    this.redoStack = [];

    // Enforce max size (remove oldest entries)
    if (this.undoStack.length > this.maxSize) {
      this.undoStack.splice(0, this.undoStack.length - this.maxSize);
    }

    this.notifyListeners();
  }

  /** Pop the most recent action from undo stack and move to redo */
  undo(): HistoryEntry | null {
    const entry = this.undoStack.pop();
    if (!entry) return null;

    this.redoStack.push(entry);
    this.notifyListeners();
    return entry;
  }

  /** Pop the most recent undone action from redo stack and move back to undo */
  redo(): HistoryEntry | null {
    const entry = this.redoStack.pop();
    if (!entry) return null;

    this.undoStack.push(entry);
    this.notifyListeners();
    return entry;
  }

  /** Whether undo is available */
  get canUndo(): boolean {
    return this.undoStack.length > 0;
  }

  /** Whether redo is available */
  get canRedo(): boolean {
    return this.redoStack.length > 0;
  }

  /** Number of undo-able actions */
  get undoCount(): number {
    return this.undoStack.length;
  }

  /** Number of redo-able actions */
  get redoCount(): number {
    return this.redoStack.length;
  }

  /** Clear all history (both undo and redo) */
  clear(): void {
    this.undoStack = [];
    this.redoStack = [];
    this.notifyListeners();
  }

  /** Subscribe to history state changes (for UI updates) */
  onChange(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => { this.listeners.delete(listener); };
  }

  private notifyListeners(): void {
    for (const listener of this.listeners) {
      try {
        listener();
      } catch {
        // Swallow listener errors
      }
    }
  }
}
