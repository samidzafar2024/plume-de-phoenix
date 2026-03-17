/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "d2a92m131axhse.cloudfront.net", pathname: "/**" },
      { protocol: "https", hostname: "www.plumedephoenix.com", pathname: "/**" },
    ],
  },
};

module.exports = nextConfig;
