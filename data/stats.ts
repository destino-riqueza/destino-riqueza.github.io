import { SITE } from './site';

/**
 * Company metrics. Single source of truth: consumed both by the stats
 * bar and the Hero trust badges, so updating a value here updates it
 * everywhere.
 */
export const METRICS = {
  /** Average rating (without the ★ symbol). */
  rating: '4.8',
  /** Families advised. */
  families: '+500',
  /** Years of experience. */
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
