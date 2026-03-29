/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  
  // Target modern browsers - no legacy polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'slotspk.com.pk',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 90, 100], // Configure allowed image quality values
  },

  async redirects() {
    return [
      // Old Card Rummy pages → new Poker Game pages (301 permanent)
      {
        source: '/download-card-rummy',
        destination: '/download-poker-game-apk',
        permanent: true,
      },
      {
        source: '/download-poker-game',
        destination: '/download-poker-game-apk',
        permanent: true,
      },
      {
        source: '/deposit-money-in-card-rummy',
        destination: '/deposit-money-in-poker-game',
        permanent: true,
      },
      {
        source: '/withdraw-money-from-card-rummy',
        destination: '/withdraw-money-from-poker-game',
        permanent: true,
      },
      {
        source: '/card-rummy-for-pc',
        destination: '/poker-game-for-pc',
        permanent: true,
      },
      // Old blog posts → blog index
      {
        source: '/blog/create-card-rummy-account-and-login',
        destination: '/blog/how-to-create-poker-game-account',
        permanent: true,
      },
      {
        source: '/blog/create-account-login',
        destination: '/blog/how-to-create-poker-game-account',
        permanent: true,
      },
      {
        source: '/blog/:slug(card-rummy.*)',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/:slug(3patti.*)',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/:slug(dragon.*)',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/:slug(is-card.*)',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/:slug(responsible.*)',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/:slug(tips-to-win.*)',
        destination: '/withdraw-money-from-poker-game',
        permanent: true,
      },
      {
        source: '/blog/how-to-deposit-money-in-poker-game',
        destination: '/deposit-money-in-poker-game',
        permanent: true,
      },
      {
        source: '/blog/how-to-withdraw-money-from-poker-game',
        destination: '/withdraw-money-from-poker-game',
        permanent: true,
      },
      {
        source: '/blog/:slug(ways-to-earn.*)',
        destination: '/blog',
        permanent: true,
      },
      // /about redirect
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      // Malformed URLs
      {
        source: '/\\$',
        destination: '/',
        permanent: true,
      },
      {
        source: '/\\&',
        destination: '/',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/.well-known/:path*',
        destination: '/public/.well-known/:path*',
      },
    ];
  },

  // Optimize headers
  async headers() {
    return [
      // HTML pages: always revalidate so Googlebot gets fresh content
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self'",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
      // Immutable cache only for fingerprinted static assets
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Public images: long cache but allow revalidation
      {
        source: '/:path*.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'text/css',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Handle webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Enable proper static file handling
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Optimize for development
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    // Target modern browsers - don't transpile modern JavaScript features
    if (!isServer) {
      config.target = ['web', 'es2022'];
      
      // Disable Next.js polyfills for modern browsers (Lighthouse: Legacy JavaScript)
      // Saves ~11KB - polyfills for Array.at, Object.hasOwn, etc. aren't needed for Chrome 90+, Safari 14+, etc.
      config.resolve.alias = {
        ...config.resolve.alias,
        '../build/polyfills/polyfill-module': false,
        'next/dist/build/polyfills/polyfill-module': false,
      };
    }

    return config;
  },

  // Enable experimental features
  experimental: {
    optimizeCss: true, // Critters inlines critical CSS
    inlineCss: true, // Inline CSS in HTML to eliminate render-blocking (improves FCP/LCP)
    scrollRestoration: true,
    optimizePackageImports: ['react-icons'],
  },
  
  // Modern module/nomodule pattern
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
}

module.exports = nextConfig 