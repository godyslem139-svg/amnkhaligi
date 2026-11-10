import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "أساس الأمن الخليجي - للصيانة والتسربات والعزل",
  description: "الموقع الرسمي لشركة أساس الأمن الخليجي بالخرج",
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
        {/* فيديو الخلفية الثابت للموقع */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-screen object-cover -z-20"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* طبقة التعتيم */}
        <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#030b1c]/80 via-[#030b1c]/70 to-[#030b1c]/90 -z-10"></div>

        <Header />

        <main className="flex-grow relative z-10">{children}</main>

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}