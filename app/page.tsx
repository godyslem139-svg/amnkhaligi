import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ"; // استدعاء ملف الأسئلة الشائعة

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Features />
      <Portfolio />
      <Testimonials />
      <FAQ /> {/* عرض قسم الأسئلة الشائعة هنا */}
    </>
  );
}