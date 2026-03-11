import { PageHero } from "@/components/PageHero";

const COOKIE_SECTIONS = [
  {
    title: "Çerez Nedir?",
    content:
      "Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcınız aracılığıyla cihazınıza kaydedilebilen küçük metin dosyalarıdır. Çerezler, site deneyiminin daha güvenli ve işlevsel hale getirilmesine yardımcı olabilir.",
  },
  {
    title: "Hangi Tür Çerezler Kullanılabilir?",
    content:
      "İnternet sitesinde zorunlu teknik çerezler, güvenlik ve oturum yönetimine ilişkin çerezler ile sınırlı ölçüde performans amaçlı çerezler kullanılabilir. Reklam veya profil oluşturma amacı taşıyan çerezler kullanılacaksa, yürürlükteki mevzuat çerçevesinde gerekli bilgilendirme ve gerektiğinde açık rıza süreçleri ayrıca uygulanır.",
  },
  {
    title: "Çerezlerin Kullanım Amaçları",
    content:
      "Çerezler; sitenin düzgün çalışması, kullanıcı tercihlerinin hatırlanması, güvenliğin sağlanması, hataların tespiti ve kullanıcı deneyiminin iyileştirilmesi amaçlarıyla kullanılabilir. Çerezler aracılığıyla elde edilen bilgiler, hukuka uygun çerçevede işlenir.",
  },
  {
    title: "Çerezlerin Yönetimi",
    content:
      "Tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir, mevcut çerezleri silebilir veya belirli çerez türleri için uyarı alabilirsiniz. Ancak bazı çerezlerin devre dışı bırakılması, internet sitesinin bazı bölümlerinin beklenen şekilde çalışmamasına neden olabilir.",
  },
  {
    title: "Üçüncü Taraf Hizmetler",
    content:
      "Harita, gömülü içerik veya teknik altyapı sağlayıcıları gibi üçüncü taraf hizmetler kullanıldığında, ilgili hizmet sağlayıcıların kendi çerez ve gizlilik uygulamaları da devreye girebilir. Bu durumda ilgili üçüncü tarafın politikalarının ayrıca incelenmesi önerilir.",
  },
  {
    title: "Güncellemeler",
    content:
      "Çerez politikası, teknik gereklilikler veya mevzuat değişikliklerine bağlı olarak güncellenebilir. Güncel metin internet sitesi üzerinden yayımlandığı tarihten itibaren geçerli olur.",
  },
];

export default function CookiePolicyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Politikalar"
        title="Çerez Politikası"
        description="Bu politika, internet sitesinde kullanılabilecek çerez türleri ve kullanıcıların çerez tercihlerini nasıl yönetebileceği hakkında genel bilgilendirme sağlar."
      />

      <section className="section-inner space-y-5">
        {COOKIE_SECTIONS.map((section) => (
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