"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  // تحديد السؤال المفتوح حالياً (القيمة الافتراضية 0 يعني أول سؤال مفتوح)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // الأسئلة الشائعة الخاصة بخدمات الشركة
  const faqs = [
    {
      question: "هل تقومون بتكسير الجدران أو الأرضيات لكشف التسربات؟",
      answer: "لا، نحن نعتمد على أحدث الأجهزة الأمريكية والألمانية التي تعمل بالموجات الصوتية والحرارية لتحديد مكان التسرب بدقة متناهية خلف الجدران وتحت البلاط دون الحاجة لأي تكسير عشوائي.",
    },
    {
      question: "كم مدة الضمان التي تقدمونها على أعمال العزل؟",
      answer: "نقدم ضماناً ذهبياً وفعلياً يصل إلى 10 سنوات على أعمال العزل المائي والحراري، مع متابعة دورية للتأكد من جودة واستدامة المواد المستخدمة وحماية عقارك بالكامل.",
    },
    {
      question: "هل تقدمون خدماتكم داخل مدينة الخرج فقط؟",
      answer: "نعم، نحن نتمركز ونركز خدماتنا حالياً داخل مدينة الخرج لضمان سرعة الاستجابة وتقديم أعلى جودة ممكنة لعملائنا في المنطقة، ولدينا فريق طوارئ جاهز للتدخل السريع.",
    },
    {
      question: "كيف يمكنني حجز موعد أو طلب خدمة طوارئ؟",
      answer: "يمكنك حجز موعد بسهولة عبر التواصل معنا مباشرة من خلال زر الواتساب الموجود في الموقع، أو بالاتصال على رقمنا الموحد (0501206816) وسيقوم فريق خدمة العملاء بالرد عليك فوراً.",
    },
    {
      question: "هل المواد المستخدمة في العزل آمنة ومعتمدة؟",
      answer: "بكل تأكيد. نحن نستخدم مواد عزل أصلية ومعتمدة عالمياً، ومطابقة للمواصفات والمقاييس السعودية، وهي آمنة تماماً على الصحة ومقاومة للبكتيريا وتمنع تسرب الحرارة والمياه بكفاءة عالية.",
    },
  ];

  const toggleFAQ = (index: number) => {
    // إذا ضغط على نفس السؤال المفتوح يغلقه، وإلا يفتح السؤال الجديد
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* عنوان السكشن */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
            الأسئلة <span className="text-[#00BFFF]">الشائعة</span>
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            إجابات وافية لأكثر الاستفسارات التي تهم عملائنا
          </p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        {/* حاوية الأكورديون */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border-2 transition-all duration-300 rounded-2xl overflow-hidden ${
                  isOpen 
                    ? "border-[#D4AF37] bg-[#061124] shadow-[0_0_20px_rgba(212,175,55,0.15)]" 
                    : "border-[#00BFFF]/20 bg-[#061124]/50 hover:border-[#00BFFF]/50"
                }`}
              >
                {/* رأس السؤال (الزر) */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-right focus:outline-none group"
                >
                  <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                    isOpen ? "text-[#D4AF37]" : "text-white group-hover:text-[#00BFFF]"
                  }`}>
                    {faq.question}
                  </h3>
                  
                  {/* أيقونة الفتح والإغلاق */}
                  <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full transition-colors duration-300 ${
                    isOpen ? "bg-[#D4AF37]/10 text-[#D4AF37]" : "bg-[#00BFFF]/10 text-[#00BFFF]"
                  }`}>
                    {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                  </div>
                </button>

                {/* الإجابة (محتوى الأكورديون مع حركة انسيابية) */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-5 md:pb-6 px-5 md:px-6" : "grid-rows-[0fr] opacity-0 px-5 md:px-6"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed border-t border-gray-700/50 pt-4 mt-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}