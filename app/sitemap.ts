import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.uniquee-ws.com';

  const routes = [
    '',
    '/about',
    '/portfolio',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const services = [
    '/services/water-leak-detection',
    '/services/restoration-and-construction',
    '/services/sewage-clearing',
    '/services/roof-insulation',
    '/services/pest-control',
    '/services/ac-washing',
    '/services/tank-cleaning',
    '/services/ac-washing',
  ].map((slug) => ({
    url: `${baseUrl}${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...services];
}