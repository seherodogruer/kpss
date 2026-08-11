/**
 * Content Registry — Single access point for all topic data.
 *
 * Aggregates all category data and provides lookup functions.
 */

import type { TopicDefinition, CategoryId, CategoryInfo } from './models/Topic';
import { turkceTopics } from './data/turkce';
import { matematikTopics } from './data/matematik';
import { tarihTopics } from './data/tarih';
import { cografyaTopics } from './data/cografya';
import { vatandaslikTopics } from './data/vatandaslik';
import { guncelTopics } from './data/guncel';

/** All topics in order */
export const ALL_TOPICS: readonly TopicDefinition[] = [
  ...turkceTopics,
  ...matematikTopics,
  ...tarihTopics,
  ...cografyaTopics,
  ...vatandaslikTopics,
  ...guncelTopics,
];

/** Category metadata */
export const CATEGORIES: readonly CategoryInfo[] = [
  { id: 'turkce', name: 'Türkçe', icon: '📖', topicCount: turkceTopics.length },
  { id: 'matematik', name: 'Matematik', icon: '📐', topicCount: matematikTopics.length },
  { id: 'tarih', name: 'Tarih', icon: '🏛️', topicCount: tarihTopics.length },
  { id: 'cografya', name: 'Coğrafya', icon: '🌍', topicCount: cografyaTopics.length },
  { id: 'vatandaslik', name: 'Vatandaşlık', icon: '⚖️', topicCount: vatandaslikTopics.length },
  { id: 'guncel', name: 'Güncel Bilgiler', icon: '📰', topicCount: guncelTopics.length },
];

/** Lookup topic by ID */
export function getTopicById(id: number): TopicDefinition | undefined {
  return ALL_TOPICS.find((t) => t.id === id);
}

/** Get all topics for a category */
export function getTopicsByCategory(categoryId: CategoryId): readonly TopicDefinition[] {
  return ALL_TOPICS.filter((t) => t.categoryId === categoryId);
}

/** Get category info by ID */
export function getCategoryById(id: CategoryId): CategoryInfo | undefined {
  return CATEGORIES.find((c) => c.id === id);
}
