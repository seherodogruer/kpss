/**
 * Drawing Toolbar — UI component for the floating drawing tools panel.
 *
 * Manages:
 * - Tool mode switching (pen/highlight/eraser)
 * - Color selection (pen colors, highlight colors)
 * - Line width selection
 * - Toolbar visibility, collapse state, and drag positioning
 * - Clear canvas with confirmation
 */

import { LocalStorageAdapter } from '@core/storage/LocalStorageAdapter';
import { isMobileLayout } from '@core/utils/dom';
import type { DrawingToolState, ToolbarState, DrawMode, WidthLevel } from './models/DrawingTypes';
import { PEN_COLORS, PEN_COLOR_LABELS, HIGHLIGHT_COLORS, HIGHLIGHT_COLOR_LABELS } from './models/DrawingTypes';
import type { DrawingEngine } from './DrawingEngine';

const TOOLBAR_POS_KEY = 'kpss-defterim-toolbar-pos';

export class DrawingToolbar {
  private visible = false;
  private readonly storage = new LocalStorageAdapter();

  // DOM references
  private toolbar: HTMLElement | null = null;
  private toolbarHandle: HTMLElement | null = null;
  private collapseBtn: HTMLElement | null = null;
  private saveIndicator: HTMLElement | null = null;

  constructor(
    private readonly toolState: DrawingToolState,
    private readonly engine: DrawingEngine,
  ) {}

  /** Build the toolbar DOM and attach to document */
  init(): void {
    this.toolbar = document.getElementById('noteToolbar');
    if (!this.toolbar) {
      this.toolbar = this.createToolbarDOM();
      document.body.appendChild(this.toolbar);
    } else {
      this.populateToolbar(this.toolbar);
    }

    this.toolbarHandle = this.toolbar.querySelector('#toolbarHandle') as HTMLElement;
    this.collapseBtn = this.toolbar.querySelector('#toolbarCollapseBtn') as HTMLElement;
    this.saveIndicator = this.toolbar.querySelector('#saveIndicator') as HTMLElement;

    this.engine.setOnSaveIndicator(() => this.flashSaveIndicator());
    this.loadToolbarState();
    this.attachToolbarEvents();
    this.attachDragEvents();

    // Start hidden
    this.toolbar.style.display = 'none';
  }

  /** Show toolbar */
  show(): void {
    if (!this.toolbar) return;
    this.visible = true;
    this.toolbar.style.display = 'flex';
    const toggleBtn = document.getElementById('drawToggleBtn');
    if (toggleBtn) { toggleBtn.style.background = '#1a5fd6'; toggleBtn.style.color = '#fff'; }
  }

  /** Hide toolbar */
  hide(): void {
    if (!this.toolbar) return;
    this.visible = false;
    this.toolbar.style.display = 'none';
    const toggleBtn = document.getElementById('drawToggleBtn');
    if (toggleBtn) { toggleBtn.style.background = '#e8f4fd'; toggleBtn.style.color = '#1a5fd6'; }
  }

  /** Toggle toolbar visibility */
  toggle(): void {
    if (this.visible) this.hide(); else this.show();
  }

  isVisible(): boolean {
    return this.visible;
  }

  // ─── DOM Creation ───

  private createToolbarDOM(): HTMLElement {
    const el = document.createElement('div');
    el.className = 'note-toolbar';
    el.id = 'noteToolbar';
    el.setAttribute('aria-label', 'Çizim araçları');
    this.populateToolbar(el);
    return el;
  }

  private populateToolbar(el: HTMLElement): void {
    // Build pen color buttons with Turkish labels
    const penColorBtns = PEN_COLORS.map((c, i) =>
      `<button class="color-btn${i === 0 ? ' active' : ''}" data-color="${c}" style="background:${c}" title="${PEN_COLOR_LABELS[i]}" aria-label="${PEN_COLOR_LABELS[i]} kalem"></button>`
    ).join('');

    // Build highlight color buttons with Turkish labels
    const hlColorBtns = HIGHLIGHT_COLORS.map((c, i) =>
      `<button class="color-btn${i === 0 ? ' active' : ''}" data-color="${c}" style="background:${c}" title="${HIGHLIGHT_COLOR_LABELS[i]} fosforlu" aria-label="${HIGHLIGHT_COLOR_LABELS[i]} fosforlu"></button>`
    ).join('');

    el.innerHTML = `
      <div class="toolbar-handle" id="toolbarHandle">
        <span>🖊️ Çizim Araçları</span>
        <div style="display:flex;gap:4px;align-items:center;">
          <button class="toolbar-collapse-btn" id="toolbarCollapseBtn" title="Küçült/Büyüt" aria-label="Araç çubuğunu küçült veya büyüt" aria-expanded="true">▾</button>
          <button class="toolbar-collapse-btn" id="toolbarCloseBtn" title="Çizim aracını kapat" aria-label="Çizim aracını kapat">✕</button>
        </div>
      </div>
      <div class="toolbar-body" id="toolbarBody">
        <div class="tool-hint">✍️ Apple Pencil / kalem ile sayfaya çiz — parmakla her zaman kaydırabilirsin.</div>
        <div class="tool-row">
          <button class="tool-btn active" data-mode="pen" aria-pressed="true">✏️ Kalem</button>
          <button class="tool-btn" data-mode="highlight" aria-pressed="false">🖍️ Fosforlu</button>
          <button class="tool-btn" data-mode="eraser" aria-pressed="false">🧽 Silgi</button>
        </div>
        <div class="tool-row-label">Kalem Rengi</div>
        <div class="tool-row" id="colorGroupPen">
          ${penColorBtns}
        </div>
        <div class="tool-row-label" id="highlightColorLabel" style="display:none;">Fosforlu Rengi</div>
        <div class="tool-row" id="colorGroupHighlight" style="display:none;">
          ${hlColorBtns}
        </div>
        <div class="tool-row-label">Uç Kalınlığı</div>
        <div class="tool-row" id="widthGroup">
          <button class="tool-btn" data-width="thin" aria-pressed="false">İnce</button>
          <button class="tool-btn" data-width="medium" aria-pressed="false">Orta</button>
          <button class="tool-btn active" data-width="thick" aria-pressed="true">Kalın</button>
          <button class="tool-btn" data-width="xthick" aria-pressed="false">Çok Kalın</button>
        </div>
        <div class="tool-row">
          <button class="tool-btn clear-btn" id="clearBtn">🗑️ Sayfayı Temizle</button>
          <span class="save-indicator" id="saveIndicator" role="status">✓ Kaydedildi</span>
        </div>
      </div>
    `;
  }

  // ─── Events ───

  private attachToolbarEvents(): void {
    if (!this.toolbar) return;

    // Mode switch
    this.toolbar.querySelectorAll('[data-mode]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const mode = (btn as HTMLElement).dataset.mode as DrawMode;
        this.toolState.mode = mode;
        this.toolbar!.querySelectorAll('[data-mode]').forEach((b) => {
          (b as HTMLElement).classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        (btn as HTMLElement).classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const penGroup = this.toolbar!.querySelector('#colorGroupPen') as HTMLElement;
        const hlGroup = this.toolbar!.querySelector('#colorGroupHighlight') as HTMLElement;
        const hlLabel = this.toolbar!.querySelector('#highlightColorLabel') as HTMLElement;
        if (penGroup) penGroup.style.display = mode === 'pen' ? 'flex' : 'none';
        if (hlGroup) hlGroup.style.display = mode === 'highlight' ? 'flex' : 'none';
        if (hlLabel) hlLabel.style.display = mode === 'highlight' ? 'block' : 'none';
      });
    });

    // Pen color
    const penGroup = this.toolbar.querySelector('#colorGroupPen');
    penGroup?.querySelectorAll('.color-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        penGroup.querySelectorAll('.color-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.toolState.penColor = (btn as HTMLElement).dataset.color ?? this.toolState.penColor;
      });
    });

    // Highlight color
    const hlGroup = this.toolbar.querySelector('#colorGroupHighlight');
    hlGroup?.querySelectorAll('.color-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        hlGroup.querySelectorAll('.color-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.toolState.highlightColor = (btn as HTMLElement).dataset.color ?? this.toolState.highlightColor;
      });
    });

    // Width selector
    const widthGroup = this.toolbar.querySelector('#widthGroup');
    widthGroup?.querySelectorAll('[data-width]').forEach((btn) => {
      btn.addEventListener('click', () => {
        widthGroup.querySelectorAll('[data-width]').forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        this.toolState.widthLevel = (btn as HTMLElement).dataset.width as WidthLevel;
      });
    });

    // Clear button
    const clearBtn = this.toolbar.querySelector('#clearBtn');
    clearBtn?.addEventListener('click', () => {
      const ok = confirm('Bu sayfadaki tüm çizimler (kalem + fosforlu) silinecek. Emin misin?');
      if (!ok) return;
      this.engine.clear();
    });

    // Collapse button
    this.collapseBtn?.addEventListener('click', () => {
      if (!this.toolbar) return;
      this.toolbar.classList.toggle('collapsed');
      const collapsed = this.toolbar.classList.contains('collapsed');
      if (this.collapseBtn) {
        this.collapseBtn.textContent = collapsed ? '▸' : '▾';
        this.collapseBtn.setAttribute('aria-expanded', String(!collapsed));
      }
      this.saveToolbarState();
    });

    // Close button
    const closeBtn = this.toolbar.querySelector('#toolbarCloseBtn');
    closeBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.hide();
    });
  }

  // ─── Drag ───

  private attachDragEvents(): void {
    if (!this.toolbarHandle || !this.toolbar) return;

    let dragging = false;
    let offX = 0;
    let offY = 0;
    const toolbar = this.toolbar;
    const handle = this.toolbarHandle;

    handle.addEventListener('pointerdown', (e: PointerEvent) => {
      if (isMobileLayout()) return;
      dragging = true;
      const rect = toolbar.getBoundingClientRect();
      offX = e.clientX - rect.left;
      offY = e.clientY - rect.top;
      try { handle.setPointerCapture(e.pointerId); } catch { /* ignore */ }
    });

    handle.addEventListener('pointermove', (e: PointerEvent) => {
      if (!dragging) return;
      let x = e.clientX - offX;
      let y = e.clientY - offY;
      x = Math.max(4, Math.min(window.innerWidth - toolbar.offsetWidth - 4, x));
      y = Math.max(4, Math.min(window.innerHeight - 44, y));
      toolbar.style.left = x + 'px';
      toolbar.style.top = y + 'px';
      toolbar.style.right = 'auto';
    });

    const stopDrag = () => {
      if (!dragging) return;
      dragging = false;
      this.saveToolbarState();
    };

    handle.addEventListener('pointerup', stopDrag);
    handle.addEventListener('pointercancel', stopDrag);
  }

  // ─── State Persistence ───

  private loadToolbarState(): void {
    if (!this.toolbar) return;
    const state = this.storage.getJSON<ToolbarState>(TOOLBAR_POS_KEY, null as unknown as ToolbarState);
    if (!state) return;

    if (typeof state.left === 'number' && typeof state.top === 'number' && !isMobileLayout()) {
      this.toolbar.style.left = state.left + 'px';
      this.toolbar.style.top = state.top + 'px';
      this.toolbar.style.right = 'auto';
    }
    if (state.collapsed) {
      this.toolbar.classList.add('collapsed');
      if (this.collapseBtn) {
        this.collapseBtn.textContent = '▸';
        this.collapseBtn.setAttribute('aria-expanded', 'false');
      }
    }
  }

  private saveToolbarState(): void {
    if (!this.toolbar) return;
    const rect = this.toolbar.getBoundingClientRect();
    this.storage.setJSON<ToolbarState>(TOOLBAR_POS_KEY, {
      left: rect.left,
      top: rect.top,
      collapsed: this.toolbar.classList.contains('collapsed'),
    });
  }

  private flashSaveIndicator(): void {
    if (!this.saveIndicator) return;
    this.saveIndicator.classList.add('show');
    setTimeout(() => this.saveIndicator?.classList.remove('show'), 1200);
  }
}
