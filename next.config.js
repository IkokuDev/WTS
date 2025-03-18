/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', process.env.NEXT_PUBLIC_SERVER_URL?.replace('http://', '').replace('https://', '')].filter(Boolean),
  },
}

module.exports = nextConfig
