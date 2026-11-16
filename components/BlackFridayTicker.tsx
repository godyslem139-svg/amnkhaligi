import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function BlackFridayTicker() {
  const tickerPhrase = "🔥 أقوى عروض وخصومات البلاك فراي داي: خصم 50% على الكشف والعمليات في أساس الأمن الخليجي بالخرج! 🚀 ووفر نصف التكلفة الآن";
  
  // تكرار الجملة لضمان استمرارية الحركة بسلاسة
  const items = Array(6).fill(tickerPhrase);

  return (
    <div className="relative w-full my-6 z-30" dir="rtl">
      {/* شريط العروض المتوهج */}
      <div className="relative w-full py-4 md:py-5 bg-gradient-to-r from-[#030b1c] via-[#08183a] to-[#030b1c] border-y-2 border-[#D4AF37]/60 shadow-[0_0_35px_rgba(212,175,55,0.35)] overflow-hidden">
        
        {/* طبقة توهج داخلية للعمق */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent pointer-events-none"></div>

        <Link href="/black-friday" className="block relative z-10 group">
          <div className="overflow-hidden whitespace-nowrap">
            <div className="animate-ticker-text flex items-center gap-10">
              {items.map((text, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 text-white font-black text-sm md:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] group-hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer py-1"
                >
                  <Sparkles className="w-5 h-5 text-[#D4AF37] animate-pulse flex-shrink-0" />
                  <span>{text}</span>
                  <span className="text-[#00BFFF] mx-2 font-light">|</span>
                </div>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}