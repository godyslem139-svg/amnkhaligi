"use client";
import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
export default function BlackFridayTicker() {
  const offerText = "🔥 أقوى عروض وخصومات البلاك فراي داي خصم 50% على الكشف والعمليات في أساس الأمن الخليجي بالخرج! 🚀 وفر نصف التكلفة الآن ✨";
  const duplicatedTexts = Array(8).fill(offerText);

  return (
    <section className="relative w-full my-6 z-30" dir="rtl">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker-banner {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        .animate-ticker-banner {
          display: flex;
          width: max-content;
          animation: ticker-banner 35s linear infinite;
        }
        .ticker-banner-container:hover .animate-ticker-banner {
          animation-play-state: paused;
        }
      `}} />
      <Link 
        href="/offers"
        className="ticker-banner-container relative block w-full py-5 bg-gradient-to-r from-[#030b1c] via-[#08183a] to-[#030b1c] border-y-2 border-[#D4AF37]/70 shadow-[0_0_40px_rgba(212,175,55,0.3)] overflow-hidden group cursor-pointer"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-ticker-banner flex items-center gap-12">
            {duplicatedTexts.map((text, index) => (
              <div
                key={index}
                className="flex items-center gap-4 text-white font-black text-base md:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] group-hover:text-[#D4AF37] transition-colors duration-300 flex-shrink-0"
              >
                <Sparkles className="w-6 h-6 text-[#D4AF37] animate-pulse flex-shrink-0" />
                <span>{text}</span>
                <span className="text-[#00BFFF] font-light mx-4">|</span>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </section>
  );
}