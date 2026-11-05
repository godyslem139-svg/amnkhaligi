import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton"; // <-- إضافة استدعاء زر الواتساب هنا

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "0501206816 شركة عزل و كشف تسربات في الخرج |ضمان معتمد 10سنين",
  description: "شركة عزل و كشف تسربات في الخرج . عزل خزانات و كشف تسربات المياه و ترميم و غسيل سجاد و مفروشات و وتسليك مجارى و رش مبيدات حشرية متخصصة و معتمدة | 0501206816",
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
      <body className="min-h-full flex flex-col bg-[#030b1c]">
        
        {/* فيديو الخلفية الثابت للموقع بالكامل */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-screen object-cover -z-20"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* طبقة تعتيم ثابته فوق الفيديو ليكون النص مقروءاً دائماً */}
        <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#030b1c]/80 via-[#030b1c]/70 to-[#030b1c]/90 -z-10"></div>

        {/* الهيدر يظهر في الأعلى */}
        <Header />
        
        {/* المحتوى المتغير لكل صفحة */}
        <main className="flex-grow relative z-10">
          {children}
        </main>

        {/* الفوتر يظهر في الأسفل */}
        <Footer />

        {/* زر الواتساب العائم يظهر فوق كل شيء */}
        <WhatsAppButton />

      </body>
    </html>
  );
}