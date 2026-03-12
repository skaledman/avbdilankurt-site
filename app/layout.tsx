import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { JsonLdLegalService } from "@/components/JsonLdLegalService";
import { SITE_URL } from "@/lib/site-url";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Av. Betül Dilan Kurt | Adana Avukat ve Hukuki Danışmanlık",
    template: "%s | Av. Betül Dilan Kurt",
  },
  description:
    "Aile hukuku, ceza hukuku, iş hukuku, miras hukuku ve ticaret hukuku alanlarında hukuki danışmanlık ve avukatlık hizmeti. Adana'da dava takibi ve ön değerlendirme.",
  keywords: [
    "Adana avukat",
    "Betül Dilan Kurt",
    "aile hukuku",
    "ceza hukuku",
    "iş hukuku",
    "ticaret hukuku",
    "miras hukuku",
    "hukuki danışmanlık",
    "avukatlık hizmeti",
    "dava takibi",
  ],
  openGraph: {
    title: "Av. Betül Dilan Kurt | Adana Avukat ve Hukuki Danışmanlık",
    description:
      "Aile hukuku, ceza hukuku, iş hukuku, miras hukuku ve ticaret hukuku alanlarında danışmanlık ve avukatlık hizmeti. Adana.",
    type: "website",
    locale: "tr_TR",
    siteName: "Av. Betül Dilan Kurt",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Av. Betül Dilan Kurt | Adana Avukat ve Hukuki Danışmanlık",
    description:
      "Aile, ceza, iş, miras ve ticaret hukuku alanlarında hukuki danışmanlık ve avukatlık hizmeti. Adana.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${dmSans.variable} font-body antialiased`}
      >
        <JsonLdLegalService />
        <div className="page-shell">
          <Providers>
            <Navbar />
            <FloatingContactButtons />
            {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
