import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blog | Hukuki Bilgilendirme Yazıları | Av. Betül Dilan Kurt",
  description:
    "Aile hukuku, iş hukuku, miras hukuku, ceza hukuku ve gayrimenkul hukuku konularında bilgilendirme yazıları. Adana avukatlık hizmeti ve hukuki danışmanlık.",
  openGraph: {
    title: "Blog | Hukuki Bilgilendirme Yazıları | Av. Betül Dilan Kurt",
    description:
      "Aile hukuku, iş hukuku, miras hukuku ve diğer alanlarda bilgilendirme yazıları. Adana avukatlık ve hukuki danışmanlık.",
    type: "website",
    locale: "tr_TR",
  },
};

function getBlogPlaceholder(slug: string) {
  if (slug.includes("bosanma")) return "https://picsum.photos/seed/bosanma/800/400";
  if (slug.includes("is-sozlesmesi")) return "https://picsum.photos/seed/issozlesmesi/800/400";
  if (slug.includes("miras")) return "https://picsum.photos/seed/miras/800/400";
  return `https://picsum.photos/seed/${slug}/800/400`;
}

export default function BlogPage() {
  return (
    <div>
      <PageHero
        eyebrow="Blog / Yazılar"
        title="Bilgilendirme Yazıları"
        description="Hukuki süreçleri daha anlaşılır hale getirmek amacıyla hazırlanan bilgilendirme yazılarına buradan ulaşabilirsiniz."
      />

      <section className="section-inner">
        <h2 className="sr-only">Kategoriler</h2>
        <div className="mb-12 flex flex-wrap gap-3">
          {BLOG_CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/blog/${c.slug}`}
              className="rounded-full border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] px-4 py-2 text-sm font-semibold text-[var(--gold)] transition-colors hover:border-[var(--gold)] hover:bg-[rgba(201,168,76,0.12)]"
            >
              {c.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="section-inner grid gap-6 lg:grid-cols-3" aria-label="Tüm yazılar">
        {BLOG_POSTS.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] transition-all hover:-translate-y-1 hover:border-[var(--gold-dim)]"
          >
            <div
              className="flex h-52 items-end bg-cover bg-center p-5"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(8,10,18,0.2), rgba(8,10,18,0.72)), url(${getBlogPlaceholder(
                  post.slug,
                )})`,
              }}
            >
              <span className="rounded-full border border-[var(--gold-dim)] bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
                Makale {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[rgba(240,236,228,0.42)]">
                <span>{post.date}</span>
                <span className="text-white/20">•</span>
                <span>{post.category}</span>
              </div>
              <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--gold)]">
                {post.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--text-faint)]">{post.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.08] bg-black/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[rgba(240,236,228,0.52)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
                Yazıyı Oku <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}