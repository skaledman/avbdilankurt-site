"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/site-data";

type FaqAccordionProps = {
  items: FaqItem[];
  previewCount?: number;
};

export function FaqAccordion({ items, previewCount }: FaqAccordionProps) {
  const visibleItems = useMemo(
    () => (previewCount ? items.slice(0, previewCount) : items),
    [items, previewCount],
  );
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid gap-4">
      {visibleItems.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={item.question}
            className={`card-dark overflow-hidden rounded-[1.4rem] ${isOpen ? "border-[rgba(201,168,76,0.28)]" : ""}`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              aria-expanded={isOpen}
            >
              <span className={`pr-2 text-sm font-semibold leading-6 sm:text-base ${isOpen ? "text-[var(--foreground)]" : "text-[var(--text-soft)]"}`}>
                {item.question}
              </span>
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "border-[var(--gold-dim)] bg-[rgba(201,168,76,0.08)] text-[var(--gold)]" : "border-white/[0.08] text-[var(--text-muted)]"}`}>
                <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </span>
            </button>
            <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <div className="border-t border-white/[0.06] px-5 pb-5 pt-4 text-sm leading-7 text-[var(--text-muted)] sm:px-6 sm:pb-6">
                  {item.answer}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}