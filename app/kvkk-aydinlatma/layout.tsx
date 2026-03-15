import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "Kişisel verilerin korunması hakkında aydınlatma metni. İletişim formu aracılığıyla toplanan verilerin işlenmesi, amacı ve haklarınız.",
  alternates: { canonical: absoluteUrl("/kvkk-aydinlatma") },
  openGraph: {
    title: "KVKK Aydınlatma Metni | Av. Betül Dilan Kurt",
    url: absoluteUrl("/kvkk-aydinlatma"),
  },
};

export default function KvkkAydinlatmaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
