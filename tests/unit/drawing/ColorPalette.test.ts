import { describe, it, expect } from 'vitest';
import {
  PEN_PRESET_COLORS,
  HIGHLIGHTER_COLORS,
  MAGIC_PEN_COLORS,
  RecentColors,
  isValidHexColor,
  normalizeHex,
  getColorBrightness,
  needsLightText,
  MAX_RECENT_COLORS,
} from '@drawing/domain/ColorPalette';

describe('ColorPalette', () => {
  it('has 16 preset pen colors', () => {
    expect(PEN_PRESET_COLORS).toHaveLength(16);
  });

  it('has 5 highlighter colors', () => {
    expect(HIGHLIGHTER_COLORS).toHaveLength(5);
  });

  it('has 6 magic pen colors', () => {
    expect(MAGIC_PEN_COLORS).toHaveLength(6);
  });

  it('all preset colors have hex and label', () => {
    for (const c of PEN_PRESET_COLORS) {
      expect(c.hex).toMatch(/^#[0-9a-fA-F]{6}$/);
      expect(c.label.length).toBeGreaterThan(0);
    }
  });
});

describe('RecentColors', () => {
  it('starts empty', () => {
    const rc = new RecentColors();
    expect(rc.count).toBe(0);
    expect(rc.getAll()).toEqual([]);
  });

  it('adds colors to front', () => {
    const rc = new RecentColors();
    rc.add('#ff0000');
    rc.add('#00ff00');
    expect(rc.getAll()).toEqual(['#00ff00', '#ff0000']);
  });

  it('moves existing color to front', () => {
    const rc = new RecentColors();
    rc.add('#ff0000');
    rc.add('#00ff00');
    rc.add('#ff0000');
    expect(rc.getAll()).toEqual(['#ff0000', '#00ff00']);
    expect(rc.count).toBe(2);
  });

  it('enforces max size', () => {
    const rc = new RecentColors(3);
    rc.add('#111111');
    rc.add('#222222');
    rc.add('#333333');
    rc.add('#444444');
    expect(rc.count).toBe(3);
    expect(rc.getAll()[0]).toBe('#444444');
  });

  it('normalizes to lowercase', () => {
    const rc = new RecentColors();
    rc.add('#FF0000');
    expect(rc.getAll()).toEqual(['#ff0000']);
  });

  it('initializes from array', () => {
    const rc = new RecentColors(5, ['#aaa', '#bbb']);
    expect(rc.count).toBe(2);
  });

  it('serializes with toJSON', () => {
    const rc = new RecentColors();
    rc.add('#ff0000');
    rc.add('#00ff00');
    const json = rc.toJSON();
    expect(json).toEqual(['#00ff00', '#ff0000']);
  });
});

describe('Color utilities', () => {
  it('isValidHexColor', () => {
    expect(isValidHexColor('#fff')).toBe(true);
    expect(isValidHexColor('#ff0000')).toBe(true);
    expect(isValidHexColor('red')).toBe(false);
    expect(isValidHexColor('#gg0000')).toBe(false);
  });

  it('normalizeHex expands shorthand', () => {
    expect(normalizeHex('#fff')).toBe('#ffffff');
    expect(normalizeHex('#FF0000')).toBe('#ff0000');
  });

  it('getColorBrightness', () => {
    expect(getColorBrightness('#000000')).toBe(0);
    expect(getColorBrightness('#ffffff')).toBeCloseTo(255, 0);
  });

  it('needsLightText', () => {
    expect(needsLightText('#000000')).toBe(true);
    expect(needsLightText('#ffffff')).toBe(false);
  });
});
