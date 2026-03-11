import { PageHero } from "@/components/PageHero";

const SECTIONS = [
  {
    title: "1. Veri Sorumlusuna İlişkin Bilgilendirme",
    content:
      "Bu internet sitesinde yer alan iletişim formu ve iletişim kanalları üzerinden paylaşılan kişisel veriler, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla Av. Betül Dilan Kurt tarafından, hukuka ve dürüstlük kurallarına uygun şekilde işlenir.",
  },
  {
    title: "2. İşlenen Kişisel Veriler",
    content:
      "Ad-soyad, telefon numarası, e-posta adresi, mesaj içeriği, teknik erişim bilgileri ve kullanıcı tarafından gönüllü olarak paylaşılan diğer sınırlı veriler; yalnızca iletişim kurulması, talebin değerlendirilmesi, randevu planlaması ve site güvenliğinin sağlanması amaçlarıyla işlenebilir.",
  },
  {
    title: "3. Kişisel Verilerin İşlenme Amaçları",
    content:
      "Kişisel veriler; iletişim taleplerinin cevaplanması, ön görüşme süreçlerinin yürütülmesi, hukuki danışmanlık talebinin değerlendirilmesi, mevzuattan doğan yükümlülüklerin yerine getirilmesi, bilgi güvenliğinin sağlanması ve olası uyuşmazlıklarda ispat yükümlülüklerinin karşılanması amacıyla işlenebilir.",
  },
  {
    title: "4. Hukuki Sebepler ve Toplama Yöntemi",
    content:
      "Veriler; internet sitesi üzerindeki formlar, e-posta, telefon, WhatsApp ve benzeri iletişim kanalları yoluyla otomatik veya kısmen otomatik yöntemlerle toplanabilir. İşleme faaliyetleri; kanunlarda öngörülmesi, bir hakkın tesisi, kullanılması veya korunması, veri sorumlusunun meşru menfaati ve ilgili kişinin açıkça kendisi tarafından alenileştirdiği veriler kapsamında yürütülebilir.",
  },
  {
    title: "5. Verilerin Aktarılması",
    content:
      "Kişisel veriler, yasal yükümlülükler veya yetkili kamu kurum ve kuruluşlarının usulüne uygun talepleri dışında üçüncü kişilere aktarılmaz. Teknik altyapı hizmetleri kapsamında zorunlu olan sınırlı paylaşımlar ise yalnızca hizmetin yürütülmesi amacıyla ve gerekli güvenlik tedbirleri alınarak gerçekleştirilebilir.",
  },
  {
    title: "6. Saklama Süresi ve Güvenlik",
    content:
      "Kişisel veriler, işlenme amaçlarının gerektirdiği süre kadar ve ilgili mevzuatta öngörülen saklama süreleri boyunca muhafaza edilir. Süre sonunda veriler silinir, yok edilir veya anonim hale getirilir. Uygun teknik ve idari güvenlik önlemleri alınarak yetkisiz erişim, kayıp ve kötüye kullanımın önüne geçilmesi hedeflenir.",
  },
  {
    title: "7. İlgili Kişi Hakları",
    content:
      "KVKK'nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme, verilerin aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme, silinmesini veya yok edilmesini talep etme ve kanuni şartlar çerçevesinde itiraz etme haklarına sahipsiniz.",
  },
  {
    title: "8. İletişim",
    content:
      "Gizlilik politikası ve kişisel verilerinizin işlenmesine ilişkin talepleriniz için internet sitesinde yer alan iletişim kanallarını kullanarak başvuruda bulunabilirsiniz. Başvurular, mevzuatta öngörülen süreler içinde değerlendirilir.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Politikalar"
        title="Gizlilik Politikası"
        description="Bu metin, internet sitesi üzerinden paylaşılan kişisel verilerin hangi kapsamda işlendiğine ilişkin genel bilgilendirme amacıyla hazırlanmıştır."
      />

      <section className="section-inner space-y-5">
        {SECTIONS.map((section) => (
          <article
            key={section.title}
            className="rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] p-6 sm:p-8"
          >
            <h2 className="font-heading text-3xl font-semibold text-[var(--foreground)]">
              {section.title}
            </h2>
            <p className="mt-4 text-sm leading-8 text-[rgba(240,236,228,0.68)]">
              {section.content}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}