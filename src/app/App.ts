/**
 * KPSS Defterim — Application Controller
 *
 * Orchestrates all services and manages the main application lifecycle.
 * This is the single composition root where all dependencies are wired.
 */

import { EventBus } from '@core/events/EventBus';
import { LocalStorageAdapter } from '@core/storage/LocalStorageAdapter';
import { createLogger } from '@core/logging/Logger';
import { isMobileLayout } from '@core/utils/dom';
import { escapeRegex } from '@core/utils/dom';
import {
  ALL_TOPICS,
  CATEGORIES,
  getTopicById,
  getTopicsByCategory,
} from '@content/ContentRegistry';
import type { TopicDefinition } from '@content/models/Topic';
import { ThemeService } from '@features/themes/ThemeService';
import { TopicStatusService } from '@features/topic-status/TopicStatusService';
import { SearchService } from '@features/search/SearchService';
import type { SearchResult } from '@features/search/SearchService';
import { PlannerService } from '@features/planner/PlannerService';
import { SidebarService } from '@features/settings/SidebarService';
import type { DrawingToolState } from '@drawing/models/DrawingTypes';
import { DrawingEngine } from '@drawing/DrawingEngine';
import { DrawingToolbar } from '@drawing/DrawingToolbar';
import {
  toDateStr,
  parseDate,
  formatDateTR,
  formatDateLongTR,
  getDayNameShort,
  getWeekDates,
  isToday,
} from '@core/utils/dates';

const logger = createLogger('App');

export class App {
  // Services
  private readonly eventBus = new EventBus();
  private readonly storage = new LocalStorageAdapter();
  private readonly themeService: ThemeService;
  private readonly topicStatus: TopicStatusService;
  private readonly searchService: SearchService;
  private readonly plannerService: PlannerService;
  private readonly sidebarService: SidebarService;

  // Drawing
  private readonly drawToolState: DrawingToolState;
  private readonly drawingEngine: DrawingEngine;
  private readonly drawingToolbar: DrawingToolbar;
  private resizeDebounceTimer: ReturnType<typeof setTimeout> | null = null;

  // State
  private currentTopicId: number | null = null;
  private hedefTahtamActive = false;
  private plannerViewDate = new Date();
  private plannerMode: 'daily' | 'weekly' = 'daily';
  private searchDebounceTimer: ReturnType<typeof setTimeout> | null = null;

  // Search highlight state
  private currentHighlights: HTMLElement[] = [];
  private currentHighlightIndex = -1;
  private activeSearchQuery = '';

  // Drag state
  private draggedTopicId: number | null = null;

  /** Whether Hedef Tahtam view is active (used by drawing system in Phase 5+) */
  isHedefActive(): boolean { return this.hedefTahtamActive; }

  /** Current search query for highlight navigation */
  getSearchQuery(): string { return this.activeSearchQuery; }

  // DOM cache
  private dom!: {
    sidebar: HTMLElement;
    toc: HTMLElement;
    contentWrap: HTMLElement;
    contentTitle: HTMLElement;
    notebookContent: HTMLElement;
    notebookPage: HTMLElement;
    pageWrapper: HTMLElement;
    welcomeScreen: HTMLElement;
    lockPage: HTMLElement;
    searchInput: HTMLInputElement;
    searchClearBtn: HTMLElement;
    themeToggleBtn: HTMLElement;
    themePanel: HTMLElement;
    openSidebarBtn: HTMLElement;
    closeSidebarBtn: HTMLElement;
    sidebarBackdrop: HTMLElement;
    statusSummary: HTMLElement;
    completedCount: HTMLElement;
    reviewCount: HTMLElement;
    statusPicker: HTMLElement;
    statusBtnCompleted: HTMLElement;
    statusBtnReview: HTMLElement;
    printBtn: HTMLElement;
    hedefNavItem: HTMLElement;
    hedefTahtam: HTMLElement;
    searchResultsPanel: HTMLElement;
    searchNavBar: HTMLElement;
    searchNavCounter: HTMLElement;
  };

  constructor() {
    this.themeService = new ThemeService(this.storage, this.eventBus);
    this.topicStatus = new TopicStatusService(this.storage, this.eventBus);
    this.searchService = new SearchService();
    this.plannerService = new PlannerService(this.storage, this.eventBus);
    this.sidebarService = new SidebarService(this.storage);

    // Drawing system
    this.drawToolState = {
      mode: 'pen',
      penColor: '#1c2f5e',
      highlightColor: '#ffe500',
      widthLevel: 'thick',
    };
    this.drawingEngine = new DrawingEngine(this.drawToolState);
    this.drawingToolbar = new DrawingToolbar(this.drawToolState, this.drawingEngine);
  }

  /** Initialize the entire application */
  init(): void {
    logger.info('Initializing KPSS Defterim v1.0.0');

    // Cache DOM elements
    this.cacheDom();

    // Initialize services
    this.themeService.init();
    this.topicStatus.init();
    this.plannerService.init();
    this.sidebarService.init();
    this.searchService.buildIndex();

    // Build UI
    this.buildTOC();
    this.renderThemePanel();
    this.updateStatusSummary();
    this.applySidebarState();

    // Init drawing toolbar
    this.drawingToolbar.init();

    // Bind events
    this.bindEvents();

    logger.info('Application initialized successfully');
  }

  private cacheDom(): void {
    const $ = <T extends HTMLElement>(id: string): T => {
      const el = document.getElementById(id) as T | null;
      if (!el) throw new Error(`Required element #${id} not found`);
      return el;
    };

    this.dom = {
      sidebar: $('sidebar'),
      toc: $('toc'),
      contentWrap: $('contentWrap'),
      contentTitle: $('contentTitle'),
      notebookContent: $('notebookContent'),
      notebookPage: $('notebookPage'),
      pageWrapper: $('pageWrapper'),
      welcomeScreen: $('welcomeScreen'),
      lockPage: $('lockPage'),
      searchInput: $<HTMLInputElement>('searchInput'),
      searchClearBtn: $('searchClearBtn'),
      themeToggleBtn: $('themeToggleBtn'),
      themePanel: $('themePanel'),
      openSidebarBtn: $('openSidebarBtn'),
      closeSidebarBtn: $('closeSidebarBtn'),
      sidebarBackdrop: $('sidebarBackdrop'),
      statusSummary: $('statusSummary'),
      completedCount: $('completedCount'),
      reviewCount: $('reviewCount'),
      statusPicker: $('statusPicker'),
      statusBtnCompleted: $('statusBtnCompleted'),
      statusBtnReview: $('statusBtnReview'),
      printBtn: $('printBtn'),
      hedefNavItem: $('hedefNavItem'),
      hedefTahtam: $('hedefTahtam'),
      searchResultsPanel: $('searchResultsPanel'),
      searchNavBar: $('searchNavBar'),
      searchNavCounter: $('searchNavCounter'),
    };
  }

  // ─────────────────── TOC ───────────────────

  private buildTOC(): void {
    const toc = this.dom.toc;
    toc.innerHTML = '';

    for (const cat of CATEGORIES) {
      const topics = getTopicsByCategory(cat.id);
      if (topics.length === 0) continue;

      const block = document.createElement('div');
      block.className = 'cat-block';
      block.dataset.category = cat.id;

      const title = document.createElement('div');
      title.className = 'cat-title';
      title.textContent = `${cat.icon} ${cat.name}`;
      block.appendChild(title);

      for (const t of topics) {
        const item = this.createTopicItem(t);
        block.appendChild(item);
      }

      toc.appendChild(block);
    }

    // No results message
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.id = 'noResults';
    noResults.textContent = 'Sonuç bulunamadı';
    toc.appendChild(noResults);
  }

  private createTopicItem(t: TopicDefinition): HTMLElement {
    const item = document.createElement('div');
    item.className = 'topic-item';
    item.dataset.id = String(t.id);
    item.dataset.search = `${t.title} ${t.category}`.toLocaleLowerCase('tr');
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', t.title);

    if (!t.built) item.classList.add('locked');

    // Apply status
    const status = this.topicStatus.getStatus(t.id);
    if (status !== 'none') {
      item.classList.add(`status-${status}`);
    }

    // Number
    const num = document.createElement('span');
    num.className = 'num';
    num.textContent = String(t.id);
    item.appendChild(num);

    // Title
    const titleSpan = document.createElement('span');
    titleSpan.className = 'topic-item-text';
    titleSpan.textContent = t.title;
    item.appendChild(titleSpan);

    // Planner indicator
    const goal = this.plannerService.getGoalForTopic(t.id);
    if (goal) {
      const badge = document.createElement('span');
      badge.className = 'plan-indicator';
      badge.textContent = `📅 ${formatDateTR(goal.date)}`;
      badge.title = `Planlandı: ${formatDateTR(goal.date)}`;
      badge.addEventListener('click', (e) => {
        e.stopPropagation();
        this.plannerViewDate = parseDate(goal.date);
        this.showHedefTahtam();
      });
      item.appendChild(badge);
    }

    // Status dot
    const dot = document.createElement('span');
    dot.className = 'status-dot';
    dot.setAttribute('role', 'button');
    dot.setAttribute('tabindex', '0');
    dot.setAttribute('aria-label', 'Konu durumunu değiştir');
    dot.textContent = status === 'completed' ? '✓' : status === 'review' ? '↻' : '○';
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      this.topicStatus.cycleStatus(t.id);
      this.updateSidebarItemStatus(t.id);
      this.updateStatusSummary();
      if (this.currentTopicId === t.id) {
        this.renderStatusPicker(t.id);
      }
    });
    item.appendChild(dot);

    // Click to select topic
    item.addEventListener('click', () => this.selectTopic(t.id));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.selectTopic(t.id);
      }
    });

    return item;
  }

  // ─────────────────── Topic Selection ───────────────────

  selectTopic(id: number): void {
    const topic = getTopicById(id);
    if (!topic) return;

    const prevId = this.currentTopicId;
    this.currentTopicId = id;
    this.hedefTahtamActive = false;

    // Update sidebar active state
    this.dom.toc.querySelectorAll('.topic-item').forEach((el) => {
      const itemEl = el as HTMLElement;
      const isActive = itemEl.dataset.id === String(id);
      itemEl.classList.toggle('active', isActive);
      itemEl.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
    this.dom.hedefNavItem.classList.remove('active');

    // On mobile, collapse sidebar
    if (isMobileLayout()) {
      this.setSidebarCollapsed(true);
    }

    // Show/hide views
    this.dom.welcomeScreen.style.display = 'none';
    this.dom.hedefTahtam.style.display = 'none';
    this.dom.lockPage.style.display = 'none';

    if (!topic.built) {
      // Unbuilt topic
      this.dom.pageWrapper.style.display = 'none';
      this.dom.lockPage.style.display = 'block';
      this.dom.contentTitle.textContent = topic.title;
      this.dom.statusPicker.style.display = 'none';
      this.dom.printBtn.style.display = 'none';
      this.drawingToolbar.hide();
      this.drawingEngine.destroy();
    } else {
      // Built topic
      this.dom.pageWrapper.style.display = 'block';
      this.dom.notebookContent.innerHTML = topic.html;
      this.dom.contentTitle.textContent = topic.title;
      this.dom.statusPicker.style.display = 'flex';
      this.dom.printBtn.style.display = 'inline-flex';
      const drawToggleBtn = document.getElementById('drawToggleBtn');
      if (drawToggleBtn) drawToggleBtn.style.display = 'inline-flex';
      this.renderStatusPicker(id);

      // Scroll to top
      window.scrollTo(0, 0);
      this.dom.contentWrap.scrollTop = 0;

      // Enhance solutions (collapsible accordion)
      this.enhanceSolutions();

      // Trigger MathJax typesetting if available
      const mathjax = (window as unknown as Record<string, unknown>).MathJax as { typesetPromise?: () => Promise<void> } | undefined;
      if (mathjax?.typesetPromise) {
        mathjax.typesetPromise().then(() => {
          this.setupCanvasForTopic(id);
        }).catch(() => {
          this.setupCanvasForTopic(id);
        });
      } else {
        // Setup canvas after a short delay for layout settlement
        setTimeout(() => this.setupCanvasForTopic(id), 60);
      }

      // Show toolbar if it was visible
      if (this.drawingToolbar.isVisible()) {
        this.drawingToolbar.show();
      }
    }

    this.eventBus.emit('topic:changed', {
      topicId: id,
      previousTopicId: prevId,
    });
  }

  // ─────────────────── Canvas Setup ───────────────────

  private setupCanvasForTopic(topicId: number): void {
    this.drawingEngine.destroy();
    this.drawingEngine.setup(topicId);
  }

  // ─────────────────── Solutions Accordion ───────────────────

  private enhanceSolutions(): void {
    const content = this.dom.notebookContent;
    const solutionParagraphs = content.querySelectorAll('p');

    solutionParagraphs.forEach((p) => {
      const text = p.textContent ?? '';
      if (!/^(Çözüm|ÇÖZÜM|çözüm)\s*[:：]/i.test(text)) return;
      if (p.parentElement?.classList.contains('cozum-wrap')) return;

      // Wrap in accordion
      const wrapper = document.createElement('div');
      wrapper.className = 'cozum-wrap';

      const btn = document.createElement('button');
      btn.className = 'cozum-toggle-btn';
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = '<span class="chev">▶</span> Çözümü Göster';

      p.parentNode?.insertBefore(btn, p);
      p.parentNode?.insertBefore(wrapper, p);
      wrapper.appendChild(p);

      btn.addEventListener('click', () => {
        const isOpen = wrapper.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(isOpen));
        btn.innerHTML = isOpen
          ? '<span class="chev">▶</span> Çözümü Gizle'
          : '<span class="chev">▶</span> Çözümü Göster';
        if (isOpen) {
          wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
        } else {
          wrapper.style.maxHeight = '0';
        }
      });
    });
  }

  // ─────────────────── Status ───────────────────

  private renderStatusPicker(topicId: number): void {
    const status = this.topicStatus.getStatus(topicId);
    this.dom.statusBtnCompleted.className = 'status-picker-btn' +
      (status === 'completed' ? ' on-completed' : '');
    this.dom.statusBtnReview.className = 'status-picker-btn' +
      (status === 'review' ? ' on-review' : '');
  }

  private updateSidebarItemStatus(topicId: number): void {
    const item = this.dom.toc.querySelector(`.topic-item[data-id="${topicId}"]`) as HTMLElement | null;
    if (!item) return;

    const status = this.topicStatus.getStatus(topicId);
    item.classList.remove('status-completed', 'status-review');
    if (status !== 'none') {
      item.classList.add(`status-${status}`);
    }

    const dot = item.querySelector('.status-dot');
    if (dot) {
      dot.textContent = status === 'completed' ? '✓' : status === 'review' ? '↻' : '○';
    }
  }

  private updateStatusSummary(): void {
    const completed = this.topicStatus.getCompletedCount();
    const review = this.topicStatus.getReviewCount();
    this.dom.completedCount.textContent = String(completed);
    this.dom.reviewCount.textContent = String(review);
    this.dom.statusSummary.classList.toggle('empty', completed === 0 && review === 0);
  }

  // ─────────────────── Theme ───────────────────

  private renderThemePanel(): void {
    const panel = this.dom.themePanel;
    const themes = this.themeService.getAvailableThemes();
    const currentTheme = this.themeService.getCurrentTheme();

    // Keep the h3 header, remove options
    const existingOptions = panel.querySelectorAll('.theme-option');
    existingOptions.forEach((o) => o.remove());

    for (const theme of themes) {
      const btn = document.createElement('button');
      btn.className = `theme-option${theme.id === currentTheme ? ' active' : ''}`;
      btn.setAttribute('role', 'option');
      btn.setAttribute('aria-selected', String(theme.id === currentTheme));
      btn.dataset.theme = theme.id;

      const swatch = document.createElement('span');
      swatch.className = 'theme-swatch';
      swatch.style.background = theme.swatch;
      btn.appendChild(swatch);

      const label = document.createTextNode(theme.label);
      btn.appendChild(label);

      btn.addEventListener('click', () => {
        this.themeService.setTheme(theme.id);
        this.renderThemePanel();
      });

      panel.appendChild(btn);
    }
  }

  // ─────────────────── Sidebar ───────────────────

  private setSidebarCollapsed(collapsed: boolean): void {
    this.sidebarService.setCollapsed(collapsed);
    this.applySidebarState();
  }

  private applySidebarState(): void {
    const collapsed = this.sidebarService.isCollapsed();
    this.dom.sidebar.classList.toggle('collapsed', collapsed);
    this.dom.openSidebarBtn.classList.toggle('show', collapsed);
    this.dom.sidebarBackdrop.classList.toggle('show', !collapsed && isMobileLayout());
    this.dom.openSidebarBtn.setAttribute('aria-expanded', String(!collapsed));
  }

  // ─────────────────── Search ───────────────────

  private filterTOC(): void {
    const query = this.dom.searchInput.value.trim();
    const qLower = query.toLocaleLowerCase('tr');

    // Show/hide clear button
    this.dom.searchClearBtn.style.display = query ? 'flex' : 'none';

    // Filter sidebar items
    let anyVisible = false;
    this.dom.toc.querySelectorAll('.cat-block').forEach((block) => {
      const blockEl = block as HTMLElement;
      let catVisible = false;

      blockEl.querySelectorAll('.topic-item').forEach((item) => {
        const itemEl = item as HTMLElement;
        const searchText = itemEl.dataset.search ?? '';
        const matches = !qLower || searchText.includes(qLower);
        itemEl.classList.toggle('hidden', !matches);
        if (matches) catVisible = true;
      });

      blockEl.classList.toggle('hidden', !catVisible);
      if (catVisible) anyVisible = true;
    });

    const noResults = document.getElementById('noResults');
    if (noResults) {
      noResults.style.display = anyVisible ? 'none' : 'block';
    }

    // Full-text search for 3+ chars
    if (qLower.length >= 3) {
      const results = this.searchService.search(qLower);
      this.renderSearchResults(results, query);
    } else {
      this.dom.searchResultsPanel.classList.remove('show');
    }
  }

  private renderSearchResults(results: SearchResult[], query: string): void {
    const panel = this.dom.searchResultsPanel;

    if (results.length === 0) {
      panel.classList.remove('show');
      return;
    }

    panel.innerHTML = '';
    panel.classList.add('show');

    const header = document.createElement('div');
    header.className = 'search-results-header';
    header.textContent = `🔍 ${results.length} sonuç`;
    panel.appendChild(header);

    for (const r of results.slice(0, 20)) {
      const item = document.createElement('div');
      item.className = 'search-result-item';
      item.setAttribute('role', 'option');

      const cat = document.createElement('div');
      cat.className = 'search-result-cat';
      cat.textContent = r.category;
      item.appendChild(cat);

      const title = document.createElement('div');
      title.className = 'search-result-title';
      title.textContent = r.title;
      item.appendChild(title);

      if (r.snippet) {
        const snippet = document.createElement('div');
        snippet.className = 'search-result-snippet';
        // Highlight query in snippet
        const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
        snippet.innerHTML = r.snippet.replace(regex, '<mark>$1</mark>');
        item.appendChild(snippet);
      }

      // Check if planned
      const goal = this.plannerService.getGoalForTopic(r.topicId);
      if (goal) {
        const badge = document.createElement('span');
        badge.className = 'search-result-plan-badge';
        badge.textContent = `📅 ${formatDateTR(goal.date)}`;
        title.appendChild(badge);
      }

      item.addEventListener('click', () => {
        this.selectTopic(r.topicId);
        panel.classList.remove('show');
        if (query.length >= 3) {
          this.highlightInContent(query);
        }
      });

      panel.appendChild(item);
    }
  }

  // ─────────────────── In-Content Highlighting ───────────────────

  private highlightInContent(query: string): void {
    this.clearHighlights();
    if (!query || query.length < 2) return;

    this.activeSearchQuery = query;
    const content = this.dom.notebookContent;
    const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT);
    const qLower = query.toLocaleLowerCase('tr');
    const nodesToProcess: { node: Text; indices: number[] }[] = [];

    let node: Text | null;
    while ((node = walker.nextNode() as Text | null)) {
      const text = node.textContent ?? '';
      const textLower = text.toLocaleLowerCase('tr');
      const indices: number[] = [];
      let pos = 0;
      while (true) {
        const idx = textLower.indexOf(qLower, pos);
        if (idx === -1) break;
        indices.push(idx);
        pos = idx + 1;
      }
      if (indices.length > 0) {
        nodesToProcess.push({ node, indices });
      }
    }

    // Process nodes in reverse to maintain DOM positions
    for (let i = nodesToProcess.length - 1; i >= 0; i--) {
      const { node: textNode, indices } = nodesToProcess[i]!;
      const text = textNode.textContent ?? '';
      const parent = textNode.parentNode;
      if (!parent) continue;

      const frag = document.createDocumentFragment();
      let lastIdx = 0;

      for (const idx of indices) {
        if (idx > lastIdx) {
          frag.appendChild(document.createTextNode(text.substring(lastIdx, idx)));
        }
        const mark = document.createElement('span');
        mark.className = 'search-highlight';
        mark.textContent = text.substring(idx, idx + query.length);
        this.currentHighlights.push(mark);
        frag.appendChild(mark);
        lastIdx = idx + query.length;
      }

      if (lastIdx < text.length) {
        frag.appendChild(document.createTextNode(text.substring(lastIdx)));
      }

      parent.replaceChild(frag, textNode);
    }

    if (this.currentHighlights.length > 0) {
      this.currentHighlightIndex = 0;
      this.scrollToHighlight(0);
      this.dom.searchNavBar.classList.add('show');
      this.updateSearchNav();
    }
  }

  private scrollToHighlight(idx: number): void {
    if (idx < 0 || idx >= this.currentHighlights.length) return;

    // Remove active from previous
    if (this.currentHighlightIndex >= 0 && this.currentHighlightIndex < this.currentHighlights.length) {
      this.currentHighlights[this.currentHighlightIndex]?.classList.remove('active');
    }

    this.currentHighlightIndex = idx;
    const el = this.currentHighlights[idx];
    if (el) {
      el.classList.add('active');
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  private navigateHighlight(dir: 1 | -1): void {
    if (this.currentHighlights.length === 0) return;
    let next = this.currentHighlightIndex + dir;
    if (next < 0) next = this.currentHighlights.length - 1;
    if (next >= this.currentHighlights.length) next = 0;
    this.scrollToHighlight(next);
    this.updateSearchNav();
  }

  private updateSearchNav(): void {
    this.dom.searchNavCounter.textContent =
      `${this.currentHighlightIndex + 1} / ${this.currentHighlights.length}`;
  }

  private clearHighlights(): void {
    for (const mark of this.currentHighlights) {
      const parent = mark.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(mark.textContent ?? ''), mark);
        parent.normalize();
      }
    }
    this.currentHighlights = [];
    this.currentHighlightIndex = -1;
    this.activeSearchQuery = '';
    this.dom.searchNavBar.classList.remove('show');
  }

  private clearSearch(): void {
    this.dom.searchInput.value = '';
    this.dom.searchClearBtn.style.display = 'none';
    this.dom.searchResultsPanel.classList.remove('show');
    this.clearHighlights();
    this.filterTOC();
  }

  // ─────────────────── Hedef Tahtam ───────────────────

  showHedefTahtam(): void {
    this.hedefTahtamActive = true;
    this.currentTopicId = null;

    // Update sidebar active state
    this.dom.toc.querySelectorAll('.topic-item').forEach((el) => {
      (el as HTMLElement).classList.remove('active');
      el.setAttribute('aria-current', 'false');
    });
    this.dom.hedefNavItem.classList.add('active');

    // On mobile, collapse sidebar
    if (isMobileLayout()) {
      this.setSidebarCollapsed(true);
    }

    // Show Hedef Tahtam, hide others
    this.dom.welcomeScreen.style.display = 'none';
    this.dom.pageWrapper.style.display = 'none';
    this.dom.lockPage.style.display = 'none';
    this.dom.statusPicker.style.display = 'none';
    this.dom.printBtn.style.display = 'none';
    this.dom.contentTitle.textContent = '🎯 Hedef Tahtam';
    this.dom.hedefTahtam.style.display = 'block';
    this.drawingToolbar.hide();
    this.drawingEngine.destroy();

    this.refreshPlannerView();
  }

  private refreshPlannerView(): void {
    if (this.plannerMode === 'daily') {
      this.renderDailyView();
    } else {
      this.renderWeeklyView();
    }
  }

  private renderDailyView(): void {
    const dateStr = toDateStr(this.plannerViewDate);
    const goals = this.plannerService.getGoalsForDate(dateStr);
    const activeGoals = goals.filter((g) => !g.completed);
    const doneGoals = goals.filter((g) => g.completed);
    const total = goals.length;
    const doneCount = doneGoals.length;
    const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;

    this.dom.hedefTahtam.innerHTML = `
      <div class="hedef-tahtam-header">
        <div class="hedef-tabs">
          <button class="hedef-tab-btn active" data-mode="daily">📋 Günlük</button>
          <button class="hedef-tab-btn" data-mode="weekly">📅 Haftalık</button>
        </div>
        <div class="hedef-nav">
          <button class="hedef-nav-btn" data-nav="prev">◂ Önceki</button>
          <button class="hedef-nav-btn today-btn" data-nav="today">Bugün</button>
          <button class="hedef-nav-btn" data-nav="next">Sonraki ▸</button>
        </div>
        <div class="hedef-nav-date">${formatDateLongTR(this.plannerViewDate)}</div>
        ${total > 0 ? `
        <div class="hedef-progress">
          <div class="hedef-progress-bar">
            <div class="hedef-progress-fill" style="width:${pct}%"></div>
          </div>
          <span class="hedef-progress-text">${doneCount}/${total} tamamlandı (%${pct})</span>
        </div>` : ''}
      </div>
      <div class="hedef-daily-layout">
        <div class="hedef-daily-main">
          ${activeGoals.length > 0 ? `
            <div class="hedef-section-label">📋 Yapılacaklar</div>
            <div class="hedef-list">
              ${activeGoals.map((g) => this.renderGoalCard(g)).join('')}
            </div>` : ''}
          <div class="hedef-drop-zone" data-date="${dateStr}">
            + Buraya sürükle veya aşağıdan ekle
          </div>
          ${doneGoals.length > 0 ? `
            <div class="hedef-section-label">✅ Tamamlananlar</div>
            <div class="hedef-list">
              ${doneGoals.map((g) => this.renderGoalCard(g)).join('')}
            </div>` : ''}
          ${total === 0 ? `
            <div class="hedef-empty">
              <div class="hedef-empty-icon">📝</div>
              <div class="hedef-empty-text">Bu gün için henüz hedef eklenmedi.<br/>Sağdaki Konu Havuzu'ndan konu ekleyebilirsin.</div>
            </div>` : ''}
        </div>
        <div class="hedef-daily-pool">
          ${this.renderKonuHavuzu(dateStr)}
        </div>
      </div>
      <button class="hedef-pool-toggle" id="poolToggleBtn">📦 Konu Havuzu'nu Aç</button>
    `;

    this.attachPlannerListeners();
  }

  private renderWeeklyView(): void {
    const weekDates = getWeekDates(this.plannerViewDate);
    const allGoals = this.plannerService.getGoalsForWeek(this.plannerViewDate);

    let weekDone = 0;
    let weekTotal = 0;
    allGoals.forEach((goals) => {
      weekTotal += goals.length;
      weekDone += goals.filter((g) => g.completed).length;
    });
    const pct = weekTotal > 0 ? Math.round((weekDone / weekTotal) * 100) : 0;

    const dayTabsHtml = weekDates.map((d, i) => {
      const ds = toDateStr(d);
      const todayClass = isToday(d) ? ' today' : '';
      return `<button class="weekly-day-tab${todayClass}${i === 0 ? ' active' : ''}" data-day-idx="${i}" data-date="${ds}">${getDayNameShort(d)} ${d.getDate()}</button>`;
    }).join('');

    const columnsHtml = weekDates.map((d, i) => {
      const ds = toDateStr(d);
      const goals = allGoals.get(ds) ?? [];
      const todayClass = isToday(d) ? ' today' : '';
      const mobileActive = i === 0 ? ' mobile-active' : '';
      return `
        <div class="day-column${todayClass}${mobileActive}" data-date="${ds}" data-day-idx="${i}">
          <div class="day-column-header">
            <div class="day-column-name">${getDayNameShort(d)}${isToday(d) ? ' 📌' : ''}</div>
            <div class="day-column-date">${d.getDate()} ${formatDateTR(ds).split(' ')[1] ?? ''}</div>
          </div>
          <div class="day-column-body">
            ${goals.map((g) => this.renderGoalCard(g, true)).join('')}
            ${goals.length === 0 ? '<div class="hedef-empty" style="padding:10px;font-size:0.85rem;">Boş</div>' : ''}
          </div>
          <div class="hedef-drop-zone" data-date="${ds}" style="min-height:30px;padding:6px;font-size:0.8rem;">+ Ekle</div>
        </div>`;
    }).join('');

    this.dom.hedefTahtam.innerHTML = `
      <div class="hedef-tahtam-header">
        <div class="hedef-tabs">
          <button class="hedef-tab-btn" data-mode="daily">📋 Günlük</button>
          <button class="hedef-tab-btn active" data-mode="weekly">📅 Haftalık</button>
        </div>
        <div class="hedef-nav">
          <button class="hedef-nav-btn" data-nav="prev">◂ Önceki Hafta</button>
          <button class="hedef-nav-btn today-btn" data-nav="today">Bu Hafta</button>
          <button class="hedef-nav-btn" data-nav="next">Sonraki Hafta ▸</button>
        </div>
        ${weekTotal > 0 ? `
        <div class="hedef-progress">
          <div class="hedef-progress-bar">
            <div class="hedef-progress-fill" style="width:${pct}%"></div>
          </div>
          <span class="hedef-progress-text">${weekDone}/${weekTotal} tamamlandı (%${pct})</span>
        </div>` : ''}
      </div>
      <div class="weekly-day-tabs">${dayTabsHtml}</div>
      <div class="hedef-weekly">${columnsHtml}</div>
      <button class="hedef-pool-toggle" id="poolToggleBtn">📦 Konu Havuzu'nu Aç</button>
    `;

    this.attachPlannerListeners();
  }

  private renderGoalCard(goal: { topicId: number; completed: boolean }, compact = false): string {
    const topic = getTopicById(goal.topicId);
    if (!topic) return '';

    const completedClass = goal.completed ? ' completed' : '';
    const checkMark = goal.completed ? '✓' : '';

    return `
      <div class="hedef-card${completedClass}" data-topic-id="${goal.topicId}" draggable="true">
        <button class="hedef-card-check" data-action="check" data-topic-id="${goal.topicId}" title="${goal.completed ? 'Tamamlanmadı yap' : 'Tamamlandı yap'}">${checkMark}</button>
        <div class="hedef-card-body">
          ${!compact ? `<div class="hedef-card-cat">${topic.category}</div>` : ''}
          <div class="hedef-card-title">${topic.title}</div>
        </div>
        <div class="hedef-card-actions">
          <button class="hedef-card-action-btn" data-action="goto" data-topic-id="${goal.topicId}" title="Konuya git">📖</button>
          <button class="hedef-card-action-btn delete" data-action="delete" data-topic-id="${goal.topicId}" title="Hedeften kaldır">🗑</button>
        </div>
      </div>`;
  }

  private renderKonuHavuzu(currentDateStr: string): string {
    const builtTopics = ALL_TOPICS.filter((t) => t.built);

    const filterBtns = [
      { id: 'all', label: 'Tümü' },
      ...CATEGORIES.filter((c) => getTopicsByCategory(c.id).some((t) => t.built))
        .map((c) => ({ id: c.id, label: c.name })),
    ];

    const items = builtTopics.map((t) => {
      const planned = this.plannerService.isTopicPlanned(t.id);
      const goal = this.plannerService.getGoalForTopic(t.id);
      return `
        <div class="konu-havuzu-item${planned ? ' planned' : ''}" data-topic-id="${t.id}" data-category="${t.categoryId}" ${!planned ? 'draggable="true"' : ''}>
          <div>
            <div class="kh-cat">${t.category}</div>
            <div class="kh-title">${t.title}</div>
          </div>
          ${planned && goal ? `<span class="kh-planned-badge">📅 ${formatDateTR(goal.date)}</span>` :
            `<button class="kh-add-btn" data-action="add" data-topic-id="${t.id}" data-date="${currentDateStr}">＋ Ekle</button>`}
        </div>`;
    }).join('');

    return `
      <div class="konu-havuzu">
        <div class="konu-havuzu-header">📦 Konu Havuzu</div>
        <div class="konu-havuzu-filters">
          ${filterBtns.map((f, i) => `<button class="konu-filter-btn${i === 0 ? ' active' : ''}" data-filter="${f.id}">${f.label}</button>`).join('')}
        </div>
        <input type="text" class="konu-havuzu-search" id="konuHavuzuSearch" placeholder="🔍 Konu ara..." />
        <div class="konu-havuzu-list">${items}</div>
      </div>`;
  }

  private attachPlannerListeners(): void {
    const container = this.dom.hedefTahtam;

    // Tab buttons
    container.querySelectorAll('.hedef-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.plannerMode = (btn as HTMLElement).dataset.mode as 'daily' | 'weekly';
        this.refreshPlannerView();
      });
    });

    // Navigation buttons
    container.querySelectorAll('.hedef-nav-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const nav = (btn as HTMLElement).dataset.nav;
        if (nav === 'today') {
          this.plannerViewDate = new Date();
        } else if (nav === 'prev') {
          const d = new Date(this.plannerViewDate);
          d.setDate(d.getDate() - (this.plannerMode === 'weekly' ? 7 : 1));
          this.plannerViewDate = d;
        } else if (nav === 'next') {
          const d = new Date(this.plannerViewDate);
          d.setDate(d.getDate() + (this.plannerMode === 'weekly' ? 7 : 1));
          this.plannerViewDate = d;
        }
        this.refreshPlannerView();
      });
    });

    // Weekly day tabs (mobile)
    container.querySelectorAll('.weekly-day-tab').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = (btn as HTMLElement).dataset.dayIdx;
        container.querySelectorAll('.weekly-day-tab').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        container.querySelectorAll('.day-column').forEach((col) => {
          (col as HTMLElement).classList.toggle('mobile-active', (col as HTMLElement).dataset.dayIdx === idx);
        });
      });
    });

    // Card actions (check, goto, delete)
    container.querySelectorAll('[data-action]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const el = btn as HTMLElement;
        const action = el.dataset.action;
        const topicId = parseInt(el.dataset.topicId ?? '0', 10);

        if (action === 'check') {
          this.plannerService.toggleGoalComplete(topicId);
          this.refreshPlannerView();
        } else if (action === 'goto') {
          this.selectTopic(topicId);
        } else if (action === 'delete') {
          this.plannerService.removeGoal(topicId);
          this.refreshPlannerView();
          this.buildTOC(); // Refresh plan badges
        } else if (action === 'add') {
          const date = el.dataset.date;
          if (date) {
            this.plannerService.addGoal(topicId, date);
            this.refreshPlannerView();
            this.buildTOC(); // Refresh plan badges
          }
        }
      });
    });

    // Category filters in konu havuzu
    container.querySelectorAll('.konu-filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.konu-filter-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = (btn as HTMLElement).dataset.filter;
        container.querySelectorAll('.konu-havuzu-item').forEach((item) => {
          const itemEl = item as HTMLElement;
          const show = filter === 'all' || itemEl.dataset.category === filter;
          itemEl.style.display = show ? '' : 'none';
        });
      });
    });

    // Konu havuzu search
    const khSearch = container.querySelector('#konuHavuzuSearch') as HTMLInputElement | null;
    if (khSearch) {
      khSearch.addEventListener('input', () => {
        const q = khSearch.value.toLocaleLowerCase('tr');
        container.querySelectorAll('.konu-havuzu-item').forEach((item) => {
          const itemEl = item as HTMLElement;
          const title = itemEl.querySelector('.kh-title')?.textContent?.toLocaleLowerCase('tr') ?? '';
          itemEl.style.display = title.includes(q) ? '' : 'none';
        });
      });
    }

    // Pool toggle (mobile)
    const poolToggle = container.querySelector('#poolToggleBtn');
    if (poolToggle) {
      poolToggle.addEventListener('click', () => {
        const overlay = document.getElementById('konuHavuzuOverlay');
        const modal = document.getElementById('konuHavuzuModal');
        if (overlay && modal) {
          const dateStr = toDateStr(this.plannerViewDate);
          modal.innerHTML = this.renderKonuHavuzu(dateStr);
          overlay.classList.add('show');
          // Re-attach listeners for modal
          this.attachPlannerListeners();
          overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('show');
          });
        }
      });
    }

    // Drag and drop
    this.attachDragDropListeners(container);
  }

  private attachDragDropListeners(container: HTMLElement): void {
    // Draggable cards and pool items
    container.querySelectorAll('[draggable="true"]').forEach((el) => {
      el.addEventListener('dragstart', (e) => {
        const topicId = parseInt((el as HTMLElement).dataset.topicId ?? '0', 10);
        this.draggedTopicId = topicId;
        (el as HTMLElement).classList.add('dragging');
        (e as DragEvent).dataTransfer?.setData('text/plain', String(topicId));
      });
      el.addEventListener('dragend', () => {
        (el as HTMLElement).classList.remove('dragging');
        this.draggedTopicId = null;
      });
    });

    // Drop zones
    container.querySelectorAll('.hedef-drop-zone, .day-column').forEach((zone) => {
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        (zone as HTMLElement).classList.add('drag-over');
      });
      zone.addEventListener('dragleave', () => {
        (zone as HTMLElement).classList.remove('drag-over');
      });
      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        (zone as HTMLElement).classList.remove('drag-over');
        const date = (zone as HTMLElement).dataset.date;
        if (!date || !this.draggedTopicId) return;

        if (this.plannerService.isTopicPlanned(this.draggedTopicId)) {
          this.plannerService.moveGoal(this.draggedTopicId, date);
        } else {
          this.plannerService.addGoal(this.draggedTopicId, date);
        }
        this.draggedTopicId = null;
        this.refreshPlannerView();
        this.buildTOC();
      });
    });
  }

  // ─────────────────── Event Bindings ───────────────────

  private bindEvents(): void {
    // Sidebar toggle
    this.dom.openSidebarBtn.addEventListener('click', () => this.setSidebarCollapsed(false));
    this.dom.closeSidebarBtn.addEventListener('click', () => this.setSidebarCollapsed(true));
    this.dom.sidebarBackdrop.addEventListener('click', () => this.setSidebarCollapsed(true));

    // Theme panel toggle
    this.dom.themeToggleBtn.addEventListener('click', () => {
      const isOpen = this.dom.themePanel.classList.toggle('show');
      this.dom.themeToggleBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close theme panel on outside click
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (!this.dom.themePanel.contains(target) && target !== this.dom.themeToggleBtn) {
        this.dom.themePanel.classList.remove('show');
        this.dom.themeToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close theme panel on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.dom.themePanel.classList.remove('show');
        this.dom.themeToggleBtn.setAttribute('aria-expanded', 'false');
        if (this.dom.searchResultsPanel.classList.contains('show')) {
          this.dom.searchResultsPanel.classList.remove('show');
        }
      }
    });

    // Search
    this.dom.searchInput.addEventListener('input', () => {
      if (this.searchDebounceTimer) clearTimeout(this.searchDebounceTimer);
      this.searchDebounceTimer = setTimeout(() => this.filterTOC(), 180);
    });
    this.dom.searchClearBtn.addEventListener('click', () => this.clearSearch());

    // Search navigation
    document.getElementById('searchPrevBtn')?.addEventListener('click', () => this.navigateHighlight(-1));
    document.getElementById('searchNextBtn')?.addEventListener('click', () => this.navigateHighlight(1));
    document.getElementById('searchNavClose')?.addEventListener('click', () => this.clearHighlights());

    // Keyboard search nav (F3 / Ctrl+G)
    document.addEventListener('keydown', (e) => {
      if (this.currentHighlights.length === 0) return;
      if (e.key === 'F3' || (e.ctrlKey && e.key === 'g')) {
        e.preventDefault();
        this.navigateHighlight(e.shiftKey ? -1 : 1);
      }
    });

    // Status picker buttons
    this.dom.statusBtnCompleted.addEventListener('click', () => {
      if (this.currentTopicId === null) return;
      const current = this.topicStatus.getStatus(this.currentTopicId);
      this.topicStatus.setStatus(this.currentTopicId, current === 'completed' ? 'none' : 'completed');
      this.updateSidebarItemStatus(this.currentTopicId);
      this.updateStatusSummary();
      this.renderStatusPicker(this.currentTopicId);
      this.plannerService.setGoalCompleted(this.currentTopicId, current !== 'completed');
    });

    this.dom.statusBtnReview.addEventListener('click', () => {
      if (this.currentTopicId === null) return;
      const current = this.topicStatus.getStatus(this.currentTopicId);
      this.topicStatus.setStatus(this.currentTopicId, current === 'review' ? 'none' : 'review');
      this.updateSidebarItemStatus(this.currentTopicId);
      this.updateStatusSummary();
      this.renderStatusPicker(this.currentTopicId);
    });

    // Hedef Tahtam navigation
    this.dom.hedefNavItem.addEventListener('click', () => this.showHedefTahtam());
    this.dom.hedefNavItem.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.showHedefTahtam();
      }
    });

    // Drawing toggle button (in content header)
    const drawToggleBtn = document.getElementById('drawToggleBtn');
    if (drawToggleBtn) {
      drawToggleBtn.addEventListener('click', () => this.drawingToolbar.toggle());
    }

    // Canvas resize on window resize
    window.addEventListener('resize', () => {
      if (this.currentTopicId !== null) {
        const topic = getTopicById(this.currentTopicId);
        if (topic?.built) {
          if (this.resizeDebounceTimer) clearTimeout(this.resizeDebounceTimer);
          this.resizeDebounceTimer = setTimeout(() => {
            if (this.currentTopicId !== null) {
              this.setupCanvasForTopic(this.currentTopicId);
            }
          }, 200);
        }
      }
    });
  }
}
