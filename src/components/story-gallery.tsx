"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type StorySlide = {
  src: string;
  alt: string;
  desc: string;
  link: string;
};

const DEFAULT_STORIES: StorySlide[] = [
  {
    src: "/chicago-street-loading.webp",
    alt: "Tyler Movers premium moving van in Chicago",
    desc: "Our premium moving fleet arrives on time, fully equipped for your peace of mind.",
    link: "#contact"
  },
  {
    src: "/studio-stairs-moving.webp",
    alt: "Professional Apartment Moving",
    desc: "Expert wrapping and heavy lifting handled with maximum care and precision.",
    link: "#contact"
  },
  {
    src: "/office-desk-relocation-chicago.webp",
    alt: "Commercial Office Relocation",
    desc: "Zero-downtime office transitions scheduled seamlessly around your business hours.",
    link: "#contact"
  },
  {
    src: "/apartment-loading-van.webp",
    alt: "Secure Transport Chicagoland",
    desc: "Safely delivered and assembled at your new destination across the Chicago area.",
    link: "#contact"
  }
];

export function StoryGallery({ stories = DEFAULT_STORIES }: { stories?: StorySlide[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const duration = 5000; // 5 segundos exactos por historia

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  // EFECTO 1: Controla exclusivamente el avance fluido de la barra de progreso
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 40; 
    const step = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  // EFECTO 2: Controla el cambio de historia cuando la barra llega al 100% de forma segura
  useEffect(() => {
    if (progress >= 100) {
      handleNext();
    }
  }, [progress]);

  return (
    <div className="w-full bg-foreground/[0.02] py-12 border-y border-zinc-100 dark:border-zinc-800/50">
      <div className="max-w-md mx-auto px-6">
        <h3 className="text-center text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">
          See how we do it
        </h3>
        
        <div 
          className="relative w-full aspect-[9/16] bg-zinc-900 rounded-[32px] overflow-hidden shadow-2xl select-none"
          onMouseDown={() => setIsPaused(true)}
          onMouseUp={() => setIsPaused(false)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* IMAGEN DE LA HISTORIA */}
          <img
            src={stories[currentIndex].src}
            alt={stories[currentIndex].alt}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          
          {/* SOMBREADO PARA TEXTOS */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />

          {/* BARRAS DE PROGRESO */}
          <div className="absolute top-4 left-0 right-0 px-4 flex gap-1.5 z-10">
            {stories.map((_, i) => (
              <div key={i} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                <div 
                  className="h-full bg-white transition-all duration-75 ease-linear"
                  style={{
                    width: i === currentIndex ? `${progress}%` : i < currentIndex ? "100%" : "0%"
                  }}
                />
              </div>
            ))}
          </div>

          {/* DESCRIPCIÓN Y BOTÓN */}
          <div className="absolute bottom-8 left-6 right-6 z-10">
            <p className="text-white font-semibold text-lg leading-snug mb-5 drop-shadow-md">
              {stories[currentIndex].desc}
            </p>
            <Link 
              href={stories[currentIndex].link}
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl active:scale-95 transition-transform"
            >
              See Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* CONTROLES TÁCTILES LATERALES */}
          <div className="absolute inset-y-0 left-0 w-1/4 z-20 cursor-w-resize" onClick={handlePrev} />
          <div className="absolute inset-y-0 right-0 w-1/4 z-20 cursor-e-resize" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
}