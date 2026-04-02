import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - Poker Game | Get Help & Support',
  description: 'Contact Poker Game support team for help with the app, content, privacy policy, and more. We are here to assist Pakistani poker players.',
  keywords: ['contact poker game', 'poker game support', 'poker game email', 'customer support poker game', 'help poker game'],
  openGraph: {
    title: 'Contact Us - Poker Game',
    description: 'Get in touch with Poker Game support team for any queries or assistance.',
    url: 'https://pokergameapk.com.pk/contact-us',
    siteName: 'Poker Game',
    type: 'website',
    images: [{ url: 'https://pokergameapk.com.pk/poker-game.webp', width: 1200, height: 630, alt: 'Contact Poker Game Support Pakistan' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Poker Game',
    description: 'Get in touch with Poker Game support team for any queries or assistance.',
    images: ['https://pokergameapk.com.pk/poker-game.webp'],
  },
  alternates: {
    canonical: 'https://pokergameapk.com.pk/contact-us',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Contact() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pokergameapk.com.pk" },
      { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://pokergameapk.com.pk/contact-us" }
    ]
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />

          <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact Us</span>
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
            <p className="text-lg text-gray-400">We&apos;re here to help you with all Poker Game queries!</p>
          </div>
          
          <div className="bg-[#050c14] rounded-2xl shadow-xl p-8 md:p-12 mb-8 border border-gray-800/40">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Welcome to the Contact Us page of <Link href="/" className="text-accent hover:underline font-semibold">Poker Game</Link>. Feel free to contact us if you are facing any problems regarding our site content, <Link href="/about-us" className="text-accent hover:text-accent font-semibold">About us</Link>, <Link href="/privacy" className="text-accent hover:text-accent font-semibold">Privacy Policy</Link>, or any Poker Game related queries.
              </p>

              <div className="bg-[#010408] rounded-xl p-6 md:p-8 border border-[#0ea5e9]/20 overflow-hidden">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-white">Email Us</h2>
                <p className="text-center mb-4 text-gray-400">Send us your questions or concerns via email</p>
                <div className="flex justify-center w-full min-w-0 overflow-hidden px-4">
                  <a
                    href="mailto:support@pokergameapk.com.pk"
                    className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-4 md:py-4 md:px-6 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl max-w-full min-w-0 overflow-hidden"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span className="break-all">support@pokergameapk.com.pk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
                title: "App Information",
                desc: "Need help with Poker Game app?",
                linkHref: "/",
                linkText: "Learn More"
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
                title: "Privacy Policy",
                desc: "Read our privacy policy",
                linkHref: "/privacy",
                linkText: "Read Policy"
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: "About Us",
                desc: "Learn more about our platform",
                linkHref: "/about-us",
                linkText: "About Us"
              },
            ].map((card, i) => (
              <div key={i} className="bg-[#050c14] rounded-xl shadow-lg p-6 text-center border border-gray-800/40 card-glow">
                <div className="bg-[#010408] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">{card.icon}</svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
                <p className="text-gray-400 mb-4">{card.desc}</p>
                <Link href={card.linkHref} className="text-accent hover:text-accent font-semibold">
                  {card.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Poker Game",
              "url": "https://pokergameapk.com.pk",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "support@pokergameapk.com.pk",
                "contactType": "Customer Support",
                "availableLanguage": ["English", "Urdu"]
              }
            }
          })
        }}
      />
    </div>
  );
}
