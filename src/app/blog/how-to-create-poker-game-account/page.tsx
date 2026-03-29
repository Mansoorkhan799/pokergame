import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';
import HowToSchema from '@/components/HowToSchema';

export const metadata: Metadata = {
  title: 'How to Create Poker Game Account - Step-by-Step Guide 2026',
  description: 'Learn how to create a Poker Game account in Pakistan. Step-by-step registration guide for Poker Game app. Create your account and get a welcome bonus instantly.',
  keywords: ['how to create poker game account', 'poker game registration', 'poker game sign up', 'create poker game account pakistan', 'poker game account create', 'poker game new account'],
  alternates: {
    canonical: "https://pokergameapk.com.pk/blog/how-to-create-poker-game-account",
  },
  openGraph: {
    title: 'How to Create Poker Game Account - Step-by-Step Guide 2026',
    description: 'Complete guide to creating your Poker Game account in Pakistan. Register in minutes and receive a welcome bonus to start playing.',
    url: "https://pokergameapk.com.pk/blog/how-to-create-poker-game-account",
    siteName: "Poker Game",
    type: "article",
    images: [{ url: 'https://pokergameapk.com.pk/poker-game.webp', width: 1200, height: 630, alt: 'How to Create Poker Game Account' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Create Poker Game Account - Step-by-Step Guide 2026',
    description: 'Complete guide to creating your Poker Game account in Pakistan. Register and get a welcome bonus instantly.',
    images: [{ url: 'https://pokergameapk.com.pk/poker-game.webp', alt: 'How to Create Poker Game Account' }],
  },
};

export default function HowToCreatePokerGameAccount() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">

        <HowToSchema
          id="howto-create-poker-game-account"
          name="How to Create a Poker Game Account"
          description="Step-by-step guide to creating a Poker Game account in Pakistan."
          image="https://pokergameapk.com.pk/poker-game.webp"
          steps={[
            { name: "Download Poker Game", text: "Download the Poker Game APK from pokergameapk.com.pk and install it on your Android device." },
            { name: "Open the App", text: "Launch the Poker Game app from your home screen." },
            { name: "Tap Register", text: "On the home screen, tap 'Register' or 'Sign Up'." },
            { name: "Enter Details", text: "Enter your mobile number or email address and set a strong password." },
            { name: "Verify OTP", text: "Enter the OTP verification code sent to your phone or email." },
            { name: "Account Created", text: "Your Poker Game account is ready! You receive free welcome chips and bonuses." },
          ]}
        />

        <BlogPostSchema
          title="How to Create Poker Game Account - Step-by-Step Guide 2026"
          description="Learn how to create a Poker Game account in Pakistan. Step-by-step registration guide for Poker Game app. Create your account and get a welcome bonus instantly."
          slug="how-to-create-poker-game-account"
          datePublished="2026-03-28"
          dateModified="2026-03-28"
          articleBody="Creating a Poker Game account is quick and easy. Download the APK, open the app, tap Register, enter your mobile number or email, set a strong password, verify via OTP, and your account is ready with free welcome chips."
        />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-white">How to Create Poker Game Account</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-block bg-accent/10 text-accent border border-accent/30 rounded-full px-3 py-1 text-xs font-medium mb-4">
            Account Guide
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How to Create Poker Game Account — Complete Guide 2026
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Creating a Poker Game account is quick and easy. Follow this complete step-by-step guide to register your Poker Game account in Pakistan and start playing Texas Hold&apos;em, Teen Patti, and more with real cash rewards.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>📅 Updated: 28 March 2026</span>
            <span>⏱️ 5 min read</span>
          </div>
        </div>

        {/* What You Need */}
        <div className="bg-[#050c14] rounded-xl p-6 border border-gray-800/40 mb-8">
          <h2 className="text-xl font-bold text-accent mb-4">What You Need Before Creating an Account</h2>
          <ul className="space-y-2">
            {[
              "An Android smartphone (Android 5.0 or higher)",
              "Poker Game APK installed (download from pokergameapk.com.pk)",
              "A valid Pakistani mobile number or email address",
              "Stable internet connection (3G/4G or WiFi)",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-center text-gray-300">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Step by Step */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">Step-by-Step: Create Your Poker Game Account</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Download & Install Poker Game APK",
                desc: "If you haven't already, download the Poker Game APK from the official website pokergameapk.com.pk. Enable 'Install from Unknown Sources' in your Android settings and install the app.",
                tip: "Always download from the official website to ensure a safe, malware-free installation."
              },
              {
                step: 2,
                title: "Open the Poker Game App",
                desc: "After installation, tap the Poker Game icon on your home screen or app drawer to launch the app. Wait for the app to load completely.",
                tip: null
              },
              {
                step: 3,
                title: "Tap 'Register' or 'Sign Up'",
                desc: "On the Poker Game home screen, you will see two options: Login and Register. Tap on 'Register' or 'Sign Up' to begin creating your new account.",
                tip: "New users should always tap Register, not Login."
              },
              {
                step: 4,
                title: "Enter Your Mobile Number or Email",
                desc: "You can register using either your Pakistani mobile number or an email address. Enter your preferred contact information in the registration field.",
                tip: "Use a mobile number you have active access to, as you'll need it for OTP verification."
              },
              {
                step: 5,
                title: "Set a Strong Password",
                desc: "Create a strong, unique password for your Poker Game account. Use a mix of uppercase and lowercase letters, numbers, and symbols. Avoid using obvious passwords like your birth date.",
                tip: "Write down your password in a safe place so you don't forget it."
              },
              {
                step: 6,
                title: "Verify with OTP",
                desc: "Poker Game will send a One-Time Password (OTP) to your registered mobile number or email. Enter this OTP code in the verification field to confirm your identity.",
                tip: "OTP expires in a few minutes. If you didn't receive it, tap 'Resend OTP'."
              },
              {
                step: 7,
                title: "Account Created — Claim Your Bonus!",
                desc: "Congratulations! Your Poker Game account is now created. You will receive free welcome chips and a new player bonus automatically. You can now start playing Texas Hold'em, Teen Patti, Dragon vs Tiger, and all other exciting games!",
                tip: "Make your first deposit to get a 100% welcome bonus match!"
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-lg">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">{item.desc}</p>
                  {item.tip && (
                    <div className="bg-[#010408] border border-[#0ea5e9]/20 rounded-lg p-3 text-xs text-[#0ea5e9]">
                      💡 <strong>Tip:</strong> {item.tip}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Methods */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">Poker Game Registration Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Register with Mobile Number",
                icon: "📱",
                pros: ["Most common method", "Easiest OTP verification", "Recommended for Pakistani users", "Works with any SIM (Jazz, Telenor, Zong, Ufone, Warid)"]
              },
              {
                title: "Register with Email",
                icon: "📧",
                pros: ["Good for account recovery", "No SIM needed", "Can use Gmail, Yahoo, Outlook", "Receive game notifications via email"]
              },
            ].map((method, i) => (
              <div key={i} className="bg-[#010408] p-6 rounded-lg border border-gray-800/40">
                <div className="text-3xl mb-3">{method.icon}</div>
                <h3 className="text-lg font-semibold text-[#FFC107] mb-4">{method.title}</h3>
                <ul className="space-y-2">
                  {method.pros.map((pro, j) => (
                    <li key={j} className="flex gap-2 text-gray-300 text-sm">
                      <span className="text-green-400">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* After Registration */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">What to Do After Creating Your Account</h2>
          <div className="space-y-4">
            {[
              { icon: "🎁", title: "Claim Welcome Bonus", desc: "After registration, claim your welcome bonus from the Promotions section. New players get free chips and bonus offers." },
              { icon: "💰", title: "Make Your First Deposit", desc: "Deposit via JazzCash or EasyPaisa to get a 100% first deposit bonus match. Start playing with double your money!" },
              { icon: "🃏", title: "Choose Your Game", desc: "Head to the game lobby and pick your favourite game — Texas Hold'em Poker, Teen Patti, Dragon vs Tiger, or Slots." },
              { icon: "👥", title: "Refer Friends", desc: "Share your referral code with friends. When they join and play, you earn commission automatically." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start bg-[#010408] p-4 rounded-lg border border-gray-800/40">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is creating a Poker Game account free?", a: "Yes, creating a Poker Game account is completely free. There are no registration fees. You also receive free welcome chips upon registration." },
              { q: "Can I have multiple Poker Game accounts?", a: "No, Poker Game allows only one account per device/mobile number. Creating multiple accounts may result in a permanent ban." },
              { q: "What if I didn't receive the OTP?", a: "If you didn't receive the OTP, tap 'Resend OTP' after 60 seconds. Make sure your mobile number is correct and your phone has network coverage." },
              { q: "Can I change my registered mobile number later?", a: "Yes, you can update your mobile number or email in the account settings section after logging in. Additional verification may be required." },
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

        {/* Related Posts */}
        <div className="bg-[#050c14] rounded-xl p-6 border border-gray-800/40">
          <h3 className="text-lg font-semibold text-accent mb-4">Related Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/blog/how-to-login-poker-game", label: "How to Login to Poker Game" },
              { href: "/deposit-money-in-poker-game", label: "Deposit Money in Poker Game" },
              { href: "/withdraw-money-from-poker-game", label: "Withdraw Money from Poker Game" },
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
