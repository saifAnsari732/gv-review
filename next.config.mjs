/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',  // sabhi domains allow
      },
      {
        protocol: 'http',
        hostname: '**',  // http bhi allow
      },
    ],
  },
};

export default nextConfig;
