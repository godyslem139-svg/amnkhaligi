import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { 
  MessageCircle, 
  PhoneCall, 
  ShieldCheck, 
  Percent, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Star, 
  Wrench, 
  Droplets, 
  Home, 
  Building2, 
  Bug, 
  Wind,
  HelpCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "عروض البلاك فرايداي خصم 50% كشف تسربات المياه وعزل أسطح بالخرج",
  description: "استفد الآن من خصومات البلاك فرايداي في الخرج. خصم 50% على كشف تسربات المياه والفحص وعزل الأسطح، الخزانات. ضمان معتمد وفحص بأحدث الأجهزة.",
  keywords: [
    "عروض بلاك فراي داي الخرج", 
    "خصومات عزل الأسطح بالخرج", 
    "كشف تسربات المياه خصم 50%", 
    "أساس الأمن الخليجي عروض", 
    "أرخص شركة عزل بالخرج", 
    "عروض الجمعة البيضاء صيانة منازل"
  ],
  openGraph: {
    title: "أقوى عروض البلاك فراي داي بالخرج | خصم 50% على الكشف والعمليات",
    description: "وفر نصف ميزانية صيانة عقارك بالخرج مع عروض أساس الأمن الخليجي الحصرية.",
    url: "https://www.amnkhaligi.com/black-friday",
    siteName: "أساس الأمن الخليجي",
    locale: "ar_SA",
    type: "website",
  },
};

export default function BlackFridayPage() {
  // بيانات الأسئلة الشائعة لـ SEO Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ما هي تفاصيل عروض البلاك فراي داي من أساس الأمن الخليجي؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "العرض يتضمن خصماً مزدوجاً بنسبة 50% على قيمة الكشف والفحص الهندسي، و50% خصم إضافي على قيمة العمليات والتنفيذ (عزل الأسطح، الخزانات، الصيانة)."
        }
      },
      {
        "@type": "Question",
        "name": "هل الضمان يسري على خدمات العرض المخفضة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، جميع خدماتنا في عروض الجمعة البيضاء تخضع لضمان ذهبي معتمد وموثق يمتد لسنوات."
        }
      },
      {
        "@type": "Question",
        "name": "كيف يمكنني حجز العرض والاستفادة منه بالخرج؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "يمكنك التواصل معنا فوراً عبر زر الواتساب المباشر في الصفحة أو الاتصال بنا لحجز موعد المعاينة المبكرة."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#030b1c] text-white overflow-hidden" dir="rtl">
      
      {/* ترميز السيو Schema.org */}
      <JsonLd data={jsonLd} />

      {/* شريط التنبيه العلوي للعرض المحدود */}
      <div className="bg-gradient-to-r from-[#D4AF37] via-yellow-500 to-[#D4AF37] text-[#030b1c] py-3 px-4 text-center font-extrabold text-sm md:text-base shadow-lg animate-pulse flex items-center justify-center gap-2">
        <Sparkles className="w-5 h-5" />
        <span>عروض بلاك فراي داي الحصرية: خصم 50% شامل الكشف وجميع عمليات الصيانة والعزل بالخرج! 🚀</span>
        <Sparkles className="w-5 h-5" />
      </div>

      {/* قسم الـ Hero الرئيسي */}
      <section className="relative py-24 px-4 text-center max-w-6xl mx-auto">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent blur-3xl"></div>
        
        <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-5 py-2.5 rounded-full text-[#D4AF37] mb-8 font-extrabold text-sm md:text-base shadow-[0_0_20px_rgba(212,175,55,0.2)]">
          <Percent className="w-5 h-5" />
          <span>أقوى خصومات العام في مدينة الخرج - وفر نصف التكلفة الآن</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-wide">
          احمِ عقارك بـ <span className="text-[#00BFFF] drop-shadow-[0_0_15px_rgba(0,191,255,0.5)]">نصف السعر</span> في عروض <span className="text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">البلاك فراي داي</span>
        </h1>

        {/* العنوان الفرعي الجديد H2 مع الخدمات */}
        <h2 className="text-xl md:text-2xl font-bold text-[#00BFFF] mb-6 tracking-wide">
          - كشف تسربات المياه وعزل أسطح وخزانات وجميع الخدمات -
        </h2>

        <p className="text-gray-300 text-lg md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
          شركة <span className="text-white font-bold underline decoration-[#D4AF37]">أساس الأمن الخليجي</span> تكسر الأسعار وتطرح نظام خصم مزدوج غير مسبوق: <span className="text-[#D4AF37] font-bold">50% خصم على الكشف</span> + <span className="text-[#D4AF37] font-bold">50% خصم على التنفيذ والعمليات</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
          <Link
            href="https://wa.me/966501206816?text=مرحباً، أرغب في الاستفادة من عروض بلاك فراي داي (خصم 50% على الكشف والعمليات)"
            target="_blank"
            className="flex items-center justify-center gap-3 w-full sm:w-auto bg-[#D4AF37] text-[#030b1c] hover:bg-white px-9 py-5 rounded-full font-black text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.5)]"
          >
            <MessageCircle className="w-6 h-6" />
            <span>احجز خصم الـ 50% عبر الواتساب الآن</span>
          </Link>

          <Link
            href="tel:966501206816"
            className="flex items-center justify-center gap-3 w-full sm:w-auto border-2 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-[#030b1c] px-9 py-5 rounded-full font-black text-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,191,255,0.2)]"
          >
            <PhoneCall className="w-6 h-6" />
            <span>اتصل بخبير الصيانة مباشرة</span>
          </Link>
        </div>
      </section>

      {/* سيكشن الإحصائيات والثقة */}
      <section className="py-12 bg-[#050f24]/80 border-y border-white/5">
        <div className="container mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-black text-[#D4AF37] mb-2">50%</div>
            <div className="text-gray-300 text-sm md:text-base font-semibold">خصم مزدوج حقيقي</div>
          </div>
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-black text-[#00BFFF] mb-2">+1000</div>
            <div className="text-gray-300 text-sm md:text-base font-semibold">عميل راضٍ بالخرج</div>
          </div>
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-black text-[#D4AF37] mb-2">100%</div>
            <div className="text-gray-300 text-sm md:text-base font-semibold">بدون تكسير عشوائي</div>
          </div>
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-black text-[#00BFFF] mb-2">ضمان</div>
            <div className="text-gray-300 text-sm md:text-base font-semibold">معتمد وموثق</div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">تفاصيل عرض <span className="text-[#D4AF37]"> البلاك فرايداي</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">نظام خصم صُمم خصيصاً لمساعدتك على صيانة منزلك بالكامل بأقل ميزانية ممكنة خلال موسم البلاك فرايداي</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-[#050f24] border-2 border-[#00BFFF]/30 hover:border-[#00BFFF] rounded-3xl p-8 md:p-10 transition-all duration-300 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 bg-[#00BFFF] text-[#030b1c] font-black px-6 py-2 rounded-br-2xl text-sm">
              الخصم الأول
            </div>
            <div className="w-16 h-16 rounded-2xl bg-[#00BFFF]/10 flex items-center justify-center text-[#00BFFF] mb-6 mt-4">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">50% خصم على الكشف والفحص</h3>
            <p className="text-gray-300 leading-relaxed mb-6 text-base">
              نستخدم أحدث الأجهزة الصوتية والكاميرات الحرارية الألمانية للكشف عن أماكن التسربات الخفية بدقة مذهلة دون أي تكسير، مع تقرير هندسي معتمد بنصف السعر فقط!
            </p>
            <ul className="space-y-3 text-gray-200 text-sm md:text-base">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#00BFFF]" /> كشف تسربات المياه والمسابح والأسطح</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#00BFFF]" /> اعتماد تقارير شركة المياه الوطنية</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#00BFFF]" /> فحص شامل لشبكات الصرف والمعالجة</li>
            </ul>
          </div>

          {/* كارت عرض العمليات والتنفيذ */}
          <div className="bg-[#050f24] border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-3xl p-8 md:p-10 transition-all duration-300 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 bg-[#D4AF37] text-[#030b1c] font-black px-6 py-2 rounded-br-2xl text-sm">
              الخصم الثاني
            </div>
            <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 mt-4">
              <Percent className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">50% خصم على العمليات والتنفيذ</h3>
            <p className="text-gray-300 leading-relaxed mb-6 text-base">
              سواء كنت تحتاج إلى عزل أسطح مائي وحراري، عزل خزانات، ترميم، أو معالجة رطوبة؛ احصل على خصم 50% على قيمة التنفيذ والمواد الأصلية المعتمدة بالكامل.
            </p>
            <ul className="space-y-3 text-gray-200 text-sm md:text-base">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#D4AF37]" /> عزل الأسطح (فوم / مائي / حراري)</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#D4AF37]" /> تنظيف وعزل الخزانات الأرضية والعلوية</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#D4AF37]" /> معالجة تسربات الحمامات والمطابخ بالبخاخات</li>
            </ul>
          </div>

        </div>
      </section>

      {/* سيكشن الخدمات الشاملة المشمولة بالعرض */}
      <section className="py-20 px-4 bg-[#050f24]/50 border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">خدماتنا الاحترافية المشمولة في <span className="text-[#00BFFF]">خصومات البلاك فراي داي</span></h2>
            <p className="text-gray-400">كل ما يحتاجه عقارك بالخرج متوفر بأعلى معايير الجودة السعودية وبنصف التكلفة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* خدمة 1 */}
            <div className="bg-[#030b1c] border border-white/10 hover:border-[#D4AF37] p-8 rounded-2xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#00BFFF]/10 text-[#00BFFF] flex items-center justify-center mb-5">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">كشف تسربات المياه</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">فحص دقيق لجمیع الأنابيب والجدران بأجهزة الإغلاق والذبذبات دون إحداث أي تخريب بالمكان.</p>
              <span className="text-[#D4AF37] font-bold text-xs">خصم 50% متاح الآن</span>
            </div>

            {/* خدمة 2 */}
            <div className="bg-[#030b1c] border border-white/10 hover:border-[#D4AF37] p-8 rounded-2xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-5">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">عزل الأسطح والخزانات</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">حماية قصوى لمنزلك من حرارة الصيف القارسة وأمطار الشتاء عبر عزل الفوم والمائي المتكامل.</p>
              <span className="text-[#D4AF37] font-bold text-xs">خصم 50% متاح الآن</span>
            </div>

            {/* خدمة 3 */}
            <div className="bg-[#030b1c] border border-white/10 hover:border-[#D4AF37] p-8 rounded-2xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#00BFFF]/10 text-[#00BFFF] flex items-center justify-center mb-5">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">ترميم وبناء المباني</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">إعادة تأهيل الهياكل الخرسانية، معالجة التصدعات، وإصلاح الشروخ بأحدث الطرق الهندسية.</p>
              <span className="text-[#D4AF37] font-bold text-xs">خصم 50% متاح الآن</span>
            </div>

            {/* خدمة 4 */}
            <div className="bg-[#030b1c] border border-white/10 hover:border-[#D4AF37] p-8 rounded-2xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-5">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">تسليك المجاري والصرف</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">حل جذري لانسدادات البيارات والخطوط الرئيسية باستخدام ضغط الهيدروجين والشفط الآلي.</p>
              <span className="text-[#D4AF37] font-bold text-xs">خصم 50% متاح الآن</span>
            </div>

            {/* خدمة 5 */}
            <div className="bg-[#030b1c] border border-white/10 hover:border-[#D4AF37] p-8 rounded-2xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#00BFFF]/10 text-[#00BFFF] flex items-center justify-center mb-5">
                <Bug className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">مكافحة الحشرات ورش المبيدات</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">قضاء تام على الصراصير، النمل الأبيض، والحشرات الطائرة بمبيدات آمنة وفعالة ومعتمدة.</p>
              <span className="text-[#D4AF37] font-bold text-xs">خصم 50% متاح الآن</span>
            </div>

            {/* خدمة 6 */}
            <div className="bg-[#030b1c] border border-white/10 hover:border-[#D4AF37] p-8 rounded-2xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-5">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">غسيل وصيانة المكيفات</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">تنظيف عميق للوحدات الداخلية والخارجية لتحسين كفاءة التبريد وتوفير استهلاك الكهرباء.</p>
              <span className="text-[#D4AF37] font-bold text-xs">خصم 50% متاح الآن</span>
            </div>

          </div>
        </div>
      </section>

      {/* سيكشن آراء العملاء (Testimonials) */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">ماذا يقول <span className="text-[#D4AF37]">عملاؤنا في الخرج</span> عن خدماتنا؟</h2>
          <p className="text-gray-400">شهادات حقيقية من عملائنا الذين استفادوا من خبرتنا وعروضنا السابقة</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-[#050f24] border border-white/10 p-8 rounded-2xl shadow-xl relative">
            <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              &quot;استغليت عرض بلاك فراي داي وعملت عزل فوم للسطح وكشف تسربات للمطبخ، وفرت مبلغ كبير والجودة ممتازة والفريق محترف جداً بالخرج.&quot;
            </p>
            <div className="font-bold text-white text-sm">أبو عبد الله القحطاني</div>
            <div className="text-gray-500 text-xs">حي الهدا، الخرج</div>
          </div>

          <div className="bg-[#050f24] border border-white/10 p-8 rounded-2xl shadow-xl relative">
            <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              &quot;خصم 50% حقيقي وملموس، وجابوا أجهزة حديثة كشفت مكان التسريب بدقة من غير ما يكسروا السيراميك نهائي. أنصح بالتعامل معهم بشدة.&quot;
            </p>
            <div className="font-bold text-white text-sm">محمد الدوسري</div>
            <div className="text-gray-500 text-xs">حي الاندلس، الخرج</div>
          </div>

          <div className="bg-[#050f24] border border-white/10 p-8 rounded-2xl shadow-xl relative">
            <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              &quot;خدمة سريعة ومعاملة راقية وضمان معتمد. التخفيضات ساعدتني أخلص صيانة الفيلا بالكامل بتكلفة أقل من المتوقع بكثير. شكراً أساس الأمن الخليجي.&quot;
            </p>
            <div className="font-bold text-white text-sm">سعد العتيبي</div>
            <div className="text-gray-500 text-xs">حي الخزامى، الخرج</div>
          </div>

        </div>
      </section>

      {/* سيكشن الأسئلة الشائعة (FAQ) */}
      <section className="py-20 px-4 bg-[#050f24]/50 border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <HelpCircle className="w-12 h-12 text-[#00BFFF] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">الأسئلة الشائعة حول عروض البلاك فراي داي</h2>
            <p className="text-gray-400">إجابات سريعة على كل ما ترغب في معرفته حول العرض والخدمات</p>
          </div>

          <div className="space-y-6">
            <div className="bg-[#030b1c] border border-white/10 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-2">ما هي تفاصيل عروض البلاك فراي داي من أساس الأمن الخليجي؟</h3>
              <p className="text-gray-400 text-sm leading-relaxed">العرض يتضمن خصماً مزدوجاً بنسبة 50% على قيمة الكشف والفحص الهندسي، و50% خصم إضافي على قيمة العمليات والتنفيذ (عزل الأسطح، الخزانات، الصيانة).</p>
            </div>

            <div className="bg-[#030b1c] border border-white/10 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-2">هل الضمان يسري على خدمات العرض المخفضة؟</h3>
              <p className="text-gray-400 text-sm leading-relaxed">نعم، جميع خدماتنا في عروض الجمعة البيضاء تخضع لضمان ذهبي معتمد وموثق يمتد لسنوات لضمان راحة بالك.</p>
            </div>

            <div className="bg-[#030b1c] border border-white/10 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-2">كيف يمكنني حجز العرض والاستفادة منه بالخرج؟</h3>
              <p className="text-gray-400 text-sm leading-relaxed">يمكنك التواصل معنا فوراً عبر زر الواتساب المباشر في الصفحة أو الاتصال بنا لحجز موعد المعاينة المبكرة قبل اكتمال العدد المخصص للعروض.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم العد التنازلي / الإلحاح النهائي (Urgency Section) */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#0a1630] to-[#030b1c] border-2 border-[#D4AF37]/40 rounded-3xl p-8 md:p-14 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
          <Clock className="w-14 h-14 text-[#D4AF37] mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl md:text-5xl font-black mb-6">العرض ساري لفترة محدودة أو حتى اكتمال العدد!</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            نظراً للإقبال الشديد من عملاء مدينة الخرج خلال موسم البلاك فراي داي، فإن الحجوزات اليومية للخصم المزدوج محدودة لضمان أعلى جودة تنفيذ. لا تفوت الفرصة ووفر نصف ميزانيتك الآن.
          </p>
          <Link
            href="https://wa.me/966501206816?text=أريد حجز عرض بلاك فراي داي (خصم 50%) قبل انتهاء المقاعد المتاحة"
            target="_blank"
            className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-[#030b1c] hover:bg-white px-12 py-5 rounded-full font-black text-xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_35px_rgba(212,175,55,0.6)]"
          >
            <MessageCircle className="w-7 h-7" />
            <span>احجز خصمك الآن (اضغط هنا للتواصل الفوري)</span>
          </Link>
        </div>
      </section>

    </div>
  );
}