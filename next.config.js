/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
