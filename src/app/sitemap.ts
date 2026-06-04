import type { MetadataRoute } from 'next';
import { SITE } from '@/data';

// Requerido para generar el archivo estático con `output: export`.
export const dynamic = 'force-static';

// trailingSlash: true en next.config → las URLs llevan barra final.
const url = (path: string) => `${SITE.url}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: url('/'), lastModified, changeFrequency: 'monthly', priority: 1 },
    {
      url: url('/aviso-legal/'),
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: url('/politica-de-privacidad/'),
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: url('/cookies/'),
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
