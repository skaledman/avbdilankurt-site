"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { useLanguage } from "@/components/language-context";
import { FAQ_ITEMS_EN, FAQ_ITEMS_TR } from "@/lib/site-data";

const HOMEPAGE_FAQ_COUNT = 3;

export function FaqPreviewSection() {
  const { language } = useLanguage();
  const items = language === "tr" ? FAQ_ITEMS_TR : FAQ_ITEMS_EN;
  return (
    <div className="section-inner">
      <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex max-w-2xl flex-col gap-4">
          <span className="section-kicker">SSS</span>
          <h2 className="section-title">
            {language === "tr" ? "Sık Sorulan Sorular" : "Frequently Asked Questions"}
          </h2>
          <p className="section-description max-w-2xl">
            {language === "tr"
              ? "İlk başvuru, dava süreleri, belge hazırlığı ve hukuki süreçlerin temel adımlarına ilişkin sık yöneltilen soruların kısa yanıtlarını burada bulabilirsiniz."
              : "Find brief answers to frequently asked questions about initial application, court timelines, document preparation and basic steps of legal processes."}
          </p>
        </div>
        <Link
          href="/sss"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] px-5 py-2.5 text-sm font-semibold text-[var(--gold)] transition-all hover:border-[var(--gold)] hover:bg-[rgba(201,168,76,0.12)]"
        >
          {language === "tr" ? "Tüm soruları gör" : "View all questions"}
          <ArrowRight size={16} />
        </Link>
      </div>

      <FaqAccordion items={items} previewCount={HOMEPAGE_FAQ_COUNT} />
    </div>
  );
}