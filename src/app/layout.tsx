import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";

/* ── Fonts ─────────────────────────────────────────────────────────────── */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ── Metadata (Next.js 16 — App Router) ───────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://tylermoversil.com"),
  title: {
    default: "Tyler Movers IL — Micro-Moves & Same-Day Delivery | Bloomingdale, IL",
    template: "%s | Tyler Movers IL",
  },
  description:
    "Specialized minivan service for studio moves, IKEA/Facebook Marketplace delivery, and small office relocations. Serving Bloomingdale, Schaumburg, Naperville & Chicagoland. Flat-rate, no hidden fees.",
  keywords: [
    "micro moves Bloomingdale",
    "same day furniture delivery Illinois",
    "studio apartment movers Chicago",
    "IKEA delivery Schaumburg",
    "small office movers Naperville",
    "man with van DuPage County",
    "Facebook Marketplace pickup service",
    "minivan moving service Chicagoland",
  ],
  authors: [{ name: "Tyler Movers IL" }],
  creator: "Tyler Movers IL",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tylermoversil.com",
    siteName: "Tyler Movers IL",
    title: "Tyler Movers IL — Micro-Moves & Same-Day Delivery",
    description:
      "The smart alternative to big moving trucks. Studio moves, marketplace delivery, office relocation — all across Chicagoland.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tyler Movers IL — Minivan Moving Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyler Movers IL — Micro-Moves & Same-Day Delivery",
    description:
      "The smart alternative to big moving trucks. Studio moves, marketplace delivery, office relocation — all across Chicagoland.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://tylermoversil.com",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#062029" },
  ],
  width: "device-width",
  initialScale: 1,
};

/* ── Root Layout ──────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          FIX BUG-11 (FOIC): Script inline que corre SÍNCRONAMENTE antes del
          primer paint. Aplica la clase "dark" al <html> antes de que React
          hidrate, eliminando el flash de tema incorrecto.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme')||'dark';document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
          <Footer /> {/* 🚀 COLÓCALO AQUÍ EXACTAMENTE */}
        </ThemeProvider>
      </body>
    </html>
  );
}
