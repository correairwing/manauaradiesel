/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: process.env.BASE_PATH || "",
    assetPrefix: process.env.URL || "",
  };
  module.exports = nextConfig;
