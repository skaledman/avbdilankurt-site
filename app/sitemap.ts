import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { BLOG_CATEGORIES, BLOG_POSTS, SERVICES } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = absoluteUrl("");

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/hakkimda"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/hizmetler"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/blog"), lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/iletisim"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/mesleki-ilkeler"), lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: absoluteUrl("/yargi-kararlari"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/sss"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: absoluteUrl(`/hizmetler/${s.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogCategoryPages: MetadataRoute.Sitemap = BLOG_CATEGORIES.map((c) => ({
    url: absoluteUrl(`/blog/${c.slug}`),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...servicePages, ...blogCategoryPages, ...blogPages];
}
