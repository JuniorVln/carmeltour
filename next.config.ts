import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: "C:/Users/junio/Projects/Carmel Tour/site",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "carmeltour.com",
      },
    ],
  },
  allowedDevOrigins: ["192.168.0.91"],
};

export default nextConfig;
