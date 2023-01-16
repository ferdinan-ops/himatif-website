/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   extends: ["next/babel", "next/core-web-vitals"],
};

module.exports = nextConfig;
