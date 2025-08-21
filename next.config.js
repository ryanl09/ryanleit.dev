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
  }
}

module.exports = nextConfig
