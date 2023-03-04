/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // future: { webpack5: true }
}

const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({ ...nextConfig });
