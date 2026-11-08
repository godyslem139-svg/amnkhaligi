"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Clock,
  MapPin,
  Send,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Wrench,
  Sparkles,
  PhoneCall,
  Calendar,
  Building,
  User,
  Map,
} from "lucide-react";

interface ContactFAQ {
  question: string;
  answer: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    neighborhood: "",
    service: "كشف تسربات المياه",
    urgency: "عادي",
    notes: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // خدمات الشركة
  const servicesList = [
    "كشف تسربات المياه",
    "عزل أسطح (مائي وحراري)",
    "غسيل وعزل خزانات",
    "ترميم وبناء وصيانة",
    "تسليك مجاري بالضغط",
    "رش مبيدات ومكافحة حشرات",
    "غسيل وصيانة مكيفات",
  ];

  const neighborhoodsList = [
    "حي الخزامى",
    "حي الورود",
    "حي النهضة",
    "حي الأندلس",
    "حي المصيف",
    "حي الريان",
    "حي المنتزه",
    "حي السلام",
    "حي السعادة",
    "حي الفيصلية",
    "حي الخالدية",
    "حي اليرموك",
    "الدلم والهياثم واليمامة",
    "حي آخر داخل الخرج",
  ];

  const contactFaqs: ContactFAQ[] = [
    {
      question: "كم يستغرق وصول فريق الفحص الميداني بعد إرسال الطلب؟",
      answer:
        "في الحالات العاجلة وطوارئ تسربات المياه أو انسداد المجاري، يصل الفريق الميداني خلال 30 إلى 45 دقيقة داخل كافة أحياء الخرج. أما المواعيد العادية، فيتم تحديد الوقت المناسب لك بدقة في نفس اليوم أو اليوم التالي.",
    },
    {
      question: "هل توجد رسوم على الاستشارة أو الاتصال الهاتفي؟",
      answer:
        "الاستشارة الهاتفية والتشخيص المبدئي عبر الهاتف أو الواتساب مجاني بالكامل. يتم الاتفاق المسبق على رسوم الفحص بالأجهزة أو المعاينة الميدانية بوضوح تام وشفافية قبل توجه الفريق لمنزلك.",
    },
    {
      question: "هل تعملون في أوقات المساء والإجازات الرسمية؟",
      answer:
        "نعم، خدمات الطوارئ والدعم الميداني لشركة أساس الأمن الخليجي تعمل على مدار 24 ساعة يومياً طوال أيام الأسبوع، بما في ذلك أيام الجمعة والعطل الرسمية لضمان سرعة معالجة التسربات المفاجئة.",
    },
    {
      question: "كيف أضمن حقي في الضمان بعد إنهاء العمل وسداد الفاتورة؟",
      answer:
        "يسلمك مشرف الفريق فور انتهاء العمل سند قبض وفاتورة ضريبية رسمية مرفقة بعقد الضمان المكتوب والمختوم بختم الشركة الرسمي (يصل إلى 10 سنوات على العزل)، ورقم العقد يكون مسجلاً في قاعدة بياناتنا للمتابعة الدورية.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `السلام عليكم ورحمة الله وبركاته، أرغب في حجز خدمة من شركة أساس الأمن الخليجي:
📌 *الاسم:* ${formData.name}
📞 *رقم الجوال:* ${formData.phone}
📍 *الحي / المنطقة بالخرج:* ${formData.neighborhood}
🛠️ *الخدمة المطلوبة:* ${formData.service}
⚡ *درجة الأهمية:* ${formData.urgency}
📝 *ملاحظات إضافية:* ${formData.notes || "لا توجد ملاحظات"}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/966501206816?text=${encodedMessage}`;

    setFormSubmitted(true);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden" dir="rtl">
      
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-[#00BFFF]/20">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#00BFFF]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6 bg-[#061124]/80 mx-auto w-fit px-4 py-2 rounded-full border border-[#00BFFF]/30">
            <Link href="/" className="hover:text-[#00BFFF] transition-colors">
              الرئيسية
            </Link>
            <span className="text-[#D4AF37]">/</span>
            <span className="text-[#D4AF37] font-bold">تواصل معنا</span>
          </div>

          <span className="inline-flex items-center gap-2 bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            فريق الدعم الفني والطوارئ في خدمتكم دائماً
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            تواصل مع خبراء <span className="text-[#00BFFF]">أساس الأمن</span>{" "}
            <span className="text-[#D4AF37]">الخليجي</span> بالخرج
          </h1>

          <p className="text-gray-300 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto">
            سواء كنت تعاني من تسرب مياه مفاجئ، ارتفاع في الفاتورة، أو ترغب في عزل وترميم عقارك، فريقنا الهندسي جاهز للرد عليك وتوجيه أقرب سيارة فحص مجهزة إلى باب منزلك فوراً.
          </p>
        </div>
      </section>

      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#061124]/90 border-2 border-[#00BFFF]/40 hover:border-[#D4AF37] rounded-3xl p-8 transition-all duration-300 shadow-[0_0_20px_rgba(0,191,255,0.15)] flex flex-col justify-between group">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#00BFFF]/10 border border-[#00BFFF]/40 flex items-center justify-center text-[#00BFFF] group-hover:bg-[#D4AF37] group-hover:text-[#030b1c] group-hover:border-[#D4AF37] transition-all mb-6">
                  <PhoneCall className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">اتصال هاتفي مباشر</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  تواصل هاتفياً مع خدمة العملاء لطلب الاستشارات السريعة وحجز المواعيد الفورية في الخرج.
                </p>
              </div>
              <a
                href="tel:+966501206816"
                className="flex items-center justify-center gap-3 bg-[#030b1c] border-2 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-[#030b1c] py-3.5 px-6 rounded-xl font-bold transition-all"
              >
                <Phone className="w-5 h-5" />
                <span dir="ltr">+966 50 120 6816</span>
              </a>
            </div>

            <div className="bg-[#061124]/90 border-2 border-[#D4AF37] rounded-3xl p-8 transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.25)] flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#D4AF37] text-[#030b1c] text-xs font-black px-4 py-1 rounded-bl-xl">
                الأسرع رداً
              </div>
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#030b1c] transition-all mb-6">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">محادثة واتساب 24/7</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  أرسل موقع منزلك، صور أو فيديوهات التسرب والرطوبة لنقدم لك تشخيصاً مبدئياً وتسعيراً فورياً.
                </p>
              </div>
              <Link
                href="https://wa.me/966501206816"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#e2bd44] text-[#030b1c] py-3.5 px-6 rounded-xl font-extrabold shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>راسلنا عبر واتساب الآن</span>
              </Link>
            </div>

            <div className="bg-[#061124]/90 border-2 border-[#00BFFF]/40 hover:border-[#D4AF37] rounded-3xl p-8 transition-all duration-300 shadow-[0_0_20px_rgba(0,191,255,0.15)] flex flex-col justify-between group">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#00BFFF]/10 border border-[#00BFFF]/40 flex items-center justify-center text-[#00BFFF] group-hover:bg-[#D4AF37] group-hover:text-[#030b1c] group-hover:border-[#D4AF37] transition-all mb-6">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">النطاق والمركز الميداني</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  المقر الرئيسي: مدينة الخرج - السيح، مع أسطول سيارات متنقل يغطي كافة الأحياء والمراكز التابعة.
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 bg-[#030b1c] border border-gray-700 py-3.5 px-4 rounded-xl text-sm font-semibold text-gray-300">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>طوارئ ميدانية متاحة 24 ساعة</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* نموذج طلب الحجز الذكي */}
            <div className="lg:col-span-7 bg-[#061124]/95 border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
              <div className="mb-8">
                <span className="text-[#00BFFF] text-xs font-bold bg-[#00BFFF]/10 px-3 py-1 rounded-md border border-[#00BFFF]/30">
                  حجز موعد إلكتروني مباشر
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 mb-2">
                  طلب معاينة وفحص هندسي
                </h2>
                <p className="text-gray-300 text-sm sm:text-base">
                  املأ البيانات التالية وسيتم تجهيز طلبك ونقلك إلى محادثة واتساب فورية مع المهندس المسؤول.
                </p>
              </div>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-green-950/60 border border-green-500 text-green-200 text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>تم تحويلك إلى الواتساب بنجاح! إذا لم تفتح المحادثة تلقائياً، يمكنك الضغط على زر الواتساب بالأسفل.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-[#D4AF37]" />
                      الاسم الكريم *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: فهد الدوسري"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#030b1c] border border-gray-700 focus:border-[#D4AF37] rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#D4AF37]" />
                      رقم الجوال *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="05XXXXXXXX"
                      dir="ltr"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#030b1c] border border-gray-700 focus:border-[#D4AF37] rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none transition-colors text-right"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#00BFFF]" />
                      الحي داخل الخرج *
                    </label>
                    <select
                      value={formData.neighborhood}
                      onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                      required
                      className="w-full bg-[#030b1c] border border-gray-700 focus:border-[#00BFFF] rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none transition-colors"
                    >
                      <option value="">اختر الحي الخاص بك</option>
                      {neighborhoodsList.map((nh, idx) => (
                        <option key={idx} value={nh}>
                          {nh}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2 flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-[#00BFFF]" />
                      الخدمة المطلوبة *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#030b1c] border border-gray-700 focus:border-[#00BFFF] rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none transition-colors"
                    >
                      {servicesList.map((srv, idx) => (
                        <option key={idx} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-200 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#D4AF37]" />
                    حالة الطلب
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["عادي (موعد مجدول)", "مستعجل (خلال اليوم)", "طوارئ قصوى (تسرب حاد)"].map((urg) => (
                      <button
                        key={urg}
                        type="button"
                        onClick={() => setFormData({ ...formData, urgency: urg })}
                        className={`py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                          formData.urgency === urg
                            ? "bg-[#D4AF37] text-[#030b1c] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                            : "bg-[#030b1c] text-gray-300 border-gray-800 hover:border-gray-600"
                        }`}
                      >
                        {urg}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-200 mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#00BFFF]" />
                    تفاصيل أو مظاهر المشكلة (اختياري)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="مثال: رطوبة في سقف الحمام بالدور الأرضي، أو تسرب حول خزان المياه..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#030b1c] border border-gray-700 focus:border-[#00BFFF] rounded-xl p-4 text-white placeholder-gray-500 text-sm focus:outline-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D4AF37] via-[#e5c148] to-[#D4AF37] hover:scale-[1.01] text-[#030b1c] font-black py-4 px-6 rounded-xl transition-all shadow-[0_0_25px_rgba(212,175,55,0.5)] flex items-center justify-center gap-3 text-base sm:text-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>تأكيد الحجز والإرسال للمهندس عبر واتساب</span>
                </button>
              </form>
            </div>

            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#061124]/90 border-2 border-[#00BFFF]/30 rounded-3xl p-8 shadow-[0_0_25px_rgba(0,191,255,0.15)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00BFFF]/15 text-[#00BFFF] flex items-center justify-center">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">تعهد الجودة والمصداقية</h3>
                    <p className="text-xs text-[#D4AF37]">معايير أساس الأمن الخليجي الصارمة</p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span><strong>كشف دقيق بدون تكسير:</strong> نعتمد على الحساسات الإلكترونية لتحديد العطل في نطاق بلاطة واحدة فقط.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span><strong>عقود ضمان رسمية:</strong> تصل إلى 10 سنوات على أعمال العزل المائي والحراري وعزل الخزانات.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span><strong>تقارير معتمدة:</strong> نصدر تقارير هندسية معتمدة لتقديمها لشركة المياه الوطنية للاعتراض على ارتفاع الفاتورة.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span><strong>طواقم فنية نظامية:</strong> عمالة مدربة تحت إشراف هندسي مباشر بزي رسمي يحترم خصوصية المنازل.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#061124]/90 border border-[#D4AF37]/40 rounded-3xl p-7 shadow-[0_0_20px_rgba(212,175,55,0.15)] flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs text-[#00BFFF] font-bold">شاهد شغلنا الحقيقي صوت وصورة</span>
                  <h4 className="text-lg font-bold text-white">حسابنا الرسمي على تيك توك</h4>
                  <p className="text-xs text-gray-400">فيديوهات يومية لعمليات كشف التسربات والعزل بالخرج</p>
                </div>
                <Link
                  href="https://www.tiktok.com/@amnkhaliji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#00BFFF] hover:bg-[#D4AF37] text-[#030b1c] flex items-center justify-center transition-all shadow-md"
                  title="متابعة حسابنا على تيك توك"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                  </svg>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="py-16 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-[#00BFFF] text-xs font-bold bg-[#00BFFF]/10 px-3 py-1 rounded-md border border-[#00BFFF]/30">
              إجابات سريعة
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-3">
              استفسارات متكررة حول <span className="text-[#D4AF37]">الحجز والمعاينة</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              كل ما يهمك معرفته قبل طلب فريق الفحص لشركة أساس الأمن الخليجي
            </p>
          </div>

          <div className="space-y-4">
            {contactFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#061124] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                      : "bg-[#061124]/60 border-[#00BFFF]/20 hover:border-[#00BFFF]/50"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <h3 className={`text-base sm:text-lg font-bold ${isOpen ? "text-[#D4AF37]" : "text-white"}`}>
                      {faq.question}
                    </h3>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen ? "bg-[#D4AF37] text-[#030b1c]" : "bg-[#00BFFF]/10 text-[#00BFFF]"
                      }`}
                    >
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-gray-800 text-gray-300 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-[#030b1c] border-2 border-[#D4AF37] rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(212,175,55,0.25)]">
            <div className="text-center md:text-right">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                هل لديك حالة طوارئ مائية في الخرج الآن؟
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                لا تتردد في الاتصال المباشر بإدارتنا الفنية للمساعدة الفورية.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+966501206816"
                className="flex items-center gap-3 bg-[#00BFFF] hover:bg-[#D4AF37] text-[#030b1c] font-black px-6 py-3.5 rounded-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                <span dir="ltr">+966 50 120 6816</span>
              </a>
              <Link
                href="https://wa.me/966501206816"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#D4AF37] hover:bg-[#e2bd44] text-[#030b1c] font-black px-6 py-3.5 rounded-xl transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>واتساب مباشر</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}