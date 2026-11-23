import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ"; // استدعاء ملف الأسئلة الشائعة

export const metadata: Metadata = {
  title: "0501206816 شركة عزل و كشف تسربات في الخرج | ضمان معتمد 10 سنين",
  description:
    "شركة عزل و كشف تسربات في الخرج . عزل خزانات و كشف تسربات المياه و ترميم و غسيل سجاد و مفروشات و وتسليك مجارى و رش مبيدات حشرية متخصصة و معتمدة | 0501206816",
  keywords: [
    "شركة عزل أسطح بالخرج",
    "شركة كشف تسربات المياه بالخرج",
    "شركة غسيل خزانات بالخرج",
    "شركة رش مبيدات بالخرج",
    "شركة تسليك مجاري بالخرج",
    "شركة ترميم وبناء بالخرج",
    "شركة غسيل مكيفات بالخرج",
    "شركة تنظيف مجالس وسجاد بالخرج",
    "أساس الأمن الخليجي بالخرج",
  ],
  alternates: {
    canonical: "https://www.amnkhaligi.com",
  },
  openGraph: {
    title: "شركة عزل وكشف تسربات في الخرج | أساس الأمن الخليجي - 0501206816",
    description:
      "خدمات متكاملة في الخرج: عزل أسطح وخزانات، كشف تسربات المياه بدون تكسير، رش مبيدات، تسليك مجاري، وترميم مباني بضمان معتمد.",
    url: "https://www.amnkhaligi.com",
    siteName: "أساس الأمن الخليجي",
    locale: "ar_SA",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Features />
      <Portfolio />
      <Testimonials />
      <FAQ /> 
    </>
  );
}