"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, ShieldCheck, Zap, Droplet, Users, Wrench } from "lucide-react";

const features = [
  { 
    id: "01", 
    title: "أحدث أجهزة الكشف", 
    desc: "نستخدم أجهزة حديثة تعمل بالموجات الصوتية والحرارية لتحديد مكان التسرب بدقة متناهية دون تكسير الجدران أو الأرضيات.",
    icon: <Zap className="w-8 h-8" />
  },
  { 
    id: "02", 
    title: "ضمان ذهبي معتمد", 
    desc: "جميع خدماتنا في العزل وكشف التسربات موثقة بضمان فعلي يصل إلى 10 سنوات، لنضمن لك راحة البال واستدامة الحلول.",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  { 
    id: "03", 
    title: "فريق هندسي متخصص", 
    desc: "نخبة من أفضل المهندسين والفنيين المدربين على أعلى مستوى، ذوي خبرة طويلة في التعامل مع أصعب التحديات.",
    icon: <Users className="w-8 h-8" />
  },
  { 
    id: "04", 
    title: "عزل مائي وحراري", 
    desc: "نستخدم أفضل مواد العزل العالمية التي تحمي سطح منزلك من تسربات مياه الأمطار وتقلل من تسرب الحرارة.",
    icon: <Droplet className="w-8 h-8" />
  },
  { 
    id: "05", 
    title: "سرعة الاستجابة والإنجاز", 
    desc: "نوفر فريق طوارئ جاهز للتدخل السريع والوصول إليك في أسرع وقت داخل الخرج لمعالجة المشكلة قبل تفاقمها.",
    icon: <Wrench className="w-8 h-8" />
  },
];

export default function Features() {
  const [active, setActive] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  // التحريك التلقائي
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, active]);

  return (
    <section className="relative w-full py-24 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4">
        
        {/* عنوان السكشن */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
            لماذا تختار <span className="text-[#D4AF37]">أساس الأمن</span>؟
          </h2>
          <div className="w-24 h-1 bg-[#00BFFF] mx-auto rounded-full"></div>
        </div>

        {/* المستطيل الكبير اللبني المضيء بالذهبي الذي يحتضن الكروت */}
        <div 
          className="relative w-full max-w-[1300px] mx-auto bg-gradient-to-b from-[#00BFFF]/20 to-[#00BFFF]/5 border-2 border-[#D4AF37] rounded-[2.5rem] shadow-[0_0_50px_rgba(212,175,55,0.4)] backdrop-blur-md px-4 py-12 md:py-16 lg:px-12 z-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* حاوية الكروت 3D */}
          <div className="relative w-full max-w-6xl mx-auto h-[450px] [perspective:1200px] z-10">
            {features.map((item, index) => {
              const isActive = index === active;
              const isPrev = index === (active === 0 ? features.length - 1 : active - 1);
              const isNext = index === (active === features.length - 1 ? 0 : active + 1);

              let transformStyle = "translateX(-50%) translateZ(-400px) rotateY(0deg)";
              let transformOrigin = "center center";
              let opacity = "0";
              let zIndex = 0;

              if (isActive) {
                transformStyle = "translateX(-50%) translateZ(40px) rotateY(0deg)";
                transformOrigin = "center center";
                opacity = "1";
                zIndex = 30;
              } else if (isPrev) {
                transformStyle = "translateX(calc(50% + 15px)) translateZ(0px) rotateY(25deg)";
                transformOrigin = "left center";
                opacity = "0.9";
                zIndex = 20;
              } else if (isNext) {
                transformStyle = "translateX(calc(-150% - 15px)) translateZ(0px) rotateY(-25deg)";
                transformOrigin = "right center";
                opacity = "0.9";
                zIndex = 20;
              }

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (isNext) handleNext();
                    if (isPrev) handlePrev();
                  }}
                  className={`absolute top-0 left-1/2 w-full max-w-[310px] md:max-w-[340px] h-[430px] transition-all duration-700 ease-in-out flex flex-col justify-start p-8 rounded-xl ${
                    isActive 
                      ? "bg-gradient-to-b from-[#00BFFF]/20 to-[#030b1c] border-2 border-[#D4AF37] cursor-default shadow-[0_0_40px_rgba(212,175,55,0.5)]" 
                      : "bg-[#061124] border border-[#00BFFF]/30 cursor-pointer hover:opacity-100 hover:shadow-[0_10px_30px_rgba(0,191,255,0.3)] shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                  }`}
                  style={{
                    transform: transformStyle,
                    transformOrigin: transformOrigin,
                    opacity: opacity,
                    zIndex: zIndex,
                    transformStyle: "preserve-3d",
                    pointerEvents: isActive || isPrev || isNext ? "auto" : "none",
                  }}
                >
                  <div className="absolute top-6 right-6 text-6xl font-black">
                    <span className={isActive ? "text-[#D4AF37]/15" : "text-[#00BFFF]/10"}>
                      {item.id}
                    </span>
                  </div>

                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 mt-2 relative z-10 ${isActive ? "bg-[#D4AF37]/20 text-[#D4AF37]" : "bg-[#00BFFF]/10 text-[#00BFFF]"}`}>
                    {item.icon}
                  </div>

                  <h3 className={`text-2xl font-bold mb-4 relative z-10 ${isActive ? "text-white" : "text-gray-200"}`}>
                    {item.title}
                  </h3>
                  
                  <p className={`leading-relaxed text-sm md:text-base relative z-10 ${isActive ? "text-gray-200" : "text-gray-400"}`}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* أزرار التنقل (الأسهم والترقيم) داخل المستطيل الكبير */}
          <div className="flex justify-center items-center gap-8 mt-12 relative z-10">
            <button 
              onClick={handlePrev} 
              title="السابق"
              className="w-12 h-12 rounded-full border-2 border-[#D4AF37]/50 flex items-center justify-center text-white hover:text-[#030b1c] hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
              <ChevronRight className="w-6 h-6" /> 
            </button>
            
            <div className="text-white font-bold text-2xl tracking-widest" dir="ltr">
              <span className="text-[#D4AF37]">{(active + 1).toString().padStart(2, '0')}</span> 
              <span className="text-gray-500 mx-2">/</span> 
              <span className="text-[#00BFFF]">{features.length.toString().padStart(2, '0')}</span>
            </div>

            <button 
              onClick={handleNext} 
              title="التالي"
              className="w-12 h-12 rounded-full border-2 border-[#D4AF37]/50 flex items-center justify-center text-white hover:text-[#030b1c] hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}