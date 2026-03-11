import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/site-data";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

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
            <span>{post.date}</span>
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

        <aside className="space-y-6 lg:sticky lg:top-28">
          <div className="rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] p-6">
            <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">Diğer Yazılar</h3>
            <div className="mt-5 flex flex-col gap-4">
              {BLOG_POSTS.filter((item) => item.slug !== post.slug).map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="rounded-2xl border border-white/[0.06] bg-black/10 p-4 transition-colors hover:border-[var(--gold-dim)]"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[rgba(240,236,228,0.42)]">{item.category}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[var(--foreground)]">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}