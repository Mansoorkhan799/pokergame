import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white pt-10 pb-4 px-4 md:px-8 border-t border-gray-800/60 relative z-20"
      style={{ background: '#000204' }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Poker Game</h3>
            <p className="text-sm text-gray-300 mb-4">
              Poker Game is Pakistan&apos;s premier poker gaming platform, offering Texas Hold&apos;em, Teen Patti, Dragon vs Tiger and many exciting games. Earn real cash with JazzCash &amp; EasyPaisa.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-5 h-5 text-gray-400 hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-0.9,0.6-1.1,1-1.1h3V0.13H14.5c-4.1,0-5,2.9-5,4.8v2.5H6v4.5h3.5V22h5V11.96h3.35L18.77,7.46z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/download-poker-game-apk" className="text-gray-300 hover:text-accent transition-colors">Download</Link></li>
              <li><Link href="/poker-game-for-pc" className="text-gray-300 hover:text-accent transition-colors">PC Version</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/about-us" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact-us" className="text-gray-300 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/deposit-money-in-poker-game" className="text-gray-300 hover:text-accent transition-colors">Deposit Guide</Link></li>
              <li><Link href="/withdraw-money-from-poker-game" className="text-gray-300 hover:text-accent transition-colors">Withdraw Guide</Link></li>
              <li><Link href="/blog/how-to-create-poker-game-account" className="text-gray-300 hover:text-accent transition-colors">Create Account</Link></li>
              <li><Link href="/blog/how-to-login-poker-game" className="text-gray-300 hover:text-accent transition-colors">How to Login</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="text-gray-300 hover:text-accent transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
          
          {/* Download */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Download App</h3>
            <p className="text-sm text-gray-300 mb-4">
              Download Poker Game to enjoy the best poker gaming experience and earn real cash rewards on your Android device.
            </p>
            <a 
              href="https://pkcardrummy.com/?from_gameid=6276686&channelCode=6191689"
              target="_blank" 
              rel="noopener noreferrer" 
              className="download-btn bg-transparent text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-all shadow-lg border-2 border-[#0ea5e9]"
            >
              <span>DOWNLOAD NOW</span>
              <div className="download-icon ml-2 bg-[#f97316] rounded-full p-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800/60 mt-8 pt-4 pb-2 text-center text-sm text-gray-400">
          <p>© 2026 Poker Game. All rights reserved. | <Link href="/" className="hover:text-accent">pokergameapk.com.pk</Link></p>
        </div>
      </div>
    </footer>
  );
}
