const rewrites = process.env.NODE_ENV === 'development' ? [
  {
    source: '/api/:path*',
    destination: 'https://emaxis.jp/:path*',
  },
] : [];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return rewrites;
  },
}

module.exports = nextConfig
