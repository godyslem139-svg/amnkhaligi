"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  // داتا وهمية واقعية تناسب خدمات الشركة في الخرج
  const testimonials = [
    {
      id: 1,
      name: "محمد الدوسري",
      role: "عميل من الخرج",
      text: "خدمة ممتازة وسرعة في الاستجابة. كان عندي تسرب في خزان المياه والحمد لله تم كشفه وإصلاحه بدون أي تكسير. شغل احترافي جداً.",
    },
    {
      id: 2,
      name: "عبدالله القحطاني",
      role: "مالك فيلا",
      text: "أفضل شركة عزل أسطح تعاملت معاها. شغل نظيف، مواد أصلية، وضمان حقيقي، والمهندسين قمة في الأخلاق والتعاون.",
    },
    {
      id: 3,
      name: "أبو فهد",
      role: "عميل من الخرج",
      text: "دقة عالية في كشف التسربات بالأجهزة الحديثة. وفروا علي مبالغ كبيرة كنت سأدفعها في تكسير البلاط. أنصح بشدة بالتعامل معهم.",
    },
    {
      id: 4,
      name: "خالد المطيري",
      role: "صاحب عمارة سكنية",
      text: "استجابة سريعة لحالة طوارئ في سباكة العمارة. حلوا مشكلة انسداد المجاري بسرعة واحترافية وأسعارهم معقولة جداً مقارنة بالجودة.",
    },
    {
      id: 5,
      name: "سعد السبيعي",
      role: "عميل من الخرج",
      text: "عملوا لي عزل مائي وحراري للسطح قبل الشتاء، بصراحة فرق معي كثير في فاتورة الكهرباء واختفت الرطوبة تماماً من الأسقف.",
    },
  ];

  // تكرار المصفوفة لضمان استمرارية حركة الشريط (Infinite Loop)
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative w-full py-24 overflow-hidden" dir="rtl">
      
      {/* ستايل حركة الشريط الخاص بآراء العملاء */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker-testimonials {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        .animate-ticker-test {
          display: flex;
          width: max-content;
          animation: ticker-testimonials 40s linear infinite;
        }
        .ticker-container-test:hover .animate-ticker-test {
          animation-play-state: paused;
        }
      `}} />

      <div className="container mx-auto px-4 mb-16 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
          ماذا يقول <span className="text-[#D4AF37]">عملاؤنا؟</span>
        </h2>
        <p className="text-gray-300 text-lg mb-4">
          نفخر بثقة عملائنا في الخرج ونسعى دائماً لتقديم أفضل الخدمات
        </p>
        <div className="w-24 h-1 bg-[#00BFFF] mx-auto rounded-full"></div>
      </div>

      {/* حاوية شريط الكروت المتحرك */}
      <div className="ticker-container-test relative w-full overflow-hidden z-10 py-4">
        <div className="animate-ticker-test gap-6 px-3">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative w-[320px] md:w-[420px] bg-[#061124]/80 backdrop-blur-md border border-[#00BFFF]/20 hover:border-[#D4AF37] rounded-3xl p-8 flex flex-col flex-shrink-0 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] overflow-hidden"
            >
              {/* أيقونة الاقتباس الكبيرة الشفافة في الخلفية */}
              <div className="absolute top-4 left-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 text-[#00BFFF]">
                <Quote className="w-24 h-24 rotate-180" />
              </div>

              {/* النجوم وتقييم العميل */}
              <div className="flex items-center gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#D4AF37]" fill="#D4AF37" />
                ))}
              </div>

              {/* نص الرأي */}
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 relative z-10 flex-grow italic">
                "{testimonial.text}"
              </p>

              {/* بيانات العميل (الاسم والصفة) */}
              <div className="flex items-center gap-4 relative z-10 mt-auto border-t border-gray-700/50 pt-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00BFFF] to-[#D4AF37] flex items-center justify-center text-[#030b1c] font-bold text-xl flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg group-hover:text-[#00BFFF] transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <span className="text-[#D4AF37] text-sm">
                    {testimonial.role}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}