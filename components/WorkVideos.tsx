"use client";

import React, { useState, useEffect } from "react";
import { Play, X } from "lucide-react";

export default function WorkVideos() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videoFiles = "abcdefghijklmnopqrstuvwxyz".split("").map((char) => `/${char}.mp4`);
  const duplicatedVideos = [...videoFiles, ...videoFiles];

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedVideo]);

  return (
    <section className="relative w-full py-24 overflow-hidden" dir="rtl">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker-videos {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        .animate-ticker-videos {
          display: flex;
          width: max-content;
          animation: ticker-videos 60s linear infinite;
        }
        .ticker-container:hover .animate-ticker-videos {
          animation-play-state: paused;
        }
      `}} />

      <div className="container mx-auto px-4 mb-16 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
          من أرض <span className="text-[#00BFFF]">الواقع</span>
        </h2>
        <p className="text-gray-300 text-lg mb-4">
          شاهد بنفسك جودة العمل والتقنيات المستخدمة في مشاريعنا
        </p>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
      </div>

      <div className="ticker-container relative w-full overflow-hidden z-10">
        <div className="animate-ticker-videos gap-4 md:gap-6 px-3">
          {duplicatedVideos.map((videoSrc, index) => (
            <div
              key={index}
              onClick={() => setSelectedVideo(videoSrc)}
              className="relative w-[180px] md:w-[240px] h-[320px] md:h-[400px] rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0 border-2 border-[#00BFFF]/20 hover:border-[#D4AF37] transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
            >
              <video
                src={videoSrc}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                muted
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-[#030b1c]/40 group-hover:bg-[#030b1c]/10 transition-colors duration-300 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/80 backdrop-blur-sm flex items-center justify-center text-[#030b1c] transform scale-90 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.8)]">
                  <Play className="w-6 h-6 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020612]/95 backdrop-blur-lg px-4 transition-opacity duration-300"
          onClick={() => setSelectedVideo(null)} // الإغلاق عند الضغط على الخلفية
        >
          
          <button
            onClick={() => setSelectedVideo(null)}
            title="إغلاق الفيديو"
            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full bg-[#030b1c] hover:bg-[#D4AF37] hover:text-[#030b1c] text-[#D4AF37] flex items-center justify-center transition-all duration-300 z-[120] border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.5)]"
          >
            <X className="w-8 h-8" />
          </button>

          <div 
            className="relative w-full max-w-4xl max-h-[85vh] bg-black rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.3)] animate-in fade-in zoom-in duration-300 z-[110]"
            onClick={(e) => e.stopPropagation()} // منع الإغلاق عند الضغط داخل الفيديو
          >
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}

    </section>
  );
}