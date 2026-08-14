/**
 * Transform Manager — Move, resize, rotate, recolor, duplicate selected strokes.
 *
 * All operations create history entries for undo/redo support.
 */

import type { StrokeData, StrokeTransform } from '@drawing/domain/StrokeModel';
import { generateStrokeId, IDENTITY_TRANSFORM } from '@drawing/domain/StrokeModel';
import type { StrokeManager } from './StrokeManager';
import type { SelectionManager } from './SelectionManager';

export class TransformManager {
  constructor(
    private readonly strokeManager: StrokeManager,
    private readonly selection: SelectionManager,
  ) {}

  /** Move selected strokes by offset */
  moveSelection(dx: number, dy: number): void {
    const ids = [...this.selection.getSelectedIds()];
    if (ids.length === 0) return;

    const updates = new Map<string, StrokeData>();
    const strokes = this.strokeManager.getStrokes();

    for (const stroke of strokes) {
      if (!ids.includes(stroke.id)) continue;
      const current = stroke.transform ?? IDENTITY_TRANSFORM;
      const newTransform: StrokeTransform = {
        ...current,
        translateX: current.translateX + dx,
        translateY: current.translateY + dy,
      };
      updates.set(stroke.id, { ...stroke, transform: newTransform });
    }

    this.strokeManager.replaceStrokes(updates);
  }

  /** Resize selected strokes by scale factor around center */
  resizeSelection(scaleX: number, scaleY: number): void {
    const ids = [...this.selection.getSelectedIds()];
    if (ids.length === 0) return;

    const updates = new Map<string, StrokeData>();
    const strokes = this.strokeManager.getStrokes();

    for (const stroke of strokes) {
      if (!ids.includes(stroke.id)) continue;
      const current = stroke.transform ?? IDENTITY_TRANSFORM;
      const newTransform: StrokeTransform = {
        ...current,
        scaleX: current.scaleX * scaleX,
        scaleY: current.scaleY * scaleY,
      };
      updates.set(stroke.id, { ...stroke, transform: newTransform });
    }

    this.strokeManager.replaceStrokes(updates);
  }

  /** Rotate selected strokes by angle (radians) */
  rotateSelection(angle: number): void {
    const ids = [...this.selection.getSelectedIds()];
    if (ids.length === 0) return;

    const updates = new Map<string, StrokeData>();
    const strokes = this.strokeManager.getStrokes();

    for (const stroke of strokes) {
      if (!ids.includes(stroke.id)) continue;
      const current = stroke.transform ?? IDENTITY_TRANSFORM;
      const newTransform: StrokeTransform = {
        ...current,
        rotation: current.rotation + angle,
      };
      updates.set(stroke.id, { ...stroke, transform: newTransform });
    }

    this.strokeManager.replaceStrokes(updates);
  }

  /** Recolor all selected strokes */
  recolorSelection(newColor: string): void {
    const ids = [...this.selection.getSelectedIds()];
    if (ids.length === 0) return;

    const updates = new Map<string, StrokeData>();
    const strokes = this.strokeManager.getStrokes();

    for (const stroke of strokes) {
      if (!ids.includes(stroke.id)) continue;
      updates.set(stroke.id, { ...stroke, color: newColor });
    }

    this.strokeManager.replaceStrokes(updates);
  }

  /** Duplicate selected strokes with a small offset */
  duplicateSelection(): void {
    const ids = this.selection.getSelectedIds();
    if (ids.size === 0) return;

    const strokes = this.strokeManager.getStrokes();
    const offset = 15; // px offset for duplicate

    for (const stroke of strokes) {
      if (!ids.has(stroke.id)) continue;
      const current = stroke.transform ?? IDENTITY_TRANSFORM;
      const duplicate: StrokeData = {
        ...stroke,
        id: generateStrokeId(),
        timestamp: Date.now(),
        transform: {
          ...current,
          translateX: current.translateX + offset,
          translateY: current.translateY + offset,
        },
      };
      this.strokeManager.addStroke(duplicate);
    }
  }

  /** Delete all selected strokes */
  deleteSelection(): void {
    const ids = [...this.selection.getSelectedIds()];
    if (ids.length === 0) return;
    this.strokeManager.deleteStrokes(ids);
    this.selection.clearSelection();
  }
}
