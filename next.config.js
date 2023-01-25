/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ipfs.io', 'placeimg.com'],
  },
};

module.exports = nextConfig;
