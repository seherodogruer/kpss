import { describe, it, expect } from 'vitest';
import {
  PEN_WIDTHS,
  HL_WIDTHS,
  ERASER_WIDTH,
  PEN_COLORS,
  PEN_COLOR_LABELS,
  HIGHLIGHT_COLORS,
  HIGHLIGHT_COLOR_LABELS,
  computeStrokeSettings,
} from '@drawing/models/DrawingTypes';
import type { DrawingToolState } from '@drawing/models/DrawingTypes';

function makeState(overrides: Partial<DrawingToolState> = {}): DrawingToolState {
  return {
    mode: 'pen',
    penColor: '#1c2f5e',
    highlightColor: '#ffe500',
    widthLevel: 'thick',
    ...overrides,
  };
}

describe('DrawingTypes', () => {
  it('defines 4 pen width levels', () => {
    expect(Object.keys(PEN_WIDTHS)).toHaveLength(4);
    expect(PEN_WIDTHS.thin).toBeLessThan(PEN_WIDTHS.thick);
  });

  it('defines 4 highlighter width levels', () => {
    expect(Object.keys(HL_WIDTHS)).toHaveLength(4);
    expect(HL_WIDTHS.thin).toBeLessThan(HL_WIDTHS.xthick);
  });

  it('eraser has fixed width', () => {
    expect(ERASER_WIDTH).toBe(22);
  });

  it('has 9 pen colors with matching labels', () => {
    expect(PEN_COLORS).toHaveLength(9);
    expect(PEN_COLOR_LABELS).toHaveLength(9);
  });

  it('has 5 highlight colors with matching labels', () => {
    expect(HIGHLIGHT_COLORS).toHaveLength(5);
    expect(HIGHLIGHT_COLOR_LABELS).toHaveLength(5);
  });

  describe('computeStrokeSettings', () => {
    it('pen mode: returns source-over, pen color, alpha 1', () => {
      const s = computeStrokeSettings(makeState(), 0);
      expect(s.composite).toBe('source-over');
      expect(s.color).toBe('#1c2f5e');
      expect(s.alpha).toBe(1);
    });

    it('pen with pressure scales width', () => {
      const noP = computeStrokeSettings(makeState(), 0);
      const withP = computeStrokeSettings(makeState(), 0.8);
      expect(withP.width).not.toBe(noP.width);
    });

    it('highlight mode: returns alpha 0.55', () => {
      const s = computeStrokeSettings(makeState({ mode: 'highlight' }), 0);
      expect(s.composite).toBe('source-over');
      expect(s.alpha).toBe(0.55);
      expect(s.color).toBe('#ffe500');
    });

    it('eraser mode: returns destination-out', () => {
      const s = computeStrokeSettings(makeState({ mode: 'eraser' }), 0);
      expect(s.composite).toBe('destination-out');
      expect(s.width).toBe(22);
    });

    it('uses correct width level', () => {
      const thin = computeStrokeSettings(makeState({ widthLevel: 'thin' }), 0);
      const xthick = computeStrokeSettings(makeState({ widthLevel: 'xthick' }), 0);
      expect(thin.width).toBeLessThan(xthick.width);
    });
  });
});
