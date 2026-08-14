import { describe, it, expect, vi } from 'vitest';
import { History } from '@drawing/domain/History';
import type { StrokeData } from '@drawing/domain/StrokeModel';

function makeFakeStroke(id: string): StrokeData {
  return {
    id, version: 2, type: 'stroke', tool: 'ball-pen',
    points: [{ x: 0, y: 0, pressure: 0.5, timestamp: 0 }],
    color: '#000', width: 2, opacity: 1, pressureUsed: false,
    timestamp: Date.now(), topicId: 1,
  };
}

describe('History', () => {
  it('starts empty with no undo/redo', () => {
    const h = new History();
    expect(h.canUndo).toBe(false);
    expect(h.canRedo).toBe(false);
    expect(h.undoCount).toBe(0);
    expect(h.redoCount).toBe(0);
  });

  it('can push and undo an add entry', () => {
    const h = new History();
    const stroke = makeFakeStroke('s1');
    h.push({ type: 'add', stroke });
    expect(h.canUndo).toBe(true);
    expect(h.undoCount).toBe(1);
    const entry = h.undo();
    expect(entry).not.toBeNull();
    expect(entry!.type).toBe('add');
    expect(h.canUndo).toBe(false);
    expect(h.canRedo).toBe(true);
  });

  it('can redo after undo', () => {
    const h = new History();
    h.push({ type: 'add', stroke: makeFakeStroke('s1') });
    h.undo();
    expect(h.canRedo).toBe(true);
    const entry = h.redo();
    expect(entry).not.toBeNull();
    expect(entry!.type).toBe('add');
    expect(h.canUndo).toBe(true);
    expect(h.canRedo).toBe(false);
  });

  it('clears redo stack on new push after undo', () => {
    const h = new History();
    h.push({ type: 'add', stroke: makeFakeStroke('s1') });
    h.push({ type: 'add', stroke: makeFakeStroke('s2') });
    h.undo();
    expect(h.canRedo).toBe(true);
    h.push({ type: 'add', stroke: makeFakeStroke('s3') });
    expect(h.canRedo).toBe(false);
    expect(h.undoCount).toBe(2);
  });

  it('handles delete entry undo/redo', () => {
    const h = new History();
    const strokes = [makeFakeStroke('s1'), makeFakeStroke('s2')];
    h.push({ type: 'delete', strokes });
    const entry = h.undo();
    expect(entry!.type).toBe('delete');
  });

  it('handles clear entry', () => {
    const h = new History();
    h.push({ type: 'clear', strokes: [makeFakeStroke('s1')] });
    expect(h.canUndo).toBe(true);
    const entry = h.undo();
    expect(entry!.type).toBe('clear');
  });

  it('enforces max size', () => {
    const h = new History(3);
    h.push({ type: 'add', stroke: makeFakeStroke('s1') });
    h.push({ type: 'add', stroke: makeFakeStroke('s2') });
    h.push({ type: 'add', stroke: makeFakeStroke('s3') });
    h.push({ type: 'add', stroke: makeFakeStroke('s4') });
    expect(h.undoCount).toBe(3);
  });

  it('clear() resets both stacks', () => {
    const h = new History();
    h.push({ type: 'add', stroke: makeFakeStroke('s1') });
    h.undo();
    h.clear();
    expect(h.canUndo).toBe(false);
    expect(h.canRedo).toBe(false);
  });

  it('undo returns null when stack is empty', () => {
    const h = new History();
    expect(h.undo()).toBeNull();
  });

  it('redo returns null when stack is empty', () => {
    const h = new History();
    expect(h.redo()).toBeNull();
  });

  it('notifies listeners on push, undo, redo, clear', () => {
    const h = new History();
    const listener = vi.fn();
    h.onChange(listener);
    h.push({ type: 'add', stroke: makeFakeStroke('s1') });
    expect(listener).toHaveBeenCalledTimes(1);
    h.undo();
    expect(listener).toHaveBeenCalledTimes(2);
    h.redo();
    expect(listener).toHaveBeenCalledTimes(3);
    h.clear();
    expect(listener).toHaveBeenCalledTimes(4);
  });

  it('unsubscribe stops notifications', () => {
    const h = new History();
    const listener = vi.fn();
    const unsub = h.onChange(listener);
    h.push({ type: 'add', stroke: makeFakeStroke('s1') });
    expect(listener).toHaveBeenCalledTimes(1);
    unsub();
    h.push({ type: 'add', stroke: makeFakeStroke('s2') });
    expect(listener).toHaveBeenCalledTimes(1);
  });
});
