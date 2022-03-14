/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.google.co.uk",
      "www.google.com",
      "www.https://firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
