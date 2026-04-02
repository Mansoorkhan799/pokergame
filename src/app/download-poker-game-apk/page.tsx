import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import HowToSchema from '@/components/HowToSchema';

export const metadata: Metadata = {
  title: 'Download Poker Game APK Latest Version for Android 2026',
  description: 'Download Poker Game APK latest version for Android free. Official Poker Game download guide for Pakistan. Play Texas Hold\'em, Teen Patti & win real cash. Safe & fast download.',
  keywords: ['download poker game', 'poker game apk download', 'poker game android', 'poker game free download', 'pokergameapk download', 'poker game latest version'],
  alternates: {
    canonical: "https://pokergameapk.com.pk/download-poker-game-apk",
  },
  openGraph: {
    title: 'Download Poker Game APK Latest Version for Android 2026',
    description: 'Official Poker Game APK download guide for Pakistan. Play Texas Hold\'em & earn real money with JazzCash & EasyPaisa.',
    url: "https://pokergameapk.com.pk/download-poker-game-apk",
    siteName: "Poker Game",
    type: "website",
    images: [{ url: 'https://pokergameapk.com.pk/poker-game.webp', width: 1200, height: 630, alt: 'Download Poker Game APK for Android Pakistan' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download Poker Game APK Latest Version for Android 2026',
    description: 'Official Poker Game APK download guide for Pakistan. Play Texas Hold\'em & earn real money with JazzCash & EasyPaisa.',
    images: ['https://pokergameapk.com.pk/poker-game.webp'],
  },
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">

        <Script
          id="download-page-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Poker Game",
              "operatingSystem": "Android",
              "applicationCategory": "GameApplication",
              "downloadUrl": "https://pokeremag.com/?from_gameid=5154838&channelCode=200000",
              "softwareVersion": "V1.207",
              "fileSize": "49MB",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PKR" },
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
        <Script
          id="download-breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pokergameapk.com.pk" },
                { "@type": "ListItem", "position": 2, "name": "Download Poker Game APK", "item": "https://pokergameapk.com.pk/download-poker-game-apk" }
              ]
            })
          }}
        />

        <HowToSchema
          id="howto-download-poker-game-apk"
          name="How to Download Poker Game APK on Android"
          description="Download and install the official Poker Game APK from pokergameapk.com.pk on your Android phone in Pakistan."
          image="https://pokergameapk.com.pk/poker-game.webp"
          steps={[
            { name: "Open pokergameapk.com.pk", text: "Open your Android device browser and visit pokergameapk.com.pk." },
            { name: "Start the download", text: "Click the 'DOWNLOAD NOW' button to start downloading the Poker Game APK file." },
            { name: "Wait for download", text: "Wait for the download to complete — the file is only 49MB." },
            { name: "Find the APK", text: "Once downloaded, the APK file will be in your Downloads folder." },
            { name: "Allow unknown sources", text: "Open your device Settings > Security and enable 'Install from Unknown Sources'." },
            { name: "Install the APK", text: "Navigate to your Downloads folder and tap the Poker Game APK file." },
            { name: "Finish installation", text: "Follow the installation prompts and wait for it to complete." },
            { name: "Open Poker Game", text: "Tap the Poker Game icon on your home screen to launch the app and start playing!" },
          ]}
        />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Download Poker Game APK</span>
        </nav>

        <figure className="flex justify-center mb-10">
          <Image
            src="/poker-game.webp"
            alt="Poker Game — download the official APK for Android in Pakistan"
            width={320}
            height={320}
            className="object-contain w-[220px] h-[220px] md:w-[280px] md:h-[280px] drop-shadow-2xl rounded-2xl border border-gray-800/50"
            priority
            sizes="(max-width: 768px) 220px, 280px"
          />
        </figure>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Download <span className="text-accent">Poker Game APK</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Download the latest version of Poker Game APK for Android free. Pakistan&apos;s #1 poker app with Texas Hold&apos;em, Teen Patti, and real cash rewards.
          </p>
        </div>

        {/* Download CTA */}
        <div className="bg-[#050c14] border border-[#0ea5e9]/30 rounded-2xl p-8 text-center mb-10">
          <div className="mb-6">
            <span className="inline-block bg-green-500/20 text-green-400 border border-green-500/30 rounded-full px-4 py-1 text-sm font-medium mb-4">
              ✓ Version V1.207 — Latest Release
            </span>
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mt-4">
              {[["49MB", "File Size"], ["Android 5+", "OS Required"], ["Free", "Price"]].map(([val, label], i) => (
                <div key={i} className="bg-[#010408] rounded-lg p-3">
                  <div className="text-accent font-bold text-lg">{val}</div>
                  <div className="text-gray-400 text-xs">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <a
            href="https://pokeremag.com/?from_gameid=5154838&channelCode=200000"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn inline-flex items-center gap-3 bg-transparent text-white font-bold py-4 px-10 rounded-full border-2 border-[#0ea5e9] text-lg"
          >
            <span>DOWNLOAD POKER GAME APK</span>
            <div className="download-icon bg-[#f97316] rounded-full p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </div>
          </a>
          <p className="text-gray-500 text-sm mt-4">*For Android devices only</p>
        </div>

        {/* Step by Step Guide */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">How to Download Poker Game APK</h2>
          <ol className="space-y-4">
            {[
              "Open your Android device browser and visit pokergameapk.com.pk.",
              "Click the 'DOWNLOAD NOW' button to start downloading the Poker Game APK file.",
              "Wait for the download to complete — the file is only 49MB.",
              "Once downloaded, the APK file will be in your Downloads folder.",
              "Open your device Settings > Security and enable 'Install from Unknown Sources'.",
              "Navigate to your Downloads folder and tap the Poker Game APK file.",
              "Follow the installation prompts and wait for it to complete.",
              "Tap the Poker Game icon on your home screen to launch the app and start playing!",
            ].map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</span>
                <p className="text-gray-300 mt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* App Info Table */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">Poker Game APK Details</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-gray-800">
                {[
                  ["App Name", "Poker Game"],
                  ["Version", "V1.207"],
                  ["Size", "49 MB"],
                  ["Platform", "Android 5.0+"],
                  ["Price", "Free"],
                  ["Last Updated", "28 March 2026"],
                  ["Downloads", "500,000+"],
                  ["Rating", "4.5/5 (200K+ ratings)"],
                ].map(([label, val], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#010408]/50" : "bg-[#050c14]/30"}>
                    <td className="py-3 px-6 font-medium text-white">{label}</td>
                    <td className="py-3 px-6 text-gray-300">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Related Links */}
        <div className="bg-[#050c14] rounded-xl p-6 border border-gray-800/40">
          <h3 className="text-lg font-semibold text-accent mb-4">Related Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/blog/how-to-create-poker-game-account", label: "How to Create Poker Game Account" },
              { href: "/blog/how-to-login-poker-game", label: "How to Login to Poker Game" },
              { href: "/deposit-money-in-poker-game", label: "How to Deposit Money in Poker Game" },
              { href: "/withdraw-money-from-poker-game", label: "How to Withdraw Money from Poker Game" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors text-sm p-2 rounded-lg hover:bg-[#010408]">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
