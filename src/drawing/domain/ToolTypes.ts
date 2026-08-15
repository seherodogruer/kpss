/**
 * Tool Types — All drawing tool definitions for the Digital Ink Engine.
 *
 * These types define the complete tool palette available in KPSS Defterim.
 * Each tool has distinct rendering characteristics and behavior.
 */

// ─── Pen Tool Types ───

/** The 6 distinct pen/brush tool types */
export type PenToolType =
  | 'ball-pen'      // Clean, uniform strokes — default for notes
  | 'fountain'      // Pressure-responsive width variation, ink feel
  | 'brush'         // Dramatic pressure response, calligraphy-like
  | 'pencil'        // Gray tones, opacity jitter, organic feel
  | 'highlighter'   // High width, low opacity, semi-transparent
  | 'magic-pen';    // Neon glow, temporary — for presentations

/** All tool categories (pen tools + eraser + selection + shapes) */
export type ActiveTool =
  | { kind: 'pen'; type: PenToolType }
  | { kind: 'eraser'; mode: EraserMode }
  | { kind: 'select'; mode: SelectionMode }
  | { kind: 'shape'; shape: ShapeType }
  | { kind: 'ruler' };

// ─── Eraser ───

export type EraserMode = 'stroke' | 'point';

export interface EraserSettings {
  mode: EraserMode;
  /** Point eraser radius in CSS pixels */
  size: EraserSize;
}

export type EraserSize = 'small' | 'medium' | 'large' | 'xlarge';

export const ERASER_SIZES: Record<EraserSize, number> = {
  small: 8,
  medium: 20,
  large: 40,
  xlarge: 70,
};

// ─── Selection ───

export type SelectionMode = 'lasso' | 'rectangle';

// ─── Shapes ───

export type ShapeType =
  | 'line'
  | 'arrow'
  | 'circle'
  | 'ellipse'
  | 'rectangle'
  | 'triangle'
  | 'pentagon'
  | 'hexagon'
  | 'rhombus';

// ─── Magic/Laser Pen ───

export type LaserMode = 'dot' | 'trail';

export type MagicEffect = 'neon' | 'glow' | 'rainbow';

export interface MagicPenSettings {
  mode: LaserMode;
  effect: MagicEffect;
  /** Fade-out duration in seconds */
  duration: MagicDuration;
}

export type MagicDuration = 1 | 2 | 3 | 5;

export const DEFAULT_MAGIC_SETTINGS: MagicPenSettings = {
  mode: 'trail',
  effect: 'neon',
  duration: 3,
};

// ─── Stabilization ───

export type StabLevel = 'off' | 'low' | 'medium' | 'high';

/** Moving average window size per stabilization level */
export const STAB_WINDOW: Record<StabLevel, number> = {
  off: 0,
  low: 2,
  medium: 4,
  high: 6,
};

// ─── Width / Thickness ───

export type WidthPreset = 'xthin' | 'thin' | 'medium' | 'thick' | 'xthick';

/** Base width values per preset (actual width is modified by tool type + pressure) */
export const WIDTH_PRESETS: Record<WidthPreset, number> = {
  xthin: 0.8,
  thin: 1.6,
  medium: 2.6,
  thick: 3.8,
  xthick: 5.5,
};

/** Highlighter width multiplier (highlighter strokes are much wider) */
export const HIGHLIGHTER_WIDTH_MULTIPLIER = 6;

// ─── Pressure Curves ───

/**
 * Pressure curve parameters per tool type.
 * min/max define the output width multiplier range when pressure is applied.
 * exponent shapes the curve (1.0 = linear, <1 = more responsive, >1 = less responsive).
 */
export interface PressureCurve {
  /** Minimum width multiplier at lightest pressure */
  readonly min: number;
  /** Maximum width multiplier at full pressure */
  readonly max: number;
  /** Curve exponent */
  readonly exponent: number;
}

export const PRESSURE_CURVES: Record<PenToolType, PressureCurve> = {
  'ball-pen':    { min: 0.92, max: 1.08, exponent: 1.0 },   // nearly flat — consistent
  'fountain':    { min: 0.3,  max: 2.2,  exponent: 0.7 },   // responsive, elegant flow
  'brush':       { min: 0.15, max: 3.5,  exponent: 0.5 },   // dramatic calligraphy
  'pencil':      { min: 0.5,  max: 1.5,  exponent: 0.9 },   // moderate with texture
  'highlighter': { min: 0.8,  max: 1.2,  exponent: 1.0 },   // minimal
  'magic-pen':   { min: 0.9,  max: 1.1,  exponent: 1.0 },   // nearly fixed
};

// ─── Default Tool State ───

export interface DrawingToolState {
  activeTool: ActiveTool;
  color: string;
  highlightColor: string;
  magicColor: string;
  width: WidthPreset;
  opacity: number;              // 0-1
  stabilization: StabLevel;
  pressureEnabled: boolean;
  fingerDrawing: boolean;
  shapeRecognition: boolean;
  scribbleErase: boolean;
  lastToolMemory: boolean;
  magicPen: MagicPenSettings;
  eraser: EraserSettings;
}

export const DEFAULT_TOOL_STATE: DrawingToolState = {
  activeTool: { kind: 'pen', type: 'ball-pen' },
  color: '#1c2f5e',
  highlightColor: '#ffe500',
  magicColor: '#ff00ff',
  width: 'medium',
  opacity: 1.0,
  stabilization: 'medium',
  pressureEnabled: true,
  fingerDrawing: false,
  shapeRecognition: true,
  scribbleErase: false,
  lastToolMemory: true,
  magicPen: { ...DEFAULT_MAGIC_SETTINGS },
  eraser: { mode: 'point', size: 'medium' },
};
