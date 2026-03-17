import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, PhoneCall } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import {
  getBlogPostsForService,
  getServiceBySlug,
  SERVICES,
  SITE_INFO,
} from "@/lib/site-data";
import { absoluteUrl } from "@/lib/site-url";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Hizmet Bulunamadı" };
  const title = `${service.title.tr} | Av. Betül Dilan Kurt | Adana Avukat`;
  const description =
    service.heroDescription.tr.length > 155
      ? service.heroDescription.tr.slice(0, 152) + "…"
      : service.heroDescription.tr;
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(`/hizmetler/${slug}`) },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "tr_TR",
      url: absoluteUrl(`/hizmetler/${slug}`),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const relatedPosts = getBlogPostsForService(service.title.tr, 3);
  const subServices = service.subServices ?? [];
  const subServicesWithPages = subServices.filter((s) => s.hasPage);

  return (
    <div>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title={service.title.tr}
        description={service.heroDescription.tr}
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
            <span className="text-[var(--gold)]">{service.title.tr}</span>
          </div>

          <p className="text-lg leading-8 text-[var(--text-muted)]">
            {service.shortDescription.tr}
          </p>

          <div className="mt-8 space-y-6">
            {service.detailParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-[var(--text-faint)]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] p-6">
            <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
              Bu alanda öne çıkan başlıklar
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="rounded-xl border border-white/[0.06] bg-black/10 px-4 py-3 text-base text-[var(--text-muted)]">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {subServices.length > 0 && (
            <div className="mt-10 rounded-2xl border border-white/[0.06] bg-black/10 p-6">
              <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
                Alt Başlıklar
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                Aşağıdaki başlıklar genel bilgilendirme niteliğindedir. Somut durumunuza göre değerlendirme için iletişime geçebilirsiniz.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {subServices.map((sub) => (
                  <div
                    key={sub.slug}
                    className="rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5"
                  >
                    <h3 className="text-base font-semibold text-[var(--foreground)]">
                      {sub.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-faint)]">
                      {sub.summary}
                    </p>
                    {sub.hasPage && (
                      <p className="mt-4">
                        <Link
                          href={`/hizmetler/${service.slug}/${sub.slug}`}
                          className="text-sm font-semibold text-[var(--gold)] transition-colors hover:text-[var(--gold-light)]"
                        >
                          Detayı inceleyin →
                        </Link>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28" aria-label="İlgili içerik">
          {subServicesWithPages.length > 0 && (
            <div className="rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] p-6">
              <h3 className="font-heading text-xl font-semibold text-[var(--foreground)]">
                İlgili Alt Başlıklar
              </h3>
              <div className="mt-5 flex flex-col divide-y divide-white/[0.06]">
                {subServicesWithPages.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/hizmetler/${service.slug}/${sub.slug}`}
                    className="py-4 transition-colors hover:text-[var(--gold)]"
                  >
                    <p className="text-base font-medium text-[var(--foreground)]">
                      {sub.title}
                    </p>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">
                      {sub.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {relatedPosts.length > 0 && (
            <div className="rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] p-6">
              <h3 className="font-heading text-xl font-semibold text-[var(--foreground)]">
                İlgili Yazılar
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                {service.title.tr} ile ilgili bilgilendirme yazıları.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {relatedPosts.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="rounded-xl border border-white/[0.06] bg-black/10 p-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--gold-dim)] hover:text-[var(--gold)]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <Link
                href="/blog"
                className="mt-3 inline-block text-sm font-semibold text-[var(--gold)] transition-colors hover:text-[var(--gold-light)]"
              >
                Tüm yazılar →
              </Link>
            </div>
          )}

          <div className="rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] p-6">
            <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
              Tüm Hizmetler
            </h3>
            <div className="mt-5 flex flex-col divide-y divide-white/[0.06]">
              {SERVICES.map((item) => (
                <Link
                  key={item.slug}
                  href={`/hizmetler/${item.slug}`}
                  className={`flex items-center justify-between py-3 text-base transition-colors hover:text-[var(--gold)] ${item.slug === service.slug ? "text-[var(--gold)]" : "text-[var(--text-muted)]"}`}
                >
                  <span>{item.title.tr}</span>
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