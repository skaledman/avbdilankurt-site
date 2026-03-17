"use client";

import { PhoneCall, Mail, ArrowDown } from "lucide-react";
import { useLanguage } from "./language-context";

export function Hero() {
  const { language } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    window.scrollTo({ top: rect.top + window.pageYOffset - 80, behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Deep gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,168,76,0.08),transparent)]" />
        {/* Subtle vertical lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 80px)",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--bg-main)] to-transparent" />
      </div>

      {/* Main content */}
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-18 pt-20 text-center sm:px-8 sm:pt-24 lg:px-10 lg:pt-26">
        {/* Name */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[rgba(240,236,228,0.52)]">
          {language === "tr" ? "Av. Betül Dilan Kurt" : "Atty. Betül Dilan Kurt"}
        </p>

        {/* Headline */}
        <h1 className="mt-4 max-w-4xl font-heading text-4xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
          {language === "tr"
            ? "Boşanma, Ceza ve İş Davalarında Stratejik Hukuki Destek"
            : "Strategic Legal Support in Divorce, Criminal and Employment Matters"}
        </h1>

        {/* Gold divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--gold)] opacity-50" />
          <div className="h-1 w-1 rounded-full bg-[var(--gold)] opacity-60" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--gold)] opacity-50" />
        </div>

        {/* Tagline */}
        <p className="max-w-3xl text-[1.02rem] leading-8 text-[var(--text-muted)] sm:text-[1.125rem]">
          {language === "tr"
            ? "Adana merkezli olarak bireysel ve kurumsal müvekkillere, dava öncesi danışmanlıktan temsil sürecine kadar şeffaf ve titiz hukuki hizmet sunulmaktadır."
            : "Based in Adana, we provide careful and transparent legal support for individual and corporate clients, from preliminary assessment to representation throughout the process."}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollTo("iletisim")}
            className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--gold)] px-7 py-3 text-sm font-semibold tracking-wide text-[#0a0a0a] transition-all hover:bg-[var(--gold-light)] hover:shadow-[0_8px_30px_rgba(201,168,76,0.25)]"
          >
            <PhoneCall size={15} />
            <span>{language === "tr" ? "İletişime Geçin" : "Get in Touch"}</span>
          </button>

          <button
            type="button"
            onClick={() => scrollTo("hizmetler")}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-sm font-medium tracking-wide text-[var(--text-soft)] transition-all hover:border-white/20 hover:bg-white/[0.07]"
          >
            <span>{language === "tr" ? "Hizmet Alanlarını İnceleyin" : "View Practice Areas"}</span>
          </button>
        </div>

        {/* Contact info strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-white/[0.06] pt-8">
          <a
            href="tel:+905465781662"
            className="flex items-center gap-2.5 text-base text-[var(--text-faint)] transition-colors hover:text-[var(--foreground)]"
          >
            <PhoneCall size={14} className="text-[var(--gold)] opacity-70" />
            <span>+90 546 578 16 62</span>
          </a>
          <div className="h-4 w-px bg-white/10 hidden sm:block" />
          <a
            href="mailto:info@avbdilankurt.com"
            className="flex items-center gap-2.5 text-base text-[var(--text-faint)] transition-colors hover:text-[var(--foreground)]"
          >
            <Mail size={14} className="text-[var(--gold)] opacity-70" />
            <span>info@avbdilankurt.com</span>
          </a>
          <div className="h-4 w-px bg-white/10 hidden sm:block" />
          <span className="text-base text-[rgba(232,229,221,0.46)]">Adana</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollTo("hakkimda")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[rgba(240,236,228,0.3)] transition-colors hover:text-[rgba(240,236,228,0.6)]"
        aria-label="Aşağı kaydır"
      >
        <span className="text-[9px] uppercase tracking-[0.3em]">
          {language === "tr" ? "Keşfet" : "Explore"}
        </span>
        <ArrowDown size={14} className="animate-bounce" />
      </button>
    </section>
  );
}
