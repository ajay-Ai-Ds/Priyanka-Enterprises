import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/test/', '/api/'],
    },
    sitemap: 'https://www.priyankaenterpriseshyderabad.com/sitemap.xml',
  };
}
