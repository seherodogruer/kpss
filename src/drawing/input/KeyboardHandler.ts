/**
 * Keyboard Handler — Keyboard shortcuts for the drawing system.
 *
 * Shortcuts:
 * - Ctrl+Z / Cmd+Z: Undo
 * - Ctrl+Y / Cmd+Shift+Z: Redo
 * - Ctrl+A: Select all strokes
 * - Delete / Backspace: Delete selected
 * - Escape: Clear selection / close toolbar
 * - 1-6: Quick tool switch (pen variants)
 * - E: Eraser
 * - S: Select (lasso)
 * - R: Ruler toggle
 */

import { createLogger } from '@core/logging/Logger';

const logger = createLogger('KeyboardHandler');

export interface KeyboardCallbacks {
  onUndo(): void;
  onRedo(): void;
  onSelectAll(): void;
  onDeleteSelected(): void;
  onEscape(): void;
  onToolSwitch(key: string): void;
  isDrawingActive(): boolean;
}

export class KeyboardHandler {
  private callbacks: KeyboardCallbacks | null = null;
  private boundHandler: ((e: KeyboardEvent) => void) | null = null;

  /** Attach keyboard listeners */
  attach(callbacks: KeyboardCallbacks): void {
    this.detach();
    this.callbacks = callbacks;
    this.boundHandler = (e) => this.handleKeyDown(e);
    document.addEventListener('keydown', this.boundHandler);
    logger.debug('Keyboard handler attached');
  }

  /** Detach keyboard listeners */
  detach(): void {
    if (this.boundHandler) {
      document.removeEventListener('keydown', this.boundHandler);
      this.boundHandler = null;
    }
    this.callbacks = null;
  }

  private handleKeyDown(e: KeyboardEvent): void {
    if (!this.callbacks) return;

    // Ignore when typing in input fields
    const target = e.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
      return;
    }

    // Only process drawing shortcuts when drawing is active
    if (!this.callbacks.isDrawingActive()) return;

    const ctrl = e.ctrlKey || e.metaKey;
    const shift = e.shiftKey;

    // Ctrl+Z: Undo
    if (ctrl && !shift && e.key === 'z') {
      e.preventDefault();
      this.callbacks.onUndo();
      return;
    }

    // Ctrl+Y or Ctrl+Shift+Z: Redo
    if ((ctrl && e.key === 'y') || (ctrl && shift && e.key === 'z') || (ctrl && shift && e.key === 'Z')) {
      e.preventDefault();
      this.callbacks.onRedo();
      return;
    }

    // Ctrl+A: Select all
    if (ctrl && e.key === 'a') {
      e.preventDefault();
      this.callbacks.onSelectAll();
      return;
    }

    // Delete / Backspace: Delete selected
    if (e.key === 'Delete' || e.key === 'Backspace') {
      e.preventDefault();
      this.callbacks.onDeleteSelected();
      return;
    }

    // Escape: Clear selection / close
    if (e.key === 'Escape') {
      e.preventDefault();
      this.callbacks.onEscape();
      return;
    }

    // No modifier key shortcuts (tool switching)
    if (!ctrl && !shift && !e.altKey) {
      const toolKeys = ['1', '2', '3', '4', '5', '6', 'e', 's', 'r'];
      if (toolKeys.includes(e.key.toLowerCase())) {
        e.preventDefault();
        this.callbacks.onToolSwitch(e.key.toLowerCase());
      }
    }
  }
}
