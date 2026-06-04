import type { MetadataRoute } from 'next';
import { SITE } from '@/data';

// Requerido para generar el archivo estático con `output: export`.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
