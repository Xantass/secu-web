import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: '/secu-web',
  basePath: '/secu-web',
  output: 'export'
};

export default nextConfig;
