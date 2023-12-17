/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ctu.int',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
