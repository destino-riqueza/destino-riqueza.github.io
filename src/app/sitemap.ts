import type { MetadataRoute } from 'next';
import { SITE } from '@/data';

// Required to generate the static file with `output: export`.
export const dynamic = 'force-static';

// trailingSlash: true in next.config → URLs include a trailing slash.
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
