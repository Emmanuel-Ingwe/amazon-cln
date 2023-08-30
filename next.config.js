/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co"],
  },
  typescript: {
    ignoreBuildErrors: true,
}
}

module.exports = nextConfig
