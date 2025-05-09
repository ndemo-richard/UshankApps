import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: 'app1.usankoapps.com' }],
        destination: '/apps/app1',
      },
      {
        source: '/',
        has: [{ type: 'host', value: 'app2.usankoapps.com' }],
        destination: '/apps/app2',
      },
    ];
  },
};

export default nextConfig;