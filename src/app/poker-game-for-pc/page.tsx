import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HowToSchema from '@/components/HowToSchema';

export const metadata: Metadata = {
  title: 'Poker Game for PC - Play Poker Game on Windows & Mac 2026',
  description: 'Learn how to play Poker Game on PC using an Android emulator. Play Texas Hold\'em, Teen Patti & more on Windows and Mac. Step-by-step PC guide for Poker Game Pakistan.',
  keywords: ['poker game for pc', 'poker game pc version', 'poker game windows', 'poker game laptop', 'poker game emulator', 'play poker game on computer', 'poker game bluestacks'],
  alternates: {
    canonical: "https://pokergameapk.com.pk/poker-game-for-pc",
  },
  openGraph: {
    title: 'Poker Game for PC - Play Poker Game on Windows & Mac 2026',
    description: 'Play Poker Game on PC using Android emulator. Complete guide to install and play Poker Game on Windows & Mac computers.',
    url: "https://pokergameapk.com.pk/poker-game-for-pc",
    siteName: "Poker Game",
    type: "article",
    images: [{ url: 'https://pokergameapk.com.pk/poker-game.webp', width: 1200, height: 630, alt: 'Play Poker Game on PC using BlueStacks emulator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poker Game for PC - Play on Windows & Mac 2026',
    description: 'How to play Poker Game on PC using BlueStacks. Full guide for Pakistani players — Windows & Mac.',
    images: ['https://pokergameapk.com.pk/poker-game.webp'],
  },
};

export default function PokerGameForPCPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pokergameapk.com.pk" },
      { "@type": "ListItem", "position": 2, "name": "Poker Game for PC", "item": "https://pokergameapk.com.pk/poker-game-for-pc" }
    ]
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <HowToSchema
          id="howto-poker-game-pc-bluestacks"
          name="How to Play Poker Game on PC using BlueStacks"
          description="Install BlueStacks Android emulator on Windows or Mac, then install the Poker Game APK and play on a larger screen."
          image="https://pokergameapk.com.pk/poker-game.webp"
          steps={[
            { name: "Download BlueStacks", text: "Go to bluestacks.com and download BlueStacks Android emulator for Windows or Mac." },
            { name: "Install BlueStacks", text: "Install BlueStacks on your PC by following the installation wizard." },
            { name: "Open BlueStacks", text: "Once installed, open BlueStacks and complete the initial setup." },
            { name: "Get Poker Game APK", text: "Download the Poker Game APK file from pokergameapk.com.pk on your PC." },
            { name: "Install APK in BlueStacks", text: "In BlueStacks, click on 'Install APK' and select the downloaded Poker Game APK file." },
            { name: "Wait for install", text: "Wait for the installation to complete inside BlueStacks." },
            { name: "Launch Poker Game", text: "Open Poker Game from the BlueStacks home screen." },
            { name: "Sign in", text: "Register or log in with your existing Poker Game account." },
            { name: "Play on PC", text: "Enjoy playing Poker Game with Texas Hold'em and more on your big PC screen!" },
          ]}
        />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Poker Game for PC</span>
        </nav>

        <figure className="flex justify-center mb-10">
          <Image
            src="/poker-game.webp"
            alt="Poker Game — play on PC with BlueStacks, LDPlayer or NoxPlayer in Pakistan"
            width={320}
            height={320}
            className="object-contain w-[220px] h-[220px] md:w-[280px] md:h-[280px] drop-shadow-2xl rounded-2xl border border-gray-800/50"
            loading="lazy"
            sizes="(max-width: 768px) 220px, 280px"
          />
        </figure>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-accent">Poker Game</span> for PC
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Play Poker Game on your Windows PC or Mac using an Android emulator. Enjoy a bigger screen poker experience with all the same features and real cash rewards.
          </p>
        </div>

        {/* Overview */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-accent">Can You Play Poker Game on PC?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Yes! While Poker Game is primarily an Android app, you can easily play it on your Windows PC or Mac using an Android emulator. Android emulators create a virtual Android environment on your computer, allowing you to install and play any Android app — including Poker Game — on a larger screen.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The most popular and reliable Android emulators for playing Poker Game on PC are <strong className="text-accent">BlueStacks</strong>, <strong className="text-accent">LDPlayer</strong>, and <strong className="text-accent">NoxPlayer</strong>. All are free to download and easy to set up.
          </p>
        </div>

        {/* BlueStacks Guide */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">How to Play Poker Game on PC using BlueStacks</h2>
          <ol className="space-y-4">
            {[
              "Go to bluestacks.com and download BlueStacks Android emulator for Windows or Mac.",
              "Install BlueStacks on your PC by following the installation wizard.",
              "Once installed, open BlueStacks and complete the initial setup.",
              "Download the Poker Game APK file from pokergameapk.com.pk on your PC.",
              "In BlueStacks, click on 'Install APK' and select the downloaded Poker Game APK file.",
              "Wait for the installation to complete inside BlueStacks.",
              "Open Poker Game from the BlueStacks home screen.",
              "Register or log in with your existing Poker Game account.",
              "Enjoy playing Poker Game with Texas Hold'em and more on your big PC screen!",
            ].map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</span>
                <p className="text-gray-300 mt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Emulator Comparison */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">Best Emulators for Poker Game on PC</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "BlueStacks", rating: "⭐⭐⭐⭐⭐", pros: ["Most popular emulator", "Very stable & fast", "Easy APK installation", "Supports Windows & Mac", "Regular updates"], best: "Best overall choice" },
              { name: "LDPlayer", rating: "⭐⭐⭐⭐½", pros: ["Lightweight & fast", "Great for gaming", "Low system requirements", "Free to use", "Windows only"], best: "Best for low-end PCs" },
              { name: "NoxPlayer", rating: "⭐⭐⭐⭐", pros: ["Clean interface", "Multi-instance support", "Key mapping support", "Supports Windows & Mac", "Free to use"], best: "Best for multi-account" },
            ].map((emulator, i) => (
              <div key={i} className="bg-[#010408] p-6 rounded-lg border border-gray-800/40 card-glow">
                <h3 className="text-lg font-semibold text-[#FFC107] mb-1">{emulator.name}</h3>
                <p className="text-sm mb-3">{emulator.rating}</p>
                <ul className="space-y-1 mb-4">
                  {emulator.pros.map((pro, j) => (
                    <li key={j} className="flex gap-2 text-gray-300 text-sm">
                      <span className="text-green-400">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
                <p className="text-accent text-xs font-semibold border-t border-gray-800 pt-3">{emulator.best}</p>
              </div>
            ))}
          </div>
        </div>

        {/* System Requirements */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">PC System Requirements for Poker Game</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-[#010408]">
                <tr>
                  <th className="py-3 px-6 text-left text-white font-semibold">Component</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Minimum</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Recommended</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  ["OS", "Windows 7 / macOS 10.12", "Windows 10/11 / macOS 12+"],
                  ["Processor", "Intel Core i3", "Intel Core i5 or better"],
                  ["RAM", "4 GB", "8 GB+"],
                  ["Graphics", "DirectX 11 compatible", "Dedicated GPU"],
                  ["Storage", "5 GB free space", "10 GB+ free space"],
                  ["Internet", "Stable broadband", "Fast broadband / WiFi"],
                ].map(([component, min, rec], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#010408]/50" : "bg-[#050c14]/30"}>
                    <td className="py-3 px-6 text-white font-medium">{component}</td>
                    <td className="py-3 px-6 text-gray-300">{min}</td>
                    <td className="py-3 px-6 text-gray-300">{rec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">Benefits of Playing Poker Game on PC</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "🖥️", title: "Bigger Screen", text: "Enjoy Texas Hold'em poker on a much larger screen for better visibility of cards and game details." },
              { icon: "⌨️", title: "Keyboard Controls", text: "Use keyboard shortcuts for faster gameplay — ideal for experienced poker players." },
              { icon: "🔋", title: "No Battery Drain", text: "Play for hours without worrying about your phone battery running out mid-game." },
              { icon: "📸", title: "Easy Screenshots", text: "Capture your big wins and share them easily from your PC." },
              { icon: "⚡", title: "Better Performance", text: "PC hardware often delivers smoother, lag-free poker gameplay compared to budget smartphones." },
              { icon: "🎮", title: "Multi-Instance", text: "Run multiple instances of Poker Game simultaneously on PC using LDPlayer or NoxPlayer." },
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4 items-start bg-[#010408] p-4 rounded-lg border border-gray-800/40">
                <span className="text-2xl">{benefit.icon}</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Links */}
        <div className="bg-[#050c14] rounded-xl p-6 border border-gray-800/40">
          <h3 className="text-lg font-semibold text-accent mb-4">Related Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/download-poker-game-apk", label: "Download Poker Game APK" },
              { href: "/deposit-money-in-poker-game", label: "How to Deposit Money in Poker Game" },
              { href: "/withdraw-money-from-poker-game", label: "How to Withdraw Money from Poker Game" },
              { href: "/blog/how-to-create-poker-game-account", label: "How to Create Poker Game Account" },
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
