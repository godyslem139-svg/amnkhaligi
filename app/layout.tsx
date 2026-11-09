"use client"; // نحتاج لاستخدام الـ hooks لمعرفة المسار الحالي

import { usePathname } from "next/navigation";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // التحقق مما إذا كنا داخل لوحة تحكم سانتي
  const isStudio = pathname?.startsWith("/studio");

  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030b1c]">

        {/* فيديو الخلفية الثابت للموقع بالكامل (يظهر في الموقع العادي فقط) */}
        {!isStudio && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="fixed top-0 left-0 w-full h-screen object-cover -z-20"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        )}

        {/* طبقة التعتيم */}
        {!isStudio && (
          <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#030b1c]/80 via-[#030b1c]/70 to-[#030b1c]/90 -z-10"></div>
        )}

        {/* الهيدر يظهر في الموقع العادي فقط ولا يظهر في /studio */}
        {!isStudio && <Header />}

        {/* المحتوى المتغير (لوحة التحكم تملأ الشاشة بالكامل بدونهما) */}
        <main className="flex-grow relative z-10">
          {children}
        </main>

        {/* الفوتر وزر الواتساب يظهران في الموقع العادي فقط */}
        {!isStudio && <Footer />}
        {!isStudio && <WhatsAppButton />}

      </body>
    </html>
  );
}