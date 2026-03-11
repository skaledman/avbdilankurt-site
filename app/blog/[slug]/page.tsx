import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  getCategoryBySlug,
  getBlogPostBySlug,
  getPostsByCategorySlug,
  getRelatedBlogPosts,
  getServiceSlugByCategory,
} from "@/lib/site-data";
import { absoluteUrl } from "@/lib/site-url";

export function generateStaticParams() {
  const postSlugs = BLOG_POSTS.map((post) => ({ slug: post.slug }));
  const categorySlugs = BLOG_CATEGORIES.map((c) => ({ slug: c.slug }));
  return [...postSlugs, ...categorySlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (category) {
    const title = `${category.title} Yazıları | Av. Betül Dilan Kurt`;
    const description = `${category.title} alanında hukuki bilgilendirme yazıları. Adana avukatlık hizmeti ve hukuki danışmanlık.`;
    return {
      title,
      description,
      alternates: { canonical: absoluteUrl(`/blog/${slug}`) },
      openGraph: {
        title,
        description,
        type: "website",
        locale: "tr_TR",
        url: absoluteUrl(`/blog/${slug}`),
      },
      twitter: { card: "summary_large_image", title, description },
    };
  }
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Yazı Bulunamadı" };
  const title = `${post.title} | Av. Betül Dilan Kurt`;
  const description =
    post.summary.length > 155 ? post.summary.slice(0, 152) + "…" : post.summary;
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(`/blog/${slug}`) },
    openGraph: {
      title,
      description,
      type: "article",
      locale: "tr_TR",
      url: absoluteUrl(`/blog/${slug}`),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (category) {
    const posts = getPostsByCategorySlug(slug);
    const serviceSlug = getServiceSlugByCategory(category.title);
    return (
      <div>
        <PageHero
          eyebrow="Blog"
          title={category.title}
          description={`${category.title} alanında hukuki bilgilendirme yazıları. Dava takibi ve hukuki danışmanlık hakkında güncel içerikler.`}
        />
        <section className="section-inner">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[rgba(240,236,228,0.45)]">
            <Link href="/" className="transition-colors hover:text-[var(--gold)]">
              Ana Sayfa
            </Link>
            <ChevronRight size={14} aria-hidden />
            <Link href="/blog" className="transition-colors hover:text-[var(--gold)]">
              Blog
            </Link>
            <ChevronRight size={14} aria-hidden />
            <span className="text-[var(--gold)]">{category.title}</span>
          </div>
          {serviceSlug && (
            <div className="mb-10 rounded-2xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] p-4">
              <Link
                href={`/hizmetler/${serviceSlug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] transition-colors hover:text-[var(--gold-light)]"
              >
                {category.title} hizmeti hakkında
                <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          )}
          {posts.length === 0 ? (
            <p className="text-[var(--text-muted)]">
              Bu kategoride henüz yazı bulunmuyor.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5 transition-all hover:-translate-y-1 hover:border-[var(--gold-dim)]"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[rgba(240,236,228,0.42)]">
                    {post.date}
                  </p>
                  <h2 className="mt-2 font-heading text-lg font-semibold leading-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--gold)]">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--text-faint)]">
                    {post.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                    Oku <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          )}
          <p className="mt-10">
            <Link
              href="/blog"
              className="text-sm font-semibold text-[var(--gold)] transition-colors hover:text-[var(--gold-light)]"
            >
              ← Tüm yazılar
            </Link>
          </p>
        </section>
      </div>
    );
  }

  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedBlogPosts(post.category, post.slug, 5);
  const relatedServiceSlug = getServiceSlugByCategory(post.category);

  return (
    <div>
      <PageHero eyebrow={post.category} title={post.title} description={post.summary} />

      <section className="section-inner grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
        <article className="rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] p-6 sm:p-8">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[rgba(240,236,228,0.45)]">
            <Link href="/" className="transition-colors hover:text-[var(--gold)]">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="transition-colors hover:text-[var(--gold)]">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-[var(--gold)]">{post.title}</span>
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-[rgba(240,236,228,0.42)]">
            <time dateTime={post.date}>{post.date}</time>
            <span className="text-white/20">•</span>
            <span>{post.category}</span>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.08] bg-black/15 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[rgba(240,236,228,0.56)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-6">
            {post.content.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-8 text-[rgba(240,236,228,0.68)]">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28" aria-label="İlgili içerik">
          {relatedServiceSlug && (
            <div className="rounded-3xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] p-6">
              <h3 className="font-heading text-xl font-semibold text-[var(--foreground)]">
                İlgili Hizmet
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Bu yazı {post.category} alanıyla ilgilidir.
              </p>
              <Link
                href={`/hizmetler/${relatedServiceSlug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] transition-colors hover:text-[var(--gold-light)]"
              >
                {post.category} hizmeti
                <ChevronRight size={14} aria-hidden />
              </Link>
            </div>
          )}

          <div className="rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] p-6">
            <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
              İlgili Yazılar
            </h3>
            <div className="mt-5 flex flex-col gap-4">
              {relatedPosts.length > 0
                ? relatedPosts.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}`}
                      className="rounded-2xl border border-white/[0.06] bg-black/10 p-4 transition-colors hover:border-[var(--gold-dim)]"
                    >
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[rgba(240,236,228,0.42)]">
                        {item.category}
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-[var(--foreground)]">
                        {item.title}
                      </p>
                    </Link>
                  ))
                : null}
            </div>
            <Link
              href="/blog"
              className="mt-4 inline-block text-sm font-semibold text-[var(--gold)] transition-colors hover:text-[var(--gold-light)]"
            >
              Tüm yazılar →
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}