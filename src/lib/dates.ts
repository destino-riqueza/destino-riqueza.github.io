import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';

/** Formato en el que se almacenan las fechas en /data. */
const STORAGE_FORMAT = 'yyyy/MM/dd';

/** Convierte una fecha almacenada ('yyyy/MM/dd') en un objeto Date. */
export const parseDate = (date: string): Date =>
  parse(date, STORAGE_FORMAT, new Date());

/**
 * Formatea una fecha almacenada a un formato legible en español,
 * p. ej. "Abr 29, 2026".
 */
export const formatDate = (date: string): string => {
  const formatted = format(parseDate(date), 'MMM d, yyyy', { locale: es });
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};
