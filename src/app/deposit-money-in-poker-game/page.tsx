import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HowToSchema from '@/components/HowToSchema';

export const metadata: Metadata = {
  title: 'How to Deposit Money in Poker Game - Complete Guide 2026',
  description: 'Learn how to deposit money in Poker Game using JazzCash, EasyPaisa, and Bank Card. Step-by-step deposit guide for Pakistani players. Fast, safe & easy deposits.',
  keywords: ['deposit money poker game', 'poker game deposit', 'poker game jazzcash deposit', 'poker game easypaisa deposit', 'how to deposit in poker game', 'poker game add money'],
  alternates: {
    canonical: "https://pokergameapk.com.pk/deposit-money-in-poker-game",
  },
  openGraph: {
    title: 'How to Deposit Money in Poker Game - Complete Guide 2026',
    description: 'Step-by-step guide to deposit money in Poker Game using JazzCash, EasyPaisa, and Bank Card. Fast and secure deposits for Pakistani players.',
    url: "https://pokergameapk.com.pk/deposit-money-in-poker-game",
    siteName: "Poker Game",
    type: "article",
    images: [{ url: 'https://pokergameapk.com.pk/poker-game-add-money.webp', width: 1200, height: 630, alt: 'How to Deposit Money in Poker Game' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Deposit Money in Poker Game - Complete Guide 2026',
    description: 'Deposit via JazzCash, EasyPaisa, or Bank Card. Step-by-step guide for Pakistani players with 100% bonus.',
    images: ['https://pokergameapk.com.pk/poker-game-add-money.webp'],
  },
};

export default function DepositPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pokergameapk.com.pk" },
      { "@type": "ListItem", "position": 2, "name": "How to Deposit Money in Poker Game", "item": "https://pokergameapk.com.pk/deposit-money-in-poker-game" }
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
          id="howto-deposit-money-poker-game"
          name="How to Deposit Money in Poker Game"
          description="Add money to your Poker Game wallet using JazzCash, EasyPaisa, or Bank Card in Pakistan."
          image="https://pokergameapk.com.pk/poker-game.webp"
          steps={[
            { name: "Open app and log in", text: "Open the Poker Game app on your Android device and log in to your account." },
            { name: "Open Wallet", text: "On the home screen, tap the 'Wallet' icon (usually located at the top right)." },
            { name: "Choose Deposit", text: "In the Wallet section, tap on 'Deposit' or 'Add Money'." },
            { name: "Pick payment method", text: "Select your preferred payment method: JazzCash, EasyPaisa, or Bank Card." },
            { name: "Enter amount", text: "Enter the amount you want to deposit (minimum PKR 100)." },
            { name: "Complete payment", text: "Follow the payment instructions for your chosen method." },
            { name: "Confirm transaction", text: "Confirm the transaction and wait a few seconds for processing." },
            { name: "Check balance", text: "Your Poker Game wallet balance will update instantly with your deposited amount plus any bonus!" },
          ]}
        />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Deposit Money in Poker Game</span>
        </nav>

        <figure className="flex justify-center mb-10">
          <Image
            src="/poker-game.webp"
            alt="Poker Game — deposit money with JazzCash, EasyPaisa or Bank Card in Pakistan"
            width={320}
            height={320}
            className="object-contain w-[220px] h-[220px] md:w-[280px] md:h-[280px] drop-shadow-2xl rounded-2xl border border-gray-800/50"
            loading="lazy"
            sizes="(max-width: 768px) 220px, 280px"
          />
        </figure>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            How to Deposit Money in <span className="text-accent">Poker Game</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A complete step-by-step guide to depositing money in Poker Game using JazzCash, EasyPaisa, and Bank Card for Pakistani players.
          </p>
        </div>

        {/* Main Deposit Steps */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">Step-by-Step Deposit Guide</h2>
          <ol className="space-y-4">
            {[
              "Open the Poker Game app on your Android device and log in to your account.",
              "On the home screen, tap the 'Wallet' icon (usually located at the top right).",
              "In the Wallet section, tap on 'Deposit' or 'Add Money'.",
              "Select your preferred payment method: JazzCash, EasyPaisa, or Bank Card.",
              "Enter the amount you want to deposit (minimum PKR 100).",
              "Follow the payment instructions for your chosen method.",
              "Confirm the transaction and wait a few seconds for processing.",
              "Your Poker Game wallet balance will update instantly with your deposited amount plus any bonus!",
            ].map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</span>
                <p className="text-gray-300 mt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Payment Methods */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">Deposit Methods in Poker Game</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "JazzCash",
                icon: "💳",
                steps: [
                  "Select JazzCash as your payment method",
                  "Enter your JazzCash mobile number",
                  "Enter the deposit amount",
                  "Confirm with your JazzCash PIN",
                  "Amount credited instantly",
                ],
                note: "Fastest method — transactions complete in seconds"
              },
              {
                title: "EasyPaisa",
                icon: "📱",
                steps: [
                  "Choose EasyPaisa from deposit options",
                  "Enter your EasyPaisa account number",
                  "Enter the deposit amount",
                  "Confirm with your EasyPaisa PIN",
                  "Balance updated immediately",
                ],
                note: "Widely available — works at any EasyPaisa agent"
              },
              {
                title: "Bank Card",
                icon: "🏦",
                steps: [
                  "Select Bank Card deposit option",
                  "Choose your bank from the list",
                  "Enter card details and amount",
                  "Complete bank verification",
                  "Funds transferred to wallet",
                ],
                note: "Best for larger deposits — secure bank-level encryption"
              },
            ].map((method, i) => (
              <div key={i} className="bg-[#010408] p-6 rounded-lg border border-gray-800/40">
                <div className="text-3xl mb-3">{method.icon}</div>
                <h3 className="text-lg font-semibold text-[#FFC107] mb-4">{method.title}</h3>
                <ol className="space-y-2 mb-4">
                  {method.steps.map((step, j) => (
                    <li key={j} className="flex gap-2 text-gray-300 text-sm">
                      <span className="text-accent font-bold flex-shrink-0">{j + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
                <p className="text-green-400 text-xs border-t border-gray-800 pt-3">{method.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Welcome Bonus Table */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-accent">First Deposit Bonus — 100% Match!</h2>
          <p className="text-gray-300 mb-6">New players get a 100% bonus on their first deposit. Deposit PKR 1,000 and get PKR 2,000 to play with!</p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-[#010408]">
                <tr>
                  <th className="py-3 px-6 text-left text-white font-semibold">Your Deposit (PKR)</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Bonus (PKR)</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Total Balance (PKR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[["100", "100", "200"], ["1,000", "1,000", "2,000"], ["5,000", "5,000", "10,000"], ["10,000", "10,000", "20,000"], ["50,000", "50,000", "100,000"]].map(([dep, bon, total], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#010408]/50" : "bg-[#050c14]/30"}>
                    <td className="py-3 px-6 text-gray-300">{dep}</td>
                    <td className="py-3 px-6 text-green-400 font-semibold">{bon}</td>
                    <td className="py-3 px-6 text-accent font-bold">{total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">Deposit FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "What is the minimum deposit in Poker Game?", a: "The minimum deposit amount in Poker Game is PKR 100 for most payment methods including JazzCash and EasyPaisa." },
              { q: "How long does a deposit take?", a: "Deposits via JazzCash and EasyPaisa are instant — your balance updates within seconds. Bank card deposits may take 1-5 minutes." },
              { q: "Is my deposit secure?", a: "Yes, all deposits in Poker Game are processed using SSL encryption and secure payment gateways. Your financial information is always protected." },
              { q: "Can I deposit without JazzCash or EasyPaisa?", a: "Yes, you can also deposit using Bank Card. Simply choose your bank from the deposit options and follow the instructions." },
            ].map((faq, i) => (
              <details key={i} className="group bg-[#010408]/60 rounded-xl border border-gray-700/50 hover:border-[#FFC107]/40 transition-all">
                <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFC107] transition-colors">
                  {faq.q}
                  <span className="transition group-open:rotate-180 flex-shrink-0 ml-4">
                    <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="p-4 pt-0 text-gray-300 text-sm border-t border-gray-700/40">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>

        {/* Related Links */}
        <div className="bg-[#050c14] rounded-xl p-6 border border-gray-800/40">
          <h3 className="text-lg font-semibold text-accent mb-4">Related Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/withdraw-money-from-poker-game", label: "How to Withdraw Money from Poker Game" },
              { href: "/blog/how-to-create-poker-game-account", label: "How to Create Poker Game Account" },
              { href: "/blog/how-to-login-poker-game", label: "How to Login to Poker Game" },
              { href: "/download-poker-game-apk", label: "Download Poker Game APK" },
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
