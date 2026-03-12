"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { COURT_DECISIONS } from "@/lib/site-data";

const categories = [
  "Tümü",
  "Anayasa Mahkemesi",
  "Bölge Adliye Mahkemesi",
  "Danıştay",
  "Yargıtay",
];

export default function CourtDecisionsPageClient() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredDecisions = useMemo(() => {
    if (activeCategory === "Tümü") return COURT_DECISIONS;
    return COURT_DECISIONS.filter((decision) => decision.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <PageHero
        eyebrow="İçtihat / Yargı Kararları"
        title="Yargı Kararları"
        description="Farklı yargı mercilerine ait, uygulamada yol gösterici nitelikteki seçilmiş karar özetlerine bu sayfadan ulaşabilirsiniz. İçerikler genel bilgilendirme amaçlıdır."
      />

      <section className="section-inner grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div>
          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-xl px-5 py-3 text-sm transition-colors ${
                  activeCategory === category
                    ? "bg-[var(--gold)] text-[#0a0a0a]"
                    : "border border-white/[0.06] bg-[var(--bg-card)] text-[var(--text-muted)] hover:border-[var(--gold-dim)] hover:text-[var(--foreground)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {filteredDecisions.map((decision) => (
              <Link
                key={decision.slug}
                href={`/yargi-kararlari/${decision.slug}`}
                className="group flex min-h-[320px] flex-col rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--gold-dim)] sm:p-7"
              >
                <span className="inline-block w-fit rounded-full border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  {decision.category}
                </span>
                <h2 className="mt-4 font-heading text-2xl font-semibold leading-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--gold)] sm:text-3xl">
                  {decision.title}
                </h2>
                <p className="mt-3 text-sm text-[var(--text-muted)]">{decision.court}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[rgba(240,236,228,0.42)]">
                  {decision.date}
                </p>
                <p className="mt-4 line-clamp-3 min-h-[96px] text-base leading-8 text-[var(--text-faint)]">
                  {decision.summary}
                </p>
                <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
                  Detayı incele
                  <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>

          {filteredDecisions.length === 0 && (
            <div className="rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] p-8 text-base text-[var(--text-muted)]">
              Seçilen kategori için gösterilecek karar bulunamadı.
            </div>
          )}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28">
          <div className="rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] p-6">
            <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">Kategoriler</h3>
            <div className="mt-5 flex flex-col divide-y divide-white/[0.06]">
              {categories.slice(1).map((category) => (
                <div key={category} className="flex items-center justify-between py-3 text-base text-[var(--text-muted)]">
                  <span>{category}</span>
                  <span className="text-[var(--gold)]">
                    {COURT_DECISIONS.filter((item) => item.category === category).length}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] p-6">
            <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">Not</h3>
            <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
              Yargı kararları özetleri, yalnızca genel bilgilendirme amacıyla derlenmiştir. Her uyuşmazlık kendi somut olayına göre ayrıca değerlendirilmelidir.
            </p>
            <Link
              href="/iletisim"
              className="mt-6 inline-flex rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-semibold text-[#0a0a0a]"
            >
              Hukuki değerlendirme için iletişime geçin
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}