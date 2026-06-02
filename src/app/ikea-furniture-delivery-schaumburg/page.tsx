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
    delivery: {
      title: "IKEA & Furniture Delivery Schaumburg | Tyler Movers",
      description: "Fast, reliable, and affordable store delivery and furniture assembly in Schaumburg, IL.",
      h1: "IKEA & Furniture Delivery",
      subtitle: "Store-to-door delivery and expert assembly services in Schaumburg",
      cta: "Book Delivery",
      whyUs: "Why Choose Our Delivery Service",
      benefits: [
        { title: "Store-to-Door", desc: "We pick up directly from IKEA or any store and deliver straight to your room." },
        { title: "Expert Assembly", desc: "Don't stress over complex manuals. We build your furniture perfectly." },
        { title: "Same-Day Slots", desc: "Flexible scheduling to get your new purchases home when you need them." }
      ],
      servicesTitle: "Our Delivery & Assembly Services",
      commonItems: ["Store Pickup & Loading", "Safe Residential Transport", "Multi-Item Deliveries", "Complete Furniture Assembly"]
    }
  }
};

export default function FurnitureDeliveryPage() {
  const lpData = dict.landingPages.delivery;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Furniture Delivery and Assembly Service",
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
      { "@type": "City", name: "Schaumburg" },
      { "@type": "City", name: "Bloomingdale" },
      { "@type": "AdministrativeArea", name: "Cook County" },
    ],
    description: lpData.description,
  };

const furnitureStories: StorySlide[] = [
    { 
      src: "/retail-furniture-pickup.webp", 
      alt: "Tyler Movers loading large flat-pack furniture order into van", 
      desc: "Retail Pickups: Bought too much to fit in your car? We pick up your large flat-pack orders directly from the store.", 
      link: "#contact" 
    },
    { 
      src: "/boxed-furniture-unloading.webp", 
      alt: "Mover safely unloading sealed furniture boxes from delivery van", 
      desc: "Safe Transport: From office chairs to heavy marketplace finds, we transport your boxed furniture securely.", 
      link: "#contact" 
    },
    { 
      src: "/flat-pack-stairs-delivery.webp", 
      alt: "Professional mover carrying heavy flat-pack boxes up walk-up stairs", 
      desc: "Walk-up Deliveries: 3rd-floor apartment? No elevator? No problem. We carry the heavy boxes right to your door.", 
      link: "#contact" 
    },
    { 
      src: "/residential-door-delivery.webp", 
      alt: "Tyler Movers employee delivering package to a smiling customer at her front door", 
      desc: "Last-Mile Service: Friendly, professional, and reliable. Your satisfaction is our top priority on every single delivery.", 
      link: "#contact" 
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-amber-500/30">
      <Script
        id="delivery-schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Navbar dict={dict.nav} />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative isolate min-h-[70svh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[90vw] h-[60vh] bg-amber-500/20 blur-[140px] rounded-full pointer-events-none opacity-70 dark:opacity-40"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_50%,transparent_100%)]"
          />

          <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10 w-full">
            <div className="flex items-center gap-2 text-sm text-foreground/60 mb-6">
              <a href="/" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                {dict.nav.home}
              </a>
              <span>/</span>
              <span className="text-foreground font-medium">Delivery Schaumburg</span>
            </div>

            <div className="flex justify-start mb-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-background/40 border border-foreground/10 backdrop-blur-xl">
                <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span className="text-xs font-semibold tracking-wide uppercase text-foreground/70">
                  Schaumburg, IL · Cook County
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
                <div className="absolute inset-0 bg-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
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
        <StoryGallery stories={furnitureStories} />

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
                  className="p-8 rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-sm hover:border-amber-500/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                    {i === 0 && <Clock3 className="w-6 h-6 text-amber-600 dark:text-amber-400" />}
                    {i === 1 && <ShieldCheck className="w-6 h-6 text-amber-600 dark:text-amber-400" />}
                    {i === 2 && <Building2 className="w-6 h-6 text-amber-600 dark:text-amber-400" />}
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
                  <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-amber-500/5 border border-amber-500/15 max-w-2xl mx-auto">
              <p className="text-sm text-foreground/70 text-center">
                📦 Avoid the heavy lifting and assembly headaches. Our delivery experts handle your items with care from store to setup.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-foreground/[0.02]">
          <div
            aria-hidden
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60vw] h-[400px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"
          />

          <div className="max-w-3xl mx-auto px-0 sm:px-6">
            <div className="text-center px-6 mb-12">
              <h2 className="text-4xl md:text-6xl font-black tracking-[-0.045em] leading-[0.95] mb-6">
                Schedule your store delivery
              </h2>
              <p className="text-foreground/60 font-light max-w-md mx-auto">
                Get an instant delivery and assembly estimate. Fast and seamless.
              </p>
            </div>

            <div className="sm:rounded-3xl sm:border sm:border-foreground/10 sm:bg-foreground/[0.02] sm:backdrop-blur-xl sm:p-2 sm:shadow-[0_30px_80px_-30px_hsl(var(--foreground)/0.25)]">
              <ContactForm serviceContext="ikea" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}