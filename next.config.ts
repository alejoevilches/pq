/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    // ⚙️ Activar soporte para TypeORM decorators en SWC
    experimentalDecorators: true,
    emitDecoratorMetadata: true,
  },
};

module.exports = nextConfig;