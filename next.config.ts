import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: '',
  basePath: '',
  output: 'export'
};

export default nextConfig;
