/**
 * EventBus implementing Pub/Sub Pattern for loosely coupled component messaging and analytics.
 */
export class EventBus {
  static instance = null;

  constructor() {
    if (EventBus.instance) {
      return EventBus.instance;
    }
    this.listeners = new Map();
    EventBus.instance = this;
  }

  static getInstance() {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }

  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event).add(callback);
    return () => this.off(event, callback);
  }

  off(event, callback) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).delete(callback);
    }
  }

  emit(event, payload) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(callback => {
        try {
          callback(payload);
        } catch (err) {
          console.error(`[EventBus] Error in listener for "${event}":`, err);
        }
      });
    }
  }
}

export const eventBus = EventBus.getInstance();
