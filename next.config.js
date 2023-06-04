/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "avatars.steamstatic.com",
                pathname: "/**"
            },
            {
                protocol: 'https',
                hostname: "*.cdn.beatsaver.com",
                pathname: "/**"
            }
        ]
    }
}

module.exports = nextConfig
