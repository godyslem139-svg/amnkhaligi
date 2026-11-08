import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowLeft } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-96px)] min-h-[600px] flex items-center justify-center overflow-hidden" dir="rtl">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
        متصفحك لا يدعم تشغيل الفيديو.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#030b1c]/80 via-[#030b1c]/60 to-[#030b1c]/90 z-10"></div>

      <div className="container mx-auto px-4 relative z-20 text-center flex flex-col items-center">
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          شركة <span className="text-[#00BFFF]">أساس الأمن</span> <span className="text-[#D4AF37]">الخليجي</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl leading-relaxed drop-shadow-md">
          شركة عزل وكشف تسربات في الخرج متخصصة، تقدم حلولاً احترافية بمعايير سعودية عالية الجودة.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          
          <Link
            href="https://wa.me/966501206816"
            target="_blank"
            title="تواصل معنا عبر الواتساب"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#D4AF37] text-[#030b1c] hover:bg-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <MessageCircle className="w-6 h-6" />
            <span>تواصل معنا الآن</span>
          </Link>

          <Link
            href="/portfolio"
            title="شاهد سابقة أعمالنا"
            className="flex items-center justify-center gap-2 w-full sm:w-auto border-2 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-[#030b1c] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 group"
          >
            <span>سابقة أعمالنا</span>
            <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-2 transition-transform duration-300" />
          </Link>
          
        </div>
      </div>
    </section>
  );
}