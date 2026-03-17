import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { BLOG_CATEGORIES, BLOG_POSTS, COURT_DECISIONS, SERVICES } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["tr", "en"] as const;
  const localize = (path: string) =>
    locales.map((locale) => {
      const normalized = path === "/" ? "" : path;
      return absoluteUrl(`/${locale}${normalized}`);
    });

  const staticPages: MetadataRoute.Sitemap = [
    ...localize("/").map((url) => ({ url, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 })),
    ...localize("/hakkimda").map((url) => ({ url, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 })),
    ...localize("/hizmetler").map((url) => ({ url, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 })),
    ...localize("/blog").map((url) => ({ url, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 })),
    ...localize("/iletisim").map((url) => ({ url, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...localize("/mesleki-ilkeler").map((url) => ({ url, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.5 })),
    ...localize("/yargi-kararlari").map((url) => ({ url, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 })),
    ...localize("/sss").map((url) => ({ url, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 })),
    ...localize("/kvkk-aydinlatma").map((url) => ({ url, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.5 })),
    ...localize("/gizlilik-politikasi").map((url) => ({ url, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.5 })),
    ...localize("/cerez-politikasi").map((url) => ({ url, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.5 })),
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: absoluteUrl(`/tr/hizmetler/${s.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const servicePagesEn: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: absoluteUrl(`/en/hizmetler/${s.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const serviceSubPages: MetadataRoute.Sitemap = SERVICES.flatMap((s) =>
    (s.subServices ?? [])
      .filter((sub) => sub.hasPage)
      .map((sub) => ({
        url: absoluteUrl(`/tr/hizmetler/${s.slug}/${sub.slug}`),
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.75,
      })),
  );

  const serviceSubPagesEn: MetadataRoute.Sitemap = SERVICES.flatMap((s) =>
    (s.subServices ?? [])
      .filter((sub) => sub.hasPage)
      .map((sub) => ({
        url: absoluteUrl(`/en/hizmetler/${s.slug}/${sub.slug}`),
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.75,
      })),
  );

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: absoluteUrl(`/tr/blog/${p.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPagesEn: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: absoluteUrl(`/en/blog/${p.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogCategoryPages: MetadataRoute.Sitemap = BLOG_CATEGORIES.map((c) => ({
    url: absoluteUrl(`/tr/blog/${c.slug}`),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const blogCategoryPagesEn: MetadataRoute.Sitemap = BLOG_CATEGORIES.map((c) => ({
    url: absoluteUrl(`/en/blog/${c.slug}`),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const courtDecisionPages: MetadataRoute.Sitemap = COURT_DECISIONS.map((decision) => ({
    url: absoluteUrl(`/tr/yargi-kararlari/${decision.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const courtDecisionPagesEn: MetadataRoute.Sitemap = COURT_DECISIONS.map((decision) => ({
    url: absoluteUrl(`/en/yargi-kararlari/${decision.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...servicePagesEn,
    ...serviceSubPages,
    ...serviceSubPagesEn,
    ...blogCategoryPages,
    ...blogCategoryPagesEn,
    ...blogPages,
    ...blogPagesEn,
    ...courtDecisionPages,
    ...courtDecisionPagesEn,
  ];
}
