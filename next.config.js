/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-assets.clashroyale.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'marvelrivalsapi.com',
        pathname: '**',
      }
    ]
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
