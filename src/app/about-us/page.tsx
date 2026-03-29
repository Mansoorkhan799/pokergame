import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About Poker Game - Pakistan\'s Premier Poker Gaming Platform',
  description: 'Learn about Poker Game, our mission, and vision for creating the best poker gaming platform in Pakistan. Texas Hold\'em, Teen Patti, Dragon vs Tiger and more.',
  keywords: ['Poker Game about', 'about us', 'poker gaming company Pakistan', 'poker game platform', 'pokergameapk about'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://pokergameapk.com.pk/about-us",
  },
  openGraph: {
    title: 'About Poker Game - Pakistan\'s Premier Poker Gaming Platform',
    description: 'Learn about Poker Game, our mission to provide the best poker gaming experience in Pakistan with real cash rewards.',
    url: "https://pokergameapk.com.pk/about-us",
    siteName: "Poker Game",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'About Poker Game - Pakistan\'s Premier Poker Gaming Platform',
    description: 'Learn about Poker Game, our mission to provide the best poker gaming experience in Pakistan with real cash rewards.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Us</h1>
            <p className="text-gray-400 text-lg">The team behind Pakistan&apos;s #1 Poker App</p>
          </div>
          
          <div className="bg-[#050c14] rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-gray-800/40">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-20 mb-8">
              <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                <Link href="/" className="block">
                  <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] mx-auto md:mx-0 rounded-lg overflow-hidden bg-[#010408] hero-image-glow">
                    <Image 
                      src="/poker-game.webp" 
                      alt="Poker Game – Pakistan's Premier Poker Gaming Platform"
                      title="About Poker Game – Pakistan's #1 Poker App"
                      width={320}
                      height={320}
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-contain p-4 w-full h-full animate-cardFloat"
                      priority
                    />
                  </div>
                </Link>
              </div>
              <div className="md:w-2/3 md:pl-4 lg:pl-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Welcome to <a href="https://www.pokergameapk.com.pk/" className="text-accent hover:text-accent font-semibold" target="_blank" rel="noopener noreferrer">pokergameapk.com.pk</a>, Pakistan&apos;s most trusted platform for Poker Game information, guides, and resources. <Link href="/" className="text-accent hover:underline font-semibold">Poker Game</Link> is one of Pakistan&apos;s most popular online poker apps, with over <span className="font-bold text-accent">500K+ users</span> across the country. <a href="https://pokeremag.com/?from_gameid=5154838&channelCode=200000" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Download Poker Game</a> now and join thousands of players winning real cash every day.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Hundreds of players in Pakistan are playing Texas Hold&apos;em Poker, Teen Patti, Dragon vs Tiger, and other exciting games on Poker Game — earning real money on a daily and weekly basis through fast JazzCash and EasyPaisa withdrawals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#0ea5e9]/20 to-[#FFC107]/20 border border-[#0ea5e9]/30 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Our Mission</h2>
            <p className="text-lg md:text-xl text-white leading-relaxed text-center">
              Our mission is to provide Pakistani poker players with the most accurate, up-to-date information, guides, and tips about Poker Game. For any queries or information, visit our <Link href="/contact-us" className="underline hover:text-gray-200 font-semibold">Contact Us page</Link>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "🃏", title: "Poker Expertise", desc: "Deep knowledge of Texas Hold'em, Teen Patti, Dragon vs Tiger, and all popular poker variations available in Pakistan." },
              { icon: "🇵🇰", title: "Pakistan Focused", desc: "All guides and content are specifically designed for Pakistani players using JazzCash, EasyPaisa, and local payment methods." },
              { icon: "💰", title: "Real Money Guides", desc: "We provide accurate, tested guides to help you deposit, withdraw, and maximize your earnings on Poker Game." },
            ].map((item, i) => (
              <div key={i} className="bg-[#050c14] rounded-xl p-6 border border-gray-800/40 text-center card-glow">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-[#050c14] rounded-2xl shadow-xl p-8 text-center border border-gray-800/40">
            <h2 className="text-2xl font-bold mb-4 text-white">Have Questions?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              We&apos;re here to help! Contact our team for any information or queries about Poker Game.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Poker Game",
              "url": "https://pokergameapk.com.pk",
              "logo": "https://pokergameapk.com.pk/poker-game-logo.webp",
              "description": "Poker Game is Pakistan's premier poker gaming platform, offering Texas Hold'em, Teen Patti, Dragon vs Tiger and more with real cash rewards.",
              "foundingDate": "2024",
              "foundingLocation": { "@type": "Country", "name": "Pakistan" }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://pokergameapk.com.pk/about-us"
            }
          })
        }}
      />
    </div>
  );
}
