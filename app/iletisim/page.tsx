import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "İletişim | Adana Seyhan Hukuki Danışmanlık",
  description:
    "Adana Seyhan'da hukuki danışmanlık, dava takibi ve ön görüşme için telefon, e-posta, WhatsApp veya iletişim formu üzerinden ulaşın.",
  alternates: { canonical: absoluteUrl("/iletisim") },
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="İletişim"
        title="İletişim ve Ön Görüşme"
        description="Telefon, e-posta, WhatsApp veya iletişim formu üzerinden ulaşabilir; dosyanız hakkında ilk bilgilendirmeyi paylaşabilirsiniz."
      />

      <section className="section-inner pt-16">
        <ContactSection />
      </section>
    </div>
  );
}