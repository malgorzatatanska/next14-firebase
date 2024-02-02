/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    remotePatterns: [
      {
        hostname: "tailwindui.com",
      },
      {
        hostname: "media.graphassets.com",
      },
      {
        hostname: "images.ctfassets.net",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
