/**
 * Drawing System Domain Types
 *
 * These types define the drawing model and tool configuration.
 * The current system is raster-based (PNG canvas) — matching the original app.
 * Future phases will add stroke-based vector storage.
 */

/** Drawing tool modes */
export type DrawMode = 'pen' | 'highlight' | 'eraser';

/** Line width presets */
export type WidthLevel = 'thin' | 'medium' | 'thick' | 'xthick';

/** Pen width values for each preset level */
export const PEN_WIDTHS: Record<WidthLevel, number> = {
  thin: 1.6,
  medium: 2.6,
  thick: 3.5,
  xthick: 5.5,
};

/** Highlighter width values for each preset level */
export const HL_WIDTHS: Record<WidthLevel, number> = {
  thin: 8,
  medium: 13,
  thick: 18,
  xthick: 26,
};

/** Eraser fixed width */
export const ERASER_WIDTH = 22;

/** Available pen colors */
export const PEN_COLORS = [
  '#1c2f5e', '#c0392b', '#2a6aa0', '#5b2d8e', '#d4730e',
  '#1a7a3a', '#000000', '#5a5a5a',
] as const;

/** Available highlighter colors */
export const HIGHLIGHT_COLORS = [
  '#ffe500', '#7aff7a', '#7ac8ff', '#ff7ac8', '#ffb87a',
] as const;

/** Drawing point with optional pressure */
export interface DrawPoint {
  readonly x: number;
  readonly y: number;
  readonly pressure: number;
}

/** Computed stroke settings for a single draw segment */
export interface StrokeSettings {
  readonly composite: GlobalCompositeOperation;
  readonly color: string;
  readonly width: number;
  readonly alpha: number;
}

/** Drawing tool state */
export interface DrawingToolState {
  mode: DrawMode;
  penColor: string;
  highlightColor: string;
  widthLevel: WidthLevel;
}

/** Toolbar position and collapse state for persistence */
export interface ToolbarState {
  left: number;
  top: number;
  collapsed: boolean;
}

/** Computes stroke rendering settings based on current tool state and pressure */
export function computeStrokeSettings(
  state: DrawingToolState,
  pressure: number,
): StrokeSettings {
  const p = (pressure > 0) ? Math.min(1.6, Math.max(0.55, pressure * 1.5)) : 1;

  if (state.mode === 'eraser') {
    return { composite: 'destination-out', color: '#000', width: ERASER_WIDTH, alpha: 1 };
  }
  if (state.mode === 'highlight') {
    return {
      composite: 'source-over',
      color: state.highlightColor,
      width: HL_WIDTHS[state.widthLevel],
      alpha: 0.55,
    };
  }
  return {
    composite: 'source-over',
    color: state.penColor,
    width: PEN_WIDTHS[state.widthLevel] * p,
    alpha: 1,
  };
}
