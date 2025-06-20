const nextConfig = {
  env: {
    PATH_URL_BACKEND: 'http://localhost:4000',
    CART_KEY: 'cart'
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
