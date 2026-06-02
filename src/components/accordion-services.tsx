"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, ChevronDown, CheckCircle2 } from "lucide-react";

interface ServiceItem {
  id:        string;
  title:     string;
  desc:      string;
  quoteText: string;
  features?: string[];
}

interface AccordionServicesProps {
  title:    string;
  services: ServiceItem[];
}

/*
  FIX BUG-2: Componente eliminó el <section id="services"> wrapper propio.
  El id="services" ya existe en la sección padre de page.tsx — tener dos
  id idénticos es HTML inválido y rompe la navegación del menú.

  FIX BUG-5: Teléfono corregido de +1234567890 a +17735737886.

  FIX BUG-12: Galería falsa de placeholders eliminada. Reemplazada por
  lista de features tipadas con CheckCircle2.
*/
export function AccordionServices({ title, services }: AccordionServicesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(
    services[0]?.id ?? null,
  );

  return (
    /* Sin <section> ni id aquí — page.tsx ya provee el contenedor correcto */
    <div className="w-full">
      <h3 className="mb-6 text-lg font-semibold text-foreground/60 tracking-tight">
        {title}
      </h3>

      <div className="space-y-2">
        {services.map((service) => {
          const isOpen = expandedId === service.id;

          return (
            <div
              key={service.id}
              className="overflow-hidden rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-sm transition-colors hover:border-foreground/20"
            >
              <button
                onClick={() =>
                  setExpandedId(isOpen ? null : service.id)
                }
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
              >
                <span className="font-bold text-base text-foreground">
                  {service.title}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-foreground/8 px-6 py-5">
                      <p className="text-sm leading-relaxed text-foreground/70">
                        {service.desc}
                      </p>

                      {/* Features list — reemplaza la galería falsa */}
                      {service.features && service.features.length > 0 && (
                        <ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {service.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-center gap-2 text-xs font-medium text-foreground/80"
                            >
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* CTAs */}
                      <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                        <a
                          href="#contact"
                          className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity"
                        >
                          {service.quoteText}
                        </a>
                        {/* FIX BUG-5: número real, no placeholder */}
                        <a
                          href="tel:+17735737886"
                          className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                            <PhoneCall className="h-4 w-4" />
                          </span>
                          (773) 573-7886
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
