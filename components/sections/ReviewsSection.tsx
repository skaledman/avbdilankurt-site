"use client";

import { useLanguage } from "@/components/language-context";
import { TESTIMONIALS } from "@/lib/site-data";

export function ReviewsSection() {
  const { language } = useLanguage();

  return (
    <div className="section-inner">
      <div className="mb-14 flex flex-col gap-4">
        <span className="section-kicker">
          {language === "tr" ? "Müvekkil Görüşleri" : "Client Feedback"}
        </span>
        <h2 className="section-title">
          {language === "tr"
            ? "Danışan Yorumları"
            : "What Clients Say"}
        </h2>
        <p className="section-description">
          {language === "tr"
            ? "Hukuki danışmanlık ve avukatlık hizmeti alan danışanların paylaştığı görüşler, süreç deneyimini yansıtmaktadır."
            : "Feedback from clients who have received legal counsel and representation reflects their experience of the process."}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <blockquote
            key={item.id}
            className="card-dark flex flex-col gap-4 p-6"
            cite=""
          >
            <p className="text-base leading-8 text-[var(--text-muted)]">
              &ldquo;{item.quote}&rdquo;
            </p>
            <footer className="mt-auto">
              <span className="inline-block rounded-full border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
                {item.serviceArea}
              </span>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
