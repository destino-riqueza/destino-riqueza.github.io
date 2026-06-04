import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';

/** Format in which dates are stored in /data. */
const STORAGE_FORMAT = 'yyyy/MM/dd';

/** Converts a stored date ('yyyy/MM/dd') into a Date object. */
export const parseDate = (date: string): Date =>
  parse(date, STORAGE_FORMAT, new Date());

/**
 * Formats a stored date into a human-readable Spanish format,
 * e.g. "Abr 29, 2026".
 */
export const formatDate = (date: string): string => {
  const formatted = format(parseDate(date), 'MMM d, yyyy', { locale: es });
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};
