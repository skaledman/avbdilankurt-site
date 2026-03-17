import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "İletişim | Adana Hukuki Danışmanlık",
  description:
    "Adana'da hukuki danışmanlık, dava takibi ve ön görüşme için telefon, e-posta, WhatsApp veya iletişim formu üzerinden ulaşın.",
  alternates: { canonical: absoluteUrl("/iletisim") },
};

export default function ContactPage() {
  return (
    <div>
      <ContactSection />
    </div>
  );
}