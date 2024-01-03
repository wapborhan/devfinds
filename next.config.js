/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // domains: [
    //   "avatars.githubusercontent.com",
    //   "scontent.frjh3-1.fna.fbcdn.net",
    // ],
  },
};

module.exports = nextConfig;
