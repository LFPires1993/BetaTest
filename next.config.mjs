/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'cdn.dummyjson.com'
        }]
    },
    env: {
        NEXT_PUBLIC_DUMMY_PRODUCTS_URL: process.env.DUMMY_PRODUCTS_URL
    }
};

export default nextConfig;
