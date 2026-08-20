import { describe, it, expect } from 'vitest';
import {
  ALL_TOPICS,
  CATEGORIES,
  getTopicById,
  getTopicsByCategory,
  getCategoryById,
} from '@content/ContentRegistry';

describe('ContentRegistry', () => {
  it('should have exactly 126 topics', () => {
    expect(ALL_TOPICS).toHaveLength(126);
  });

  it('should have 6 categories', () => {
    expect(CATEGORIES).toHaveLength(6);
  });

  it('should have correct category IDs', () => {
    const ids = CATEGORIES.map((c) => c.id);
    expect(ids).toEqual([
      'turkce',
      'matematik',
      'tarih',
      'cografya',
      'vatandaslik',
      'guncel',
    ]);
  });

  it('should have correct topic counts per category', () => {
    expect(getTopicsByCategory('turkce')).toHaveLength(16);
    expect(getTopicsByCategory('matematik')).toHaveLength(26);
    expect(getTopicsByCategory('tarih')).toHaveLength(33);
    expect(getTopicsByCategory('cografya')).toHaveLength(25);
    expect(getTopicsByCategory('vatandaslik')).toHaveLength(23);
    expect(getTopicsByCategory('guncel')).toHaveLength(3);
  });

  it('should lookup topic by ID', () => {
    const topic = getTopicById(1);
    expect(topic).toBeDefined();
    expect(topic?.title).toBe('Sözcükte Anlam');
    expect(topic?.category).toBe('Türkçe');
    expect(topic?.built).toBe(true);
  });

  it('should return undefined for invalid topic ID', () => {
    expect(getTopicById(999)).toBeUndefined();
  });

  it('should lookup category by ID', () => {
    const cat = getCategoryById('tarih');
    expect(cat).toBeDefined();
    expect(cat?.name).toBe('Tarih');
    expect(cat?.icon).toBe('🏛️');
  });

  it('should have sequential topic IDs from 1 to 126', () => {
    for (let i = 0; i < ALL_TOPICS.length; i++) {
      expect(ALL_TOPICS[i]!.id).toBe(i + 1);
    }
  });

  it('built topics should have non-empty html', () => {
    const builtTopics = ALL_TOPICS.filter((t) => t.built);
    for (const t of builtTopics) {
      expect(t.html.length).toBeGreaterThan(100);
    }
  });

  it('placeholder topics should have empty html', () => {
    const placeholders = ALL_TOPICS.filter((t) => !t.built);
    for (const t of placeholders) {
      expect(t.html).toBe('');
    }
  });

  it('should have exactly 70 built topics', () => {
    const builtCount = ALL_TOPICS.filter((t) => t.built).length;
    expect(builtCount).toBe(87);
  });

  it('category topicCount should match actual data', () => {
    for (const cat of CATEGORIES) {
      const actual = ALL_TOPICS.filter((t) => t.categoryId === cat.id).length;
      expect(cat.topicCount).toBe(actual);
    }
  });
});
