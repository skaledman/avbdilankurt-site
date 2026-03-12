import type { Metadata } from "next";
import CourtDecisionsPageClient from "@/components/CourtDecisionsPageClient";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Yargı Kararları | Seçilmiş İçtihat Özetleri",
  description:
    "Aile hukuku, iş hukuku ve diğer alanlarda uygulamada yol gösterici seçilmiş yargı kararları ve içtihat özetleri. Adana merkezli hukuki bilgilendirme.",
  alternates: { canonical: absoluteUrl("/yargi-kararlari") },
  openGraph: {
    title: "Yargı Kararları | Av. Betül Dilan Kurt",
    description: "Uygulamada yol gösterici seçilmiş yargı kararları ve içtihat özetleri.",
    type: "website",
    locale: "tr_TR",
    url: absoluteUrl("/yargi-kararlari"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Yargı Kararları | Av. Betül Dilan Kurt",
    description: "Seçilmiş yargı kararları ve içtihat özetleri.",
  },
};

export default function CourtDecisionsPage() {
  return <CourtDecisionsPageClient />;
}