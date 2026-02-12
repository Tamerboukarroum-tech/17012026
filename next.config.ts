import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/17012026',
  assetPrefix: '/17012026',
  trailingSlash: true,
};

export default nextConfig;
