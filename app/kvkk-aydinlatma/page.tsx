"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/components/language-context";
import { SITE_INFO } from "@/lib/site-data";

const CONTENT_TR = {
  title: "Kişisel Verilerin Korunması Hakkında Aydınlatma Metni",
  eyebrow: "KVKK",
  description: "İletişim formu ve kişisel veri işleme süreçlerine ilişkin aydınlatma metni.",
  sections: [
    {
      title: "1. Toplanan Kişisel Veriler",
      body: "İletişim formu aracılığıyla ad-soyad, telefon numarası, e-posta adresi ve tarafınızca iletilen mesaj içeriği işlenmektedir.",
    },
    {
      title: "2. Kişisel Verilerin İşlenme Amacı",
      body: "Toplanan veriler yalnızca ön bilgilendirme talebinize yanıt vermek amacıyla kullanılmaktadır. Bu form hukuki danışmanlık veya vekâlet ilişkisi tesis etmez.",
    },
    {
      title: "3. Kişisel Verilerin Aktarımı",
      body: "Kişisel verileriniz üçüncü kişilerle, kurum veya kuruluşlarla paylaşılmamaktadır.",
    },
    {
      title: "4. Kişisel Verilerin Saklanma Süresi",
      body: "Verileriniz, talebinizin yanıtlanmasının ardından 1 yıl süreyle saklanmakta, akabinde silinmektedir.",
    },
    {
      title: "5. Haklarınız (KVKK m.11)",
      body: "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini isteme, işlenmesine itiraz etme haklarına sahipsiniz.",
    },
    {
      title: "Başvuru",
      body: "Haklarınızı kullanmak için info@avbdilankurt.com adresine yazılı olarak başvurabilirsiniz.",
    },
  ],
};

const CONTENT_EN = {
  title: "Privacy Notice – Processing of Personal Data",
  eyebrow: "KVKK",
  description: "Information notice regarding the contact form and processing of personal data.",
  sections: [
    {
      title: "1. Personal Data Collected",
      body: "Through the contact form, we process your name and surname, phone number, e-mail address and the content of the message you submit.",
    },
    {
      title: "2. Purpose of Processing",
      body: "The data collected is used solely to respond to your request for preliminary information. This form does not establish a legal consultancy or attorney-client relationship.",
    },
    {
      title: "3. Disclosure of Personal Data",
      body: "Your personal data is not shared with third parties, institutions or organisations.",
    },
    {
      title: "4. Retention Period",
      body: "Your data is retained for 1 year following the response to your request and is thereafter deleted.",
    },
    {
      title: "5. Your Rights (Law No. 6698, Art. 11)",
      body: "Under the Turkish Personal Data Protection Law you have the right to learn whether your personal data is processed, to request information if it has been processed, to learn the purpose of processing and whether it is used in line with that purpose, to know the third parties to whom it has been transferred domestically or abroad, to request rectification if it is incomplete or incorrect, to request erasure or destruction, and to object to processing.",
    },
    {
      title: "Contact",
      body: "To exercise your rights you may apply in writing to info@avbdilankurt.com.",
    },
  ],
};

export default function KvkkAydinlatmaPage() {
  const { language } = useLanguage();
  const content = language === "tr" ? CONTENT_TR : CONTENT_EN;

  return (
    <div>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <section className="section-inner space-y-6 pb-16">
        <p className="text-sm text-[var(--text-muted)]">
          {language === "tr" ? "Veri Sorumlusu" : "Data Controller"}: {SITE_INFO.name} · {language === "tr" ? "İletişim" : "Contact"}:{" "}
          <a href={`mailto:${SITE_INFO.email}`} className="text-[var(--gold)] underline underline-offset-2 hover:text-[var(--gold-light)]">
            {SITE_INFO.email}
          </a>
        </p>

        {content.sections.map((section) => (
          <article
            key={section.title}
            className="rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] p-6 sm:p-8"
          >
            <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
              {section.title}
            </h2>
            <p className="mt-4 text-sm leading-8 text-[rgba(240,236,228,0.68)]">
              {section.body}
            </p>
          </article>
        ))}

        <div className="pt-4">
          <Link
            href="/iletisim"
            className="inline-flex rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-[var(--gold-light)]"
          >
            {language === "tr" ? "İletişime Geçin" : "Contact"}
          </Link>
        </div>
      </section>
    </div>
  );
}
