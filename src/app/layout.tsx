import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#010408",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://pokergameapk.com.pk'),
  title: {
    default: "Poker Game Pakistan - Free Download Official APK 2026",
    template: "%s | Poker Game"
  },
  description: "Download Poker Game APK 2026 — Pakistan's #1 poker platform. Play Texas Hold'em, Teen Patti & win real cash via JazzCash & EasyPaisa. Join 500K+ players!",
  keywords: [
    "Poker Game",
    "poker game download",
    "poker game app",
    "poker game apk",
    "poker game pakistan",
    "poker game online",
    "download poker game",
    "poker game real money",
    "poker game 2026",
    "Texas Hold'em Pakistan",
    "online poker pakistan",
    "earn money poker",
    "poker apk download",
    "free poker game",
    "poker game earning app",
    "JazzCash poker",
    "EasyPaisa poker",
    "mobile poker game",
    "real money games Pakistan",
    "best poker app pakistan",
    "pokergameapk",
    "poker game apk pakistan",
    "poker online pakistan",
    "poker real cash",
    "poker earning app 2026"
  ],
  authors: [{ name: "Poker Game Team" }],
  creator: "Poker Game",
  publisher: "Poker Game",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/poker-game-logo.webp', type: 'image/webp', sizes: '192x192' },
    ],
    apple: [{ url: '/poker-game-logo.webp', sizes: '180x180' }],
    shortcut: '/favicon.ico',
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://pokergameapk.com.pk",
  },
  openGraph: {
    title: "Poker Game Pakistan - Free Download Official APK 2026",
    description: "Poker Game 2026 - Pakistan's #1 poker platform. Join 500K+ players. Play Texas Hold'em, Teen Patti & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    url: "https://pokergameapk.com.pk",
    siteName: "Poker Game",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://pokergameapk.com.pk/poker-game.webp",
        width: 1200,
        height: 630,
        alt: "Poker Game - Premier Poker Gaming Platform Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poker Game Pakistan - Free Download Official APK 2026",
    description: "Poker Game 2026 - Pakistan's #1 poker platform. Join 500K+ players. Play Texas Hold'em & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    creator: "@pokergamepk",
    images: [
      {
        url: "https://pokergameapk.com.pk/poker-game.webp",
        width: 1200,
        height: 600,
        alt: "Poker Game - Premier Poker Gaming Platform Pakistan",
      }
    ],
  },
  applicationName: "Poker Game",
  category: "Gaming",
  classification: "Poker Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/poker-game-logo.webp" type="image/webp" sizes="192x192" />
        <link rel="apple-touch-icon" href="/poker-game-logo.webp" sizes="180x180" />
        <meta property="og:image" content="https://pokergameapk.com.pk/poker-game.webp" />
        <meta property="og:image:alt" content="Poker Game - Pakistan's #1 poker gaming app. Play Texas Hold'em, Teen Patti, Dragon vs Tiger." />
        
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === 'string' &&
         process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
         !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className="antialiased bg-primary text-white min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        <div className="poker-bg-animated fixed inset-0 z-0"></div>
        <Header />
        <main className="relative z-10">
        {children}
        </main>
        <DeferredStyles />
        <Footer />
        <ScrollToTopWrapper />
        <WebVitalsTracker />
        
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Poker Game",
              "url": "https://pokergameapk.com.pk",
              "logo": "https://pokergameapk.com.pk/poker-game-logo.webp",
              "description": "Poker Game is Pakistan's premier poker gaming platform, offering Texas Hold'em, Teen Patti, Dragon vs Tiger and many other games with real cash rewards.",
              "sameAs": [
                "https://facebook.com/pokergamepk",
                "https://twitter.com/pokergamepk"
              ]
            })
          }}
        />
        
        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Poker Game",
              "operatingSystem": "Android",
              "applicationCategory": "GameApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "PKR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "ratingCount": "500000",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
