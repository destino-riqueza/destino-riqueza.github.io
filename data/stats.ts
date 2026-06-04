import { SITE } from './site';

/**
 * Métricas de la empresa. Fuente única de verdad: se consumen tanto en la
 * barra de stats como en los sellos de confianza del Hero, de modo que al
 * actualizar un valor aquí se actualiza en todos los sitios.
 */
export const METRICS = {
  /** Valoración media (sin el símbolo ★). */
  rating: '4.8',
  /** Familias asesoradas. */
  families: '+500',
  /** Años de experiencia. */
  experience: '12',
} as const;

export const STATS: { value: string; label: string; href?: string }[] = [
  { value: METRICS.families, label: 'Familias asesoradas' },
  { value: METRICS.experience, label: 'Años de experiencia' },
  {
    value: 'MiFID II',
    label: 'Asesoramiento independiente regulado',
    href: 'https://www.cnmv.es/portal/mifidii_mifir/mapamifid',
  },
  {
    value: `${METRICS.rating}★`,
    label: 'Valoración media',
    href: SITE.trustpilot,
  },
];
