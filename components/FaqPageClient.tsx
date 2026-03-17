"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLdFaq } from "@/components/JsonLdFaq";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/components/language-context";
import { FAQ_ITEMS_EN, FAQ_ITEMS_TR } from "@/lib/site-data";

export function FaqPageClient() {
  const { language } = useLanguage();
  const items = language === "tr" ? FAQ_ITEMS_TR : FAQ_ITEMS_EN;

  return (
    <div>
      <JsonLdFaq items={items} />
      <PageHero
        eyebrow="SSS"
        title={language === "tr" ? "Sık Sorulan Sorular" : "Frequently Asked Questions"}
        description={
          language === "tr"
            ? "İlk başvuru, belge hazırlığı, aile hukuku, ceza soruşturması, iş hukuku ve miras süreçlerine ilişkin en çok merak edilen konulara genel bilgilendirme niteliğinde yanıtlar burada yer almaktadır."
            : "General answers to frequently asked questions about initial steps, document preparation and common legal processes are provided here."
        }
      />

      <section className="section-inner">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[rgba(240,236,228,0.45)]">
          <Link href="/" className="transition-colors hover:text-[var(--gold)]">
            {language === "tr" ? "Ana Sayfa" : "Home"}
          </Link>
          <ChevronRight size={14} aria-hidden />
          <span className="text-[var(--gold)]">
            {language === "tr" ? "Sık Sorulan Sorular" : "FAQ"}
          </span>
        </div>

        <FaqAccordion items={items} />

        <div className="mt-10 rounded-3xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] p-6 sm:p-8">
          <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
            {language === "tr" ? "Önemli Bilgilendirme" : "Important Notice"}
          </h3>
          <p className="mt-4 text-sm leading-8 text-[rgba(240,236,228,0.7)]">
            {language === "tr"
              ? "Bu sayfadaki açıklamalar yalnızca genel bilgilendirme amacı taşır. Her somut olayın koşulları farklı olduğundan, hak kaybı yaşanmaması için özel hukuki değerlendirme alınması önerilir. Bu içerikler avukat-müvekkil ilişkisi veya kesin hukuki görüş niteliği taşımaz."
              : "This page is for general information only. Since each case has its own circumstances, obtaining legal advice tailored to your situation is recommended. This content does not constitute legal advice or establish an attorney-client relationship."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/iletisim"
              className="inline-flex rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-[var(--gold-light)]"
            >
              {language === "tr" ? "İletişime Geçin" : "Contact"}
            </Link>
            <Link
              href="/hizmetler"
              className="inline-flex rounded-full border border-white/10 bg-[var(--bg-card)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--gold-dim)] hover:text-[var(--gold)]"
            >
              {language === "tr" ? "Hizmet Alanlarını İnceleyin" : "View Practice Areas"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

