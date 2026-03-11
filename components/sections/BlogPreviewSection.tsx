import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/site-data";

const HOMEPAGE_BLOG_LIMIT = 6;

function getBlogPlaceholder(slug: string) {
  if (slug.includes("bosanma")) return "https://picsum.photos/seed/bosanma/800/400";
  if (slug.includes("is-sozlesmesi")) return "https://picsum.photos/seed/issozlesmesi/800/400";
  if (slug.includes("miras")) return "https://picsum.photos/seed/miras/800/400";
  return `https://picsum.photos/seed/${slug}/800/400`;
}

export function BlogPreviewSection() {
  const posts = BLOG_POSTS.slice(0, HOMEPAGE_BLOG_LIMIT);

  return (
    <div className="section-inner">
      <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-4">
          <span className="section-kicker">Yazılar</span>
          <h2 className="section-title">Bilgilendirme Yazıları</h2>
          <p className="section-description">
            Güncel hukuki konularda temel çerçeveyi açıklayan ve süreçlere hazırlık sağlayan kısa bilgilendirme yazıları.
          </p>
        </div>
        <Link
          href="/blog"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] px-5 py-2.5 text-base font-semibold text-[var(--gold)] transition-all hover:border-[var(--gold)] hover:bg-[rgba(201,168,76,0.12)] hover:translate-x-0.5"
          aria-label="Tüm blog yazılarını görüntüle"
        >
          Tüm Yazıları Gör
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] transition-all hover:-translate-y-1 hover:border-[var(--gold-dim)]"
          >
            <div
              className="flex h-48 items-end bg-cover bg-center p-5"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(8,10,18,0.2), rgba(8,10,18,0.72)), url(${getBlogPlaceholder(
                  post.slug,
                )})`,
              }}
            >
              <span className="rounded-full border border-[var(--gold-dim)] bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
                {post.category}
              </span>
            </div>
            <div className="flex flex-col gap-3 p-6">
              <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.2em] text-[rgba(240,236,228,0.42)]">
                <span>{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h3 className="font-heading text-2xl font-semibold leading-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--gold)]">
                {post.title}
              </h3>
              <p className="text-base leading-8 text-[var(--text-faint)]">{post.summary}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.08] bg-black/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[rgba(240,236,228,0.52)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Devamını Oku <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}