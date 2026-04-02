import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer - Poker Game | Legal Information',
  description: 'Read the disclaimer for Poker Game. Important legal information about the use of this website and third-party poker gaming platforms.',
  keywords: ['Poker Game disclaimer', 'legal disclaimer', 'poker game terms', 'gambling disclaimer', 'pokergameapk disclaimer'],
  openGraph: {
    title: 'Disclaimer - Poker Game',
    description: 'Legal disclaimer and important information about Poker Game.',
    url: 'https://pokergameapk.com.pk/disclaimer',
    siteName: 'Poker Game',
    type: 'website',
    images: [{ url: 'https://pokergameapk.com.pk/poker-game.webp', width: 1200, height: 630, alt: 'Poker Game Legal Disclaimer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer - Poker Game',
    description: 'Legal disclaimer and important information about Poker Game.',
    images: ['https://pokergameapk.com.pk/poker-game.webp'],
  },
  alternates: {
    canonical: 'https://pokergameapk.com.pk/disclaimer',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Disclaimer() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pokergameapk.com.pk" },
      { "@type": "ListItem", "position": 2, "name": "Disclaimer", "item": "https://pokergameapk.com.pk/disclaimer" }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://pokergameapk.com.pk/disclaimer",
    "url": "https://pokergameapk.com.pk/disclaimer",
    "name": "Disclaimer - Poker Game",
    "description": "Read the disclaimer for Poker Game. Important legal information about the use of this website and third-party poker gaming platforms.",
    "inLanguage": "en-US",
    "isPartOf": { "@type": "WebSite", "@id": "https://pokergameapk.com.pk", "url": "https://pokergameapk.com.pk" }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

          <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Disclaimer</span>
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Disclaimer</h1>
            <p className="text-lg text-gray-400">Last Updated: March 28, 2026</p>
          </div>

          <div className="bg-[#050c14] rounded-2xl shadow-xl p-8 md:p-12 border border-gray-800/40 space-y-8">

            <div className="bg-red-900/20 border-l-4 border-red-500 rounded-r-lg p-6">
              <h2 className="text-2xl font-bold mb-3 text-white">Important Notice</h2>
              <p className="text-gray-300">
                This website (<strong>pokergameapk.com.pk</strong>) is an informational blog about <Link href="/" className="text-accent hover:underline font-semibold">Poker Game</Link>. We are not affiliated with, endorsed by, or the official representatives of Poker Game or any third-party gaming company.
              </p>
            </div>

            <div className="bg-[#010408] rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-white">General Information Only</h2>
              <p className="text-gray-300 leading-relaxed">
                The information provided on this website is for general informational purposes only. All content, including guides on how to download, register, deposit, and withdraw from Poker Game, is based on publicly available information and user experience. We make no warranties or guarantees about the accuracy, completeness, or reliability of any information on this site.
              </p>
            </div>

            <div className="bg-[#010408] rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-white">Gambling Risk Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Poker Game involves real money gaming, which carries inherent financial risks. Please be aware of the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Online gaming and poker involve real financial risk — you can lose money.</li>
                <li>Never gamble with money you cannot afford to lose.</li>
                <li>Poker Game is intended for users who are 18 years of age or older only.</li>
                <li>If you feel you may have a gambling problem, please seek help from a professional.</li>
                <li>The legality of online gaming varies by region — always check your local laws before playing.</li>
              </ul>
            </div>

            <div className="bg-[#010408] rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-white">Third-Party Links</h2>
              <p className="text-gray-300 leading-relaxed">
                This website may contain links to third-party websites, including the official Poker Game download links. We are not responsible for the content, privacy policies, or practices of any third-party websites. We encourage you to review the privacy policy and terms of any site you visit.
              </p>
            </div>

            <div className="bg-[#010408] rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-white">No Financial Advice</h2>
              <p className="text-gray-300 leading-relaxed">
                Nothing on this website constitutes financial, legal, or investment advice. The guides and tips provided are for entertainment and informational purposes only. Always make your own informed decisions regarding any financial transactions on Poker Game.
              </p>
            </div>

            <div className="bg-[#010408] rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-white">Content Accuracy</h2>
              <p className="text-gray-300 leading-relaxed">
                While we strive to keep all information up to date and accurate, Poker Game features, bonuses, payment methods, and terms may change without notice. Always verify the latest information directly from the official Poker Game app.
              </p>
            </div>

            <div className="bg-[#010408] rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
              <p className="text-gray-300 mb-4">If you have any questions about this Disclaimer, please contact us:</p>
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <strong className="text-white">Email:</strong>
                <a href="mailto:support@pokergameapk.com.pk" className="text-accent hover:underline">support@pokergameapk.com.pk</a>
              </div>
              <div className="mt-3">
                <Link href="/contact-us" className="text-accent hover:underline">Visit our Contact Us page →</Link>
              </div>
            </div>

            <div className="bg-[#010408] rounded-xl p-6 text-center">
              <p className="text-gray-400 text-sm">© 2026 Poker Game | pokergameapk.com.pk. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
