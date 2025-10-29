/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'linkedin.com',
      },
      {
        protocol: 'https',
        hostname: 'twitter.com',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Reduce webpack warnings on Windows
    config.infrastructureLogging = {
      level: 'error',
    };
    
    // Improve path resolution
    config.resolve.symlinks = false;
    
    return config;
  },
};

module.exports = nextConfig;