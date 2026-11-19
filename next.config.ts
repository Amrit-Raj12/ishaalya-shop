
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Existing Next.js configuration
  experimental: {
    agentFeedback: true,
  },

  cacheComponents: true,
  partialPrefetching: true,

  // Turbopack configuration
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  // Allow product and category images from Cloudflare R2
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-a5dc40bcb8ca49889a5f35052b897b43.r2.dev",
        pathname: "/dev/**",
      },
    ],

    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
