"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowLeft } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<string>("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const mainLinks = [
    { name: "الرئيسية", slug: "/", title: "الصفحة الرئيسية لشركة أساس الأمن الخليجي" },
    { name: "أعمالنا", slug: "/portfolio", title: "سابقة أعمالنا في العزل وكشف التسربات بالخرج" },
    { name: "المقالات", slug: "/blog", title: "مقالات ومدونة شركة أساس الأمن الخليجي" },
    { name: "من نحن", slug: "/about", title: "من نحن - تعرف على شركة أساس الأمن الخليجي" },
    { name: "تواصل معنا", slug: "/contact", title: "تواصل مع شركة أساس الأمن الخليجي بالخرج" },
  ];

  const servicesLinks = [
    { name: "كشف تسربات المياه", slug: "/services/water-leak-detection", title: "خدمة كشف تسربات المياه بالخرج بدون تكسير" },
    { name: "ترميم وبناء", slug: "/services/restoration-and-construction", title: "خدمة ترميم وبناء وصيانة المباني بالخرج" },
    { name: "تسليك مجاري", slug: "/services/sewage-clearing", title: "خدمة تسليك مجاري بالضغط في الخرج" },
    { name: "عزل أسطح", slug: "/services/roof-insulation", title: "خدمة عزل أسطح مائي وحراري وفوم بالخرج" },
    { name: "رش مبيدات", slug: "/services/pest-control", title: "خدمة رش مبيدات ومكافحة حشرات بالخرج" },
    { name: "غسيل مكيفات", slug: "/services/ac-washing", title: "خدمة غسيل وصيانة مكيفات بالخرج" },
    { name: "غسيل خزانات", slug: "/services/tank-cleaning", title: "خدمة غسيل وتعقيم وعزل خزانات بالخرج" },
  ];

  const glowingBoxStyle = "flex items-center gap-3 bg-[#061124] border border-[#D4AF37]/50 rounded-xl px-4 py-3 text-gray-300 hover:text-white hover:border-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.2)] hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300 group";

  return (
    <footer className="relative bg-[#020612] border-t-2 border-[#D4AF37] pt-16 pb-8 overflow-hidden" dir="rtl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" title="الصفحة الرئيسية لشركة أساس الأمن الخليجي" className="flex items-center gap-3 w-fit mb-2">
              <Image
                src="/logo.png"
                alt="شعار شركة أساس الأمن الخليجي للسباكة والتسربات والعزل"
                title="شعار شركة أساس الأمن الخليجي"
                width={80}
                height={80}
                className="object-contain"
              />
              <div className="flex flex-col justify-center">
                <span className="text-white font-bold text-xl leading-tight">
                  شركة <span className="text-[#00BFFF]">أساس الأمن</span>
                </span>
                <span className="text-[#D4AF37] font-bold text-sm tracking-wide">
                  الخليجي
                </span>
              </div>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              شركة متخصصة في كشف تسربات المياه، العزل، الصيانة، والترميم بمعايير سعودية عالية الجودة لضمان حماية عقارك واستدامته.
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="https://wa.me/966501206816"
                target="_blank"
                rel="noopener noreferrer"
                title="راسل شركة أساس الأمن الخليجي عبر الواتساب"
                className={glowingBoxStyle}
              >
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#030b1c] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-bold">راسلنا على الواتساب</span>
              </Link>
              
              <Link
                href="https://www.tiktok.com/@amnkhaliji"
                target="_blank"
                rel="noopener noreferrer"
                title="حساب شركة أساس الأمن الخليجي الرسمي على تيك توك"
                className={glowingBoxStyle}
              >
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#030b1c] transition-colors">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                  </svg>
                </div>
                <span className="font-bold">حسابنا على تيك توك</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00BFFF]"></span>
              روابط سريعة
            </h3>
            <div className="flex flex-col gap-3">
              {mainLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.slug}
                  title={link.title}
                  className={`${glowingBoxStyle} justify-between py-2.5`}
                >
                  <span className="font-semibold">{link.name}</span>
                  <ArrowLeft className="w-4 h-4 text-[#D4AF37] opacity-50 group-hover:opacity-100 group-hover:-translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00BFFF]"></span>
              خدماتنا الاحترافية
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {servicesLinks.map((service, index) => (
                <Link
                  key={index}
                  href={service.slug}
                  title={service.title}
                  className={`${glowingBoxStyle} justify-between py-2.5 px-3`}
                >
                  <span className="font-semibold text-sm">{service.name}</span>
                  <ArrowLeft className="w-4 h-4 text-[#D4AF37] opacity-50 group-hover:opacity-100 group-hover:-translate-x-1 transition-all flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-[#D4AF37]/20 pt-6 mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            جميع الحقوق محفوظة © {currentYear} شركة <span className="text-[#D4AF37] font-bold">أساس الأمن الخليجي</span>
          </p>
          <div className="text-gray-400 text-sm flex items-center gap-1">
            صنع بكل إتقان بواسطة 
            <Link 
              href="https://www.uniquee-ws.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:text-[#00BFFF] font-bold transition-colors ml-1"
              title="شركة Unique للبرمجيات وتصميم المواقع الإلكترونية"
            >
              Unique
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}