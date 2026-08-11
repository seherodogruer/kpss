/**
 * Turkish date formatting and utility functions.
 * 
 * Ported from the original KPSS Defterim application.
 * These functions are used by the planner and UI components.
 */

export const TR_DAYS = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'] as const;
export const TR_DAYS_SHORT = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'] as const;
export const TR_MONTHS = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
] as const;

/** Converts a Date object or date string to 'YYYY-MM-DD' format */
export function toDateStr(d: Date | string): string {
  const dd = typeof d === 'string' ? new Date(d + 'T00:00:00') : d;
  return (
    dd.getFullYear() +
    '-' +
    String(dd.getMonth() + 1).padStart(2, '0') +
    '-' +
    String(dd.getDate()).padStart(2, '0')
  );
}

/** Parses 'YYYY-MM-DD' string to Date object */
export function parseDate(s: string): Date {
  return new Date(s + 'T00:00:00');
}

/** Formats 'YYYY-MM-DD' to Turkish short date (e.g. '11 Ağustos') */
export function formatDateTR(s: string): string {
  const d = parseDate(s);
  return d.getDate() + ' ' + TR_MONTHS[d.getMonth()];
}

/** Formats Date to full Turkish date with year and day name */
export function formatDateLongTR(d: Date): string {
  return (
    d.getDate() +
    ' ' +
    TR_MONTHS[d.getMonth()] +
    ' ' +
    d.getFullYear() +
    ' · ' +
    TR_DAYS[d.getDay()]
  );
}

/** Returns full Turkish day name */
export function getDayName(d: Date): string {
  return TR_DAYS[d.getDay()]!;
}

/** Returns short Turkish day name (3 chars) */
export function getDayNameShort(d: Date): string {
  return TR_DAYS_SHORT[d.getDay()]!;
}

/** Checks if given date is today */
export function isToday(d: Date): boolean {
  return toDateStr(d) === toDateStr(new Date());
}

/** Checks if two dates are on the same calendar day */
export function isSameDay(a: Date, b: Date): boolean {
  return toDateStr(a) === toDateStr(b);
}

/** Returns array of 7 Date objects for the week (Mon-Sun) containing the reference date */
export function getWeekDates(ref: Date): Date[] {
  const d = new Date(ref);
  const day = d.getDay();
  const mon = new Date(d);
  mon.setDate(d.getDate() - ((day === 0 ? 7 : day) - 1));
  const dates: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const dd = new Date(mon);
    dd.setDate(mon.getDate() + i);
    dates.push(dd);
  }
  return dates;
}
