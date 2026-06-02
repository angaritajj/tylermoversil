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
    office: {
      title: "Small Office Movers Naperville | Tyler Movers",
      description: "Professional and efficient commercial relocation services in Naperville, IL.",
      h1: "Small Office Relocation Specialists",
      subtitle: "Seamless business transitions around your schedule in Naperville",
      cta: "Schedule Your Move",
      whyUs: "Why Businesses Trust Tyler Movers",
      benefits: [
        { title: "Zero Downtime", desc: "We work evenings and weekends to keep your business running smoothly." },
        { title: "Secure Transport", desc: "Specialized handling for office electronics and sensitive files." },
        { title: "Fully Insured", desc: "Experienced moving crews with complete coverage for your peace of mind." }
      ],
      servicesTitle: "Our Office Moving Services",
      commonItems: ["Desk & Chair Relocation", "IT Equipment Packing", "Conference Rooms", "File Cabinets"]
    }
  }
};

export default function SmallOfficePage() {
  const lpData = dict.landingPages.office;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Small Office Relocation Service",
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
      { "@type": "City", name: "Naperville" },
      { "@type": "City", name: "Bloomingdale" },
      { "@type": "AdministrativeArea", name: "DuPage County" },
    ],
    description: lpData.description,
  };

const officeStories: StorySlide[] = [
    { 
      src: "/it-equipment-packing-naperville.webp", 
      alt: "Tyler Movers packing sensitive IT server equipment in anti-static crates", 
      desc: "IT & Tech Packing: Specialized handling for your servers, monitors, and sensitive electronics with anti-static protection.", 
      link: "#contact" 
    },
    { 
      src: "/office-desk-relocation-chicago.webp", 
      alt: "Commercial mover relocating modern office desk and ergonomic chair", 
      desc: "Workstation Relocation: Fast disassembly and reassembly of cubicles and ergonomic desks to keep your team working.", 
      link: "#contact" 
    },
    { 
      src: "/conference-room-setup-movers.webp", 
      alt: "Professional movers assembling a large corporate conference room table", 
      desc: "Conference Rooms: Heavy lifting and precise setup of massive meeting tables and executive boardroom furniture.", 
      link: "#contact" 
    },
    { 
      src: "/commercial-office-movers-il.webp", // Asegúrate de tener una 4ta imagen con este nombre
      alt: "Tyler Movers commercial van parked outside corporate office building", 
      desc: "Zero-Downtime Moves: We work around your business hours to ensure your company doesn't miss a beat.", 
      link: "#contact" 
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30">
      <Script
        id="office-schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Navbar dict={dict.nav} />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative isolate min-h-[70svh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[90vw] h-[60vh] bg-indigo-500/20 blur-[140px] rounded-full pointer-events-none opacity-70 dark:opacity-40"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_50%,transparent_100%)]"
          />

          <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10 w-full">
            <div className="flex items-center gap-2 text-sm text-foreground/60 mb-6">
              <a href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {dict.nav.home}
              </a>
              <span>/</span>
              <span className="text-foreground font-medium">Office Movers Naperville</span>
            </div>

            <div className="flex justify-start mb-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-background/40 border border-foreground/10 backdrop-blur-xl">
                <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-xs font-semibold tracking-wide uppercase text-foreground/70">
                  Naperville, IL · DuPage County
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
                <div className="absolute inset-0 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
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
        <StoryGallery stories={officeStories} />

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
                  className="p-8 rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-sm hover:border-indigo-500/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
                    {i === 0 && <Clock3 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
                    {i === 1 && <ShieldCheck className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
                    {i === 2 && <Building2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
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
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/15 max-w-2xl mx-auto">
              <p className="text-sm text-foreground/70 text-center">
                💼 Businesses trust Tyler Movers for zero-downtime office transitions. We work around your schedule, including evenings and weekends.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-foreground/[0.02]">
          <div
            aria-hidden
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60vw] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"
          />

          <div className="max-w-3xl mx-auto px-0 sm:px-6">
            <div className="text-center px-6 mb-12">
              <h2 className="text-4xl md:text-6xl font-black tracking-[-0.045em] leading-[0.95] mb-6">
                Schedule your office move
              </h2>
              <p className="text-foreground/60 font-light max-w-md mx-auto">
                Get a business-friendly quote. After-hours and weekend slots available.
              </p>
            </div>

            <div className="sm:rounded-3xl sm:border sm:border-foreground/10 sm:bg-foreground/[0.02] sm:backdrop-blur-xl sm:p-2 sm:shadow-[0_30px_80px_-30px_hsl(var(--foreground)/0.25)]">
              <ContactForm serviceContext="office" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}