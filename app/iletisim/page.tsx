import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";

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