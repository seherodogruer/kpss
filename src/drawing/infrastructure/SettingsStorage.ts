/**
 * Settings Storage — Drawing preferences persistence.
 *
 * Stores small UI preferences in localStorage:
 * - FAB position and lock state
 * - Last used tool per category
 * - Last used colors per tool
 * - Stabilization, pressure, and other settings
 *
 * Uses namespaced keys to avoid conflicts with other app data.
 */

import { LocalStorageAdapter } from '@core/storage/LocalStorageAdapter';
import type { DrawingToolState } from '@drawing/domain/ToolTypes';
import { DEFAULT_TOOL_STATE } from '@drawing/domain/ToolTypes';

const PREFIX = 'kpss-ink-';

const KEYS = {
  fabPosition: PREFIX + 'fab-pos',
  fabLocked: PREFIX + 'fab-locked',
  toolState: PREFIX + 'tool-state',
  recentPenColors: PREFIX + 'recent-pen-colors',
  recentHlColors: PREFIX + 'recent-hl-colors',
  recentMagicColors: PREFIX + 'recent-magic-colors',
} as const;

/** FAB floating button position */
export interface FabPosition {
  right: number;
  bottom: number;
}

export const DEFAULT_FAB_POSITION: FabPosition = { right: 20, bottom: 80 };

export class SettingsStorage {
  private readonly ls = new LocalStorageAdapter();

  // ─── FAB ───

  getFabPosition(): FabPosition {
    return this.ls.getJSON<FabPosition | null>(KEYS.fabPosition, null) ?? DEFAULT_FAB_POSITION;
  }

  setFabPosition(pos: FabPosition): void {
    this.ls.setJSON(KEYS.fabPosition, pos);
  }

  getFabLocked(): boolean {
    return this.ls.getJSON<boolean>(KEYS.fabLocked, false);
  }

  setFabLocked(locked: boolean): void {
    this.ls.setJSON(KEYS.fabLocked, locked);
  }

  // ─── Tool State ───

  /** Load persisted tool state (partial — merged with defaults) */
  getToolState(): DrawingToolState {
    const saved = this.ls.getJSON<Partial<DrawingToolState> | null>(KEYS.toolState, null);
    if (!saved) return { ...DEFAULT_TOOL_STATE };
    return { ...DEFAULT_TOOL_STATE, ...saved };
  }

  /** Save tool state (saves relevant subset) */
  setToolState(state: DrawingToolState): void {
    // Only persist user-configurable settings
    const toSave: Partial<DrawingToolState> = {
      activeTool: state.activeTool,
      color: state.color,
      highlightColor: state.highlightColor,
      magicColor: state.magicColor,
      width: state.width,
      opacity: state.opacity,
      stabilization: state.stabilization,
      pressureEnabled: state.pressureEnabled,
      fingerDrawing: state.fingerDrawing,
      shapeRecognition: state.shapeRecognition,
      scribbleErase: state.scribbleErase,
      lastToolMemory: state.lastToolMemory,
      magicPen: state.magicPen,
      eraser: state.eraser,
    };
    this.ls.setJSON(KEYS.toolState, toSave);
  }

  // ─── Recent Colors ───

  getRecentPenColors(): string[] {
    return this.ls.getJSON<string[]>(KEYS.recentPenColors, []);
  }

  setRecentPenColors(colors: string[]): void {
    this.ls.setJSON(KEYS.recentPenColors, colors);
  }

  getRecentHighlighterColors(): string[] {
    return this.ls.getJSON<string[]>(KEYS.recentHlColors, []);
  }

  setRecentHighlighterColors(colors: string[]): void {
    this.ls.setJSON(KEYS.recentHlColors, colors);
  }

  getRecentMagicColors(): string[] {
    return this.ls.getJSON<string[]>(KEYS.recentMagicColors, []);
  }

  setRecentMagicColors(colors: string[]): void {
    this.ls.setJSON(KEYS.recentMagicColors, colors);
  }
}
