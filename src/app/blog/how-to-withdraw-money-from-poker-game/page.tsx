import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';
import HowToSchema from '@/components/HowToSchema';

export const metadata: Metadata = {
  title: 'How to Withdraw Money from Poker Game - Complete Guide 2026',
  description: 'Learn how to withdraw money from Poker Game in Pakistan. Step-by-step withdrawal guide for JazzCash, EasyPaisa & Bank Card. Get your winnings fast and safely.',
  keywords: ['how to withdraw money from poker game', 'poker game withdrawal guide', 'poker game jazzcash withdrawal', 'poker game easypaisa withdrawal', 'withdraw poker game pakistan', 'poker game cash out guide'],
  alternates: {
    canonical: "https://pokergameapk.com.pk/blog/how-to-withdraw-money-from-poker-game",
  },
  openGraph: {
    title: 'How to Withdraw Money from Poker Game - Complete Guide 2026',
    description: 'Complete withdrawal guide for Poker Game Pakistan. Withdraw via JazzCash, EasyPaisa or Bank Card. Money arrives in 5-30 minutes.',
    url: "https://pokergameapk.com.pk/blog/how-to-withdraw-money-from-poker-game",
    siteName: "Poker Game",
    type: "article",
    images: [{ url: 'https://pokergameapk.com.pk/poker-game.webp', width: 1200, height: 630, alt: 'How to Withdraw Money from Poker Game' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Withdraw Money from Poker Game - Complete Guide 2026',
    description: 'Withdraw your Poker Game winnings via JazzCash, EasyPaisa or Bank Card. Money arrives in 5-30 minutes in Pakistan.',
    images: [{ url: 'https://pokergameapk.com.pk/poker-game.webp', alt: 'How to Withdraw Money from Poker Game' }],
  },
};

export default function HowToWithdrawMoneyFromPokerGame() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">

        <BlogPostSchema
          title="How to Withdraw Money from Poker Game - Complete Guide 2026"
          description="Learn how to withdraw money from Poker Game in Pakistan. Step-by-step withdrawal guide for JazzCash, EasyPaisa & Bank Card. Get your winnings fast and safely."
          slug="how-to-withdraw-money-from-poker-game"
          datePublished="2026-03-28"
          dateModified="2026-03-28"
          articleBody="To withdraw from Poker Game, go to Wallet, tap Withdrawal, select JazzCash, EasyPaisa, or Bank Card, enter the amount and account details, then confirm. Withdrawals are processed within 5-30 minutes. Minimum withdrawal is PKR 200."
        />

        <HowToSchema
          id="howto-blog-withdraw-poker-game"
          name="How to Withdraw Money from Poker Game"
          description="Cash out Poker Game winnings via Wallet using JazzCash, EasyPaisa, or Bank Card in Pakistan."
          image="https://pokergameapk.com.pk/poker-game.webp"
          steps={[
            { name: "Open the App & Log In", text: "Launch the Poker Game app on your Android device and log in to your account with your registered credentials." },
            { name: "Go to 'Wallet'", text: "From the Poker Game main screen, tap the 'Wallet' icon (usually at the top right or bottom navigation bar)." },
            { name: "Tap 'Withdrawal'", text: "Inside the Wallet section, tap on 'Withdrawal'. You'll see available withdrawal methods: JazzCash, EasyPaisa, and Bank Card." },
            { name: "Select Withdrawal Method", text: "Choose your preferred withdrawal method. JazzCash and EasyPaisa are fastest for Pakistani users. Bank Card is best for larger amounts." },
            { name: "Enter Withdrawal Amount", text: "Type the amount you want to withdraw. Make sure it meets the minimum withdrawal requirement (PKR 500 for JazzCash/EasyPaisa)." },
            { name: "Enter Account Details", text: "For JazzCash/EasyPaisa: enter your mobile number. For Bank Card: enter your bank account number, account holder name, and email." },
            { name: "Double-Check & Confirm", text: "Review all details carefully before submitting — especially your account number. Incorrect details can cause delays or failed withdrawals." },
            { name: "Money Arrives", text: "After confirmation, wait 5-30 minutes for your money to arrive. You'll receive a notification once the withdrawal is processed." },
          ]}
        />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-white">How to Withdraw Money from Poker Game</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-block bg-accent/10 text-accent border border-accent/30 rounded-full px-3 py-1 text-xs font-medium mb-4">
            Withdrawal Guide
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How to Withdraw Money from Poker Game — Complete Guide 2026
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Ready to cash out your Poker Game winnings? This complete withdrawal guide shows you exactly how to withdraw money from Poker Game using JazzCash, EasyPaisa, and Bank Card in Pakistan — step by step.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>📅 Updated: 28 March 2026</span>
            <span>⏱️ 5 min read</span>
          </div>
        </div>

        {/* Quick Facts Banner */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Min Withdrawal", value: "PKR 500", icon: "💵" },
            { label: "Processing Time", value: "5-30 min", icon: "⚡" },
            { label: "Methods", value: "3 Options", icon: "💳" },
          ].map((fact, i) => (
            <div key={i} className="bg-[#050c14] border border-gray-800/40 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">{fact.icon}</div>
              <div className="text-accent font-bold text-lg">{fact.value}</div>
              <div className="text-gray-400 text-xs">{fact.label}</div>
            </div>
          ))}
        </div>

        {/* Main Steps */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">Step-by-Step: Withdraw Money from Poker Game</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Open the App & Log In",
                desc: "Launch the Poker Game app on your Android device and log in to your account with your registered credentials.",
              },
              {
                step: 2,
                title: "Go to 'Wallet'",
                desc: "From the Poker Game main screen, tap the 'Wallet' icon (usually at the top right or bottom navigation bar).",
              },
              {
                step: 3,
                title: "Tap 'Withdrawal'",
                desc: "Inside the Wallet section, tap on 'Withdrawal'. You'll see available withdrawal methods: JazzCash, EasyPaisa, and Bank Card.",
              },
              {
                step: 4,
                title: "Select Withdrawal Method",
                desc: "Choose your preferred withdrawal method. JazzCash and EasyPaisa are fastest for Pakistani users. Bank Card is best for larger amounts.",
              },
              {
                step: 5,
                title: "Enter Withdrawal Amount",
                desc: "Type the amount you want to withdraw. Make sure it meets the minimum withdrawal requirement (PKR 500 for JazzCash/EasyPaisa).",
              },
              {
                step: 6,
                title: "Enter Account Details",
                desc: "For JazzCash/EasyPaisa: enter your mobile number. For Bank Card: enter your bank account number, account holder name, and email.",
              },
              {
                step: 7,
                title: "Double-Check & Confirm",
                desc: "Review all details carefully before submitting — especially your account number. Incorrect details can cause delays or failed withdrawals.",
              },
              {
                step: 8,
                title: "Money Arrives!",
                desc: "After confirmation, wait 5-30 minutes for your money to arrive. You'll receive a notification once the withdrawal is processed.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-lg">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Withdrawal via JazzCash */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-accent">Withdraw via JazzCash</h2>
          <p className="text-gray-300 mb-6 text-sm">The fastest and most popular withdrawal method in Pakistan. Money arrives within 5-15 minutes.</p>
          <ol className="space-y-3">
            {[
              "Open Poker Game, go to Wallet > Withdrawal.",
              "Select 'JazzCash' as your withdrawal method.",
              "Enter your JazzCash registered mobile number.",
              "Enter the amount you want to withdraw (min PKR 500).",
              "Confirm your withdrawal request by tapping 'Submit'.",
              "Wait 5-15 minutes for the transfer to complete.",
              "Check your JazzCash balance — your money is there!",
            ].map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 bg-[#0ea5e9]/20 text-[#0ea5e9] rounded-full flex items-center justify-center text-sm font-bold border border-[#0ea5e9]/30">{i + 1}</span>
                <p className="text-gray-300 text-sm mt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Withdrawal via EasyPaisa */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-accent">Withdraw via EasyPaisa</h2>
          <p className="text-gray-300 mb-6 text-sm">Equally fast and reliable. Ideal for Telenor users and anyone with an EasyPaisa wallet.</p>
          <ol className="space-y-3">
            {[
              "Open Poker Game, go to Wallet > Withdrawal.",
              "Select 'EasyPaisa' as your withdrawal method.",
              "Enter your EasyPaisa registered mobile number.",
              "Type the amount to withdraw (min PKR 500).",
              "Submit the withdrawal request.",
              "Your EasyPaisa wallet receives the money within 5-15 minutes.",
            ].map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 bg-green-400/20 text-green-400 rounded-full flex items-center justify-center text-sm font-bold border border-green-400/30">{i + 1}</span>
                <p className="text-gray-300 text-sm mt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Withdrawal via Bank Card */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-accent">Withdraw via Bank Card</h2>
          <p className="text-gray-300 mb-6 text-sm">Best for larger withdrawals. Supports all major Pakistani banks. Max PKR 20,000 per transaction.</p>
          <ol className="space-y-3">
            {[
              "Open Poker Game, go to Wallet > Withdrawal.",
              "Select 'Bank Card' as your withdrawal method.",
              "Choose your bank from the dropdown list.",
              "Enter your bank account number.",
              "Enter your account holder name and email address.",
              "Type the withdrawal amount (max PKR 20,000).",
              "Submit the request and wait 15-30 minutes for processing.",
            ].map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 bg-[#FFC107]/20 text-[#FFC107] rounded-full flex items-center justify-center text-sm font-bold border border-[#FFC107]/30">{i + 1}</span>
                <p className="text-gray-300 text-sm mt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Common Issues */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">Common Withdrawal Issues &amp; Solutions</h2>
          <div className="space-y-4">
            {[
              { issue: "Withdrawal pending for too long", fix: "Wait up to 30 minutes. If still pending, contact Poker Game live support inside the app with your transaction ID." },
              { issue: "Wrong account number entered", fix: "Contact customer support immediately. Don't submit another withdrawal until the previous one is resolved." },
              { issue: "Withdrawal rejected", fix: "Ensure you've met the minimum wagering requirements. Check if your account is fully verified and in good standing." },
              { issue: "Minimum amount error", fix: "JazzCash/EasyPaisa minimum is PKR 500. Bank Card minimum is PKR 1,000. Make sure you're withdrawing at least the minimum amount." },
            ].map((item, i) => (
              <div key={i} className="bg-[#010408] rounded-lg p-4 border border-gray-800/40">
                <h3 className="text-[#FFC107] font-semibold mb-2 text-sm">❌ Issue: {item.issue}</h3>
                <p className="text-gray-300 text-sm">✅ <strong>Fix:</strong> {item.fix}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Posts */}
        <div className="bg-[#050c14] rounded-xl p-6 border border-gray-800/40">
          <h3 className="text-lg font-semibold text-accent mb-4">Related Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/blog/how-to-deposit-money-in-poker-game", label: "How to Deposit Money in Poker Game" },
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
