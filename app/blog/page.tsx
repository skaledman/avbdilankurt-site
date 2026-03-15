import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Blog | Hukuki Bilgilendirme Yazıları",
  description:
    "Adana odaklı hukuki danışmanlık kapsamında aile hukuku, iş hukuku, miras hukuku, ceza hukuku ve gayrimenkul hukuku konularında bilgilendirme yazıları.",
  alternates: { canonical: absoluteUrl("/blog") },
  openGraph: {
    title: "Blog | Hukuki Bilgilendirme Yazıları | Av. Betül Dilan Kurt",
    description:
      "Aile hukuku, iş hukuku, miras hukuku ve diğer alanlarda bilgilendirme yazıları. Adana avukatlık ve hukuki danışmanlık.",
    type: "website",
    locale: "tr_TR",
    url: absoluteUrl("/blog"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Hukuki Bilgilendirme Yazıları | Av. Betül Dilan Kurt",
    description:
      "Adana merkezli hukuki danışmanlık kapsamında yayınlanan güncel bilgilendirme yazıları.",
  },
};

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
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group card-dark flex min-h-[300px] flex-col rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-[var(--gold-dim)]"
          >
            <span className="inline-block w-fit rounded-full border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
              {post.category}
            </span>
            <h2 className="mt-4 font-heading text-xl font-semibold leading-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--gold)] sm:text-2xl">
              {post.title}
            </h2>
            <p className="mt-3 line-clamp-3 min-h-[96px] text-base leading-8 text-[var(--text-faint)]">
              {post.summary}
            </p>
            <p className="mt-auto pt-4 text-[11px] uppercase tracking-[0.2em] text-[rgba(240,236,228,0.42)]">
              {post.date}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
              Yazıyı Oku
              <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
