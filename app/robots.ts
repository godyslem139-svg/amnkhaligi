import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/structured-data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}