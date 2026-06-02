import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,   // Obligatorio para que Next.js te deje usar el modo 'export'
  },
};

export default nextConfig;
