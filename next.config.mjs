/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/about-me", // Cambia esto por el nombre de tu repo
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig