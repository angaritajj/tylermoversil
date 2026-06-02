"use client";
import { StoryGallery, type StorySlide } from "@/components/story-gallery";
import React from "react";
import { Navbar } from "@/components/navbar";
import { ContactForm } from "@/components/contact-form";
import Script from "next/script";
import {
  Truck,
  MapPin,
  ArrowUpRight,
  PhoneCall,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const dict: any = {
  nav: { home: "Home", services: "Services", contact: "Contact" },
  landingPages: {
    studio: {
      title: "Studio Apartment Movers Chicago | Tyler Movers",
      description: "Affordable and professional studio apartment moving services in Chicago, IL.",
      h1: "Studio & Small Apartment Movers",
      subtitle: "Stress-free, flat-rate small moves across the Chicago area",
      cta: "Get a Free Quote",
      whyUs: "Why Choose Tyler Movers",
      benefits: [
        { title: "Flat-Rate Pricing", desc: "No hidden fees, no surprises. Clear upfront pricing for your small move." },
        { title: "Local Experts", desc: "We know Chicago's streets, parking regulations, and apartment building rules." },
        { title: "Careful Handling", desc: "Your furniture and boxes are wrapped and protected throughout the journey." }
      ],
      servicesTitle: "Our Small Move Services",
      commonItems: ["Full Packing Service", "Loading & Unloading", "Furniture Protection & Wrapping", "Local Chicagoland Transport"]
    }
  }
};

export default function StudioApartmentPage() {
  const lpData = dict.landingPages.studio;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Studio Apartment Moving Service",
    provider: {
      "@type": "LocalBusiness",
      name: "Tyler Movers IL",
      image: "https://tylermoversil.com/van-branding.png",
      telephone: "+1-773-573-7886",
      address: {
        "@type": "PostalAddress",
        streetAddress: "184 N Bloomingdale Rd",
        addressLocality: "Bloomingdale",
        addressRegion: "IL",
        postalCode: "60108",
      },
    },
    areaServed: [
      { "@type": "City", name: "Chicago" },
      { "@type": "City", name: "Bloomingdale" },
      { "@type": "AdministrativeArea", name: "Cook County" },
    ],
    description: lpData.description,
  };
// 📦 GALERÍA: Studio Apartment Movers
  const studioStories: StorySlide[] = [
   { 
      src: "/studio-stairs-moving.webp", // O el nombre que le hayas dejado a esta foto
      alt: "Movers carrying wrapped sofa up Chicago walk-up stairs", 
      desc: "Expert care for your belongings: We use padded blankets and safety straps to expertly maneuver your furniture up narrow walk-up staircases. Damage-free handling every step of the way.", 
      link: "#contact" 
    },
    { 
      src: "/apartment-loading-van.webp", 
      alt: "Movers loading furniture into Tyler Movers van", 
      desc: "Full-service loading and unloading for high-rise and studio apartments.", 
      link: "#contact" 
    },
    { 
      src: "/furniture-protection-moving.webp", 
      alt: "Professional movers carrying blanket-wrapped furniture", 
      desc: "Maximum protection. Every piece of furniture is heavily blanket-wrapped before moving.", 
      link: "#contact" 
    },
    { 
      src: "/chicago-street-loading.webp", 
      alt: "Tyler Movers van parked outside Chicago home", 
      desc: "Fast, secure transport across Chicagoland in our clean, premium cargo vans.", 
      link: "#contact" 
    }
  ];
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-purple-500/30">
      <Script
        id="studio-schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Navbar dict={dict.nav} />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative isolate min-h-[70svh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[90vw] h-[60vh] bg-purple-500/20 blur-[140px] rounded-full pointer-events-none opacity-70 dark:opacity-40"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_50%,transparent_100%)]"
          />

          <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10 w-full">
            <div className="flex items-center gap-2 text-sm text-foreground/60 mb-6">
              <a href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {dict.nav.home}
              </a>
              <span>/</span>
              <span className="text-foreground font-medium">Studio Movers Chicago</span>
            </div>

            <div className="flex justify-start mb-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-background/40 border border-foreground/10 backdrop-blur-xl">
                <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-xs font-semibold tracking-wide uppercase text-foreground/70">
                  Chicago, IL · Cook County
                </span>
              </div>
            </div>

            <h1 className="text-left font-black tracking-[-0.045em] leading-[0.9] text-foreground">
              <span className="block text-[clamp(2.5rem,8vw,5.5rem)]">
                {lpData.h1}
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-left text-lg md:text-xl font-light leading-relaxed text-foreground/70">
              {lpData.subtitle}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#contact"
                className="group relative isolate overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-foreground text-background font-semibold text-base tracking-tight transition-transform active:scale-[0.98] shadow-[0_20px_50px_-15px_hsl(var(--foreground)/0.4)]"
              >
                <span className="relative z-10">{lpData.cta}</span>
                <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <div className="absolute inset-0 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
              <a
                href="tel:+17735737886"
                className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl border border-foreground/20 text-foreground font-semibold text-base tracking-tight hover:bg-foreground/5 transition-colors"
              >
                <PhoneCall className="w-5 h-5" />
                (773) 573-7886
              </a>
            </div>
          </div>
        </section>

        {/* Módulo de Historias - Reubicado debajo del Hero */}
        <StoryGallery stories={studioStories} />

        {/* Benefits Section */}
        <section className="py-20 md:py-28 bg-foreground/[0.02]">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-[-0.045em] leading-tight mb-16 text-center">
              {lpData.whyUs}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {lpData.benefits.map((benefit: any, i: any) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-sm hover:border-purple-500/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                    {i === 0 && <Clock3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
                    {i === 1 && <ShieldCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
                    {i === 2 && <Building2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70 font-light leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services List Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-[-0.045em] leading-tight mb-12 text-center">
              {lpData.servicesTitle}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {lpData.commonItems.map((item: any, i: any) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl bg-foreground/[0.03] border border-foreground/10"
                >
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-purple-500/5 border border-purple-500/15 max-w-2xl mx-auto">
              <p className="text-sm text-foreground/70 text-center">
                🏠 Enjoy a seamless transition to your new apartment. Fully equipped crews ready to navigate hallways, elevators, and tight spaces safely.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-foreground/[0.02]">
          <div
            aria-hidden
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60vw] h-[400px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"
          />

          <div className="max-w-3xl mx-auto px-0 sm:px-6">
            <div className="text-center px-6 mb-12">
              <h2 className="text-4xl md:text-6xl font-black tracking-[-0.045em] leading-[0.95] mb-6">
                Get your small move quote
              </h2>
              <p className="text-foreground/60 font-light max-w-md mx-auto">
                Simple flat rates for apartments and studios. No hidden fees.
              </p>
            </div>

            <div className="sm:rounded-3xl sm:border sm:border-foreground/10 sm:bg-foreground/[0.02] sm:backdrop-blur-xl sm:p-2 sm:shadow-[0_30px_80px_-30px_hsl(var(--foreground)/0.25)]">
              <ContactForm serviceContext="studio" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}