import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unitellas.com.ng",
        pathname: "/images/**",
      },
    ],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
