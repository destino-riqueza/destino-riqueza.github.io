import type { MetadataRoute } from 'next';
import { SITE } from '@/data';

// Required to generate the static file with `output: export`.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
