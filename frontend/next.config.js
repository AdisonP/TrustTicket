/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  images: {
    domains: ["localhost", "https://ipfs.io/ipfs/", "ipfs.io", "138.197.191.248"],
  },
};

module.exports = nextConfig;
