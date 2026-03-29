import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Poker Game Blog - Guides, Tips & How-To Articles 2026',
  description: 'Poker Game blog with step-by-step guides for Pakistani players. Learn how to create account, login, deposit, and withdraw money in Poker Game. Latest poker tips 2026.',
  keywords: ['poker game blog', 'poker game guides', 'poker game tips pakistan', 'poker game how to', 'poker game tutorials 2026'],
  alternates: {
    canonical: "https://pokergameapk.com.pk/blog",
  },
  openGraph: {
    title: 'Poker Game Blog - Guides, Tips & How-To Articles 2026',
    description: 'Complete guides for Poker Game Pakistan. Learn account creation, login, deposits, withdrawals and more.',
    url: "https://pokergameapk.com.pk/blog",
    siteName: "Poker Game",
    type: "website",
  },
};

const blogPosts = [
  {
    slug: "how-to-create-poker-game-account",
    title: "How to Create Poker Game Account",
    description: "Step-by-step guide to registering your Poker Game account in Pakistan. Create your account in minutes and receive free welcome chips and bonuses instantly.",
    category: "Account Guide",
    readTime: "5 min read",
    date: "28 March 2026",
    icon: "👤",
  },
  {
    slug: "how-to-login-poker-game",
    title: "How to Login Poker Game",
    description: "Complete Poker Game login guide for Pakistani players. Learn how to sign in, reset forgotten passwords, and troubleshoot common login issues.",
    category: "Login Guide",
    readTime: "4 min read",
    date: "28 March 2026",
    icon: "🔑",
  },
  {
    slug: "how-to-deposit-money-in-poker-game",
    title: "How to Deposit Money in Poker Game",
    description: "Comprehensive deposit guide for Poker Game Pakistan. Learn to deposit via JazzCash, EasyPaisa & Bank Card. Get a 100% first deposit bonus!",
    category: "Deposit Guide",
    readTime: "5 min read",
    date: "28 March 2026",
    icon: "💰",
  },
  {
    slug: "how-to-withdraw-money-from-poker-game",
    title: "How to Withdraw Money from Poker Game",
    description: "Complete withdrawal guide for Poker Game. Withdraw your winnings via JazzCash, EasyPaisa, or Bank Card. Money processed in 5-30 minutes.",
    category: "Withdrawal Guide",
    readTime: "5 min read",
    date: "28 March 2026",
    icon: "💸",
  },
  {
    slug: "poker-game-pakistan-rules",
    title: "Poker Game Pakistan Rules",
    description: "How tables, Texas Hold'em & Teen Patti flow, wallet and bonus rules, and fair-play expectations for Pakistani players — aligned with the official site overview.",
    category: "Rules & Basics",
    readTime: "6 min read",
    date: "28 March 2026",
    icon: "📜",
  },
  {
    slug: "is-teen-patti-poker-game-best-earning-app-pakistan",
    title: "Is Teen Patti (3 Patti) Poker Game the Best Earning App?",
    description: "Balanced look at Teen Patti / 3 Patti on Poker Game Pakistan: real earning potential, variance, bonuses, and how to compare apps responsibly.",
    category: "Guides",
    readTime: "6 min read",
    date: "28 March 2026",
    icon: "🃏",
  },
  {
    slug: "how-many-bind-mail-poker-game",
    title: "How Many Bind Mail Can You Use?",
    description: "Email binding (bind mail) on Poker Game: usually one verified mailbox per account, rebinding rules, OTP issues, and security tips.",
    category: "Account",
    readTime: "5 min read",
    date: "28 March 2026",
    icon: "✉️",
  },
  {
    slug: "fix-ip-exceed-limit-poker-game-vpn",
    title: "Fix IP Exceed Limit (VPN & Network)",
    description: "Resolve Poker Game IP limit errors: refresh your connection, use a reputable VPN, switch Wi‑Fi vs mobile data, and when to contact support.",
    category: "Troubleshooting",
    readTime: "6 min read",
    date: "28 March 2026",
    icon: "🌐",
  },
];

export default function BlogPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pokergameapk.com.pk" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pokergameapk.com.pk/blog" }
    ]
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Blog</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Poker Game <span className="text-accent">Blog</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Complete guides, tips, and tutorials for Poker Game Pakistan. Learn everything you need to start playing poker and winning real cash.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-[#050c14] border border-gray-800/60 hover:border-accent/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0 bg-[#010408] rounded-xl p-3">{post.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-block bg-accent/10 text-accent border border-accent/20 rounded-full px-2.5 py-0.5 text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.date}</span>
                    <span className="text-gray-500 text-xs">· {post.readTime}</span>
                  </div>
                  <h2 className="text-white font-bold text-lg mb-2 group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-1 mt-4 text-accent text-sm font-medium">
                    Read More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-[#050c14] border border-gray-800/40 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Start Playing Poker?</h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            Download Poker Game APK now and join 500,000+ Pakistani players earning real cash with Texas Hold&apos;em, Teen Patti, and more!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pokeremag.com/?from_gameid=5154838&channelCode=200000"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn inline-flex items-center gap-3 justify-center bg-transparent text-white font-bold py-3 px-8 rounded-full border-2 border-[#0ea5e9]"
            >
              Download Poker Game
              <div className="download-icon bg-[#f97316] rounded-full p-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </div>
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 text-gray-300 hover:text-accent font-medium py-3 px-8 rounded-full border border-gray-700 hover:border-accent/40 transition-all"
            >
              Learn More About Poker Game
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
