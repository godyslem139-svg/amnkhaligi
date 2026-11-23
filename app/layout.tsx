import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BlackFridayTicker from "@/components/BlackFridayTicker";
import JsonLd from "@/components/JsonLd";
import { businessJsonLd } from "@/lib/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amnkhaligi.com"),
  title: "0501206816 شركة عزل و كشف تسربات في الخرج | ضمان معتمد 10 سنين",
  description:
    "شركة عزل و كشف تسربات في الخرج . عزل خزانات و كشف تسربات المياه و ترميم و غسيل سجاد و مفروشات و وتسليك مجارى و رش مبيدات حشرية متخصصة و معتمدة | 0501206816",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full flex flex-col bg-[#030b1c]" suppressHydrationWarning>
        <JsonLd data={businessJsonLd} />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="fixed top-0 left-0 w-full h-screen object-cover -z-20"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#030b1c]/80 via-[#030b1c]/70 to-[#030b1c]/90 -z-10"></div>

        <Header />
        <BlackFridayTicker />
        <main className="flex-grow relative z-10">{children}</main>

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}