import { MetadataRoute } from 'next';
import { blogData } from '@/data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const localities = [
    'manikonda',
    'hafeezpet',
    'gachibowli',
    'kondapur',
    'kokapet',
    'tellapur',
    'nallagandla',
    'miyapur'
  ];

  const localityUrls: MetadataRoute.Sitemap = localities.map((loc) => ({
    url: `https://priyankaenterprises.com/areas/${loc}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const blogUrls: MetadataRoute.Sitemap = blogData.map((post) => ({
    url: `https://priyankaenterprises.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: 'https://priyankaenterprises.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://priyankaenterprises.com/areas',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://priyankaenterprises.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...localityUrls,
    ...blogUrls,
  ];
}
