import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import CookieBanner from '@/src/components/CookieBanner';
import { COMPANY, CONTACT, SITE } from '@/data';
import './styles.css';

const title = 'Destino Riqueza – Inversión en Oro y Metales Preciosos';
const description =
  'Generar riqueza es fácil… cuando te acompañamos. Pedro y Estrella te asesoran en inversiones en oro y metales preciosos con cercanía, confianza y transparencia.';

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
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: SITE.name },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
};

// Datos estructurados (JSON-LD) para que los buscadores entiendan el negocio.
// Tipo `Organization` (no `LocalBusiness`) y sin dirección postal: de momento
// no se quiere presencia física ni aparición en Google Maps.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  legalName: COMPANY.legalName,
  url: SITE.url,
  logo: `${SITE.url}/logo.svg`,
  image: `${SITE.url}/og.png`,
  email: CONTACT.email,
  telephone: CONTACT.whatsapps.map((p) => p.phone),
  areaServed: 'ES',
  sameAs: [SITE.trustpilot],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo_icon34x34.png" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
