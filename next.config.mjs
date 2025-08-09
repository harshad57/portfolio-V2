/** @type {import('next').NextConfig} */
const nextConfig = {
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
};

export default nextConfig;
