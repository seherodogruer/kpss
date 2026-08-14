/**
 * Color Palette — Color system for the Digital Ink Engine.
 *
 * Provides:
 * - 16 preset colors
 * - Recent colors tracking (per tool, max 5)
 * - Magic pen neon colors
 * - Highlighter-specific colors
 */

// ─── Preset Colors ───

export interface ColorEntry {
  readonly hex: string;
  readonly label: string;
}

/** 16 standard pen colors */
export const PEN_PRESET_COLORS: readonly ColorEntry[] = [
  { hex: '#000000', label: 'Siyah' },
  { hex: '#ffffff', label: 'Beyaz' },
  { hex: '#4a4a4a', label: 'Koyu Gri' },
  { hex: '#b0b0b0', label: 'Açık Gri' },
  { hex: '#d32f2f', label: 'Kırmızı' },
  { hex: '#8a1414', label: 'Koyu Kırmızı' },
  { hex: '#e07a1a', label: 'Turuncu' },
  { hex: '#f9a825', label: 'Sarı' },
  { hex: '#2e7d32', label: 'Yeşil' },
  { hex: '#1f6b2f', label: 'Koyu Yeşil' },
  { hex: '#42a5f5', label: 'Açık Mavi' },
  { hex: '#1a5fd6', label: 'Mavi' },
  { hex: '#1c2f5e', label: 'Lacivert' },
  { hex: '#6a2fa0', label: 'Mor' },
  { hex: '#d6448a', label: 'Pembe' },
  { hex: '#6b3f1d', label: 'Kahverengi' },
] as const;

/** Highlighter-specific colors (semi-transparent rendering) */
export const HIGHLIGHTER_COLORS: readonly ColorEntry[] = [
  { hex: '#ffe500', label: 'Sarı Fosforlu' },
  { hex: '#7CFC00', label: 'Yeşil Fosforlu' },
  { hex: '#ff6fae', label: 'Pembe Fosforlu' },
  { hex: '#ffa733', label: 'Turuncu Fosforlu' },
  { hex: '#33d4ff', label: 'Mavi Fosforlu' },
] as const;

/** Magic/Laser pen neon colors */
export const MAGIC_PEN_COLORS: readonly ColorEntry[] = [
  { hex: '#ff00ff', label: 'Neon Pembe' },
  { hex: '#00ff41', label: 'Neon Yeşil' },
  { hex: '#00d4ff', label: 'Neon Mavi' },
  { hex: '#ffff00', label: 'Neon Sarı' },
  { hex: '#ff6600', label: 'Neon Turuncu' },
  { hex: '#bf00ff', label: 'Neon Mor' },
] as const;

// ─── Recent Colors ───

/** Maximum number of recent colors to track */
export const MAX_RECENT_COLORS = 5;

/**
 * Recent color tracker.
 * Maintains a most-recently-used list of colors.
 */
export class RecentColors {
  private readonly colors: string[] = [];
  private readonly maxSize: number;

  constructor(maxSize: number = MAX_RECENT_COLORS, initial?: string[]) {
    this.maxSize = maxSize;
    if (initial) {
      // Take only up to maxSize, preserving order
      this.colors = initial.slice(0, maxSize);
    }
  }

  /** Add a color to recent list (moves to front if already present) */
  add(hex: string): void {
    const normalized = hex.toLowerCase();

    // Remove if already exists
    const idx = this.colors.indexOf(normalized);
    if (idx !== -1) {
      this.colors.splice(idx, 1);
    }

    // Add to front
    this.colors.unshift(normalized);

    // Trim to max size
    if (this.colors.length > this.maxSize) {
      this.colors.pop();
    }
  }

  /** Get all recent colors (most recent first) */
  getAll(): readonly string[] {
    return this.colors;
  }

  /** Get count of recent colors */
  get count(): number {
    return this.colors.length;
  }

  /** Serialize for storage */
  toJSON(): string[] {
    return [...this.colors];
  }
}

// ─── Utility ───

/** Check if a hex color string is valid */
export function isValidHexColor(hex: string): boolean {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex);
}

/** Normalize hex color to lowercase 6-digit format */
export function normalizeHex(hex: string): string {
  const h = hex.toLowerCase();
  if (h.length === 4) {
    // #rgb → #rrggbb
    return `#${h[1]}${h[1]}${h[2]}${h[2]}${h[3]}${h[3]}`;
  }
  return h;
}

/** Get a color's perceived brightness (0-255) for contrast decisions */
export function getColorBrightness(hex: string): number {
  const h = normalizeHex(hex).slice(1);
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  // Perceived brightness formula
  return (r * 299 + g * 587 + b * 114) / 1000;
}

/** Determine if text on this color background should be light or dark */
export function needsLightText(hex: string): boolean {
  return getColorBrightness(hex) < 128;
}
