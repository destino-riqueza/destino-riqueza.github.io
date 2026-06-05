import { COMPANY, CONTACT, FAQS, SITE } from '@/data';

// Structured data (JSON-LD) so search engines understand the business.
// We expose a single @graph with three connected entities:
//   - Organization: who the company is (no postal address on purpose: for
//     now we don't want a physical presence or to appear on Google Maps).
//   - WebSite: the site itself, published by the Organization.
//   - FAQPage: the visible FAQ section, exposed as structured data.
// Note: we intentionally omit AggregateRating/Review. Self-hosted reviews
// about your own business are not eligible for star rich results per
// Google's guidelines, so the Trustpilot link covers reputation instead.

const orgId = `${SITE.url}/#organization`;
const siteId = `${SITE.url}/#website`;

const description =
  'Asesoramiento personalizado en inversión en oro y metales preciosos. ' +
  'Pedro y Estrella acompañan a particulares y familias a proteger y hacer ' +
  'crecer su patrimonio con cercanía, confianza y total transparencia.';

const organization = {
  '@type': 'Organization',
  '@id': orgId,
  name: SITE.name,
  legalName: COMPANY.legalName,
  url: SITE.url,
  logo: `${SITE.url}/logo.svg`,
  image: `${SITE.url}/og.png`,
  description,
  email: CONTACT.email,
  telephone: CONTACT.whatsapps.map((p) => p.phone),
  areaServed: 'ES',
  knowsAbout: [
    'Inversión en oro',
    'Metales preciosos',
    'Oro de inversión',
    'Planificación financiera',
    'Protección del patrimonio',
  ],
  founder: CONTACT.whatsapps.map((p) => ({
    '@type': 'Person',
    name: p.name,
    jobTitle: 'Asesor de inversión en oro y metales preciosos',
  })),
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: CONTACT.email,
    telephone: CONTACT.whatsapps[0].phone,
    areaServed: 'ES',
    availableLanguage: 'Spanish',
  },
  sameAs: [
    SITE.trustpilot,
    'https://www.linkedin.com/company/destinoriqueza/',
    'https://www.youtube.com/@Destinoalariqueza',
  ],
};

const website = {
  '@type': 'WebSite',
  '@id': siteId,
  url: SITE.url,
  name: SITE.name,
  description,
  inLanguage: 'es-ES',
  publisher: { '@id': orgId },
};

const faqPage = {
  '@type': 'FAQPage',
  '@id': `${SITE.url}/#faq`,
  inLanguage: 'es-ES',
  isPartOf: { '@id': siteId },
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [organization, website, faqPage],
};

export const JsonLd = () => (
  <script
    type="application/ld+json"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
);
