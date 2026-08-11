/**
 * Typed Event Bus for inter-feature communication.
 * 
 * Features communicate through events rather than direct imports,
 * preventing circular dependencies and maintaining loose coupling.
 * 
 * @example
 * const bus = new EventBus();
 * bus.on('topicChanged', (data) => console.log(data.topicId));
 * bus.emit('topicChanged', { topicId: 5, previousTopicId: 3 });
 */

export type EventHandler<T = unknown> = (data: T) => void;

/** Application-wide event definitions */
export interface AppEvents {
  'topic:changed': { topicId: number; previousTopicId: number | null };
  'topic:statusChanged': { topicId: number; status: string };
  'planner:goalChanged': { topicId: number };
  'theme:changed': { theme: string };
  'drawing:activated': void;
  'drawing:deactivated': void;
  'search:started': { query: string };
  'search:cleared': void;
}

export class EventBus {
  private readonly handlers = new Map<string, Set<EventHandler<never>>>();

  on<K extends keyof AppEvents>(event: K, handler: EventHandler<AppEvents[K]>): () => void {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, new Set());
    }
    const handlers = this.handlers.get(event)!;
    handlers.add(handler as EventHandler<never>);

    // Return unsubscribe function
    return () => {
      handlers.delete(handler as EventHandler<never>);
      if (handlers.size === 0) {
        this.handlers.delete(event);
      }
    };
  }

  emit<K extends keyof AppEvents>(event: K, data: AppEvents[K]): void {
    const handlers = this.handlers.get(event);
    if (!handlers) return;
    
    for (const handler of handlers) {
      try {
        (handler as EventHandler<AppEvents[K]>)(data);
      } catch (error) {
        console.error(`[EventBus] Error in handler for '${event}':`, error);
      }
    }
  }

  off<K extends keyof AppEvents>(event: K, handler: EventHandler<AppEvents[K]>): void {
    const handlers = this.handlers.get(event);
    if (!handlers) return;
    handlers.delete(handler as EventHandler<never>);
    if (handlers.size === 0) {
      this.handlers.delete(event);
    }
  }

  /** Remove all handlers for a specific event, or all events if no event specified */
  clear(event?: keyof AppEvents): void {
    if (event) {
      this.handlers.delete(event);
    } else {
      this.handlers.clear();
    }
  }

  /** Returns count of registered handlers for an event */
  listenerCount(event: keyof AppEvents): number {
    return this.handlers.get(event)?.size ?? 0;
  }
}
