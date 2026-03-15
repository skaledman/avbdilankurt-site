import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLdFaq } from "@/components/JsonLdFaq";
import { PageHero } from "@/components/PageHero";
import { FAQ_ITEMS } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular | Adana Hukuki Danışmanlık",
  description:
    "İlk danışma, boşanma davası süresi, nafaka, ceza soruşturması, iş hukuku ve miras paylaşımı gibi konularda sık sorulan sorular. Adana merkezli hukuki danışmanlık.",
  alternates: { canonical: absoluteUrl("/sss") },
  openGraph: {
    title: "Sık Sorulan Sorular | Av. Betül Dilan Kurt",
    description:
      "Hukuki süreçler, ilk görüşme ve belge hazırlığı hakkında sık sorulan soruların kısa yanıtları.",
    type: "website",
    locale: "tr_TR",
    url: absoluteUrl("/sss"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Sık Sorulan Sorular | Av. Betül Dilan Kurt",
    description:
      "Hukuki süreçler ve ilk başvuru hakkında sık sorulan soruların yanıtları.",
  },
};

export default function FaqPage() {
  return (
    <div>
      <JsonLdFaq items={FAQ_ITEMS} />
      <PageHero
        eyebrow="SSS"
        title="Sık Sorulan Sorular"
        description="İlk başvuru, belge hazırlığı, aile hukuku, ceza soruşturması, iş hukuku ve miras süreçlerine ilişkin en çok merak edilen konulara genel bilgilendirme niteliğinde yanıtlar burada yer almaktadır."
      />

      <section className="section-inner">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[rgba(240,236,228,0.45)]">
          <Link href="/" className="transition-colors hover:text-[var(--gold)]">Ana Sayfa</Link>
          <ChevronRight size={14} aria-hidden />
          <span className="text-[var(--gold)]">Sık Sorulan Sorular</span>
        </div>

        <FaqAccordion items={FAQ_ITEMS} />

        <div className="mt-10 rounded-3xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] p-6 sm:p-8">
          <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
            Önemli Bilgilendirme
          </h3>
          <p className="mt-4 text-sm leading-8 text-[rgba(240,236,228,0.7)]">
            Bu sayfadaki açıklamalar yalnızca genel bilgilendirme amacı taşır. Her somut olayın
            koşulları farklı olduğundan, hak kaybı yaşanmaması için özel hukuki değerlendirme
            alınması önerilir. Bu içerikler avukat-müvekkil ilişkisi veya kesin hukuki görüş
            niteliği taşımaz.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/iletisim"
              className="inline-flex rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-[var(--gold-light)]"
            >
              İletişime Geçin
            </Link>
            <Link
              href="/hizmetler"
              className="inline-flex rounded-full border border-white/10 bg-[var(--bg-card)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--gold-dim)] hover:text-[var(--gold)]"
            >
              Hizmet Alanlarını İnceleyin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}