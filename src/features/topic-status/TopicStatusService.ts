import { LocalStorageAdapter } from '@core/storage/LocalStorageAdapter';
import { EventBus } from '@core/events/EventBus';

export type TopicStatus = 'none' | 'completed' | 'review';

const TOPIC_STATUS_KEY = 'kpss-defterim-topic-status';

export class TopicStatusService {
  private statuses: Record<number, TopicStatus> = {};

  constructor(
    private readonly storage: LocalStorageAdapter,
    private readonly eventBus: EventBus,
  ) {}

  init(): void {
    const saved = this.storage.getJSON<Record<string, string>>(TOPIC_STATUS_KEY, {});
    this.statuses = {};
    for (const [key, value] of Object.entries(saved)) {
      const id = parseInt(key, 10);
      if (!isNaN(id) && (value === 'completed' || value === 'review')) {
        this.statuses[id] = value;
      }
    }
  }

  getStatus(topicId: number): TopicStatus {
    return this.statuses[topicId] ?? 'none';
  }

  setStatus(topicId: number, status: TopicStatus): void {
    const prev = this.getStatus(topicId);
    if (prev === status) return;

    if (status === 'none') {
      delete this.statuses[topicId];
    } else {
      this.statuses[topicId] = status;
    }

    this.save();
    this.eventBus.emit('topic:statusChanged', { topicId, status });
  }

  cycleStatus(topicId: number): TopicStatus {
    const current = this.getStatus(topicId);
    const next: TopicStatus = current === 'none' ? 'completed'
      : current === 'completed' ? 'review'
      : 'none';
    this.setStatus(topicId, next);
    return next;
  }

  getCompletedCount(): number {
    return Object.values(this.statuses).filter(s => s === 'completed').length;
  }

  getReviewCount(): number {
    return Object.values(this.statuses).filter(s => s === 'review').length;
  }

  getAllStatuses(): Readonly<Record<number, TopicStatus>> {
    return { ...this.statuses };
  }

  private save(): void {
    // Only save non-'none' statuses (compact storage)
    const toSave: Record<string, string> = {};
    for (const [id, status] of Object.entries(this.statuses)) {
      if (status !== 'none') {
        toSave[id] = status;
      }
    }
    this.storage.setJSON(TOPIC_STATUS_KEY, toSave);
  }
}
