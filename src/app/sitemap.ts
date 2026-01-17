import { getPageMap } from 'nextra/page-map';
import { siteConfig } from '@/config/site';
import type { MetadataRoute } from 'next';
import type { NextraPageMapItem } from '@/types/nextra';

function getPagePath(pageMap: NextraPageMapItem[]): string[] {
  const paths: string[] = [];
  
  for (const page of pageMap) {
    if (page.route) {
      paths.push(page.route);
    }
    if (page.children && Array.isArray(page.children)) {
      paths.push(...getPagePath(page.children));
    }
  }
  
  return paths;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  
  try {
    const pageMap = await getPageMap();
    const routes = getPagePath(pageMap);
    
    // Always include the root page
    const sitemapEntries: MetadataRoute.Sitemap = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
    ];
    
    // Add all MDX pages
    for (const route of routes) {
      if (route && route !== '/') {
        sitemapEntries.push({
          url: `${baseUrl}${route}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        });
      }
    }
    
    return sitemapEntries;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return at least the root page if there's an error
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
    ];
  }
}
