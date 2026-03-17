"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { useLanguage } from "@/components/language-context";
import { SITE_INFO } from "@/lib/site-data";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvrngqa";

export function ContactSection() {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [kvkkConsent, setKvkkConsent] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!kvkkConsent) return;
    setSubmitting(true);
    setSent(false);
    setError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") body[key] = value;
    });

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
      if (res.ok) {
        setSent(true);
        form.reset();
        setKvkkConsent(false);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="section-inner">
      {/* Header */}
      <div className="mb-14 flex flex-col gap-4">
        <span className="section-kicker">
          {t("common.contact")}
        </span>
        <h2 className="section-title">
          {t("contact.title")}
        </h2>
        <p className="section-description">
          {t("contact.description")}
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        {/* Left: Contact info */}
        <div className="flex flex-col gap-4">
          {/* Phone */}
          <a
            href="tel:+905465781662"
            className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5 transition-all hover:border-[var(--gold-dim)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] transition-colors group-hover:border-[var(--gold)]">
              <Phone size={18} className="text-[var(--gold)]" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                {t("contact.phoneLabel")}
              </p>
              <p className="mt-0.5 text-base font-medium text-[var(--foreground)]">
                +90 546 578 16 62
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@avbdilankurt.com"
            className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5 transition-all hover:border-[var(--gold-dim)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] transition-colors group-hover:border-[var(--gold)]">
              <Mail size={18} className="text-[var(--gold)]" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                E-mail
              </p>
              <p className="mt-0.5 text-base font-medium text-[var(--foreground)]">
                info@avbdilankurt.com
              </p>
            </div>
          </a>

          {/* Legal disclaimer */}
          <div className="mt-2 rounded-2xl border border-white/[0.04] bg-white/[0.02] p-4">
            <p className="text-[12px] leading-7 text-[rgba(232,229,221,0.44)]">
              {t("contact.legalDisclaimer")}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--gold-dim)] bg-[var(--bg-card)] p-2 shadow-[0_8px_24px_rgba(201,168,76,0.12)]">
            <div className="rounded-xl border border-white/[0.06] bg-black/10 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)]">
                    <MapPin size={18} className="text-[var(--gold)]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[rgba(240,236,228,0.45)]">
                      {t("contact.locationLabel")}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                      {SITE_INFO.address}
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps?q=Re%C5%9Fatbey,%20Be%C5%9F%20Ocak%20Cd.%20Nevin%20Han%C4%B1m%20Apartman%C4%B1%20Kat:3%20Daire:5%2001120%20Seyhan%20Adana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--gold)] transition-colors hover:border-[var(--gold)] hover:bg-[rgba(201,168,76,0.12)]"
                >
                  {t("contact.openInMaps")}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-6 sm:p-8">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
            {t("contact.formKicker")}
          </p>
          <p className="mb-6 text-sm leading-7 text-[var(--text-faint)]">
            {t("contact.formDescription")}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                  {t("contact.fullNameLabel")} *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="h-11 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-base text-[var(--foreground)] outline-none transition-colors placeholder:text-[rgba(240,236,228,0.2)] focus:border-[var(--gold-dim)] focus:bg-white/[0.05]"
                  placeholder={t("contact.fullNamePlaceholder")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                  {t("contact.emailLabel")} *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="h-11 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-base text-[var(--foreground)] outline-none transition-colors placeholder:text-[rgba(240,236,228,0.2)] focus:border-[var(--gold-dim)] focus:bg-white/[0.05]"
                  placeholder={t("contact.emailPlaceholder")}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                  {t("contact.formPhoneLabel")}
                </label>
                <input
                  name="phone"
                  type="tel"
                  className="h-11 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-base text-[var(--foreground)] outline-none transition-colors placeholder:text-[rgba(240,236,228,0.2)] focus:border-[var(--gold-dim)] focus:bg-white/[0.05]"
                  placeholder="+90 5xx xxx xx xx"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                  {t("contact.priorityLabel")} *
                </label>
                <select
                  name="priority"
                  required
                  defaultValue=""
                  className="h-11 w-full rounded-xl border border-white/[0.1] bg-[#0B1120] px-4 text-base text-white outline-none transition-colors focus:border-[var(--gold)] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.18)]"
                >
                  <option value="" disabled>
                    {t("contact.select")}
                  </option>
                  <option value="normal">{t("contact.priorityNormal")}</option>
                  <option value="urgent">{t("contact.priorityUrgent")}</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                  {t("contact.topicLabel")} *
                </label>
                <select
                  name="topic"
                  required
                  defaultValue=""
                  className="h-11 w-full rounded-xl border border-white/[0.1] bg-[#0B1120] px-4 text-base text-white outline-none transition-colors focus:border-[var(--gold)] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.18)]"
                >
                  <option value="" disabled>
                    {t("contact.select")}
                  </option>
                  <option value="family">{t("contact.topicFamily")}</option>
                  <option value="criminal">{t("contact.topicCriminal")}</option>
                  <option value="employment">{t("contact.topicEmployment")}</option>
                  <option value="enforcement">{t("contact.topicEnforcement")}</option>
                  <option value="inheritance">{t("contact.topicInheritance")}</option>
                  <option value="realEstate">{t("contact.topicRealEstate")}</option>
                  <option value="commercial">{t("contact.topicCommercial")}</option>
                  <option value="other">{t("contact.topicOther")}</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                  {t("contact.serviceTypeLabel")}
                </label>
                <select
                  name="service_type"
                  defaultValue=""
                  className="h-11 w-full rounded-xl border border-white/[0.1] bg-[#0B1120] px-4 text-base text-white outline-none transition-colors focus:border-[var(--gold)] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.18)]"
                >
                  <option value="">
                    {t("contact.selectOptional")}
                  </option>
                  <option value="litigation">{t("contact.serviceTypeLitigation")}</option>
                  <option value="counsel">{t("contact.serviceTypeCounsel")}</option>
                  <option value="contractReview">{t("contact.serviceTypeContractReview")}</option>
                  <option value="documentPrep">{t("contact.serviceTypeDocumentPrep")}</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                {t("contact.messageLabel")} *
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-base leading-7 text-[var(--foreground)] outline-none transition-colors placeholder:text-[rgba(240,236,228,0.2)] focus:border-[var(--gold-dim)] focus:bg-white/[0.05]"
                placeholder={t("contact.messagePlaceholder")}
              />
            </div>

            <div className="flex flex-col gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-[var(--text-soft)]">
                <input
                  type="checkbox"
                  required
                  checked={kvkkConsent}
                  onChange={(e) => setKvkkConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 accent-[var(--gold)]"
                  aria-required="true"
                />
                <span>
                  {t("contact.kvkkPrefix")}{" "}
                  <Link
                    href="/kvkk-aydinlatma"
                    className="font-medium text-[var(--gold)] underline underline-offset-2 hover:text-[var(--gold-light)]"
                  >
                    {t("contact.kvkkLink")}
                  </Link>
                  {t("contact.kvkkSuffix")}
                </span>
              </label>
            </div>

            <div className="flex items-center justify-between gap-4 pt-1">
              <p className="text-[11px] leading-6 text-[rgba(232,229,221,0.38)]">
                {t("contact.formNotice")}
              </p>
              <button
                type="submit"
                disabled={submitting || !kvkkConsent}
                className="shrink-0 rounded-full bg-[var(--gold)] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#0a0a0a] transition-all hover:bg-[var(--gold-light)] hover:shadow-[0_6px_24px_rgba(201,168,76,0.2)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? t("contact.sending") : t("contact.send")}
              </button>
            </div>

            {sent && (
              <p className="text-sm font-medium text-[var(--gold)]">
                {t("contact.success")}
              </p>
            )}
            {error && (
              <p className="text-sm font-medium text-red-400">
                {t("contact.error")}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
