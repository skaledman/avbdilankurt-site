import type { Metadata } from "next";
import { FaqPageClient } from "@/components/FaqPageClient";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular | Adana Hukuki Danışmanlık",
  description:
    "İlk danışma, boşanma davası süresi, nafaka, ceza soruşturması, iş hukuku ve miras paylaşımı gibi konularda sık sorulan sorular. Adana merkezli hukuki danışmanlık.",
  alternates: { canonical: absoluteUrl("/sss") },
  openGraph: {
    title: "Sık Sorulan Sorular | Av. Betül Dilan Kurt",
    description:
      "Hukuki süreçler, ilk görüşme ve belge hazırlığı hakkında sık sorulan soruların kısa yanıtları.",
    type: "website",
    locale: "tr_TR",
    url: absoluteUrl("/sss"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Sık Sorulan Sorular | Av. Betül Dilan Kurt",
    description:
      "Hukuki süreçler ve ilk başvuru hakkında sık sorulan soruların yanıtları.",
  },
};

export default function FaqPage() {
  return <FaqPageClient />;
}