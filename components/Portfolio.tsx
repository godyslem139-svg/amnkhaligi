import React from "react";
import Image from "next/image";

export default function Portfolio() {
  // بيانات المشاريع مطابقة للصورة المطلوبة مع ربطها بأسماء الصور الجديدة
  const projects = [
    {
      id: 1,
      category: "كشف تسربات المياه",
      title: "فحص ومعالجة تسربات فيلا",
      desc: "تم تحديد مصدر الهدر بدقة باستخدام الأجهزة الإلكترونية الحديثة بدون أي تكسير وإصلاحه فوراً.",
      image: "/Water Leakage Company.webp",
    },
    {
      id: 2,
      category: "عزل أسطح وفوم",
      title: "عزل حراري ومائي لسطح عمارة",
      desc: "تطبيق طبقات العزل المتكاملة لحماية المبنى من الأمطار والحرارة العالية مع ضمان شامل.",
      image: "/Roof Insulation Company in Saudi Arabia.webp",
    },
    {
      id: 3,
      category: "خدمات التنظيف ",
      title: "   تنظيف شقق ومنازل وفلل",
      desc: "نقدم خدمة تنظيف شاملة ومنهجية لجميع أنواع المساكن والفلل، مع الحفاظ على أعلى معايير الجودة.",
      image: "/restoration.webp",
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* العناوين الرئيسية المطابقة للصورة */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
            سجل إنجازاتنا وثقة <span className="text-[#00BFFF]">عملائنا</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            نعمل باحترافية لنترك بصمة في كل مشروع، ونعتبر رضا عملائنا هو المعيار الحقيقي لنجاحنا وجودة خدماتنا.
          </p>
        </div>

        {/* عنوان القسم الفرعي مع الخط الجانبي الذهبي */}
        <div className="mb-8 flex items-center">
          <div className="w-1.5 h-8 bg-[#D4AF37] rounded-full ml-3"></div>
          <h3 className="text-2xl font-bold text-white">نموذج من مشاريعنا المنفذة</h3>
        </div>

        {/* شبكة الكروت (بدون روابط كما طلبت) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col bg-[#061124] border border-[#00BFFF]/20 hover:border-[#D4AF37] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)]"
            >
              {/* حاوية الصورة */}
              <div className="relative w-full h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  title={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* طبقة تعتيم خفيفة جداً فوق الصورة للحفاظ على تناسق الألوان */}
                <div className="absolute inset-0 bg-[#030b1c]/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              {/* تفاصيل المشروع */}
              <div className="p-6 flex flex-col flex-grow">
                {/* التاج (التصنيف) */}
                <div className="mb-4">
                  <span className="inline-block bg-[#00BFFF]/10 text-[#00BFFF] border border-[#00BFFF]/20 text-sm font-semibold px-4 py-1.5 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                {/* عنوان المشروع */}
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {project.title}
                </h4>
                
                {/* وصف المشروع */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-auto">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}