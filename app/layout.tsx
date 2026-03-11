import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";

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
  title: "Av. Betül Dilan Kurt | Adana Avukat",
  description:
    "Av. Betül Dilan Kurt; aile hukuku, ceza hukuku, iş hukuku, ticaret hukuku ve farklı hukuki alanlarda danışmanlık ve avukatlık hizmeti sunmaktadır.",
  keywords: [
    "Adana avukat",
    "Betül Dilan Kurt",
    "aile hukuku",
    "ceza hukuku",
    "iş hukuku",
    "ticaret hukuku",
    "miras hukuku",
    "hukuki danışmanlık",
  ],
  openGraph: {
    title: "Av. Betül Dilan Kurt | Adana Avukat",
    description:
      "Aile hukuku, ceza hukuku, iş hukuku, miras hukuku ve ticaret hukuku alanlarında danışmanlık ve avukatlık hizmeti.",
    type: "website",
    locale: "tr_TR",
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
