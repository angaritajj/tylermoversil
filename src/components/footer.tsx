import Image from "next/image";
import { PhoneCall, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-zinc-200 dark:border-zinc-800 py-12 mt-20 w-full">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Sección Superior: Exactamente 2 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          
          {/* Columna 1: Branding del negocio */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo.png"
                alt="Tyler Movers IL Icon"
                width={45}
                height={45}
                className="h-9 w-auto object-contain dark:brightness-110" 
              />
              <span className="font-black text-xl tracking-tight">
                Tyler<span className="text-primary">Movers</span> IL
              </span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light max-w-sm">
              Smart. Fast. Hassle-Free moving and delivery services across Chicagoland.
            </p>
          </div>

          {/* Columna 2: Sección de Contacto Premium Interactiva */}
          <div className="flex flex-col gap-4 w-full">
            <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500 text-left">
              Contact Info
            </h4>
            
            {/* Contenedor de Botones Táctiles */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              
              {/* 📞 Botón Táctil de Call or Text */}
              <a 
                href="tel:+17735737886"
                className="flex-1 flex items-center gap-3.5 p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-primary/40 dark:hover:border-primary/40 transition-all group active:scale-[0.98]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Call or Text</p>
                  <p className="text-sm font-black tracking-tight text-zinc-800 dark:text-zinc-100 tabular-nums">(773) 573-7886</p>
                </div>
              </a>

              {/* ✉️ Botón Táctil de Email Support */}
              <a 
                href="mailto:services@tylermoversil.com"
                className="flex-1 flex items-center gap-3.5 p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-primary/40 dark:hover:border-primary/40 transition-all group active:scale-[0.98]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-[10px] font-black uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Email Support</p>
                  <p className="text-sm font-black tracking-tight text-zinc-800 dark:text-zinc-100 truncate max-w-[190px] sm:max-w-none">
                    services@tylermoversil.com
                  </p>
                </div>
              </a>

            </div>

            {/* Horario de Atención Estilizado */}
            <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 text-left pl-1">
              ⏰ Availability: <span className="font-bold text-zinc-600 dark:text-zinc-400">Mon–Sun · 7am–9pm CT</span>
            </p>
          </div>

        </div>

        {/* Sección Inferior: Derechos y Firma */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 text-center sm:text-left">
          <p>© 2026 Tyler Movers IL. All rights reserved.</p>
          <p className="inline-flex items-center gap-1 justify-center whitespace-nowrap">
            By:{" "}
            <a
              href="https://helmutai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-zinc-300 hover:text-primary font-medium transition-colors underline underline-offset-4"
            >
              Helmut AI IT Consulting | helmutai.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}