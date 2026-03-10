import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Av. Betül Dilan Kurt | Adana Avukat",
  description:
    "Av. Betül Dilan Kurt, Adana Barosu'na kayıtlı avukat olarak aile hukuku, ceza hukuku, iş hukuku ve daha birçok alanda profesyonel danışmanlık ve dava takibi hizmeti sunmaktadır.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} font-body antialiased bg-slate-950 text-slate-100`}
      >
        <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-[#050818] to-black">
          <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 [background-image:radial-gradient(circle_at_top,_rgba(201,168,76,0.14),transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),#020617)]" />
          <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-[#C9A84C0d] via-transparent to-transparent blur-3xl" />
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
