/**
 * Date utility functions using Day.js
 * Default timezone: Asia/Kolkata
 */

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isBetweenPlugin from 'dayjs/plugin/isBetween';

// Extend dayjs with plugins
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);
dayjs.extend(isBetweenPlugin);

// Set default timezone
const DEFAULT_TIMEZONE = 'Asia/Kolkata';

/**
 * Get dayjs instance with default timezone
 */
function getDayjs(date?: dayjs.ConfigType) {
    return date ? dayjs(date).tz(DEFAULT_TIMEZONE) : dayjs().tz(DEFAULT_TIMEZONE);
}

/**
 * Format date to YYYY-MM-DD
 */
export function formatDate(date?: dayjs.ConfigType): string {
    return getDayjs(date).format('YYYY-MM-DD');
}

/**
 * Format date to readable string
 */
export function formatDateReadable(date?: dayjs.ConfigType): string {
    return getDayjs(date).format('MMMM D, YYYY');
}

/**
 * Format date with time
 */
export function formatDateTime(date?: dayjs.ConfigType): string {
    return getDayjs(date).format('YYYY-MM-DD HH:mm:ss');
}

/**
 * Format date with time (readable)
 */
export function formatDateTimeReadable(date?: dayjs.ConfigType): string {
    return getDayjs(date).format('MMMM D, YYYY [at] h:mm A');
}

/**
 * Format time only
 */
export function formatTime(date?: dayjs.ConfigType): string {
    return getDayjs(date).format('HH:mm:ss');
}

/**
 * Format time (12-hour format)
 */
export function formatTime12(date?: dayjs.ConfigType): string {
    return getDayjs(date).format('h:mm A');
}

/**
 * Get relative time string (e.g., "2 hours ago")
 */
export function getRelativeTime(date: dayjs.ConfigType): string {
    return getDayjs(date).fromNow();
}

/**
 * Get relative time to another date
 */
export function getRelativeTimeTo(date: dayjs.ConfigType, to: dayjs.ConfigType): string {
    return getDayjs(date).from(getDayjs(to));
}

/**
 * Add days to a date
 */
export function addDays(date: dayjs.ConfigType, days: number): Date {
    return getDayjs(date).add(days, 'day').toDate();
}

/**
 * Add hours to a date
 */
export function addHours(date: dayjs.ConfigType, hours: number): Date {
    return getDayjs(date).add(hours, 'hour').toDate();
}

/**
 * Add minutes to a date
 */
export function addMinutes(date: dayjs.ConfigType, minutes: number): Date {
    return getDayjs(date).add(minutes, 'minute').toDate();
}

/**
 * Subtract days from a date
 */
export function subtractDays(date: dayjs.ConfigType, days: number): Date {
    return getDayjs(date).subtract(days, 'day').toDate();
}

/**
 * Check if date is today
 */
export function isToday(date: dayjs.ConfigType): boolean {
    return getDayjs(date).isSame(getDayjs(), 'day');
}

/**
 * Check if date is yesterday
 */
export function isYesterday(date: dayjs.ConfigType): boolean {
    return getDayjs(date).isSame(getDayjs().subtract(1, 'day'), 'day');
}

/**
 * Check if date is tomorrow
 */
export function isTomorrow(date: dayjs.ConfigType): boolean {
    return getDayjs(date).isSame(getDayjs().add(1, 'day'), 'day');
}

/**
 * Check if date is in the past
 */
export function isPast(date: dayjs.ConfigType): boolean {
    return getDayjs(date).isBefore(getDayjs());
}

/**
 * Check if date is in the future
 */
export function isFuture(date: dayjs.ConfigType): boolean {
    return getDayjs(date).isAfter(getDayjs());
}

/**
 * Check if date is between two dates
 */
export function isBetween(
    date: dayjs.ConfigType,
    start: dayjs.ConfigType,
    end: dayjs.ConfigType
): boolean {
    return getDayjs(date).isBetween(getDayjs(start), getDayjs(end));
}

/**
 * Get start of day
 */
export function startOfDay(date?: dayjs.ConfigType): Date {
    return getDayjs(date).startOf('day').toDate();
}

/**
 * Get end of day
 */
export function endOfDay(date?: dayjs.ConfigType): Date {
    return getDayjs(date).endOf('day').toDate();
}

/**
 * Get start of week
 */
export function startOfWeek(date?: dayjs.ConfigType): Date {
    return getDayjs(date).startOf('week').toDate();
}

/**
 * Get end of week
 */
export function endOfWeek(date?: dayjs.ConfigType): Date {
    return getDayjs(date).endOf('week').toDate();
}

/**
 * Get start of month
 */
export function startOfMonth(date?: dayjs.ConfigType): Date {
    return getDayjs(date).startOf('month').toDate();
}

/**
 * Get end of month
 */
export function endOfMonth(date?: dayjs.ConfigType): Date {
    return getDayjs(date).endOf('month').toDate();
}

/**
 * Get difference between two dates in days
 */
export function diffInDays(date1: dayjs.ConfigType, date2: dayjs.ConfigType): number {
    return getDayjs(date1).diff(getDayjs(date2), 'day');
}

/**
 * Get difference between two dates in hours
 */
export function diffInHours(date1: dayjs.ConfigType, date2: dayjs.ConfigType): number {
    return getDayjs(date1).diff(getDayjs(date2), 'hour');
}

/**
 * Get difference between two dates in minutes
 */
export function diffInMinutes(date1: dayjs.ConfigType, date2: dayjs.ConfigType): number {
    return getDayjs(date1).diff(getDayjs(date2), 'minute');
}

/**
 * Get current date in Asia/Kolkata timezone
 */
export function now(): Date {
    return getDayjs().toDate();
}

/**
 * Get current date as ISO string
 */
export function nowISO(): string {
    return getDayjs().toISOString();
}

/**
 * Parse date string with format
 */
export function parseDate(dateString: string, format: string): Date | null {
    const parsed = dayjs(dateString, format, true);
    return parsed.isValid() ? parsed.tz(DEFAULT_TIMEZONE).toDate() : null;
}

/**
 * Check if date is valid
 */
export function isValidDate(date: dayjs.ConfigType): boolean {
    return getDayjs(date).isValid();
}

/**
 * Convert date to different timezone
 */
export function toTimezone(date: dayjs.ConfigType, timezone: string): Date {
    return dayjs(date).tz(timezone).toDate();
}

/**
 * Get timezone offset in minutes
 */
export function getTimezoneOffset(date?: dayjs.ConfigType): number {
    return getDayjs(date).utcOffset();
}

// Export dayjs for advanced usage
export { dayjs };
