import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';
import HowToSchema from '@/components/HowToSchema';

export const metadata: Metadata = {
  title: 'How to Login Poker Game - Complete Login Guide 2026',
  description: 'Learn how to login to Poker Game app in Pakistan. Step-by-step Poker Game login guide. Forgot password? Learn how to reset your Poker Game password easily.',
  keywords: ['how to login poker game', 'poker game login', 'poker game sign in', 'poker game login pakistan', 'poker game forgot password', 'poker game account login'],
  alternates: {
    canonical: "https://pokergameapk.com.pk/blog/how-to-login-poker-game",
  },
  openGraph: {
    title: 'How to Login Poker Game - Complete Login Guide 2026',
    description: 'Step-by-step guide to logging into your Poker Game account. Includes forgot password reset instructions for Pakistan players.',
    url: "https://pokergameapk.com.pk/blog/how-to-login-poker-game",
    siteName: "Poker Game",
    type: "article",
    images: [{ url: 'https://pokergameapk.com.pk/poker-game.webp', width: 1200, height: 630, alt: 'How to Login Poker Game' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Login Poker Game - Complete Login Guide 2026',
    description: 'Step-by-step guide to logging into your Poker Game account. Forgot password? Learn how to reset it easily.',
    images: [{ url: 'https://pokergameapk.com.pk/poker-game.webp', alt: 'How to Login Poker Game' }],
  },
};

export default function HowToLoginPokerGame() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">

        <BlogPostSchema
          title="How to Login Poker Game - Complete Login Guide 2026"
          description="Learn how to login to Poker Game app in Pakistan. Step-by-step Poker Game login guide. Forgot password? Learn how to reset your Poker Game password easily."
          slug="how-to-login-poker-game"
          datePublished="2026-03-28"
          dateModified="2026-03-28"
          articleBody="Logging into Poker Game is simple. Open the app, tap Login, enter your registered mobile number or email and password, then tap Sign In. If you forgot your password, tap Forgot Password, enter your mobile/email, verify via OTP, and set a new password."
        />

        <HowToSchema
          id="howto-login-poker-game"
          name="How to Login to Poker Game"
          description="Sign in to Poker Game on Android with your mobile number or email and password."
          image="https://pokergameapk.com.pk/poker-game.webp"
          steps={[
            { name: "Open the Poker Game App", text: "Tap the Poker Game icon on your Android device's home screen or app drawer to launch the app. Wait for the app to fully load." },
            { name: "Tap the 'Login' Button", text: "On the Poker Game home screen, tap the 'Login' button. If you see a splash screen or promotions popup, close it first to access the login screen." },
            { name: "Enter Your Mobile Number or Email", text: "Type the mobile number or email address you used when you registered your Poker Game account. Make sure there are no typos." },
            { name: "Enter Your Password", text: "Type your account password carefully. Passwords are case-sensitive, so make sure Caps Lock is not on accidentally. Tap the eye icon to show/hide your password." },
            { name: "Tap 'Sign In' or 'Login'", text: "After entering your credentials, tap the 'Sign In' or 'Login' button. The app will verify your details and log you in." },
            { name: "Start playing", text: "Once logged in, you'll land on the Poker Game home screen with access to all games, your wallet, bonuses, and account settings." },
          ]}
        />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-white">How to Login Poker Game</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-block bg-accent/10 text-accent border border-accent/30 rounded-full px-3 py-1 text-xs font-medium mb-4">
            Login Guide
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How to Login Poker Game — Complete Guide 2026
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Logging into Poker Game is simple and quick. This complete guide covers the Poker Game login process, different login methods, and how to reset your password if you&apos;ve forgotten it.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>📅 Updated: 28 March 2026</span>
            <span>⏱️ 4 min read</span>
          </div>
        </div>

        {/* Main Login Steps */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">Step-by-Step: How to Login to Poker Game</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Open the Poker Game App",
                desc: "Tap the Poker Game icon on your Android device's home screen or app drawer to launch the app. Wait for the app to fully load.",
              },
              {
                step: 2,
                title: "Tap the 'Login' Button",
                desc: "On the Poker Game home screen, tap the 'Login' button. If you see a splash screen or promotions popup, close it first to access the login screen.",
              },
              {
                step: 3,
                title: "Enter Your Mobile Number or Email",
                desc: "Type the mobile number or email address you used when you registered your Poker Game account. Make sure there are no typos.",
              },
              {
                step: 4,
                title: "Enter Your Password",
                desc: "Type your account password carefully. Passwords are case-sensitive, so make sure Caps Lock is not on accidentally. Tap the eye icon to show/hide your password.",
              },
              {
                step: 5,
                title: "Tap 'Sign In' or 'Login'",
                desc: "After entering your credentials, tap the 'Sign In' or 'Login' button. The app will verify your details and log you in.",
              },
              {
                step: 6,
                title: "You're Logged In — Start Playing!",
                desc: "Once logged in, you'll land on the Poker Game home screen with access to all games, your wallet, bonuses, and account settings. Enjoy your poker session!",
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

        {/* Login Methods */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">Poker Game Login Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📱",
                title: "Mobile Number Login",
                desc: "Enter your registered Pakistani mobile number and password. This is the fastest and most common method.",
                badge: "Most Popular"
              },
              {
                icon: "📧",
                title: "Email Login",
                desc: "Use your registered email address and password to log in. Good for users who registered with email.",
                badge: "Alternative"
              },
              {
                icon: "👤",
                title: "Guest Login",
                desc: "Play without an account using Guest mode. Note: Guest accounts cannot withdraw real money.",
                badge: "Limited Access"
              },
            ].map((method, i) => (
              <div key={i} className="bg-[#010408] p-6 rounded-lg border border-gray-800/40 text-center">
                <div className="text-3xl mb-3">{method.icon}</div>
                <span className="inline-block bg-accent/10 text-accent text-xs rounded-full px-2 py-0.5 mb-3">{method.badge}</span>
                <h3 className="text-white font-semibold mb-3">{method.title}</h3>
                <p className="text-gray-400 text-sm">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Forgot Password */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">Forgot Your Poker Game Password? Here&apos;s How to Reset It</h2>
          <div className="space-y-4 mb-6">
            {[
              "Open the Poker Game app and tap the 'Login' button.",
              "On the login screen, tap 'Forgot Password?' or 'Reset Password'.",
              "Enter your registered mobile number or email address.",
              "A password reset OTP or link will be sent to your phone/email.",
              "Enter the OTP code in the app.",
              "Create a new strong password for your account.",
              "Tap 'Confirm' to save your new password.",
              "Log in with your new password and enjoy playing!",
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 bg-[#0ea5e9]/20 text-[#0ea5e9] rounded-full flex items-center justify-center text-sm font-bold border border-[#0ea5e9]/30">{i + 1}</span>
                <p className="text-gray-300 text-sm mt-0.5">{step}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 text-sm text-amber-200">
            ⚠️ <strong>Important:</strong> If you can&apos;t reset your password via mobile/email, contact Poker Game customer support through the live chat inside the app.
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">Login Troubleshooting</h2>
          <div className="space-y-4">
            {[
              { problem: "Wrong password error", solution: "Double check your password. Try the 'Forgot Password' option to reset it. Make sure Caps Lock is off." },
              { problem: "Account not found", solution: "Verify you're using the correct mobile number or email that you registered with. You may have registered with a different contact." },
              { problem: "App won't load after login", solution: "Check your internet connection. Try closing and reopening the app. Clear app cache from your phone settings if the issue persists." },
              { problem: "Account suspended or banned", solution: "If your account is suspended, contact Poker Game support immediately via live chat inside the app to resolve the issue." },
            ].map((item, i) => (
              <div key={i} className="bg-[#010408] rounded-lg p-4 border border-gray-800/40">
                <h3 className="text-[#FFC107] font-semibold mb-2 text-sm">❌ Problem: {item.problem}</h3>
                <p className="text-gray-300 text-sm">✅ <strong>Solution:</strong> {item.solution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Tips */}
        <div className="bg-[#050c14] rounded-xl p-8 border border-gray-800/40 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-accent">Account Security Tips</h2>
          <ul className="space-y-3">
            {[
              "Never share your Poker Game password with anyone, including support agents.",
              "Use a unique password that you don't use on other apps or websites.",
              "Enable two-factor authentication if available in account settings.",
              "Log out of your account on shared or public devices.",
              "Change your password regularly every 3-6 months.",
              "Don't click suspicious links claiming to be from Poker Game — they may be phishing scams.",
            ].map((tip, i) => (
              <li key={i} className="flex gap-3 items-start text-gray-300 text-sm">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Related Posts */}
        <div className="bg-[#050c14] rounded-xl p-6 border border-gray-800/40">
          <h3 className="text-lg font-semibold text-accent mb-4">Related Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/blog/how-to-create-poker-game-account", label: "How to Create Poker Game Account" },
              { href: "/blog/how-to-deposit-money-in-poker-game", label: "How to Deposit Money in Poker Game" },
              { href: "/blog/how-to-withdraw-money-from-poker-game", label: "How to Withdraw Money from Poker Game" },
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
