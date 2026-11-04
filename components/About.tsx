import React from "react";
import { ShieldCheck, Crosshair, Clock } from "lucide-react";

export default function About() {
  return (
    <section className="relative w-full py-20 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* الجانب الأيمن: المحتوى النصي القوي */}
          <div className="flex flex-col gap-6">
            
            {/* عنوان السكشن */}
            <div className="inline-flex items-center gap-3">
              <span className="w-12 h-1 rounded-full bg-[#00BFFF]"></span>
              <span className="text-[#00BFFF] font-bold text-lg tracking-wider">من نحن</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              <span className="text-[#D4AF37]">أساس الأمن الخليجي</span> <br />
              الدرع الواقي لعقارك
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              نحن لا نقدم مجرد خدمات صيانة، بل نصنع حلولاً هندسية مبتكرة ومستدامة لحماية بنيتك التحتية. بخبرات متراكمة واعتمادنا على أحدث التقنيات العالمية، نضمن لك التخلص النهائي من مشاكل التسربات وتقديم عزل متكامل يطيل من عمر عقارك، كل ذلك بمعايير سعودية معتمدة.
            </p>
            
            {/* نقاط القوة (المميزات) */}
            <div className="flex flex-col gap-5 mt-4">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00BFFF]/10 border border-[#00BFFF]/30 flex items-center justify-center flex-shrink-0 text-[#00BFFF]">
                  <Crosshair className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">دقة بدون تكسير</h4>
                  <p className="text-gray-400 text-base">استخدام أحدث الأجهزة الصوتية والحرارية لتحديد موقع الخلل بدقة متناهية.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">ضمان ذهبي شامل</h4>
                  <p className="text-gray-400 text-base">مواد عزل أصلية وخدمات صيانة موثقة بضمان فعلي يحمي حقوقك.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00BFFF]/10 border border-[#00BFFF]/30 flex items-center justify-center flex-shrink-0 text-[#00BFFF]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">سرعة الاستجابة</h4>
                  <p className="text-gray-400 text-base">فريق طوارئ متكامل مستعد لتلبية طلباتك والتدخل السريع في أي وقت.</p>
                </div>
              </div>

            </div>
          </div>

          {/* الجانب الأيسر: الفيديو التوضيحي */}
          <div className="relative w-full h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,191,255,0.15)] border-2 border-[#D4AF37]/40 group">
            
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
            >
              <source src="/about.mp4" type="video/mp4" />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
            
            {/* تدرج لوني ناعم فوق الفيديو لدمجه مع التصميم */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030b1c] via-[#030b1c]/20 to-transparent opacity-90"></div>
            
            {/* كارت الثقة (Glassmorphism) عائم فوق الفيديو */}
            <div className="absolute bottom-6 right-6 left-6 bg-[#030b1c]/70 backdrop-blur-md border border-[#00BFFF]/40 rounded-2xl p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
              <div className="flex items-center justify-between text-center">
                <div className="flex-1">
                  <span className="block text-[#D4AF37] font-extrabold text-3xl lg:text-4xl mb-1">+10</span>
                  <span className="text-gray-300 text-sm md:text-base font-semibold">سنوات من الخبرة</span>
                </div>
                <div className="w-[2px] h-14 bg-gray-600/50 mx-2"></div>
                <div className="flex-1">
                  <span className="block text-[#00BFFF] font-extrabold text-3xl lg:text-4xl mb-1">100%</span>
                  <span className="text-gray-300 text-sm md:text-base font-semibold">جودة مضمونة</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}