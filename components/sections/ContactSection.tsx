"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { useLanguage } from "@/components/language-context";
import { SITE_INFO } from "@/lib/site-data";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvrngqa";

export function ContactSection() {
  const { language } = useLanguage();
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
          {language === "tr" ? "İletişim" : "Contact"}
        </span>
        <h2 className="section-title">
          {language === "tr" ? "Güvenilir Hukuki Destek İçin" : "For Reliable Legal Support"}
        </h2>
        <p className="section-description">
          {language === "tr"
            ? "Sorularınız veya danışmak istediğiniz konular için aşağıdaki kanallardan ya da form üzerinden ulaşabilirsiniz."
            : "For any questions or matters you wish to consult on, reach us via the channels below or through the contact form."}
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
                {language === "tr" ? "Telefon" : "Phone"}
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

          {/* Location */}
          <div className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)]">
              <MapPin size={18} className="text-[var(--gold)]" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                {language === "tr" ? "Şehir" : "City"}
              </p>
              <p className="mt-0.5 text-base font-medium text-[var(--foreground)]">
                {SITE_INFO.address}
              </p>
            </div>
          </div>

          {/* Legal disclaimer */}
          <div className="mt-2 rounded-2xl border border-white/[0.04] bg-white/[0.02] p-4">
            <p className="text-[12px] leading-7 text-[rgba(232,229,221,0.44)]">
              {language === "tr"
                ? "Bu internet sitesi bilgilendirme amaçlıdır; reklam veya iş kazanma amacı taşımaz. Avukatlık Kanunu m.55 ve TBB Reklam Yasağı Yönetmeliği kapsamında hazırlanmıştır."
                : "This website is for information only and does not constitute advertising or a solicitation of work. Prepared in line with Turkish Attorneyship Law art.55 and the Bar Association regulations on advertising."}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--gold-dim)] bg-[var(--bg-card)] p-2 shadow-[0_8px_24px_rgba(201,168,76,0.12)]">
            <div className="rounded-xl border border-white/[0.06] bg-black/10 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[rgba(240,236,228,0.45)]">
                {language === "tr" ? "Konum" : "Location"}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                {SITE_INFO.address}
              </p>
              <a
                href="https://www.google.com/maps?q=Re%C5%9Fatbey,%20Be%C5%9F%20Ocak%20Cd.%20Nevin%20Han%C4%B1m%20Apartman%C4%B1%20Kat:3%20Daire:5%2001120%20Seyhan%20Adana"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)] transition-colors hover:text-[var(--gold-light)]"
              >
                {language === "tr" ? "Haritada aç" : "Open in Maps"}
              </a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-6 sm:p-8">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
            {language === "tr" ? "İletişim Formu" : "Contact Form"}
          </p>
          <p className="mb-6 text-sm leading-7 text-[var(--text-faint)]">
            {language === "tr"
              ? "Lütfen iletişim bilgilerinizi ve kısaca talebinizi iletin. En kısa sürede dönüş sağlanacaktır."
              : "Please leave your contact details and a brief description of your request. You will be contacted as soon as possible."}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                  {language === "tr" ? "Ad Soyad" : "Full Name"} *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="h-11 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-base text-[var(--foreground)] outline-none transition-colors placeholder:text-[rgba(240,236,228,0.2)] focus:border-[var(--gold-dim)] focus:bg-white/[0.05]"
                  placeholder={language === "tr" ? "Adınız Soyadınız" : "Your Full Name"}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                  E-mail *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="h-11 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-base text-[var(--foreground)] outline-none transition-colors placeholder:text-[rgba(240,236,228,0.2)] focus:border-[var(--gold-dim)] focus:bg-white/[0.05]"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                  {language === "tr" ? "Telefon" : "Phone"}
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
                  {language === "tr" ? "Öncelik" : "Priority"} *
                </label>
                <select
                  name="priority"
                  required
                  defaultValue=""
                  className="h-11 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-base text-[var(--foreground)] outline-none transition-colors focus:border-[var(--gold-dim)] focus:bg-white/[0.05]"
                >
                  <option value="" disabled>
                    {language === "tr" ? "Seçiniz" : "Select"}
                  </option>
                  <option value={language === "tr" ? "Normal" : "Normal"}>
                    {language === "tr" ? "Normal" : "Normal"}
                  </option>
                  <option value={language === "tr" ? "Acil" : "Urgent"}>
                    {language === "tr" ? "Acil" : "Urgent"}
                  </option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                  {language === "tr" ? "Konu" : "Topic"} *
                </label>
                <select
                  name="topic"
                  required
                  defaultValue=""
                  className="h-11 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-base text-[var(--foreground)] outline-none transition-colors focus:border-[var(--gold-dim)] focus:bg-white/[0.05]"
                >
                  <option value="" disabled>
                    {language === "tr" ? "Seçiniz" : "Select"}
                  </option>
                  <option value={language === "tr" ? "Aile Hukuku" : "Family Law"}>
                    {language === "tr" ? "Aile Hukuku" : "Family Law"}
                  </option>
                  <option value={language === "tr" ? "Ceza Hukuku" : "Criminal Law"}>
                    {language === "tr" ? "Ceza Hukuku" : "Criminal Law"}
                  </option>
                  <option value={language === "tr" ? "İş Hukuku" : "Employment Law"}>
                    {language === "tr" ? "İş Hukuku" : "Employment Law"}
                  </option>
                  <option value={language === "tr" ? "İcra & İflas" : "Enforcement & Bankruptcy"}>
                    {language === "tr" ? "İcra & İflas" : "Enforcement & Bankruptcy"}
                  </option>
                  <option value={language === "tr" ? "Miras Hukuku" : "Inheritance Law"}>
                    {language === "tr" ? "Miras Hukuku" : "Inheritance Law"}
                  </option>
                  <option value={language === "tr" ? "Gayrimenkul" : "Real Estate"}>
                    {language === "tr" ? "Gayrimenkul" : "Real Estate"}
                  </option>
                  <option value={language === "tr" ? "Ticaret Hukuku" : "Commercial Law"}>
                    {language === "tr" ? "Ticaret Hukuku" : "Commercial Law"}
                  </option>
                  <option value={language === "tr" ? "Diğer" : "Other"}>
                    {language === "tr" ? "Diğer" : "Other"}
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                  {language === "tr" ? "Hizmet Türü" : "Service type"}
                </label>
                <select
                  name="service_type"
                  defaultValue=""
                  className="h-11 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-base text-[var(--foreground)] outline-none transition-colors focus:border-[var(--gold-dim)] focus:bg-white/[0.05]"
                >
                  <option value="">
                    {language === "tr" ? "Seçiniz (opsiyonel)" : "Select (optional)"}
                  </option>
                  <option value={language === "tr" ? "Dava takibi" : "Litigation"}>
                    {language === "tr" ? "Dava takibi" : "Litigation"}
                  </option>
                  <option value={language === "tr" ? "Danışmanlık" : "Legal counsel"}>
                    {language === "tr" ? "Danışmanlık" : "Legal counsel"}
                  </option>
                  <option value={language === "tr" ? "Sözleşme inceleme" : "Contract review"}>
                    {language === "tr" ? "Sözleşme inceleme" : "Contract review"}
                  </option>
                  <option value={language === "tr" ? "Belge/başvuru hazırlığı" : "Document/application preparation"}>
                    {language === "tr" ? "Belge/başvuru hazırlığı" : "Document/application preparation"}
                  </option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                {language === "tr" ? "Mesajınız" : "Your Message"} *
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-base leading-7 text-[var(--foreground)] outline-none transition-colors placeholder:text-[rgba(240,236,228,0.2)] focus:border-[var(--gold-dim)] focus:bg-white/[0.05]"
                placeholder={language === "tr" ? "Mesajınızı buraya yazınız..." : "Write your message here..."}
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
                  {language === "tr" ? (
                    <>
                      Kişisel verilerimin işlenmesine ilişkin{" "}
                      <Link
                        href="/kvkk-aydinlatma"
                        className="font-medium text-[var(--gold)] underline underline-offset-2 hover:text-[var(--gold-light)]"
                      >
                        Aydınlatma Metni
                      </Link>
                      {"'"}ni okudum ve anladım.
                    </>
                  ) : (
                    <>
                      I have read and understood the{" "}
                      <Link
                        href="/kvkk-aydinlatma"
                        className="font-medium text-[var(--gold)] underline underline-offset-2 hover:text-[var(--gold-light)]"
                      >
                        Privacy Notice
                      </Link>
                      {" "}regarding the processing of my personal data.
                    </>
                  )}
                </span>
              </label>
            </div>

            <div className="flex items-center justify-between gap-4 pt-1">
              <p className="text-[11px] leading-6 text-[rgba(232,229,221,0.38)]">
                {language === "tr"
                  ? "Bu form yalnızca ön bilgilendirme amacı taşır; hukuki görüş ya da vekâlet ilişkisi başlatmaz."
                  : "This form is for preliminary information only and does not create an attorney-client relationship."}
              </p>
              <button
                type="submit"
                disabled={submitting || !kvkkConsent}
                className="shrink-0 rounded-full bg-[var(--gold)] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#0a0a0a] transition-all hover:bg-[var(--gold-light)] hover:shadow-[0_6px_24px_rgba(201,168,76,0.2)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting
                  ? language === "tr" ? "Gönderiliyor..." : "Sending..."
                  : language === "tr" ? "Gönder" : "Send"}
              </button>
            </div>

            {sent && (
              <p className="text-sm font-medium text-[var(--gold)]">
                {language === "tr"
                  ? "Mesajınız iletildi. En kısa sürede dönüş sağlanacaktır."
                  : "Your message has been sent. We will get back to you shortly."}
              </p>
            )}
            {error && (
              <p className="text-sm font-medium text-red-400">
                {language === "tr"
                  ? "Bir hata oluştu. Lütfen tekrar deneyiniz."
                  : "An error occurred. Please try again."}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
