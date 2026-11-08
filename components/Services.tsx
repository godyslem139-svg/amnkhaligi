"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const servicesList = [
    { title: "كشف تسربات المياه", img: "/water leak detection.webp" },
    { title: "ترميم وبناء", img: "/restoration construction.webp" },
    { title: "تسليك مجاري", img: "/drain cleaning.webp" },
    { title: "عزل أسطح", img: "/roof waterproofing.webp" },
    { title: "رش مبيدات", img: "/pesticide spraying.webp" },
    { title: "غسيل مكيفات", img: "/air conditioner cleaning.webp" },
    { title: "غسيل خزانات", img: "/water tank cleaning.webp" },
  ];

  const duplicatedServices = [...servicesList, ...servicesList];

  return (
    <section className="relative w-full py-16 overflow-hidden" dir="rtl">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        .animate-ticker {
          display: flex;
          width: max-content;
          animation: ticker 35s linear infinite;
        }
        .ticker-container:hover .animate-ticker {
          animation-play-state: paused;
        }
      `}} />

      <div className="container mx-auto px-4 mb-10 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          خدماتنا <span className="text-[#00BFFF]">الاحترافية</span>
        </h2>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
      </div>

      <div className="ticker-container relative w-full overflow-hidden">
        <div className="animate-ticker gap-6 px-3">
          {duplicatedServices.map((service, index) => (
            <div
              key={index}
              className="relative block w-[280px] md:w-[350px] h-[400px] md:h-[500px] rounded-2xl overflow-hidden group border border-[#00BFFF]/30 hover:border-[#D4AF37] transition-all duration-500 shadow-lg flex-shrink-0"
            >
              <Image
                src={service.img}
                alt={service.title}
                title={service.title}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 280px, 350px"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#030b1c] via-[#030b1c]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col gap-4">
                <h3 className="text-white text-xl md:text-2xl font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {service.title}
                </h3>
                
                <Link
                  href="https://wa.me/966501206816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 bg-[#D4AF37] text-[#030b1c] font-bold rounded-xl transition-all duration-300 shadow-[0_5px_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.9)] hover:scale-105"
                >
                  اطلب الخدمة الآن
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}