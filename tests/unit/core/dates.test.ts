import { describe, it, expect } from 'vitest';
import {
  toDateStr,
  parseDate,
  formatDateTR,
  getDayName,
  getDayNameShort,
  isToday,
  isSameDay,
  getWeekDates,
} from '@core/utils/dates';

describe('dates', () => {
  it('toDateStr should format Date to YYYY-MM-DD', () => {
    const d = new Date(2025, 7, 11); // Aug 11, 2025
    expect(toDateStr(d)).toBe('2025-08-11');
  });

  it('toDateStr should handle string input', () => {
    expect(toDateStr('2025-01-05')).toBe('2025-01-05');
  });

  it('parseDate should create correct Date', () => {
    const d = parseDate('2025-03-15');
    expect(d.getFullYear()).toBe(2025);
    expect(d.getMonth()).toBe(2); // March = 2
    expect(d.getDate()).toBe(15);
  });

  it('formatDateTR should return Turkish format', () => {
    expect(formatDateTR('2025-08-11')).toBe('11 Ağustos');
    expect(formatDateTR('2025-01-01')).toBe('1 Ocak');
  });

  it('getDayName should return Turkish day name', () => {
    const monday = new Date(2025, 7, 11); // Aug 11, 2025 = Monday
    expect(getDayName(monday)).toBe('Pazartesi');
  });

  it('getDayNameShort should return short Turkish day name', () => {
    const monday = new Date(2025, 7, 11);
    expect(getDayNameShort(monday)).toBe('Pzt');
  });

  it('isToday should return true for today', () => {
    expect(isToday(new Date())).toBe(true);
  });

  it('isToday should return false for yesterday', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(isToday(yesterday)).toBe(false);
  });

  it('isSameDay should compare dates correctly', () => {
    const a = new Date(2025, 0, 1, 10, 30);
    const b = new Date(2025, 0, 1, 22, 45);
    expect(isSameDay(a, b)).toBe(true);
    const c = new Date(2025, 0, 2, 10, 30);
    expect(isSameDay(a, c)).toBe(false);
  });

  it('getWeekDates should return 7 dates starting from Monday', () => {
    const wed = new Date(2025, 7, 13); // Wednesday Aug 13
    const week = getWeekDates(wed);
    expect(week).toHaveLength(7);
    expect(week[0]!.getDay()).toBe(1); // Monday
    expect(week[6]!.getDay()).toBe(0); // Sunday
  });
});
