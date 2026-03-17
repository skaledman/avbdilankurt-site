"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type MiniCtaProps = {
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export function MiniCta({ title, description, primary, secondary }: MiniCtaProps) {
  return (
    <div className="mt-12 rounded-[1.75rem] border border-[var(--gold-dim)] bg-[linear-gradient(180deg,rgba(201,168,76,0.16),rgba(201,168,76,0.06))] px-6 py-6 sm:px-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
            {title}
          </p>
          <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={primary.href}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#0a0a0a] transition-colors hover:bg-[var(--gold-light)]"
          >
            {primary.label}
            <ArrowRight size={14} aria-hidden />
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-[var(--bg-card)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--foreground)] transition-colors hover:border-[var(--gold-dim)] hover:text-[var(--gold)]"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

