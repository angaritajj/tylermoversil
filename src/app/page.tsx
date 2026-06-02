import { Navbar } from "@/components/navbar";
import { AccordionServices } from "@/components/accordion-services";
import { ContactForm } from "@/components/contact-form"; 
import { CoverageMap } from "@/components/coverage-map";
import Script from "next/script";
import Image from "next/image";
import { Footer } from "@/components/footer";
import {
  Truck,
  MapPin,
  ArrowUpRight,
  PhoneCall,
  ShieldCheck,
  Zap,
  Sparkles,
  Clock3,
  Boxes,
  Sofa,
  Building2,
  Star,
  Heart,
  Users,
  Award,
  Timer,       
  Banknote,    
  Map,
  CalendarDays, 
  Tag,
  BadgeCheck 
} from "lucide-react";

/* ── Schema.org ─────────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MovingCompany"],
  name: "Tyler Movers IL",
  image: "https://tylermoversil.com/van-branding.png",
  telephone: "+1-773-573-7886",
  email: "services@tylermoversil.com",
  url: "https://tylermoversil.com",
  priceRange: "$$",
  description:
    "Specialized minivan micro-moving service based in Bloomingdale, IL. Studio apartment moves, same-day Facebook Marketplace & IKEA furniture delivery, and small office relocations across DuPage County and Chicagoland.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "184 N Bloomingdale Rd",
    addressLocality: "Bloomingdale",
    addressRegion: "IL",
    postalCode: "60108",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Bloomingdale" },
    { "@type": "City", name: "Schaumburg" },
    { "@type": "City", name: "Naperville" },
    { "@type": "City", name: "Oak Brook" },
    { "@type": "City", name: "Evanston" },
    { "@type": "City", name: "Chicago" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Micro-Moving and Delivery Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Studio Apartment Micro-Moves",
          description:
            "Fast and affordable moves for studios and single-bedroom apartments in DuPage County and Chicago.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Retail & Marketplace Delivery",
          description:
            "Same-day pickup & delivery for furniture from Facebook Marketplace, Craigslist, IKEA Schaumburg and Woodfield Mall.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Small Office Relocation",
          description:
            "Minimal downtime moves for home offices and small businesses across Illinois.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
};

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background">
      {/* Script de inyección del Schema SEO */}
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Navbar />

      <main>
        {/* 🏔️ HERO SECTION — REDISEÑO PREMIUM CON ENCAPSULADOS GLASS Y FOTO RECUPERADA */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4">
          
          {/* Imagen de fondo optimizada — 🚀 CONTROL DE FOTO ACTIVO */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/van-bg.webp" 
              alt="Tyler Movers Fleet Background"
              fill
              priority
              className="object-cover object-center brightness-[0.85] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background/90" />
          </div>

          <div className="max-w-[1200px] w-full mx-auto text-center flex flex-col items-center gap-6 z-10">
            
            {/* 📍 Marcador Superior de Ubicación Autorizada */}
            <span className="text-xs font-black uppercase tracking-widest text-white bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-lg inline-flex items-center gap-2 animate-fade-in">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              Bloomingdale, IL · DuPage County
            </span>

            {/* Titular Principal Gigante */}
            <div className="space-y-1">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.05em] text-white uppercase leading-none drop-shadow-md">
                Smart. Fast.
              </h1>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.05em] text-primary uppercase leading-none drop-shadow-md">
                Hassle-Free.
              </h2>
            </div>

            {/* 🟨 CONTENEDOR ENCAPSULADO RECTANGULAR: Descripción de Conversión */}
            <div className="max-w-2xl w-full mx-auto p-5 md:p-6 rounded-2xl bg-zinc-950/60 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center transition-all duration-300">
              <p className="text-sm md:text-base font-medium text-zinc-100 leading-relaxed tracking-wide">
                Tyler Movers IL is your specialized <span className="text-primary font-black">minivan fleet</span> for <span className="text-white font-bold">studio moves</span>, <span className="text-white font-bold">same-day furniture delivery</span> and small office relocations across Chicagoland.
              </p>
            </div>

            {/* 🚀 ACCIONES ULTRA-RESPONSIVAS: 45% / 45% MÓVIL DIRECTO */}
            <div className="flex flex-row items-center justify-center gap-[10%] sm:gap-4 w-full max-w-md pt-2 px-4 mx-auto z-20">
              
              {/* 📞 BOTÓN 1: Call Us! */}
              <a 
                href="tel:+17735737886" 
                className="w-[45%] sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white font-black text-xs md:text-sm uppercase tracking-wider py-4 px-2 sm:px-8 rounded-xl shadow-xl transition-all active:scale-[0.97] text-center"
              >
                <PhoneCall className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Call Us!</span>
              </a>
              
              {/* 📝 BOTÓN 2: Free Quote (Versión Light Premium Destacada) */}
              <a 
                href="#contact" 
                className="w-[45%] sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 text-zinc-950 font-black text-xs md:text-sm uppercase tracking-wider py-4 px-2 sm:px-8 rounded-xl shadow-xl transition-all active:scale-[0.97] text-center border border-white/10"
              >
                <svg 
                  className="w-3.5 h-3.5 shrink-0 text-orange-600" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="truncate">Free Quote</span>
              </a>

            </div>

            {/* 🔴 CONTENEDOR DE CÁPSULAS DE CONFIANZA */}
            <div className="flex flex-wrap justify-center items-center gap-3 mt-6 w-full max-w-4xl">
              <span className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[11px] md:text-xs font-black uppercase tracking-wider text-white shadow-md inline-flex items-center gap-1.5 whitespace-nowrap">
                🛡️ Guaranteed Service
              </span>
              <span className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[11px] md:text-xs font-black uppercase tracking-wider text-white shadow-md inline-flex items-center gap-1.5 whitespace-nowrap">
                ⚡ Same-Day
              </span>
              <span className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[11px] md:text-xs font-black uppercase tracking-wider text-white shadow-md inline-flex items-center gap-1.5 whitespace-nowrap">
                📅 7 Days A Week
              </span>
              <span className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[11px] md:text-xs font-black uppercase tracking-wider text-white shadow-md inline-flex items-center gap-1.5 whitespace-nowrap">
                🏷️ Flat-Rate
              </span>
              <span className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[11px] md:text-xs font-black uppercase tracking-wider text-white shadow-md inline-flex items-center gap-1.5 whitespace-nowrap">
                ❌ No Hidden Fees
              </span>
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            MARQUEE — VELOCIDAD CALIBRADA RESPONSIVA
            ═══════════════════════════════════════════════════════════════ */}
        <div className="relative border-y border-foreground/10 bg-foreground/[0.02] py-5 overflow-hidden">
          <div aria-hidden className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div aria-hidden className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex whitespace-nowrap animate-[marquee_12s_linear_infinite] md:animate-[marquee_16s_linear_infinite]">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-12 px-6 font-mono text-xs uppercase tracking-[0.3em] text-foreground/60 shrink-0"
              >
                <span className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-primary" /> Same-Day Delivery</span>
                <span className="text-primary/40">◆</span>
                <span className="flex items-center gap-2"><Boxes className="w-3.5 h-3.5 text-primary" /> Studio Movers Chicago</span>
                <span className="text-primary/40">◆</span>
                <span className="flex items-center gap-2"><Sofa className="w-3.5 h-3.5 text-primary" /> Marketplace Pickup</span>
                <span className="text-primary/40">◆</span>
                <span className="flex items-center gap-2"><Building2 className="w-3.5 h-3.5 text-primary" /> IKEA Schaumburg</span>
                <span className="text-primary/40">◆</span>
                <span className="flex items-center gap-2"><Clock3 className="w-3.5 h-3.5 text-primary" /> Office Relocation IL</span>
                <span className="text-primary/40">◆</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de Métricas Premium Híbrida */}
        <section className="py-12 md:py-24 relative isolate overflow-hidden">
          <div 
            aria-hidden="true" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[200px] bg-foreground/5 blur-[120px] rounded-full pointer-events-none -z-10" 
          />

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
              
              {/* Métrica 1: Tiempo */}
              <div className="relative overflow-hidden flex flex-row lg:flex-col items-center justify-between lg:justify-center h-24 lg:h-auto p-5 md:p-8 rounded-2xl md:rounded-3xl border border-primary/20 bg-background shadow-[0_0_15px_rgba(20,184,166,0.12)] dark:shadow-[0_0_20px_rgba(20,184,166,0.08)] transition-all duration-300 active:scale-[0.98] lg:hover:-translate-y-2 group w-full">
                <div className="flex flex-col lg:items-center justify-center items-start gap-1 lg:gap-3 lg:mb-4">
                  <Timer className="w-5 h-5 lg:w-8 lg:h-8 text-primary transition-transform duration-500 ease-out lg:group-hover:scale-110" />
                  <span className="text-[10px] md:text-xs font-bold tracking-wider lg:tracking-widest uppercase text-foreground/50 text-left lg:text-center">
                    Avg Response Time
                  </span>
                </div>
                <span className="text-2xl lg:text-5xl font-black tracking-tight lg:tracking-[-0.045em] text-foreground transition-transform duration-500 ease-out lg:group-hover:scale-105 whitespace-nowrap">
                  30 min
                </span>
              </div>

              {/* Métrica 2: Precio */}
              <div className="relative overflow-hidden flex flex-row lg:flex-col items-center justify-between lg:justify-center h-24 lg:h-auto p-5 md:p-8 rounded-2xl md:rounded-3xl border border-primary/20 bg-background shadow-[0_0_15px_rgba(20,184,166,0.12)] dark:shadow-[0_0_20px_rgba(20,184,166,0.08)] transition-all duration-300 active:scale-[0.98] lg:hover:-translate-y-2 group w-full">
                <div className="flex flex-col lg:items-center justify-center items-start gap-1 lg:gap-3 lg:mb-4">
                  <Banknote className="w-5 h-5 lg:w-8 lg:h-8 text-primary transition-transform duration-500 ease-out lg:group-hover:scale-110" />
                  <span className="text-[10px] md:text-xs font-bold tracking-wider lg:tracking-widest uppercase text-foreground/50 text-left lg:text-center">
                    Starting Flat Rate
                  </span>
                </div>
                <span className="text-2xl lg:text-5xl font-black tracking-tight lg:tracking-[-0.045em] text-foreground transition-transform duration-500 ease-out lg:group-hover:scale-105 whitespace-nowrap">
                  $89
                </span>
              </div>

              {/* Métrica 3: Radio */}
              <div className="relative overflow-hidden flex flex-row lg:flex-col items-center justify-between lg:justify-center h-24 lg:h-auto p-5 md:p-8 rounded-2xl md:rounded-3xl border border-primary/20 bg-background shadow-[0_0_15px_rgba(20,184,166,0.12)] dark:shadow-[0_0_20px_rgba(20,184,166,0.08)] transition-all duration-300 active:scale-[0.98] lg:hover:-translate-y-2 group w-full">
                <div className="flex flex-col lg:items-center justify-center items-start gap-1 lg:gap-3 lg:mb-4">
                  <Map className="w-5 h-5 lg:w-8 lg:h-8 text-primary transition-transform duration-500 ease-out lg:group-hover:scale-110" />
                  <span className="text-[10px] md:text-xs font-bold tracking-wider lg:tracking-widest uppercase text-foreground/50 text-left lg:text-center">
                    Radius from Base
                  </span>
                </div>
                <span className="text-2xl lg:text-5xl font-black tracking-tight lg:tracking-[-0.045em] text-foreground transition-transform duration-500 ease-out lg:group-hover:scale-105 whitespace-nowrap">
                  60 mi
                </span>
              </div>

              {/* Métrica 4: Transparencia */}
              <div className="relative overflow-hidden flex flex-row lg:flex-col items-center justify-between lg:justify-center h-24 lg:h-auto p-5 md:p-8 rounded-2xl md:rounded-3xl border border-primary/20 bg-background shadow-[0_0_15px_rgba(20,184,166,0.12)] dark:shadow-[0_0_20px_rgba(20,184,166,0.08)] transition-all duration-300 active:scale-[0.98] lg:hover:-translate-y-2 group w-full">
                <div className="flex flex-col lg:items-center justify-center items-start gap-1 lg:gap-3 lg:mb-4">
                  <ShieldCheck className="w-5 h-5 lg:w-8 lg:h-8 text-primary transition-transform duration-500 ease-out lg:group-hover:scale-110" />
                  <span className="text-[10px] md:text-xs font-bold tracking-wider lg:tracking-widest uppercase text-foreground/50 text-left lg:text-center">
                    Hidden Fees, Ever
                  </span>
                </div>
                <span className="text-2xl lg:text-5xl font-black tracking-tight lg:tracking-[-0.045em] text-foreground transition-transform duration-500 ease-out lg:group-hover:scale-105 whitespace-nowrap">
                  0
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SERVICES — id correcto, sin duplicados
            ═══════════════════════════════════════════════════════════════ */}
        <section id="services" className="relative py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-12 gap-10 mb-20">
              <div className="md:col-span-4">
                <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary font-bold mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  Our Expertise
                </div>
              </div>
              <div className="md:col-span-8">
                <h2 className="text-4xl md:text-6xl font-black tracking-[-0.045em] leading-[0.95] text-foreground">
                  Not a massive truck.
                  <br />
                  <span className="text-foreground/35">Exactly what you need.</span>
                </h2>
                <p className="mt-8 max-w-2xl text-base md:text-lg font-light leading-relaxed text-foreground/65">
                  Stop paying for an 18-wheeler when you only need to move a couch or a
                  one-bedroom apartment. Our minivan service is engineered for{" "}
                  <strong className="font-medium text-foreground">micro-moves</strong>{" "}
                  — navigating tight Chicago streets, narrow alleys, and walk-up apartments
                  where big trucks can&apos;t go.
                </p>
              </div>
            </div>

           {/* 📦 SECCIÓN: SERVICIOS PREMIUM — CORRECCIÓN DE CONTRASTE BLINDADA */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* 🛋️ TARJETA 1: Marketplace & IKEA */}
              <div className="lg:col-span-2 flex flex-col justify-between p-8 md:p-10 rounded-[32px] bg-zinc-50 dark:!bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 transition-all duration-300 hover:border-orange-500/30 group relative overflow-hidden">
                <div className="space-y-6">
                  {/* Icono Superior */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600/10 text-orange-600">
                    <span className="text-lg">🛋️</span>
                  </div>
                  {/* Textos */}
                  <div className="space-y-3 max-w-xl text-left">
                    {/* FIJADO: Fuerza de color en los títulos y párrafos */}
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-zinc-900 dark:!text-white leading-tight">
                      Same-day Marketplace & IKEA delivery.
                    </h3>
                    <p className="text-sm font-light text-zinc-600 dark:!text-zinc-300 leading-relaxed">
                      Found the perfect sofa on Facebook Marketplace? Hauling an IKEA Schaumburg run? We pick up, blanket-wrap, and deliver door-to-door — usually within hours of your booking.
                    </p>
                  </div>
                </div>

                {/* Zona Inferior */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-10">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[11px] font-medium px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-background text-foreground/70">Heavy furniture</span>
                    <span className="text-[11px] font-medium px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-background text-foreground/70">IKEA - BestBuy</span>
                    <span className="text-[11px] font-medium px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-background text-foreground/70">Door-to-door</span>
                  </div>
                  
                  <a 
                    href="/ikea-furniture-delivery-schaumburg" 
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-orange-600 text-white text-xs font-black uppercase tracking-wider transition-all duration-200 hover:bg-orange-700 active:scale-[0.97] whitespace-nowrap shadow-sm shadow-orange-600/10"
                  >
                    More Info
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* COLUMNA DERECHA */}
              <div className="flex flex-col gap-6">
                
                {/* 📦 TARJETA 2: Studio & 1-Bed Moves */}
                <div className="flex-1 flex flex-col justify-between p-8 rounded-[32px] bg-zinc-50 dark:!bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 transition-all duration-300 hover:border-orange-500/30 group text-left">
                  <div className="space-y-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600/10 text-orange-600">
                      <span className="text-lg">📦</span>
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-xl font-black tracking-tight text-zinc-900 dark:!text-white">Studio & 1-bed moves</h4>
                      <p className="text-xs font-light text-zinc-600 dark:!text-zinc-300 leading-relaxed">Built for students & young pros. Flat-rate.</p>
                    </div>
                  </div>

                  <div className="pt-6 flex justify-end">
                    <a 
                      href="/studio-apartment-movers-chicago" 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-background hover:bg-zinc-100 dark:hover:bg-zinc-800 text-foreground text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-[0.97]"
                    >
                      More Info
                      <ArrowUpRight className="w-3 h-3 text-orange-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* 🏢 TARJETA 3: Small Office Relocation */}
                <div className="flex-1 flex flex-col justify-between p-8 rounded-[32px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 transition-all duration-300 hover:border-orange-500/30 group text-left">
                  <div className="space-y-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600/10 text-orange-600">
                      <span className="text-lg">🏢</span>
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-xl font-black tracking-tight text-zinc-900 dark:!text-white">Small office relocation</h4>
                      <p className="text-xs font-light text-zinc-600 dark:!text-zinc-300 leading-relaxed">Monitors, desks, IT. Back online same day.</p>
                    </div>
                  </div>

                  <div className="pt-6 flex justify-end">
                    <a 
                      href="/small-office-movers-naperville" 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-background hover:bg-zinc-100 dark:hover:bg-zinc-800 text-foreground text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-[0.97]"
                    >
                      More Info
                      <ArrowUpRight className="w-3 h-3 text-orange-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* AccordionServices */}
            <div className="mt-10 w-full max-w-4xl mx-auto">
              <AccordionServices
                title="Explore service details"
                services={[
                  {
                    id: "micro-moves",
                    title: "The Studio Move (Micro-Moves)",
                    desc: "Perfect for university students at Northwestern Evanston, young professionals in Lincoln Park, or single-room relocations across DuPage County. We handle mattress bags, TV protection, and delicate boxes. Your life fits in our agile van — without the massive cost of traditional moving companies.",
                    quoteText: "Book Your Studio Move",
                    features: ["Mattress & TV Protection", "Stairs & Elevators Handled", "Flat-rate Options"],
                  },
                  {
                    id: "delivery",
                    title: "Retail & Marketplace Delivery",
                    desc: "Found the perfect sofa on Facebook Marketplace, Craigslist, or need an IKEA Schaumburg haul brought home? Don't rent a truck. Our same-day furniture delivery picks up your items, protects them with premium moving blankets, and delivers them directly to your living room — anywhere within 60 miles of Bloomingdale.",
                    quoteText: "Get Delivery Quote",
                    features: ["Couch & Heavy Furniture", "Store Pickups (IKEA, BestBuy)", "Door-to-Door Service"],
                  },
                  {
                    id: "small-office",
                    title: "Small Office & Tech Relocation",
                    desc: "Relocating your home office or small business shouldn't mean days of downtime. We specialize in transporting sensitive IT equipment, ergonomic chairs, and modular desks safely. We ensure your business is back up and running in its new Illinois location immediately.",
                    quoteText: "Plan Office Move",
                    features: ["IT & Monitor Protection", "Desk Disassembly", "Weekend Availability"],
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            TRUST PILLARS
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 border-y border-foreground/10 bg-foreground/[0.015]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10 rounded-3xl overflow-hidden border border-foreground/10">
              {[
                {
                  icon: ShieldCheck,
                  title: "Fully Protected",
                  body: "Every item wrapped in premium moving blankets and secured with industrial straps. Your valuables are our priority.",
                },
                {
                  icon: Zap,
                  title: "Zero Hidden Fees",
                  body: "Transparent flat-rate pricing. No surprise charges for stairs, long walks, gas, or weekends.",
                },
                {
                  icon: MapPin,
                  title: "Chicagoland Locals",
                  body: "Based in Bloomingdale. We know every shortcut from Schaumburg to Evanston — your delivery arrives on time.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-background p-10 transition-colors hover:bg-foreground/[0.02]"
                >
                  <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  <h4 className="mt-8 text-xl font-bold tracking-tight">{title}</h4>
                  <p className="mt-3 text-sm text-foreground/60 font-light leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            ABOUT
            ═══════════════════════════════════════════════════════════════ */}
        <section id="about" className="relative py-24 md:py-32 overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-40 right-0 w-[50vw] h-[60vh] bg-accent/10 blur-[160px] rounded-full pointer-events-none"
          />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary font-bold mb-10">
              <Users className="w-3.5 h-3.5" />
              Who We Are
            </div>

            <div className="grid md:grid-cols-12 gap-10 md:gap-16">
              <div className="md:col-span-7 space-y-6">
                <h2 className="text-4xl md:text-6xl font-black tracking-[-0.045em] leading-[0.95]">
                  We&apos;re not a{" "}
                  <span className="text-foreground/35">corporation.</span>
                  <br />
                  We&apos;re your neighbors.
                </h2>

                <div className="space-y-5 text-base md:text-lg font-light leading-relaxed text-foreground/75 pt-4">
                  <p>
                    We started Tyler Movers IL because we kept watching our friends and
                    neighbors pay hundreds of dollars for a massive 26-foot truck just
                    to move a couch, a studio apartment, or a few boxes from an IKEA run.
                    The math never made sense — and the experience was rarely great.
                    So we built something better.
                  </p>
                  <p>
                    We&apos;re a small, hands-on team based right here in Bloomingdale.
                    We drive these streets every single day — we know every shortcut
                    between Schaumburg and Evanston, every building with a tricky freight
                    elevator, every loading dock in DuPage County that actually works.
                    That local expertise is something no national moving chain can replicate.
                  </p>
                  <p>
                    What we promise is simple: we show up when we say we will, we handle
                    your belongings as carefully as if they were our own, and we charge
                    you exactly what we quoted — nothing more. No mystery fees at the end.
                    No crew that doesn&apos;t communicate. Just honest, attentive service
                    from people who genuinely care about getting it right,{" "}
                    <strong className="font-semibold text-foreground">every single time.</strong>
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 mt-2 px-8 py-4 rounded-2xl bg-foreground text-background font-semibold text-sm tracking-tight hover:opacity-90 transition-opacity"
                >
                  Work with us
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="md:col-span-5 flex flex-col gap-4">
                {[
                  {
                    icon: Heart,
                    title: "Family-operated",
                    desc: "Every job is personally managed. We answer our own phone — no call centers.",
                  },
                  {
                    icon: MapPin,
                    title: "Local since day one",
                    desc: "Founded and operating in Bloomingdale, IL. We live here too.",
                  },
                  {
                    icon: Award,
                    title: "127 five-star reviews",
                    desc: "Our reputation is our business. We earn every one of those stars.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Zero hidden fees — ever",
                    desc: "Flat-rate pricing. What we quote is what you pay. Full stop.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:border-primary/30 transition-colors"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{title}</p>
                      <p className="mt-1 text-sm font-light text-foreground/65 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            CONTACT
            ═══════════════════════════════════════════════════════════════ */}
        <section id="contact" className="relative py-16 md:py-24 overflow-hidden bg-background">
          <div
            aria-hidden
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60vw] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}