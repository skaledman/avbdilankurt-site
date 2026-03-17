import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { COURT_DECISIONS } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Yargı Kararları | Seçilmiş İçtihat Özetleri",
  description:
    "Aile hukuku, iş hukuku ve diğer alanlarda uygulamada yol gösterici seçilmiş yargı kararları ve içtihat özetleri. Adana merkezli hukuki bilgilendirme.",
  alternates: { canonical: absoluteUrl("/yargi-kararlari") },
  openGraph: {
    title: "Yargı Kararları | Av. Betül Dilan Kurt",
    description: "Uygulamada yol gösterici seçilmiş yargı kararları ve içtihat özetleri.",
    type: "website",
    locale: "tr_TR",
    url: absoluteUrl("/yargi-kararlari"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Yargı Kararları | Av. Betül Dilan Kurt",
    description: "Seçilmiş yargı kararları ve içtihat özetleri.",
  },
};

const CATEGORY_MAP: Record<string, { label: string; category: string }> = {
  yargitay: { label: "Yargıtay Kararları", category: "Yargıtay" },
  "bolge-adliye": { label: "Bölge Adliye Mahkemesi Kararları", category: "Bölge Adliye Mahkemesi" },
  danistay: { label: "Danıştay Kararları", category: "Danıştay" },
};

export default function CourtDecisionsPage({
  searchParams,
}: {
  searchParams?: { kategori?: string };
}) {
  const kategori = searchParams?.kategori;
  const mapped = kategori ? CATEGORY_MAP[kategori] : undefined;
  const filteredDecisions = mapped
    ? COURT_DECISIONS.filter((d) => d.category === mapped.category)
    : COURT_DECISIONS;

  return (
    <div>
      <PageHero
        eyebrow="İçtihat / Yargı Kararları"
        title="Yargı Kararları"
        description="Farklı yargı mercilerine ait, uygulamada yol gösterici nitelikteki seçilmiş karar özetlerine bu sayfadan ulaşabilirsiniz. İçerikler genel bilgilendirme amaçlıdır."
      />

      <section className="section-inner">
        {mapped ? (
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <span className="inline-flex items-center rounded-full border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
              {mapped.label}
            </span>
            <Link
              href="/yargi-kararlari"
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)] transition-colors hover:text-[var(--gold)]"
            >
              Tüm Kararları Gör →
            </Link>
          </div>
        ) : null}

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
              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
                Detayı incele
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>

        {filteredDecisions.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] p-8 text-base text-[var(--text-muted)]">
            Seçilen kategori için gösterilecek karar bulunamadı.
          </div>
        ) : null}
      </section>
    </div>
  );
}