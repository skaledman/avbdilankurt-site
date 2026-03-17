"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/lib/site-data";
import { useLanguage } from "@/components/language-context";

export default function BlogPage() {
  const { language } = useLanguage();

  const heroEyebrow =
    language === "en" ? "Blog / Articles" : "Blog / Yazılar";
  const heroTitle =
    language === "en" ? "Informative Articles" : "Bilgilendirme Yazıları";
  const heroDescription =
    language === "en"
      ? "You can access informative articles prepared to clarify legal processes from this page."
      : "Hukuki süreçleri daha anlaşılır hale getirmek amacıyla hazırlanan bilgilendirme yazılarına buradan ulaşabilirsiniz.";

  const categoryLabelMap: Record<string, { tr: string; en: string }> = {
    "Aile Hukuku": { tr: "Aile Hukuku", en: "Family Law" },
    "İş Hukuku": { tr: "İş Hukuku", en: "Labor Law" },
    "Miras Hukuku": { tr: "Miras Hukuku", en: "Inheritance Law" },
    "Ceza Hukuku": { tr: "Ceza Hukuku", en: "Criminal Law" },
    "Gayrimenkul Hukuku": { tr: "Gayrimenkul Hukuku", en: "Real Estate Law" },
    "Genel Hukuk": { tr: "Genel Hukuk", en: "General Legal Topics" },
  };

  const monthMapTrToEn: Record<string, string> = {
    Ocak: "January",
    Şubat: "February",
    Mart: "March",
    Nisan: "April",
    Mayıs: "May",
    Haziran: "June",
    Temmuz: "July",
    Ağustos: "August",
    Eylül: "September",
    Ekim: "October",
    Kasım: "November",
    Aralık: "December",
  };

  function formatDate(date: string) {
    if (language !== "en") return date;
    const [day, monthTr, year] = date.split(" ");
    const monthEn = monthMapTrToEn[monthTr] ?? monthTr;
    return `${monthEn} ${day}, ${year}`;
  }

  function translateCategory(category: string) {
    const entry = categoryLabelMap[category];
    if (!entry) return category;
    return language === "en" ? entry.en : entry.tr;
  }

  const readCta = language === "en" ? "Read article" : "Yazıyı Oku";
  const categoriesSrOnly =
    language === "en" ? "Categories" : "Kategoriler";

  return (
    <div>
      <PageHero
        eyebrow={heroEyebrow}
        title={heroTitle}
        description={heroDescription}
      />

      <section className="section-inner pt-8">
        <h2 className="sr-only">{categoriesSrOnly}</h2>
        <div className="mb-12 flex flex-wrap gap-3">
          {BLOG_CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/blog/${c.slug}`}
              className="rounded-full border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] px-4 py-2 text-sm font-semibold text-[var(--gold)] transition-colors hover:border-[var(--gold)] hover:bg-[rgba(201,168,76,0.12)]"
            >
              {translateCategory(c.title)}
            </Link>
          ))}
        </div>
      </section>

      <section
        className="section-inner grid gap-6 lg:grid-cols-3"
        aria-label={language === "en" ? "All articles" : "Tüm yazılar"}
      >
        {BLOG_POSTS.map((post) => {
          const title = language === "en" ? post.title.en : post.title.tr;
          const summary = language === "en" ? post.summary.en : post.summary.tr;
          return (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group card-dark flex min-h-[300px] flex-col rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-[var(--gold-dim)]"
          >
            <span className="inline-block w-fit rounded-full border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
              {translateCategory(post.category)}
            </span>
            <h2 className="mt-4 line-clamp-2 min-h-[3.2em] font-heading text-xl font-semibold leading-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--gold)] sm:text-2xl">
              {title}
            </h2>
            <p className="mt-3 line-clamp-3 min-h-[96px] text-base leading-8 text-[var(--text-faint)]">
              {summary}
            </p>
            <p className="mt-auto pt-4 text-[11px] uppercase tracking-[0.2em] text-[rgba(240,236,228,0.42)]">
              {formatDate(post.date)}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
              {readCta}
              <ArrowRight size={14} />
            </span>
          </Link>
        )})}
      </section>
    </div>
  );
}
