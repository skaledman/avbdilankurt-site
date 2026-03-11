import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { COURT_DECISIONS, getCourtDecisionBySlug } from "@/lib/site-data";

export function generateStaticParams() {
  return COURT_DECISIONS.map((decision) => ({ slug: decision.slug }));
}

export default async function CourtDecisionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const decision = getCourtDecisionBySlug(slug);

  if (!decision) {
    notFound();
  }

  const relatedDecisions = COURT_DECISIONS.filter(
    (item) => item.slug !== decision.slug && item.category === decision.category,
  ).slice(0, 3);

  const fallbackRelated = relatedDecisions.length > 0
    ? relatedDecisions
    : COURT_DECISIONS.filter((item) => item.slug !== decision.slug).slice(0, 3);

  return (
    <div>
      <PageHero
        eyebrow="Yargı Kararları"
        title={decision.title}
        description={decision.summary}
      />

      <section className="section-inner grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <article className="rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] p-6 sm:p-8">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[rgba(240,236,228,0.45)]">
            <Link href="/" className="transition-colors hover:text-[var(--gold)]">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <Link href="/yargi-kararlari" className="transition-colors hover:text-[var(--gold)]">Yargı Kararları</Link>
            <ChevronRight size={14} />
            <span className="text-[var(--gold)]">{decision.category}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.18em] text-[var(--text-faint)]">
            <span className="rounded-full border border-[var(--gold-dim)] px-3 py-1 text-[var(--gold)]">
              {decision.category}
            </span>
            <span>{decision.date}</span>
          </div>

          <h2 className="mt-6 font-heading text-4xl font-semibold text-[var(--foreground)]">
            {decision.title}
          </h2>

          <div className="mt-6 rounded-2xl border border-white/[0.06] bg-black/10 p-5">
            <p className="text-base leading-8 text-[var(--text-muted)]">
              <strong>Karar Yeri:</strong> {decision.court}
            </p>
            <p className="mt-3 text-base leading-8 text-[var(--text-faint)]">
              {decision.excerpt}
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {decision.content.map((paragraph) => (
              <p key={paragraph.slice(0, 60)} className="text-base leading-8 text-[var(--text-faint)]">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28">
          <div className="rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] p-6">
            <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
              İlgili Kararlar
            </h3>

            <div className="mt-5 flex flex-col divide-y divide-white/[0.06]">
              {fallbackRelated.map((item) => (
                <Link
                  key={item.slug}
                  href={`/yargi-kararlari/${item.slug}`}
                  className="py-4 transition-colors hover:text-[var(--gold)]"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">{item.category}</p>
                  <p className="mt-2 text-base font-medium text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-faint)]">{item.summary}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] p-6">
            <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">Değerlendirme Notu</h3>
            <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
              Yargı kararlarının somut uyuşmazlığa etkisi; olayın özellikleri, delil durumu ve güncel içtihat çizgisiyle birlikte değerlendirilmelidir.
            </p>
            <Link
              href="/iletisim"
              className="mt-6 inline-flex rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-[var(--gold-light)]"
            >
              Hukuki görüş için iletişime geçin
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}