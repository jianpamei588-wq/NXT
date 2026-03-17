import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  // Optional: If deploying to a subdirectory (e.g. GitHub Pages project site)
  // basePath: "/nextbuildx-website", 
};

export default nextConfig;
