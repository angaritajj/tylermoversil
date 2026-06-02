"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneCall, Menu, X, ChevronDown, Truck, Sofa, Building2, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function Navbar({ dict = {} }: { dict?: any } = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
      {/* LOGO COMBINADO: ICONO PNG + TEXTO ORIGINAL */}
        <Link href="/" className="flex items-center gap-3">
          {/* El logo Webp ahora actúa como un icono compacto */}
          <Image 
            src="/logo.webp"
            alt="Tyler Movers IL Icon"
            width={45}
            height={45}
            unoptimized
            className="h-9 w-auto object-contain dark:brightness-110"
            priority
          />
          {/* Conservamos intacta tu fuente original y bonita */}
          <span className="font-black text-xl tracking-tight text-foreground">
            Tyler<span className="text-primary">Movers</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            {dict.home || "Home"}
          </Link>
          
         {/* ACCORDION / DROPDOWN SERVICIOS */}
          <div className="relative group">
            <button 
              aria-label="Toggle services menu" // 🚀 Soluciona la advertencia de botón accesible
              className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors py-8" // 🚀 Cambiado a text-foreground para contraste perfecto
            >
              {dict.services || "Services"} <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[300px] bg-background border border-foreground/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col p-2">
              <Link href="/studio-apartment-movers-chicago" className="flex items-center gap-3 p-3 hover:bg-foreground/5 rounded-xl transition-colors">
                <Truck className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold">Studio Moves</span>
              </Link>
              <Link href="/ikea-furniture-delivery-schaumburg" className="flex items-center gap-3 p-3 hover:bg-foreground/5 rounded-xl transition-colors">
                <Sofa className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold">IKEA / Marketplace</span>
              </Link>
              <Link href="/small-office-movers-naperville" className="flex items-center gap-3 p-3 hover:bg-foreground/5 rounded-xl transition-colors">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold">Office Relocation</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* CONTROLES DERECHOS: THEME + PHONE + QUOTE + MOBILE TOGGLE */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-foreground/10 text-foreground hover:bg-foreground/5 transition-colors focus:outline-none"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* BOTÓN PHONE RINGING */}
          <a
            href="tel:+17735737886"
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors animate-ring-phone shrink-0"
            aria-label="Call Tyler Movers"
          >
            <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          {/* BOTÓN DE QUOTE (RESTABLECIDO) */}
          <Link 
            href="#contact" 
            className="hidden sm:inline-flex items-center justify-center bg-foreground text-background px-6 py-2.5 rounded-xl font-bold text-sm tracking-tight hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_-10px_rgba(var(--foreground),0.3)]"
          >
            {dict.contact || "Get a Quote"}
          </Link>
          
          {/* MOBILE TOGGLE */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Expandible) */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-foreground/10 p-6 flex flex-col gap-5 shadow-xl">
           <div className="flex flex-col gap-4 border-b border-foreground/10 pb-4">
             <Link href="/studio-apartment-movers-chicago" className="text-base font-bold text-foreground/80 hover:text-primary">🚚 Studio Moves</Link>
             <Link href="/ikea-furniture-delivery-schaumburg" className="text-base font-bold text-foreground/80 hover:text-primary">🛋️ IKEA Delivery</Link>
             <Link href="/small-office-movers-naperville" className="text-base font-bold text-foreground/80 hover:text-primary">🏢 Office Relocation</Link>
           </div>
           
           {/* BOTÓN QUOTE MASIVO EN MÓVIL */}
           <Link 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center bg-foreground text-background px-6 py-4 rounded-xl font-bold text-base tracking-tight active:scale-95 transition-transform"
          >
            {dict.contact || "Get a Quote"}
          </Link>
        </div>
      )}
    </header>
  );
}