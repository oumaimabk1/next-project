/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    localeDetection: false, // 👈
    locales: ["ar", "en"],  // 👈
    defaultLocale: "ar"     // 👈
  }
}

module.exports = nextConfig
