/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  // experimental: {
  //   logging: {
  //     level: "verbose",
  //     fullUrl: true,
  //   },
  // },
  experimental: {
    instrumentationHook: true,
  },
};

module.exports = nextConfig;
