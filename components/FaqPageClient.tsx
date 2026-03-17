"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLdFaq } from "@/components/JsonLdFaq";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/components/language-context";
import { FAQ_ITEMS_EN, FAQ_ITEMS_TR } from "@/lib/site-data";

export function FaqPageClient() {
  const { language, t } = useLanguage();
  const items = language === "tr" ? FAQ_ITEMS_TR : FAQ_ITEMS_EN;

  return (
    <div>
      <JsonLdFaq items={items} />
      <PageHero
        eyebrow={t("faq.eyebrow")}
        title={t("faq.title")}
        description={t("faq.description")}
      />

      <section className="section-inner">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[rgba(240,236,228,0.45)]">
          <Link href="/" className="transition-colors hover:text-[var(--gold)]">
            {t("common.home")}
          </Link>
          <ChevronRight size={14} aria-hidden />
          <span className="text-[var(--gold)]">
            {t("common.faq")}
          </span>
        </div>

        <FaqAccordion items={items} />

        <div className="mt-10 rounded-3xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] p-6 sm:p-8">
          <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
            {t("faq.noticeTitle")}
          </h3>
          <p className="mt-4 text-sm leading-8 text-[rgba(240,236,228,0.7)]">
            {t("faq.noticeText")}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/iletisim"
              className="inline-flex rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-[var(--gold-light)]"
            >
              {t("common.contact")}
            </Link>
            <Link
              href="/hizmetler"
              className="inline-flex rounded-full border border-white/10 bg-[var(--bg-card)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--gold-dim)] hover:text-[var(--gold)]"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

