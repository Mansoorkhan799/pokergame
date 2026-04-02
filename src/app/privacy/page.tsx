import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Poker Game | Your Privacy Matters',
  description: 'Read Poker Game privacy policy to understand how we collect, use, and protect your personal information. We are committed to your data security.',
  keywords: ['Poker Game privacy policy', 'privacy', 'data protection', 'poker game user privacy', 'pokergameapk privacy'],
  openGraph: {
    title: 'Privacy Policy - Poker Game',
    description: 'Learn how Poker Game protects your personal information and data in Pakistan.',
    url: 'https://pokergameapk.com.pk/privacy',
    siteName: 'Poker Game',
    type: 'website',
    images: [{ url: 'https://pokergameapk.com.pk/poker-game.webp', width: 1200, height: 630, alt: 'Poker Game Privacy Policy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Poker Game',
    description: 'Learn how Poker Game protects your personal information and data in Pakistan.',
    images: ['https://pokergameapk.com.pk/poker-game.webp'],
  },
  alternates: {
    canonical: 'https://pokergameapk.com.pk/privacy',
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pokergameapk.com.pk" },
      { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://pokergameapk.com.pk/privacy" }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://pokergameapk.com.pk/privacy",
    "url": "https://pokergameapk.com.pk/privacy",
    "name": "Privacy Policy - Poker Game",
    "description": "Read Poker Game privacy policy to understand how we collect, use, and protect your personal information.",
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
            <span className="text-white">Privacy Policy</span>
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Privacy Policy</h1>
            <p className="text-lg text-gray-400">Last Updated: March 28, 2026</p>
          </div>
          
          <div className="bg-[#050c14] rounded-2xl shadow-xl p-8 md:p-12 border border-gray-800/40">
            <div className="prose prose-lg max-w-none">
              
              <div className="bg-[#010408] border-l-4 border-accent rounded-r-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
                <p className="text-gray-300 mb-4">
                  <Link href="/" className="text-accent hover:underline font-semibold">Poker Game</Link> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website at <a href="https://www.pokergameapk.com.pk" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">www.pokergameapk.com.pk</a> (collectively, the &quot;Service&quot;).
                </p>
                <p className="text-gray-300">
                  Please read this Privacy Policy carefully. By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy.
                </p>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Information We Collect</h2>
              
              <div className="bg-[#010408] rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Personal Data</h3>
                <p className="text-gray-300 mb-4">When you use our Service, we may collect personally identifiable information, such as:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Mobile phone number (for account registration)</li>
                  <li>Email address (optional)</li>
                  <li>Device information (model, operating system, unique device identifiers)</li>
                  <li>IP address and location data</li>
                  <li>JazzCash/EasyPaisa account details for transactions</li>
                  <li>Transaction history and payment information</li>
                  <li>Gameplay data and statistics</li>
                </ul>
              </div>
              
              <div className="bg-[#010408] rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Usage Data</h3>
                <p className="text-gray-300 mb-4">We may also collect information on how the Service is accessed and used. This may include:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Games played (Texas Hold&apos;em Poker, Teen Patti, Dragon vs Tiger, etc.) and time spent</li>
                  <li>Deposits and withdrawals through JazzCash/EasyPaisa</li>
                  <li>Bonus and rewards claimed</li>
                  <li>Features accessed within the app</li>
                  <li>Performance data and crash reports</li>
                  <li>Referral activities</li>
                </ul>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">How We Use Your Information</h2>
              <div className="bg-[#010408] rounded-xl p-6 mb-8">
                <p className="text-gray-300 mb-4">We use the collected data for various purposes:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>To provide and maintain our Poker Game gaming Service</li>
                  <li>To verify your identity and prevent fraud</li>
                  <li>To process deposits and withdrawals through JazzCash and EasyPaisa</li>
                  <li>To notify you about changes, updates, or new features</li>
                  <li>To allow you to participate in poker games and tournaments</li>
                  <li>To provide customer support via live chat, WhatsApp, or email</li>
                  <li>To send you daily bonus notifications and promotional offers</li>
                  <li>To track referral rewards and commission payments</li>
                  <li>To monitor gameplay for fair play and security</li>
                  <li>To comply with legal obligations and regulations</li>
                </ul>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Payment Information Security</h2>
              <div className="bg-[#010408] rounded-xl p-6 mb-8">
                <p className="text-gray-300 mb-4">Your payment security is our top priority. When you use JazzCash or EasyPaisa:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>We use encrypted connections to protect your financial data</li>
                  <li>Your mobile wallet PIN is never stored on our servers</li>
                  <li>All transactions are processed through secure payment gateways</li>
                  <li>We maintain detailed transaction logs for your security and reference</li>
                  <li>Your account number is encrypted and stored securely</li>
                </ul>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Data Security</h2>
              <div className="bg-[#010408] rounded-xl p-6 mb-8">
                <p className="text-gray-300 mb-4">The security of your data is important to us. We implement various security measures including:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure servers with firewall protection</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication systems</li>
                  <li>Data backup and recovery procedures</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  However, no method of transmission over the Internet is 100% secure. While we strive to protect your Personal Data, we cannot guarantee absolute security.
                </p>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Age Restriction</h2>
              <div className="bg-red-900/20 border-l-4 border-red-500 rounded-r-lg p-6 mb-8">
                <p className="text-gray-300 mb-4">
                  <strong className="text-white">Important:</strong> Poker Game is intended only for users who are 18 years of age or older. We do not knowingly collect personally identifiable information from anyone under 18 years of age.
                </p>
                <p className="text-gray-300">
                  If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us immediately.
                </p>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Your Data Protection Rights</h2>
              <div className="bg-[#010408] rounded-xl p-6 mb-8">
                <p className="text-gray-300 mb-4">You have the following rights regarding your personal data:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><strong className="text-white">Right to Access:</strong> Request a copy of your personal data</li>
                  <li><strong className="text-white">Right to Rectification:</strong> Correct inaccurate or incomplete information</li>
                  <li><strong className="text-white">Right to Erasure:</strong> Request deletion of your account and data</li>
                  <li><strong className="text-white">Right to Object:</strong> Object to certain data processing activities</li>
                  <li><strong className="text-white">Right to Data Portability:</strong> Receive your data in a structured format</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  To exercise any of these rights, please contact us at <a href="mailto:support@pokergameapk.com.pk" className="text-accent hover:underline">support@pokergameapk.com.pk</a>
                </p>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Changes to This Privacy Policy</h2>
              <div className="bg-[#010408] rounded-xl p-6 mb-8">
                <p className="text-gray-300 mb-4">We may update our Privacy Policy from time to time. We will notify you of any material changes by:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Posting the new Privacy Policy on this page</li>
                  <li>Updating the &quot;Last Updated&quot; date at the top</li>
                  <li>Sending an in-app notification for significant changes</li>
                </ul>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Contact Us</h2>
              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 mb-4">
                <p className="text-gray-300 mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <strong className="text-white">Email:</strong>
                    <a href="mailto:support@pokergameapk.com.pk" className="text-accent hover:underline">support@pokergameapk.com.pk</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
                    </svg>
                    <strong className="text-white">Website:</strong>
                    <a href="https://www.pokergameapk.com.pk" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">www.pokergameapk.com.pk</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                    </svg>
                    <strong className="text-white">Support:</strong>
                    <Link href="/contact-us" className="text-accent hover:underline">Visit Contact Us page</Link>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#010408] rounded-xl p-6 mt-8 text-center">
                <p className="text-gray-400 text-sm mb-2">By using Poker Game, you consent to this Privacy Policy and agree to its terms.</p>
                <p className="text-gray-400 text-sm">© 2026 Poker Game | pokergameapk.com.pk. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
