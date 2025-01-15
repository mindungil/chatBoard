import type { NextConfig } from "next";
import { Rewrite } from "next/dist/lib/load-custom-routes";
const nextConfig: NextConfig = {
  /* config options here */
  async rewrites(){
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/:path*',
      },
    ];
  },
};

export default nextConfig;
