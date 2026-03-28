import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://pokergameapk.com.pk';
  
  type PageType = {
    url: string;
    lastMod: string;
    changeFreq: string;
    priority: number;
    images?: Array<{
      loc: string;
      title: string;
      caption: string;
    }>;
  };
  
  const mainPages: PageType[] = [
    {
      url: '/',
      lastMod: new Date().toISOString(),
      changeFreq: 'daily',
      priority: 1.0,
      images: [
        {
          loc: '/poker-game.webp',
          title: 'Poker Game - Official App Icon and Brand Image',
          caption: "Poker Game - Pakistan's #1 poker gaming app. Play Texas Hold'em, Teen Patti, Dragon vs Tiger. Download Poker Game APK for Android."
        },
        {
          loc: '/poker-game-logo.webp',
          title: 'Poker Game Official Logo',
          caption: "Official Poker Game logo - Pakistan's premier poker gaming platform"
        }
      ]
    },
    {
      url: '/download-poker-game-apk',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/poker-game.webp',
          title: 'Download Poker Game',
          caption: 'Download Poker Game APK for Android'
        }
      ]
    },
    {
      url: '/deposit-money-in-poker-game',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/withdraw-money-from-poker-game',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/poker-game-for-pc',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.8,
      images: [
        {
          loc: '/poker-game.webp',
          title: 'Poker Game for PC',
          caption: 'Play Poker Game on PC using Android Emulator'
        }
      ]
    },
    {
      url: '/about-us',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.6
    },
    {
      url: '/blog',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.8
    },
    {
      url: '/contact-us',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.6
    },
    {
      url: '/privacy',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.4
    },
    {
      url: '/disclaimer',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.4
    }
  ];

  const blogPosts: PageType[] = [
    {
      url: '/blog/how-to-create-poker-game-account',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.85
    },
    {
      url: '/blog/how-to-login-poker-game',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.85
    },
    {
      url: '/blog/how-to-deposit-money-in-poker-game',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.85
    },
    {
      url: '/blog/how-to-withdraw-money-from-poker-game',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.85
    }
  ];

  const allPages = [...mainPages, ...blogPosts];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${page.images?.map(img => `
    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('') || ''}
  </url>
  `).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
}
