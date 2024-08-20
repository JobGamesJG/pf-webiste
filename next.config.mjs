/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.jobgamesjg.xyz",
                port: "",
                pathname: "/files/**",
            },
        ],
    },
};

export default nextConfig;
