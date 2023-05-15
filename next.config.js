/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  module: {
    transpilePackages: ['@lens-protocol']
  }
  
}

module.exports = nextConfig
