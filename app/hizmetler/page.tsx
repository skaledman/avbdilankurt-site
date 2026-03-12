import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SERVICES } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Hizmet Alanları | Aile, Ceza, İş ve Miras Hukuku",
  description:
    "Adana ve Seyhan bölgesinde aile hukuku, ceza hukuku, iş hukuku, miras hukuku, gayrimenkul ve ticaret hukuku alanlarında hukuki danışmanlık ve avukatlık hizmeti.",
  alternates: { canonical: absoluteUrl("/hizmetler") },
  openGraph: {
    title: "Hizmet Alanları | Av. Betül Dilan Kurt | Adana Avukat",
    description:
      "Aile, ceza, iş, miras ve diğer hukuk alanlarında danışmanlık ve dava takibi. Adana avukatlık hizmeti.",
    type: "website",
    locale: "tr_TR",
    url: absoluteUrl("/hizmetler"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Hizmet Alanları | Av. Betül Dilan Kurt",
    description:
      "Adana'da aile, ceza, iş, miras, gayrimenkul ve ticaret hukuku alanlarında sunulan hizmetler.",
  },
};

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Tüm Hizmet Alanları"
        description="Aile hukuku, ceza hukuku, iş hukuku ve diğer çalışma alanlarına ilişkin tüm hizmet başlıklarını bu sayfada toplu şekilde görüntüleyebilirsiniz."
      />

      <section className="section-inner grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = service.icon;

          return (
            <Link
              key={service.slug}
              href={`/hizmetler/${service.slug}`}
              className="group rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] p-7 transition-all hover:-translate-y-1 hover:border-[var(--gold-dim)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)]">
                <Icon size={22} className="text-[var(--gold)]" />
              </div>

              <h2 className="mt-6 font-heading text-3xl font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--gold)]">
                {service.title}
              </h2>
              <p className="mt-4 min-h-[96px] text-base leading-8 text-[var(--text-faint)]">
                {service.shortDescription}
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
                Detayları Gör <ArrowRight size={15} />
              </span>
            </Link>
          );
        })}
      </section>
    </div>
  );
}