import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FAQ_ITEMS } from "@/lib/site-data";

export function FaqPreviewSection() {
  return (
    <div className="section-inner">
      <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex max-w-2xl flex-col gap-4">
          <span className="section-kicker">SSS</span>
          <h2 className="section-title">Sık Sorulan Sorular</h2>
          <p className="section-description max-w-2xl">
            İlk başvuru, dava süreleri, belge hazırlığı ve hukuki süreçlerin temel adımlarına ilişkin sık yöneltilen soruların kısa yanıtlarını burada bulabilirsiniz.
          </p>
        </div>
        <Link
          href="/sss"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] px-5 py-2.5 text-sm font-semibold text-[var(--gold)] transition-all hover:border-[var(--gold)] hover:bg-[rgba(201,168,76,0.12)]"
        >
          Tüm soruları gör
          <ArrowRight size={16} />
        </Link>
      </div>

      <FaqAccordion items={FAQ_ITEMS} previewCount={8} />
    </div>
  );
}