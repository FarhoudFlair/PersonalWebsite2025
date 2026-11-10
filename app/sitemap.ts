import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.farhoudtalebi.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/imposter-hunt`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/imposter-hunt/support`, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${SITE_URL}/imposter-hunt/privacy`, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
