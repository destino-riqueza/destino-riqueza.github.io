import type { Metadata } from 'next';
import { SITE } from '@/data';

const title = 'Destino Riqueza – Inversión en Oro y Metales Preciosos';
const description =
  'Generar riqueza es fácil… cuando te acompañamos. Pedro y Estrella te asesoran en inversiones en oro y metales preciosos con cercanía, confianza y transparencia.';

/** Global site metadata. Re-exported from the root layout. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description,
  keywords: [
    'inversión oro',
    'metales preciosos',
    'asesoramiento financiero',
    'Destino Riqueza',
    'Pedro Estrella',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE.url,
    siteName: SITE.name,
    title,
    description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
};
