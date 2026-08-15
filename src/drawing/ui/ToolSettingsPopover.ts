/**
 * Tool Settings Popover — Color picker + pen sub-type + width selector.
 *
 * Opens below the pen button in the toolbar. Clean, minimal design
 * matching the existing toolbar aesthetic.
 */

import { ColorPickerPanel } from './ColorPickerPanel';
import type { ColorPickerCallbacks } from './ColorPickerPanel';
import type { PenToolType, WidthPreset } from '@drawing/domain/ToolTypes';

const PEN_SUBTYPES: { type: PenToolType; icon: string; label: string }[] = [
  { type: 'ball-pen', icon: '🖊️', label: 'Tükenmez' },
  { type: 'fountain', icon: '🖋️', label: 'Dolma' },
  { type: 'brush', icon: '🖌️', label: 'Fırça' },
  { type: 'pencil', icon: '✏️', label: 'Kurşun' },
];

const WIDTH_OPTIONS: { level: WidthPreset; label: string; size: number }[] = [
  { level: 'thin', label: 'İnce', size: 2 },
  { level: 'medium', label: 'Orta', size: 4 },
  { level: 'thick', label: 'Kalın', size: 6 },
  { level: 'xthick', label: 'Ekstra', size: 8 },
];

export interface ToolSettingsCallbacks {
  onPenTypeChange(type: PenToolType): void;
  onColorChange(hex: string): void;
  onWidthChange(level: WidthPreset): void;
  getCurrentColor(): string;
  getCurrentPenType(): PenToolType;
  getCurrentWidth(): WidthPreset;
}

export class ToolSettingsPopover {
  private el: HTMLElement | null = null;
  private colorPicker: ColorPickerPanel | null = null;
  private callbacks: ToolSettingsCallbacks | null = null;
  private visible = false;

  /** Mount popover (hidden by default) */
  mount(callbacks: ToolSettingsCallbacks, initialRecent?: string[]): void {
    this.callbacks = callbacks;
    if (this.el) this.unmount();

    const popover = document.createElement('div');
    popover.className = 'tool-popover';
    popover.id = 'tool-settings-popover';
    popover.style.display = 'none';

    // Pen sub-type selector
    const penSection = document.createElement('div');
    penSection.className = 'popover-section';

    const penLabel = document.createElement('div');
    penLabel.className = 'popover-label';
    penLabel.textContent = 'Kalem Tipi';
    penSection.appendChild(penLabel);

    const penGrid = document.createElement('div');
    penGrid.className = 'pen-type-grid';

    for (const sub of PEN_SUBTYPES) {
      const btn = document.createElement('button');
      btn.className = 'pen-type-btn';
      btn.dataset.penType = sub.type;
      btn.innerHTML = `<span class="pen-type-icon">${sub.icon}</span><span class="pen-type-label">${sub.label}</span>`;
      btn.title = sub.label;
      if (sub.type === callbacks.getCurrentPenType()) btn.classList.add('active');
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectPenType(sub.type);
      });
      penGrid.appendChild(btn);
    }
    penSection.appendChild(penGrid);
    popover.appendChild(penSection);

    // Width selector
    const widthSection = document.createElement('div');
    widthSection.className = 'popover-section';

    const widthLabel = document.createElement('div');
    widthLabel.className = 'popover-label';
    widthLabel.textContent = 'Kalınlık';
    widthSection.appendChild(widthLabel);

    const widthGrid = document.createElement('div');
    widthGrid.className = 'width-grid';

    for (const w of WIDTH_OPTIONS) {
      const btn = document.createElement('button');
      btn.className = 'width-btn';
      btn.dataset.width = w.level;
      btn.title = w.label;
      // Visual circle representing width
      const dot = document.createElement('span');
      dot.className = 'width-dot';
      dot.style.width = w.size + 'px';
      dot.style.height = w.size + 'px';
      btn.appendChild(dot);
      if (w.level === callbacks.getCurrentWidth()) btn.classList.add('active');
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectWidth(w.level);
      });
      widthGrid.appendChild(btn);
    }
    widthSection.appendChild(widthGrid);
    popover.appendChild(widthSection);

    // Color picker section
    const colorSection = document.createElement('div');
    colorSection.className = 'popover-section';

    const colorLabel = document.createElement('div');
    colorLabel.className = 'popover-label';
    colorLabel.textContent = 'Renk';
    colorSection.appendChild(colorLabel);

    this.colorPicker = new ColorPickerPanel();
    const colorCallbacks: ColorPickerCallbacks = {
      onColorSelect: (hex) => {
        this.callbacks?.onColorChange(hex);
        this.updateColorIndicator();
      },
      getCurrentColor: () => this.callbacks?.getCurrentColor() ?? '#000000',
    };
    this.colorPicker.mount(colorSection, colorCallbacks, initialRecent);
    popover.appendChild(colorSection);

    // Prevent clicks from propagating
    popover.addEventListener('pointerdown', (e) => e.stopPropagation());
    popover.addEventListener('click', (e) => e.stopPropagation());

    document.body.appendChild(popover);
    this.el = popover;

    // Close on outside click
    document.addEventListener('pointerdown', this.handleOutsideClick);
  }

  /** Show popover positioned near a reference element */
  show(refRect: DOMRect): void {
    if (!this.el) return;
    this.visible = true;
    this.el.style.display = 'block';
    this.updateActiveStates();

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const popoverWidth = 280;
    const popoverHeight = this.el.scrollHeight || 380;

    let left = refRect.left;
    // Keep within viewport horizontally
    if (left + popoverWidth > vw - 8) {
      left = vw - popoverWidth - 8;
    }
    left = Math.max(8, left);

    // Check if there's enough space below
    const spaceBelow = vh - refRect.bottom - 8;
    const spaceAbove = refRect.top - 8;

    let top: number;
    if (spaceBelow >= popoverHeight || spaceBelow >= spaceAbove) {
      // Open downward
      top = refRect.bottom + 8;
      this.el.classList.remove('popover-up');
      this.el.classList.add('popover-down');
    } else {
      // Open upward
      top = refRect.top - popoverHeight - 8;
      top = Math.max(8, top);
      this.el.classList.remove('popover-down');
      this.el.classList.add('popover-up');
    }

    this.el.style.position = 'fixed';
    this.el.style.left = left + 'px';
    this.el.style.top = top + 'px';
    this.el.style.zIndex = '10002';
  }

  /** Hide popover */
  hide(): void {
    if (!this.el) return;
    this.visible = false;
    this.el.style.display = 'none';
  }

  /** Toggle visibility */
  toggle(refRect: DOMRect): void {
    if (this.visible) this.hide();
    else this.show(refRect);
  }

  isVisible(): boolean { return this.visible; }

  /** Unmount and clean up */
  unmount(): void {
    this.colorPicker?.unmount();
    this.el?.remove();
    this.el = null;
    this.colorPicker = null;
    document.removeEventListener('pointerdown', this.handleOutsideClick);
  }

  private handleOutsideClick = (e: PointerEvent): void => {
    if (!this.visible || !this.el) return;
    if (this.el.contains(e.target as Node)) return;
    // Don't close if clicking the pen button itself (toggle handles that)
    const penBtn = document.querySelector('.dt-btn[data-tool="pen"]');
    if (penBtn?.contains(e.target as Node)) return;
    this.hide();
  };

  private selectPenType(type: PenToolType): void {
    this.callbacks?.onPenTypeChange(type);
    this.updateActiveStates();
  }

  private selectWidth(level: WidthPreset): void {
    this.callbacks?.onWidthChange(level);
    this.updateActiveStates();
  }

  private updateActiveStates(): void {
    if (!this.el || !this.callbacks) return;

    // Pen type
    this.el.querySelectorAll('.pen-type-btn').forEach((btn) => {
      const type = (btn as HTMLElement).dataset.penType;
      btn.classList.toggle('active', type === this.callbacks?.getCurrentPenType());
    });

    // Width
    this.el.querySelectorAll('.width-btn').forEach((btn) => {
      const level = (btn as HTMLElement).dataset.width;
      btn.classList.toggle('active', level === this.callbacks?.getCurrentWidth());
    });

    // Color
    this.colorPicker?.updateActiveColor();
  }

  private updateColorIndicator(): void {
    this.colorPicker?.updateActiveColor();
  }
}
