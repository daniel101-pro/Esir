import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  trailingSlash: false,
  experimental: {
    appDir: true,
  },
  // Ensure proper routing
  async redirects() {
    return [];
  },
  async rewrites() {
    return [];
  }
};

export default nextConfig;
