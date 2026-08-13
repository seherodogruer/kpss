import { LocalStorageAdapter } from '@core/storage/LocalStorageAdapter';
import { EventBus } from '@core/events/EventBus';
import { toDateStr, getWeekDates } from '@core/utils/dates';

export interface PlannerGoal {
  topicId: number;
  date: string; // YYYY-MM-DD
  order: number;
  completed: boolean;
}

export interface PlannerData {
  goals: PlannerGoal[];
}

const PLANNER_KEY = 'kpss-defterim-planner';

export class PlannerService {
  private data: PlannerData = { goals: [] };

  constructor(
    private readonly storage: LocalStorageAdapter,
    private readonly eventBus: EventBus,
  ) {}

  init(): void {
    this.data = this.storage.getJSON<PlannerData>(PLANNER_KEY, { goals: [] });
    // Ensure goals array exists
    if (!Array.isArray(this.data.goals)) {
      this.data.goals = [];
    }
  }

  getGoalForTopic(topicId: number): PlannerGoal | undefined {
    return this.data.goals.find((g) => g.topicId === topicId);
  }

  isTopicPlanned(topicId: number): boolean {
    return this.data.goals.some((g) => g.topicId === topicId);
  }

  getGoalsForDate(dateStr: string): PlannerGoal[] {
    return this.data.goals
      .filter((g) => g.date === dateStr)
      .sort((a, b) => a.order - b.order);
  }

  getGoalsForWeek(refDate: Date): Map<string, PlannerGoal[]> {
    const weekDates = getWeekDates(refDate);
    const result = new Map<string, PlannerGoal[]>();
    for (const d of weekDates) {
      const ds = toDateStr(d);
      result.set(ds, this.getGoalsForDate(ds));
    }
    return result;
  }

  addGoal(topicId: number, dateStr: string): void {
    // Don't add duplicate
    if (this.isTopicPlanned(topicId)) return;

    const goalsOnDate = this.getGoalsForDate(dateStr);
    const order = goalsOnDate.length;

    this.data.goals.push({
      topicId,
      date: dateStr,
      order,
      completed: false,
    });

    this.save();
    this.eventBus.emit('planner:goalChanged', { topicId });
  }

  removeGoal(topicId: number): void {
    this.data.goals = this.data.goals.filter((g) => g.topicId !== topicId);
    this.save();
    this.eventBus.emit('planner:goalChanged', { topicId });
  }

  moveGoal(topicId: number, newDateStr: string): void {
    const goal = this.getGoalForTopic(topicId);
    if (!goal) return;

    goal.date = newDateStr;
    goal.order = this.getGoalsForDate(newDateStr).length;
    this.save();
    this.eventBus.emit('planner:goalChanged', { topicId });
  }

  toggleGoalComplete(topicId: number): boolean {
    const goal = this.getGoalForTopic(topicId);
    if (!goal) return false;

    goal.completed = !goal.completed;
    this.save();
    return goal.completed;
  }

  setGoalCompleted(topicId: number, completed: boolean): void {
    const goal = this.getGoalForTopic(topicId);
    if (!goal) return;
    if (goal.completed === completed) return;

    goal.completed = completed;
    this.save();
  }

  getAllGoals(): readonly PlannerGoal[] {
    return this.data.goals;
  }

  private save(): void {
    this.storage.setJSON(PLANNER_KEY, this.data);
  }
}
