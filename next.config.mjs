/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static01.nyt.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.nytimes.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
