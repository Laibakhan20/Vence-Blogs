/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'], // Allow Sanity's CDN for images
      },
};

export default nextConfig;
