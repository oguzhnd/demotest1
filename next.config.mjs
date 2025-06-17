import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);;
