import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net', // Permitir CDN do Devicon
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // <--- ADICIONE ESTE BLOCO
      },
    ],
  },
};

export default nextConfig;