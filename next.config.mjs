/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Allow production builds even if there are TS errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Skip ESLint during builds on CI
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;
