import { COMPANY, CONTACT, SITE } from '@/data';

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

export const JsonLd = () => (
  <script
    type="application/ld+json"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
);
