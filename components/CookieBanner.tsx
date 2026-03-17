"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const STORAGE_KEY = "cookie_consent_accepted";

export function CookieBanner() {
  const t = useTranslations();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t("cookie.ariaLabel")}
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-white/[0.08] bg-[rgba(10,13,24,0.98)] px-4 py-4 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md sm:px-6"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-[var(--text-soft)]">
          {t("cookie.text")}{" "}
          <Link
            href="/cerez-politikasi"
            className="font-medium text-[var(--gold)] underline underline-offset-2 hover:text-[var(--gold-light)]"
          >
            {t("cookie.policy")}
          </Link>
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full border border-[var(--gold-dim)] bg-[var(--gold)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0a] transition-colors hover:bg-[var(--gold-light)] hover:border-[var(--gold)]"
        >
          {t("cookie.accept")}
        </button>
      </div>
    </div>
  );
}
