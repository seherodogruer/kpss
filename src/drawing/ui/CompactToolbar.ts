/**
 * Compact Toolbar — Main drawing toolbar strip.
 *
 * Opens from FAB click. Contains primary tool buttons.
 * Positions intelligently based on FAB location.
 * Collapse returns to FAB without deleting drawings.
 */

import { createLogger } from '@core/logging/Logger';
import type { DrawingToolState, ActiveTool } from '@drawing/domain/ToolTypes';
import type { FabPosition } from '@drawing/infrastructure/SettingsStorage';

const logger = createLogger('CompactToolbar');

interface ToolButton {
  id: string;
  label: string;
  ariaLabel: string;
  svg: string;
  action: () => void;
}

// ─── SVG Icons ───

const ICONS = {
  ballPen: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>`,
  highlighter: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 11-6 6v3h9l3-3"/><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"/></svg>`,
  magic: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>`,
  eraser: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>`,
  lasso: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 22a5 5 0 0 1-2-4"/><path d="M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-3.7-.5"/></svg>`,
  shapes: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>`,
  undo: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>`,
  redo: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13"/></svg>`,
  more: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`,
  collapse: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`,
  trash: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
};

export interface CompactToolbarCallbacks {
  onToolSelect(tool: ActiveTool): void;
  onUndo(): void;
  onRedo(): void;
  onClearAll(): void;
  onCollapse(): void;
  canUndo(): boolean;
  canRedo(): boolean;
  getToolState(): DrawingToolState;
}

export class CompactToolbar {
  private el: HTMLElement | null = null;
  private callbacks: CompactToolbarCallbacks | null = null;
  private visible = false;

  /** Mount toolbar to DOM */
  mount(callbacks: CompactToolbarCallbacks): void {
    this.callbacks = callbacks;
    if (this.el) return;

    const toolbar = document.createElement('div');
    toolbar.id = 'drawing-toolbar';
    toolbar.className = 'drawing-toolbar';
    toolbar.setAttribute('role', 'toolbar');
    toolbar.setAttribute('aria-label', 'Çizim araçları');

    this.buildButtons(toolbar);

    document.body.appendChild(toolbar);
    this.el = toolbar;
    this.el.style.display = 'none';

    // Prevent pointer events from falling through to canvas
    toolbar.addEventListener('pointerdown', (e) => e.stopPropagation());

    logger.debug('Toolbar mounted');
  }

  /** Show toolbar, positioned relative to FAB */
  show(fabPos: FabPosition): void {
    if (!this.el) return;
    this.visible = true;
    this.el.style.display = 'flex';
    this.positionRelativeToFab(fabPos);
    this.updateButtonStates();
  }

  /** Hide toolbar */
  hide(): void {
    if (!this.el) return;
    this.visible = false;
    this.el.style.display = 'none';
  }

  /** Whether toolbar is visible */
  isVisible(): boolean { return this.visible; }

  /** Update undo/redo and active tool states */
  updateButtonStates(): void {
    if (!this.el || !this.callbacks) return;

    const state = this.callbacks.getToolState();

    // Update active tool highlighting
    const buttons = this.el.querySelectorAll('.dt-btn[data-tool]');
    buttons.forEach((btn) => {
      const toolId = (btn as HTMLElement).dataset.tool;
      btn.classList.toggle('active', this.isToolActive(toolId ?? '', state));
    });

    // Update undo/redo disabled state
    const undoBtn = this.el.querySelector('#dt-undo') as HTMLButtonElement | null;
    const redoBtn = this.el.querySelector('#dt-redo') as HTMLButtonElement | null;
    if (undoBtn) undoBtn.disabled = !this.callbacks.canUndo();
    if (redoBtn) redoBtn.disabled = !this.callbacks.canRedo();
  }

  /** Remove from DOM */
  unmount(): void {
    this.el?.remove();
    this.el = null;
  }

  // ─── Private ───

  private buildButtons(container: HTMLElement): void {
    const tools: ToolButton[] = [
      { id: 'pen', label: 'Kalem', ariaLabel: 'Kalem', svg: ICONS.ballPen, action: () => this.selectTool({ kind: 'pen', type: 'ball-pen' }) },
      { id: 'highlighter', label: 'Fosforlu', ariaLabel: 'Fosforlu Kalem', svg: ICONS.highlighter, action: () => this.selectTool({ kind: 'pen', type: 'highlighter' }) },
      { id: 'magic', label: 'Sihirli', ariaLabel: 'Sihirli Kalem', svg: ICONS.magic, action: () => this.selectTool({ kind: 'pen', type: 'magic-pen' }) },
      { id: 'eraser', label: 'Silgi', ariaLabel: 'Silgi', svg: ICONS.eraser, action: () => this.selectTool({ kind: 'eraser', mode: 'stroke' }) },
      { id: 'lasso', label: 'Kement', ariaLabel: 'Kement Seçimi', svg: ICONS.lasso, action: () => this.selectTool({ kind: 'select', mode: 'lasso' }) },
      { id: 'shapes', label: 'Şekil', ariaLabel: 'Şekiller', svg: ICONS.shapes, action: () => this.selectTool({ kind: 'shape', shape: 'rectangle' }) },
    ];

    // Tool buttons
    for (const tool of tools) {
      const btn = this.createButton(tool.id, tool.ariaLabel, tool.svg, tool.action);
      btn.dataset.tool = tool.id;
      btn.title = tool.label;
      container.appendChild(btn);
    }

    // Separator
    container.appendChild(this.createSeparator());

    // Undo
    const undoBtn = this.createButton('undo', 'Geri Al', ICONS.undo, () => this.callbacks?.onUndo());
    undoBtn.id = 'dt-undo';
    undoBtn.title = 'Geri Al (Ctrl+Z)';
    container.appendChild(undoBtn);

    // Redo
    const redoBtn = this.createButton('redo', 'Yinele', ICONS.redo, () => this.callbacks?.onRedo());
    redoBtn.id = 'dt-redo';
    redoBtn.title = 'Yinele (Ctrl+Y)';
    container.appendChild(redoBtn);

    // Separator
    container.appendChild(this.createSeparator());

    // Clear all
    const clearBtn = this.createButton('clear', 'Tümünü Temizle', ICONS.trash, () => this.handleClear());
    clearBtn.title = 'Tümünü Temizle';
    container.appendChild(clearBtn);

    // Collapse
    const collapseBtn = this.createButton('collapse', 'Kapat', ICONS.collapse, () => this.callbacks?.onCollapse());
    collapseBtn.title = 'Araç çubuğunu kapat';
    container.appendChild(collapseBtn);
  }

  private createButton(_id: string, ariaLabel: string, svg: string, action: () => void): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.className = 'dt-btn';
    btn.setAttribute('aria-label', ariaLabel);
    btn.innerHTML = svg;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      action();
    });
    return btn;
  }

  private createSeparator(): HTMLElement {
    const sep = document.createElement('div');
    sep.className = 'dt-separator';
    return sep;
  }

  private selectTool(tool: ActiveTool): void {
    this.callbacks?.onToolSelect(tool);
    this.updateButtonStates();
  }

  private handleClear(): void {
    if (confirm('Bu sayfadaki tüm kalıcı çizimleri silmek istediğinize emin misiniz?')) {
      this.callbacks?.onClearAll();
    }
  }

  private isToolActive(toolId: string, state: DrawingToolState): boolean {
    const at = state.activeTool;
    switch (toolId) {
      case 'pen': return at.kind === 'pen' && at.type !== 'highlighter' && at.type !== 'magic-pen';
      case 'highlighter': return at.kind === 'pen' && at.type === 'highlighter';
      case 'magic': return at.kind === 'pen' && at.type === 'magic-pen';
      case 'eraser': return at.kind === 'eraser';
      case 'lasso': return at.kind === 'select';
      case 'shapes': return at.kind === 'shape';
      default: return false;
    }
  }

  private positionRelativeToFab(fabPos: FabPosition): void {
    if (!this.el) return;

    const vh = window.innerHeight;
    const vw = window.innerWidth;

    // Default: above FAB, aligned right
    let bottom = fabPos.bottom + 60;
    let right = fabPos.right;

    // If too close to top, open below
    if (bottom > vh - 80) {
      bottom = fabPos.bottom - 10;
    }

    // If too close to right edge, shift left
    const toolbarWidth = 450; // approximate
    if (vw - right < toolbarWidth) {
      right = Math.max(8, vw - toolbarWidth - 8);
    }

    this.el.style.right = right + 'px';
    this.el.style.bottom = bottom + 'px';
  }
}
