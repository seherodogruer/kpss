import { describe, it, expect, vi, beforeEach } from 'vitest';
import { EventBus } from '@core/events/EventBus';

describe('EventBus', () => {
  let bus: EventBus;

  beforeEach(() => {
    bus = new EventBus();
  });

  it('should call handler when event is emitted', () => {
    const handler = vi.fn();
    bus.on('topic:changed', handler);
    bus.emit('topic:changed', { topicId: 5, previousTopicId: 3 });
    expect(handler).toHaveBeenCalledWith({ topicId: 5, previousTopicId: 3 });
  });

  it('should support multiple handlers for same event', () => {
    const h1 = vi.fn();
    const h2 = vi.fn();
    bus.on('topic:changed', h1);
    bus.on('topic:changed', h2);
    bus.emit('topic:changed', { topicId: 1, previousTopicId: null });
    expect(h1).toHaveBeenCalledOnce();
    expect(h2).toHaveBeenCalledOnce();
  });

  it('should not call handler after unsubscribe', () => {
    const handler = vi.fn();
    const unsub = bus.on('theme:changed', handler);
    unsub();
    bus.emit('theme:changed', { theme: 'dark' });
    expect(handler).not.toHaveBeenCalled();
  });

  it('should handle off() correctly', () => {
    const handler = vi.fn();
    bus.on('search:cleared', handler);
    bus.off('search:cleared', handler);
    bus.emit('search:cleared', undefined as never);
    expect(handler).not.toHaveBeenCalled();
  });

  it('should clear all handlers for a specific event', () => {
    const h1 = vi.fn();
    const h2 = vi.fn();
    bus.on('topic:changed', h1);
    bus.on('theme:changed', h2);
    bus.clear('topic:changed');
    bus.emit('topic:changed', { topicId: 1, previousTopicId: null });
    bus.emit('theme:changed', { theme: 'light' });
    expect(h1).not.toHaveBeenCalled();
    expect(h2).toHaveBeenCalledOnce();
  });

  it('should clear all handlers when clear() called without event', () => {
    const h1 = vi.fn();
    const h2 = vi.fn();
    bus.on('topic:changed', h1);
    bus.on('theme:changed', h2);
    bus.clear();
    bus.emit('topic:changed', { topicId: 1, previousTopicId: null });
    bus.emit('theme:changed', { theme: 'light' });
    expect(h1).not.toHaveBeenCalled();
    expect(h2).not.toHaveBeenCalled();
  });

  it('should report correct listenerCount', () => {
    expect(bus.listenerCount('topic:changed')).toBe(0);
    const unsub = bus.on('topic:changed', vi.fn());
    bus.on('topic:changed', vi.fn());
    expect(bus.listenerCount('topic:changed')).toBe(2);
    unsub();
    expect(bus.listenerCount('topic:changed')).toBe(1);
  });

  it('should not throw if emitting event with no handlers', () => {
    expect(() => bus.emit('topic:changed', { topicId: 1, previousTopicId: null })).not.toThrow();
  });

  it('should catch and log errors in handlers without stopping other handlers', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const h1 = vi.fn().mockImplementation(() => { throw new Error('boom'); });
    const h2 = vi.fn();
    bus.on('topic:changed', h1);
    bus.on('topic:changed', h2);
    bus.emit('topic:changed', { topicId: 1, previousTopicId: null });
    expect(h2).toHaveBeenCalledOnce();
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
