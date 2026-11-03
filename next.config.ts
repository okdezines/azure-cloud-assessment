import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "azure-cloud-assessment";

const nextConfig: NextConfig = {
  // Required for GitHub Pages static hosting
  output: "export",

  // GitHub Pages serves this project from:
  // okdezines.github.io/azure-cloud-assessment/
  basePath: isProd ? `/${repoName}` : "",

  // Ensures generated asset URLs use the repository path
  assetPrefix: isProd ? `/${repoName}/` : "",

  // Helpful for static hosting
  trailingSlash: true,

  // Required if next/image is used with static export
  images: {
    unoptimized: true,
  },

  experimental: {
    agentFeedback: true,
  },

  // cacheComponents: true,
  // partialPrerendering: true,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;