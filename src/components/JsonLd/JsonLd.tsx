import { COMPANY, CONTACT, SITE } from '@/data';

// Structured data (JSON-LD) so search engines understand the business.
// Type `Organization` (not `LocalBusiness`) and without a postal address: for
// now we don't want a physical presence or to appear on Google Maps.
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
