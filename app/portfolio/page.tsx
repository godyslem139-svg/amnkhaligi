"use client";

import React, { useState, useEffect } from "react";
import { Play, X } from "lucide-react";

export default function PortfolioPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const allVideos = "abcdefghijklmnopqrstuvwxyz".split("").map((char) => `/${char}.mp4`);

  const col1Videos = allVideos.slice(0, 9);
  const col2Videos = allVideos.slice(9, 18);
  const col3Videos = allVideos.slice(18, 26);

  const dupCol1 = [...col1Videos, ...col1Videos];
  const dupCol2 = [...col2Videos, ...col2Videos];
  const dupCol3 = [...col3Videos, ...col3Videos];

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedVideo]);

  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-transparent" dir="rtl">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-up {
          animation: scrollUp 50s linear infinite;
        }
        .animate-scroll-down {
          animation: scrollDown 50s linear infinite;
        }
        .scroll-container:hover .animate-scroll-up,
        .scroll-container:hover .animate-scroll-down {
          animation-play-state: paused;
        }
      `}} />

      <div className="container mx-auto px-4 mb-16 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">
          سابقة <span className="text-[#00BFFF]">أعمالنا</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          شاهد الفيديوهات الحقيقية من مواقع العمل، حيث نوثق جودة واحترافية خدماتنا في العزل وكشف التسربات خطوة بخطوة.
        </p>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
      </div>

      <div className="scroll-container container mx-auto px-4 h-[75vh] overflow-hidden relative z-10">
        
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#030b1c] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030b1c] to-transparent z-20 pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">

          {/* العمود الأول - يتحرك للأعلى */}
          <div className="flex flex-col gap-6 animate-scroll-up">
            {dupCol1.map((video, idx) => (
              <VideoCard key={`col1-${idx}`} src={video} onClick={() => setSelectedVideo(video)} />
            ))}
          </div>

          <div className="hidden md:flex flex-col gap-6 animate-scroll-down">
            {dupCol2.map((video, idx) => (
              <VideoCard key={`col2-${idx}`} src={video} onClick={() => setSelectedVideo(video)} />
            ))}
          </div>

          <div className="hidden md:flex flex-col gap-6 animate-scroll-up">
            {dupCol3.map((video, idx) => (
              <VideoCard key={`col3-${idx}`} src={video} onClick={() => setSelectedVideo(video)} />
            ))}
          </div>

        </div>
      </div>

      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020612]/95 backdrop-blur-lg px-4 transition-opacity duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          {/* زر الإغلاق */}
          <button
            onClick={() => setSelectedVideo(null)}
            title="إغلاق الفيديو"
            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full bg-[#030b1c] hover:bg-[#D4AF37] hover:text-[#030b1c] text-[#D4AF37] flex items-center justify-center transition-all duration-300 z-[120] border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.5)]"
          >
            <X className="w-8 h-8" />
          </button>

          <div 
            className="relative w-full max-w-4xl max-h-[85vh] bg-black rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.3)] animate-in fade-in zoom-in duration-300 z-[110]"
            onClick={(e) => e.stopPropagation()}
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
    </div>
  );
}

function VideoCard({ src, onClick }: { src: string, onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer border-[3px] border-[#D4AF37] hover:border-[#00BFFF] transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(0,191,255,0.6)] flex-shrink-0"
    >
      <video
        src={src}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        muted
        playsInline
        preload="metadata"
      />
      
      <div className="absolute inset-0 bg-[#030b1c]/30 group-hover:bg-[#030b1c]/10 transition-colors duration-300 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-[#D4AF37]/90 backdrop-blur-sm flex items-center justify-center text-[#030b1c] transform scale-90 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.8)]">
          <Play className="w-8 h-8 ml-1" fill="currentColor" />
        </div>
      </div>
    </div>
  );
}