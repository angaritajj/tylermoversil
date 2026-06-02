"use client";

import { motion } from "framer-motion";
import { MapPin, Truck } from "lucide-react";

export function CoverageMap() {
  // Proportional coordinates to position Bloomingdale in the Northeast quadrant of Illinois
  const bloomingdaleX = "68%";
  const bloomingdaleY = "28%";

  return (
    <div className="w-full max-w-5xl mx-auto mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-sans text-left">
      
      {/* LEFT PANEL: Coverage Technical Data */}
      <div className="lg:col-span-5 space-y-6 px-2">
        <div className="space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-md inline-block">
            🌐 Live Network
          </span>
          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-foreground">
            Central Hub in Bloomingdale, IL
          </h3>
        </div>
        
        <p className="text-sm font-light text-foreground/70 leading-relaxed">
          Our fleet operates using a smart radial dispatch system. We guarantee record response times by initiating operations within our primary ring.
        </p>

        {/* Business Rule Cards */}
        <div className="space-y-3 pt-2">
          <div className="flex items-start gap-4 p-4 rounded-xl border border-foreground/10 bg-foreground/[0.01] backdrop-blur-md">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-600/10 text-orange-600">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <p className="font-black text-xs uppercase tracking-wide text-foreground">60-Mile Pickup Ring</p>
              <p className="text-xs font-light text-foreground/60 mt-0.5">Authorized and validated pickups across Chicagoland locally.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl border border-foreground/10 bg-foreground/[0.01] backdrop-blur-md">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-600/10 text-orange-600">
              <Truck className="h-4 w-4" />
            </div>
            <div>
              <p className="font-black text-xs uppercase tracking-wide text-foreground">Statewide Delivery</p>
              <p className="text-xs font-light text-foreground/60 mt-0.5">Direct dispatches and deliveries to any municipality or border of Illinois.</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: Vector Map with Stronger Orange Waves in Loop */}
      <div className="lg:col-span-7 flex justify-center items-center relative min-h-[400px] md:min-h-[500px] w-full rounded-3xl border border-foreground/10 bg-foreground/[0.01] overflow-hidden p-6">
        
        {/* Technological background mesh (Grid lines) */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* MAP SVG RELATIVE CONTAINER */}
        <div className="relative w-full max-w-[320px] aspect-[1/2] flex justify-center items-center">
          
          {/* 🗺️ STYLIZED ILLINOIS VECTOR SILHOUETTE */}
          <svg
            viewBox="0 0 400 800"
            className="w-full h-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:drop-shadow-[0_10px_30px_rgba(251,146,60,0.05)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M260 40 L290 45 L300 130 L320 140 L315 200 L350 250 L310 290 L295 340 L330 400 L320 460 L360 520 L330 580 L290 640 L280 720 L240 760 L210 740 L200 660 L180 620 L160 580 L145 520 L130 460 L100 400 L70 340 L85 260 L90 180 L140 180 L145 130 L220 130 L225 40 Z"
              className="fill-zinc-200/50 dark:fill-zinc-900/40 stroke-zinc-300 dark:stroke-zinc-800"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>

          {/* 🌊 STRONGER ORANGE CONCENTRIC WAVE SYSTEM WITH HIGH VISIBILITY */}
          <div
            className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ left: bloomingdaleX, top: bloomingdaleY }}
          >
            {/* Wave 1 */}
            <motion.div
              animate={{ scale: [1, 3.5], opacity: [0.9, 0] }} // Higher start opacity
              transition={{ duration: 4, ease: "easeOut", repeat: Infinity, delay: 0 }}
              className="absolute inset-0 rounded-full border-2 border-orange-500 bg-orange-600/10"
              style={{ width: "100%", height: "100%" }}
            />
            {/* Wave 2 */}
            <motion.div
              animate={{ scale: [1, 3.5], opacity: [0.9, 0] }} // Higher start opacity
              transition={{ duration: 4, ease: "easeOut", repeat: Infinity, delay: 1 }}
              className="absolute inset-0 rounded-full border-2 border-orange-500 bg-orange-600/10"
              style={{ width: "100%", height: "100%" }}
            />
            {/* Wave 3 */}
            <motion.div
              animate={{ scale: [1, 3.5], opacity: [0.9, 0] }} // Higher start opacity
              transition={{ duration: 4, ease: "easeOut", repeat: Infinity, delay: 2 }}
              className="absolute inset-0 rounded-full border-2 border-orange-500 bg-orange-600/10"
              style={{ width: "100%", height: "100%" }}
            />
            {/* Wave 4 (Added for extra strength) */}
            <motion.div
              animate={{ scale: [1, 3.5], opacity: [0.9, 0] }} // Higher start opacity
              transition={{ duration: 4, ease: "easeOut", repeat: Infinity, delay: 3 }}
              className="absolute inset-0 rounded-full border-2 border-orange-500 bg-orange-600/10"
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          {/* 📍 INDICATOR NUCLEUS (The Bloomingdale Lighthouse) */}
          <motion.div
            className="absolute h-3.5 w-3.5 rounded-full bg-orange-600 border-2 border-background shadow-lg shadow-orange-500/50 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{ left: bloomingdaleX, top: bloomingdaleY }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="absolute inline-flex h-full w-full rounded-full bg-orange-600 opacity-70 animate-ping" />
          </motion.div>

          {/* Floating Hub Label */}
          <div 
            className="absolute bg-background border border-foreground/10 px-2 py-1 rounded-md text-[10px] font-black tracking-wide uppercase text-foreground shadow-sm -translate-x-1/2 mt-4 whitespace-nowrap"
            style={{ left: bloomingdaleX, top: bloomingdaleY }}
          >
            Bloomingdale HQ
          </div>

        </div>
      </div>
    </div>
  );
}