import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pplacehold.co",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
