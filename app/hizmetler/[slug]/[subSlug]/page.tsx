import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, PhoneCall } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { getServiceBySlug, SERVICES, SITE_INFO } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/site-url";

type Params = { slug: string; subSlug: string };

export function generateStaticParams(): Params[] {
  const params: Params[] = [];
  SERVICES.forEach((service) => {
    (service.subServices ?? [])
      .filter((s) => s.hasPage)
      .forEach((sub) => {
        params.push({ slug: service.slug, subSlug: sub.slug });
      });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug, subSlug } = await params;
  const service = getServiceBySlug(slug);
  const sub = service?.subServices?.find((s) => s.slug === subSlug);
  if (!service || !sub || !sub.hasPage) return { title: "Sayfa Bulunamadı" };

  const title = `${service.title} – ${sub.title} | Av. Betül Dilan Kurt`;
  const description =
    sub.summary.length > 155 ? sub.summary.slice(0, 152) + "…" : sub.summary;

  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(`/hizmetler/${slug}/${subSlug}`) },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "tr_TR",
      url: absoluteUrl(`/hizmetler/${slug}/${subSlug}`),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ServiceSubPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug, subSlug } = await params;
  const service = getServiceBySlug(slug);
  const sub = service?.subServices?.find((s) => s.slug === subSlug);

  if (!service || !sub || !sub.hasPage) notFound();

  const paragraphs = sub.detailParagraphs ?? [
    "Bu sayfa genel bilgilendirme amaçlıdır. Somut olayın koşulları, izlenecek hukuki yol ve süreç adımları bakımından belirleyicidir.",
    "Talebin niteliğine göre başvuru yolları, delil durumu ve zaman planlaması birlikte değerlendirilmelidir.",
    "Hak kaybı yaşanmaması için hukuki danışmanlık alınması önerilir.",
  ];

  return (
    <div>
      <PageHero
        eyebrow={service.title}
        title={sub.title}
        description={sub.summary}
      />

      <section className="section-inner grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <article className="rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] p-6 sm:p-8">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[rgba(240,236,228,0.45)]">
            <Link href="/" className="transition-colors hover:text-[var(--gold)]">
              Ana Sayfa
            </Link>
            <ChevronRight size={14} aria-hidden />
            <Link href="/hizmetler" className="transition-colors hover:text-[var(--gold)]">
              Hizmetler
            </Link>
            <ChevronRight size={14} aria-hidden />
            <Link
              href={`/hizmetler/${service.slug}`}
              className="transition-colors hover:text-[var(--gold)]"
            >
              {service.title}
            </Link>
            <ChevronRight size={14} aria-hidden />
            <span className="text-[var(--gold)]">{sub.title}</span>
          </div>

          <div className="space-y-6">
            {paragraphs.map((p) => (
              <p key={p} className="text-base leading-8 text-[var(--text-faint)]">
                {p}
              </p>
            ))}
          </div>

          {sub.bullets && sub.bullets.length > 0 && (
            <div className="mt-10 rounded-2xl border border-white/[0.06] bg-black/10 p-6">
              <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
                Başlıklar
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {sub.bullets.map((b) => (
                  <li
                    key={b}
                    className="rounded-xl border border-white/[0.06] bg-[var(--bg-card)] px-4 py-3 text-base text-[var(--text-muted)]"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28" aria-label="İlgili içerik">
          <div className="rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] p-6">
            <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
              İlgili Hizmet
            </h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Bu sayfa {service.title} alanı kapsamındadır.
            </p>
            <Link
              href={`/hizmetler/${service.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-[var(--gold)] transition-colors hover:text-[var(--gold-light)]"
            >
              {service.title} sayfasına dön →
            </Link>
          </div>

          <div className="rounded-3xl border border-[var(--gold-dim)] bg-[linear-gradient(180deg,rgba(201,168,76,0.16),rgba(201,168,76,0.06))] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
              İletişim
            </p>
            <h3 className="mt-3 font-heading text-3xl font-semibold text-[var(--foreground)]">
              Ön değerlendirme için ulaşın
            </h3>
            <p className="mt-3 text-base leading-8 text-[var(--text-muted)]">
              Süreç ve başvuru yollarına ilişkin genel bilgilendirme almak için iletişime geçebilirsiniz.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={SITE_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-[var(--gold-light)]"
              >
                <PhoneCall size={16} />
                Telefon ile Ara
              </a>
              <a
                href={SITE_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-[var(--bg-card)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--gold-dim)] hover:text-[var(--gold)]"
              >
                WhatsApp Üzerinden Yaz
              </a>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

