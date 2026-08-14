/**
 * Pressure Processor — Normalizes pressure data for each tool type.
 *
 * Each pen tool has a different pressure response curve:
 * - Ball pen: subtle variation
 * - Fountain: responsive
 * - Brush: dramatic
 * - Pencil: moderate
 * - Highlighter: minimal
 * - Magic pen: nearly fixed
 *
 * When no pressure data is available (e.g., mouse), returns a
 * fixed default value so drawing always works.
 */

import type { PenToolType, PressureCurve } from '@drawing/domain/ToolTypes';
import { PRESSURE_CURVES } from '@drawing/domain/ToolTypes';

export class PressureProcessor {
  private enabled = true;

  /** Enable/disable pressure sensitivity */
  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }

  /** Whether pressure processing is enabled */
  isEnabled(): boolean {
    return this.enabled;
  }

  /**
   * Process raw pressure into a width multiplier for the given tool.
   *
   * @param rawPressure - Raw pressure from PointerEvent (0-1, 0 = no data)
   * @param tool - Current pen tool type
   * @returns Width multiplier to apply to the base width
   */
  getWidthMultiplier(rawPressure: number, tool: PenToolType): number {
    const curve = PRESSURE_CURVES[tool];

    // No pressure data or pressure disabled → use midpoint
    if (!this.enabled || rawPressure <= 0) {
      return (curve.min + curve.max) / 2;
    }

    return this.applyCurve(rawPressure, curve);
  }

  /**
   * Get opacity variation based on pressure (for pencil tool).
   *
   * @param rawPressure - Raw pressure 0-1
   * @param baseOpacity - Base opacity of the tool
   * @returns Adjusted opacity
   */
  getOpacityVariation(rawPressure: number, baseOpacity: number): number {
    if (!this.enabled || rawPressure <= 0) return baseOpacity;

    // Pencil-style: lighter pressure = more transparent
    const factor = 0.6 + rawPressure * 0.4; // 0.6 → 1.0
    return Math.min(1, baseOpacity * factor);
  }

  /**
   * Apply the pressure curve to raw input.
   * Maps rawPressure (0-1) to width multiplier (min-max) using the exponent.
   */
  private applyCurve(rawPressure: number, curve: PressureCurve): number {
    // Clamp to 0-1
    const p = Math.max(0, Math.min(1, rawPressure));

    // Apply exponent for curve shaping
    const shaped = Math.pow(p, curve.exponent);

    // Map to min-max range
    return curve.min + shaped * (curve.max - curve.min);
  }
}

/**
 * Check if the device/browser provides pressure data.
 * Call this with a PointerEvent to detect capability.
 */
export function hasPressureSupport(e: PointerEvent): boolean {
  // Most browsers report 0.5 for mouse events, but real pressure
  // from stylus will vary. Pen type is the most reliable indicator.
  return e.pointerType === 'pen' && e.pressure > 0 && e.pressure < 1;
}
