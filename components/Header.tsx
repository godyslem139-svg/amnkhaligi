"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ArrowLeft, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainLinks = [
    { name: "الرئيسية", slug: "/", title: "الصفحة الرئيسية" },
    { name: "أعمالنا", slug: "/portfolio", title: "أعمالنا السابقة" },
    { name: "المقالات", slug: "/blog", title: "المقالات والمدونة" },
    { name: "من نحن", slug: "/about", title: "من نحن" },
    { name: "تواصل معنا", slug: "/contact", title: "تواصل معنا" },
  ];

  const servicesLinks = [
    { name: "كشف تسربات المياه", slug: "/services/water-leak-detection", title: "خدمة كشف تسربات المياه" },
    { name: "ترميم وبناء", slug: "/services/restoration-and-construction", title: "خدمة ترميم وبناء" },
    { name: "تسليك مجاري", slug: "/services/sewage-clearing", title: "خدمة تسليك مجاري" },
    { name: "عزل أسطح", slug: "/services/roof-insulation", title: "خدمة عزل أسطح" },
    { name: "رش مبيدات", slug: "/services/pest-control", title: "خدمة رش مبيدات" },
    { name: "غسيل مكيفات", slug: "/services/ac-washing", title: "خدمة غسيل مكيفات" },
    { name: "غسيل خزانات", slug: "/services/tank-cleaning", title: "خدمة غسيل خزانات" },
  ];

  return (
    <header className="bg-[#030b1c] border-b-2 border-[#00BFFF] sticky top-0 z-50 w-full" dir="rtl">
      
      {/* الشريط العلوي الأساسي */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24 relative z-50 bg-[#030b1c]">
          
          {/* الجانب الأيمن: اللوجو + قائمة الكمبيوتر الأفقية */}
          <div className="flex items-center gap-80">
            {/* اللوجو */}
            <Link href="/" title="الصفحة الرئيسية لشركة أساس الأمن الخليجي" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="شعار شركة أساس الأمن الخليجي"
                title="شعار أساس الأمن الخليجي"
                width={160}
                height={60}
                className="object-contain"
                priority
              />
            </Link>

            {/* القائمة العادية للكمبيوتر (مخفية في الموبايل وتظهر في شاشات lg) */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-white hover:text-[#D4AF37] font-bold text-lg transition-colors">الرئيسية</Link>
              
              {/* قائمة الخدمات المنسدلة للكمبيوتر */}
              <div className="relative group h-24 flex items-center">
                <button className="text-white group-hover:text-[#D4AF37] font-bold text-lg transition-colors flex items-center gap-1">
                  خدماتنا
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                
                {/* النافذة المنسدلة (Dropdown) */}
                <div className="absolute top-full right-0 w-64 bg-[#061124] border border-[#00BFFF]/30 border-t-2 border-t-[#D4AF37] rounded-b-xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 overflow-hidden">
                  {servicesLinks.map((service, index) => (
                    <Link
                      key={index}
                      href={service.slug}
                      title={service.title}
                      className="px-4 py-3 text-white hover:bg-[#00BFFF]/10 hover:text-[#D4AF37] font-semibold transition-colors flex items-center justify-between group/link border-b border-gray-700/30 last:border-0"
                    >
                      {service.name}
                      <ArrowLeft className="w-4 h-4 text-[#00BFFF]/50 group-hover/link:text-[#D4AF37] opacity-0 group-hover/link:opacity-100 group-hover/link:-translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/portfolio" className="text-white hover:text-[#D4AF37] font-bold text-lg transition-colors">أعمالنا</Link>
              <Link href="/blog" className="text-white hover:text-[#D4AF37] font-bold text-lg transition-colors">المقالات</Link>
              <Link href="/about" className="text-white hover:text-[#D4AF37] font-bold text-lg transition-colors">من نحن</Link>
              <Link href="/contact" className="text-white hover:text-[#D4AF37] font-bold text-lg transition-colors">تواصل معنا</Link>
            </nav>
          </div>

          {/* الجانب الأيسر: أزرار التواصل + أيقونة الهمبرجر للموبايل */}
          <div className="flex items-center gap-3 md:gap-5">
            
            {/* حساب التيك توك */}
            <Link
              href="https://www.tiktok.com/@amnkhaliji"
              target="_blank"
              title="حسابنا على تيك توك"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-[#030b1c] transition-all duration-300"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
              </svg>
            </Link>

            {/* زر الواتساب */}
            <Link
              href="https://wa.me/966501206816"
              target="_blank"
              title="تواصل معنا عبر واتساب"
              className="hidden sm:flex items-center gap-2 bg-[#00BFFF] text-[#030b1c] hover:bg-[#D4AF37] px-5 py-2.5 rounded-full font-bold transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span dir="ltr">+966 50 120 6816</span>
            </Link>

            {/* زر القائمة (الهمبرجر) - يظهر للموبايل فقط مخفي في شاشات lg */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              title={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              className="lg:hidden flex items-center justify-center w-12 h-12 rounded-lg bg-[#00BFFF]/10 border border-[#00BFFF] text-[#00BFFF] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الموبايل المنسدلة (تظهر للموبايل فقط) */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-[#061124] border-b-4 border-[#D4AF37] shadow-[0_20px_40px_rgba(0,0,0,0.7)] transition-all duration-500 ease-in-out overflow-hidden z-40 ${
          isMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-10">
            
            {/* القائمة الرئيسية للموبايل */}
            <div>
              <h3 className="text-[#00BFFF] font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                القائمة الرئيسية
              </h3>
              <nav className="flex flex-col gap-4">
                {mainLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.slug}
                    title={link.title}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:text-[#00BFFF] font-semibold text-xl w-fit transition-colors duration-300 flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-[#D4AF37] transition-colors"></span>
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* الخدمات للموبايل */}
            <div>
              <h3 className="text-[#00BFFF] font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                خدماتنا الاحترافية
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {servicesLinks.map((service, index) => (
                  <Link
                    key={index}
                    href={service.slug}
                    title={service.title}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center justify-between p-4 rounded-lg border border-[#00BFFF]/30 bg-[#0a192f] hover:border-[#D4AF37] hover:bg-[#112240] transition-all duration-300"
                  >
                    <span className="text-[#00BFFF] group-hover:text-[#D4AF37] font-semibold transition-colors">
                      {service.name}
                    </span>
                    <ArrowLeft className="w-5 h-5 text-[#00BFFF]/50 group-hover:text-[#D4AF37] transform group-hover:-translate-x-2 transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}