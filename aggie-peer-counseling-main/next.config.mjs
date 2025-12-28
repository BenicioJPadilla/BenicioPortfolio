// next.config.mjs
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'app/(pages)/_globals')],
    additionalData: `@use 'mixins' as *;`,
  },
};

export default nextConfig;
