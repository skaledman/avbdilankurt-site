import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/site-data";

const HOMEPAGE_BLOG_LIMIT = 6;

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
            className="group card-dark flex min-h-[290px] flex-col rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-[var(--gold-dim)]"
          >
            <span className="inline-block w-fit rounded-full border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
              {post.category}
            </span>
            <h3 className="mt-4 font-heading text-xl font-semibold leading-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--gold)] sm:text-2xl">
              {post.title}
            </h3>
            <p className="mt-3 line-clamp-3 min-h-[96px] text-base leading-8 text-[var(--text-faint)]">
              {post.summary}
            </p>
            <p className="mt-auto pt-4 text-[11px] uppercase tracking-[0.2em] text-[rgba(240,236,228,0.42)]">
              {post.date}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Devamını Oku
              <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
