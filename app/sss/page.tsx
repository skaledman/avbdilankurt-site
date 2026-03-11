import { PageHero } from "@/components/PageHero";
import { FAQ_ITEMS } from "@/lib/site-data";

export default function FaqPage() {
  return (
    <div>
      <PageHero
        eyebrow="SSS"
        title="Sık Sorulan Sorular"
        description="Hukuki süreçler, ilk başvuru, iletişim ve hizmet kapsamına ilişkin en çok merak edilen konulara genel bilgilendirme niteliğinde yanıtlar burada yer almaktadır."
      />

      <section className="section-inner">
        <div className="grid gap-5">
          {FAQ_ITEMS.map((item, index) => (
            <article
              key={item.question}
              className="rounded-3xl border border-white/[0.06] bg-[var(--bg-card)] p-6 sm:p-8"
            >
              <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-[rgba(240,236,228,0.42)]">
                <span>Soru {String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2 className="font-heading text-3xl font-semibold text-[var(--foreground)]">
                {item.question}
              </h2>
              <p className="mt-4 text-sm leading-8 text-[rgba(240,236,228,0.68)]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] p-6 sm:p-8">
          <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
            Önemli Bilgilendirme
          </h3>
          <p className="mt-4 text-sm leading-8 text-[rgba(240,236,228,0.7)]">
            Bu sayfadaki açıklamalar yalnızca genel bilgilendirme amacı taşır. Her somut olayın
            koşulları farklı olduğundan, hak kaybı yaşanmaması için özel hukuki değerlendirme
            alınması önerilir. Bu içerikler avukat-müvekkil ilişkisi veya kesin hukuki görüş
            niteliği taşımaz.
          </p>
        </div>
      </section>
    </div>
  );
}