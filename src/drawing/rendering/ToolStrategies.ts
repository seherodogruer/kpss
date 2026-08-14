/**
 * Tool Strategies — Per-tool rendering configuration.
 *
 * Each pen type has unique visual characteristics:
 * - Ball Pen: Clean, consistent strokes with subtle pressure
 * - Fountain: Elegant pressure response, ink-like taper
 * - Brush: Dramatic pressure, calligraphy feel
 * - Pencil: Organic, textured with opacity jitter
 * - Highlighter: Wide, semi-transparent, flat-cap
 * - Magic Pen: Neon glow, temporary fade-out
 *
 * This module defines the rendering parameters for each tool.
 * Actual rendering is in StrokeRenderer.ts — this module provides
 * the configuration that drives tool differentiation.
 */

import type { PenToolType } from '@drawing/domain/ToolTypes';

/** Rendering configuration for a single tool */
export interface ToolRenderConfig {
  /** Display name */
  readonly name: string;
  /** Line cap style */
  readonly lineCap: CanvasLineCap;
  /** Line join style */
  readonly lineJoin: CanvasLineJoin;
  /** Canvas composite operation */
  readonly compositeOp: GlobalCompositeOperation;
  /** Width multiplier applied to base width (for highlighter, etc.) */
  readonly widthMultiplier: number;
  /** Base opacity multiplier */
  readonly opacityMultiplier: number;
  /** Whether per-segment opacity varies with pressure (pencil) */
  readonly opacityVariesWithPressure: boolean;
  /** Whether per-segment width varies with pressure */
  readonly widthVariesWithPressure: boolean;
  /** Whether stroke renders with glow/shadow effect */
  readonly glowEffect: boolean;
  /** Shadow blur radius for glow (only when glowEffect=true) */
  readonly glowBlur: number;
  /** Whether this is a temporary stroke (magic pen) */
  readonly isTemporary: boolean;
  /** Fade-out duration for temporary strokes (ms) */
  readonly fadeDuration: number;
  /** Whether to use smooth bezier rendering */
  readonly smoothBezier: boolean;
  /** Taper factor at stroke start (0 = no taper, 1 = full taper) */
  readonly startTaper: number;
  /** Taper factor at stroke end */
  readonly endTaper: number;
}

/** Rendering configurations for all tool types */
export const TOOL_CONFIGS: Record<PenToolType, ToolRenderConfig> = {
  'ball-pen': {
    name: 'Tükenmez Kalem',
    lineCap: 'round',
    lineJoin: 'round',
    compositeOp: 'source-over',
    widthMultiplier: 1,
    opacityMultiplier: 1,
    opacityVariesWithPressure: false,
    widthVariesWithPressure: true,
    glowEffect: false,
    glowBlur: 0,
    isTemporary: false,
    fadeDuration: 0,
    smoothBezier: true,
    startTaper: 0,
    endTaper: 0,
  },

  'fountain': {
    name: 'Dolma Kalem',
    lineCap: 'round',
    lineJoin: 'round',
    compositeOp: 'source-over',
    widthMultiplier: 1,
    opacityMultiplier: 1,
    opacityVariesWithPressure: false,
    widthVariesWithPressure: true,
    glowEffect: false,
    glowBlur: 0,
    isTemporary: false,
    fadeDuration: 0,
    smoothBezier: true,
    startTaper: 0.3,
    endTaper: 0.4,
  },

  'brush': {
    name: 'Fırça Kalem',
    lineCap: 'round',
    lineJoin: 'round',
    compositeOp: 'source-over',
    widthMultiplier: 1.2,
    opacityMultiplier: 1,
    opacityVariesWithPressure: false,
    widthVariesWithPressure: true,
    glowEffect: false,
    glowBlur: 0,
    isTemporary: false,
    fadeDuration: 0,
    smoothBezier: true,
    startTaper: 0.15,
    endTaper: 0.25,
  },

  'pencil': {
    name: 'Kurşun Kalem',
    lineCap: 'round',
    lineJoin: 'round',
    compositeOp: 'source-over',
    widthMultiplier: 0.9,
    opacityMultiplier: 0.85,
    opacityVariesWithPressure: true,
    widthVariesWithPressure: true,
    glowEffect: false,
    glowBlur: 0,
    isTemporary: false,
    fadeDuration: 0,
    smoothBezier: false,  // pencil feels more natural slightly raw
    startTaper: 0,
    endTaper: 0,
  },

  'highlighter': {
    name: 'Fosforlu Kalem',
    lineCap: 'butt',
    lineJoin: 'round',
    compositeOp: 'source-over',
    widthMultiplier: 6,
    opacityMultiplier: 0.45,
    opacityVariesWithPressure: false,
    widthVariesWithPressure: false,
    glowEffect: false,
    glowBlur: 0,
    isTemporary: false,
    fadeDuration: 0,
    smoothBezier: true,
    startTaper: 0,
    endTaper: 0,
  },

  'magic-pen': {
    name: 'Sihirli Kalem',
    lineCap: 'round',
    lineJoin: 'round',
    compositeOp: 'source-over',
    widthMultiplier: 1.1,
    opacityMultiplier: 1,
    opacityVariesWithPressure: false,
    widthVariesWithPressure: false,
    glowEffect: true,
    glowBlur: 12,
    isTemporary: true,
    fadeDuration: 3000,
    smoothBezier: true,
    startTaper: 0,
    endTaper: 0,
  },
};

/** Get the config for a tool */
export function getToolConfig(tool: PenToolType): ToolRenderConfig {
  return TOOL_CONFIGS[tool];
}

/**
 * Apply taper to a stroke width at a given position.
 * Position is 0-1 representing fraction through the stroke.
 * Returns a multiplier to apply to the base width.
 */
export function computeTaper(
  position: number,
  totalPoints: number,
  config: ToolRenderConfig,
): number {
  if (totalPoints < 3) return 1;
  if (config.startTaper === 0 && config.endTaper === 0) return 1;

  // Start taper region (first N% of stroke)
  const taperStartRegion = 0.1; // First 10% of points
  const taperEndRegion = 0.1;   // Last 10% of points

  let multiplier = 1;

  if (position < taperStartRegion && config.startTaper > 0) {
    const t = position / taperStartRegion;
    multiplier *= 1 - config.startTaper * (1 - t);
  }

  if (position > (1 - taperEndRegion) && config.endTaper > 0) {
    const t = (position - (1 - taperEndRegion)) / taperEndRegion;
    multiplier *= 1 - config.endTaper * t;
  }

  return Math.max(0.1, multiplier);
}

/**
 * Generate pencil opacity jitter for a more organic feel.
 * Returns an opacity multiplier (0.7-1.0 range).
 */
export function pencilOpacityJitter(index: number): number {
  // Simple deterministic "randomness" based on index
  const hash = Math.sin(index * 127.1 + 311.7) * 43758.5453;
  const jitter = hash - Math.floor(hash);
  return 0.7 + jitter * 0.3;
}
