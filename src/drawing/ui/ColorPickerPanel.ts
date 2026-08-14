/**
 * Color Picker Panel — Color selection UI for drawing tools.
 *
 * Features:
 * - 16 preset color grid
 * - Custom color via native input
 * - Recent 5 colors
 * - Per-tool color sets (pen vs highlighter vs magic)
 * - Active color indicator
 */

import type { ColorEntry } from '@drawing/domain/ColorPalette';
import { PEN_PRESET_COLORS, HIGHLIGHTER_COLORS, MAGIC_PEN_COLORS, RecentColors, needsLightText } from '@drawing/domain/ColorPalette';
import type { PenToolType } from '@drawing/domain/ToolTypes';

export interface ColorPickerCallbacks {
  onColorSelect(hex: string): void;
  getCurrentColor(): string;
}

export class ColorPickerPanel {
  private el: HTMLElement | null = null;
  private callbacks: ColorPickerCallbacks | null = null;
  private currentToolType: PenToolType = 'ball-pen';
  private recentColors = new RecentColors();

  /** Mount color picker into a parent element or create floating */
  mount(parent: HTMLElement, callbacks: ColorPickerCallbacks, initialRecent?: string[]): void {
    this.callbacks = callbacks;
    if (initialRecent) {
      this.recentColors = new RecentColors(5, initialRecent);
    }

    const panel = document.createElement('div');
    panel.className = 'color-picker-panel';
    panel.setAttribute('role', 'listbox');
    panel.setAttribute('aria-label', 'Renk seçici');

    this.buildContent(panel);
    parent.appendChild(panel);
    this.el = panel;
  }

  /** Update for a different tool type */
  setToolType(type: PenToolType): void {
    this.currentToolType = type;
    this.rebuild();
  }

  /** Update active color display */
  updateActiveColor(): void {
    if (!this.el || !this.callbacks) return;
    const current = this.callbacks.getCurrentColor().toLowerCase();
    const swatches = this.el.querySelectorAll('.color-swatch');
    swatches.forEach((s) => {
      const hex = (s as HTMLElement).dataset.color?.toLowerCase() ?? '';
      s.classList.toggle('active', hex === current);
    });
  }

  /** Add to recent and rebuild recent row */
  addRecent(hex: string): void {
    this.recentColors.add(hex);
    this.rebuildRecentRow();
  }

  /** Get recent colors for persistence */
  getRecentColors(): string[] {
    return this.recentColors.toJSON();
  }

  /** Remove from DOM */
  unmount(): void {
    this.el?.remove();
    this.el = null;
  }

  // ─── Private ───

  private rebuild(): void {
    if (!this.el || !this.callbacks) return;
    this.el.innerHTML = '';
    this.buildContent(this.el);
  }

  private buildContent(container: HTMLElement): void {
    const colors = this.getColorsForTool();

    // Color grid
    const grid = document.createElement('div');
    grid.className = 'color-grid';
    for (const c of colors) {
      grid.appendChild(this.createSwatch(c.hex, c.label));
    }
    container.appendChild(grid);

    // Custom color
    const customRow = document.createElement('div');
    customRow.className = 'color-custom-row';

    const customInput = document.createElement('input');
    customInput.type = 'color';
    customInput.className = 'color-custom-input';
    customInput.value = this.callbacks?.getCurrentColor() ?? '#000000';
    customInput.setAttribute('aria-label', 'Özel renk seç');
    customInput.addEventListener('input', () => {
      this.selectColor(customInput.value);
    });

    const customLabel = document.createElement('span');
    customLabel.className = 'color-custom-label';
    customLabel.textContent = 'Özel';

    customRow.appendChild(customInput);
    customRow.appendChild(customLabel);
    container.appendChild(customRow);

    // Recent colors
    const recentContainer = document.createElement('div');
    recentContainer.className = 'color-recent';
    recentContainer.id = 'color-recent-row';
    this.buildRecentRow(recentContainer);
    container.appendChild(recentContainer);
  }

  private buildRecentRow(container: HTMLElement): void {
    const recent = this.recentColors.getAll();
    if (recent.length === 0) {
      container.style.display = 'none';
      return;
    }

    container.style.display = '';
    container.innerHTML = '';

    const label = document.createElement('span');
    label.className = 'color-recent-label';
    label.textContent = 'Son:';
    container.appendChild(label);

    for (const hex of recent) {
      container.appendChild(this.createSwatch(hex, 'Son kullanılan'));
    }
  }

  private rebuildRecentRow(): void {
    const row = this.el?.querySelector('#color-recent-row');
    if (row) {
      this.buildRecentRow(row as HTMLElement);
    }
  }

  private createSwatch(hex: string, label: string): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.className = 'color-swatch';
    btn.dataset.color = hex;
    btn.style.backgroundColor = hex;
    btn.setAttribute('aria-label', label);
    btn.setAttribute('role', 'option');
    btn.title = label;

    // Add checkmark for light-on-dark contrast
    if (needsLightText(hex)) {
      btn.classList.add('dark-bg');
    }

    // Active state
    const current = this.callbacks?.getCurrentColor().toLowerCase() ?? '';
    if (hex.toLowerCase() === current) {
      btn.classList.add('active');
    }

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.selectColor(hex);
    });

    return btn;
  }

  private selectColor(hex: string): void {
    this.callbacks?.onColorSelect(hex);
    this.addRecent(hex);
    this.updateActiveColor();
  }

  private getColorsForTool(): readonly ColorEntry[] {
    switch (this.currentToolType) {
      case 'highlighter': return HIGHLIGHTER_COLORS;
      case 'magic-pen': return MAGIC_PEN_COLORS;
      default: return PEN_PRESET_COLORS;
    }
  }
}
