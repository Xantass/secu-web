import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: false,
  },
  assetPrefix: '',
  basePath: '',
  output: 'export'
};

export default nextConfig;
