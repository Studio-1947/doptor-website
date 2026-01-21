import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "127.0.0.1:3000",
        "https://www.doptor.in",
      ],
    },
  },
  async rewrites() {
    return [
      {
        source: "/api/waitlist/:path*",
        destination: `${process.env.BACKEND_URL || "https://doptor-backend.vercel.app"}/api/waitlist/:path*`,
      },
    ];
  },
};

export default nextConfig;
