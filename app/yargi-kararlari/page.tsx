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

export default function CourtDecisionsPage() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredDecisions = useMemo(() => {
    if (activeCategory === "Tümü") {
      return COURT_DECISIONS;
    }

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
                className="group overflow-hidden rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] transition-all hover:-translate-y-1 hover:border-[var(--gold-dim)]"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, rgba(9,25,14,0.32), rgba(9,25,14,0.8)), url(https://picsum.photos/seed/yargi/800/400)",
                  }}
                />
                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-[0.18em] text-[rgba(240,236,228,0.42)]">
                    <span className="rounded-full border border-white/[0.08] bg-black/10 px-3 py-1 text-[var(--foreground)]">
                      {decision.category}
                    </span>
                    <span>{decision.date}</span>
                  </div>

                  <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--gold)]">
                    {decision.title}
                  </h2>

                  <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
                    <strong>Karar Yeri:</strong> {decision.court}
                  </p>

                  <p className="mt-4 text-base leading-8 text-[var(--text-faint)]">
                    {decision.excerpt}
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/[0.06] bg-black/10 p-4 text-base leading-8 text-[var(--text-faint)]">
                    {decision.summary}
                  </div>

                  <span className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
                    Kararın Tamamını İncele
                  </span>
                </div>
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
            <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
              Kategoriler
            </h3>
            <div className="mt-5 flex flex-col divide-y divide-white/[0.06]">
              {categories.slice(1).map((category) => (
                <div
                  key={category}
                  className="flex items-center justify-between py-3 text-base text-[var(--text-muted)]"
                >
                  <span>{category}</span>
                  <span className="text-[var(--gold)]">
                    {COURT_DECISIONS.filter((item) => item.category === category).length}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] p-6">
            <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
              Not
            </h3>
            <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
              Yargı kararları özetleri, yalnızca genel bilgilendirme amacıyla derlenmiştir. Her
              uyuşmazlık kendi somut olayına göre ayrıca değerlendirilmelidir.
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