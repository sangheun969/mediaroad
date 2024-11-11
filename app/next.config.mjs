/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: isProd ? "/mediaroad" : "",
  basePath: isProd ? "/mediaroad" : "",
  trailingSlash: true,
};

export default nextConfig;
