/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['staging-it-incubator.s3.eu-central-1.amazonaws.com'],
        remotePatterns: [
            {
            hostname: 'staging-it-incubator.s3.eu-central-1.amazonaws.com',
            pathname: '/trainee-instagram-api/**',
            port: '',
            protocol: 'https',
            },
        ],
    },
};

export default nextConfig;
