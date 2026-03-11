import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, PhoneCall } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { getServiceBySlug, SERVICES, SITE_INFO } from "@/lib/site-data";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <div>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title={service.title}
        description={service.heroDescription}
      />

      <section className="section-inner grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <article className="rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] p-6 sm:p-8">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[rgba(240,236,228,0.45)]">
            <Link href="/" className="transition-colors hover:text-[var(--gold)]">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <Link href="/hizmetler" className="transition-colors hover:text-[var(--gold)]">Hizmetler</Link>
            <ChevronRight size={14} />
            <span className="text-[var(--gold)]">{service.title}</span>
          </div>

          <h2 className="font-heading text-4xl font-semibold text-[var(--foreground)]">{service.title}</h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">{service.shortDescription}</p>

          <div className="mt-8 space-y-6">
            {service.detailParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-[var(--text-faint)]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] p-6">
            <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">Bu alanda öne çıkan başlıklar</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="rounded-xl border border-white/[0.06] bg-black/10 px-4 py-3 text-base text-[var(--text-muted)]">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28">
          <div className="rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] p-6">
            <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">Tüm Hizmetler</h3>
            <div className="mt-5 flex flex-col divide-y divide-white/[0.06]">
              {SERVICES.map((item) => (
                <Link
                  key={item.slug}
                  href={`/hizmetler/${item.slug}`}
                  className={`flex items-center justify-between py-3 text-base transition-colors hover:text-[var(--gold)] ${item.slug === service.slug ? "text-[var(--gold)]" : "text-[var(--text-muted)]"}`}
                >
                  <span>{item.title}</span>
                  <ChevronRight size={16} />
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--gold-dim)] bg-[linear-gradient(180deg,rgba(201,168,76,0.16),rgba(201,168,76,0.06))] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">İletişim</p>
            <h3 className="mt-3 font-heading text-3xl font-semibold text-[var(--foreground)]">Hukuki destek için ulaşın</h3>
            <p className="mt-3 text-base leading-8 text-[var(--text-muted)]">
              Dosyanızla ilgili ön değerlendirme ve süreç hakkında bilgi almak için telefon veya WhatsApp üzerinden iletişime geçebilirsiniz.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a href={SITE_INFO.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-[var(--gold-light)]">
                <PhoneCall size={16} />
                Telefon ile Ara
              </a>
              <a href={SITE_INFO.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-[var(--bg-card)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--gold-dim)] hover:text-[var(--gold)]">
                WhatsApp Üzerinden Yaz
              </a>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}