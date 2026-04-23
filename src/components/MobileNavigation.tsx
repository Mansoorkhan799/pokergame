'use client';

import { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type NavItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

function NavRow({ href, label, icon, onClick }: NavItem & { onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-white/5 transition-colors group"
    >
      <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-accent group-hover:bg-accent/20 transition-colors">
        {icon}
      </div>
      <span className="flex-1 text-white text-[15px] font-medium">{label}</span>
      <svg className="w-4 h-4 text-gray-500 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

const mainItems: NavItem[] = [
  {
    href: '/',
    label: 'Home',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href: '/download-poker-game-apk',
    label: 'Download APK',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
];

const guideItems: NavItem[] = [
  {
    href: '/deposit-money-in-poker-game',
    label: 'Deposit Guide',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/withdraw-money-from-poker-game',
    label: 'Withdraw Guide',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    href: '/poker-game-for-pc',
    label: 'PC Version',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const infoItems: NavItem[] = [
  {
    href: '/about-us',
    label: 'About Us',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/contact-us',
    label: 'Contact Us',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: '/privacy',
    label: 'Privacy Policy',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    href: '/disclaimer',
    label: 'Disclaimer',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
];

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    startTransition(() => setIsOpen((prev) => !prev));
  };

  const closeMenu = () => {
    startTransition(() => setIsOpen(false));
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!mounted) {
    return (
      <div className="md:hidden">
        <button className="flex items-center text-accent p-1" aria-label="Open menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="flex items-center text-accent p-1"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col"
          style={{ background: '#0b1120' }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0">
            <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
              <div className="relative w-10 h-10 flex-shrink-0 rounded-xl overflow-hidden bg-white/10">
                <Image
                  src="/poker-game-logo.webp"
                  alt="Poker Game Logo"
                  fill
                  sizes="40px"
                  className="object-contain p-1"
                  priority
                />
              </div>
              <span className="text-accent text-xl font-bold tracking-wide">Poker Game</span>
            </Link>
            <button
              onClick={closeMenu}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable nav body */}
          <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-3 py-4 space-y-6">

            {/* MAIN */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest px-4 mb-1">Main</p>
              <div className="space-y-0.5">
                {mainItems.map((item) => (
                  <NavRow key={item.href} {...item} onClick={closeMenu} />
                ))}
              </div>
            </div>

            {/* GUIDES */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest px-4 mb-1">Guides</p>
              <div className="space-y-0.5">
                {guideItems.map((item) => (
                  <NavRow key={item.href} {...item} onClick={closeMenu} />
                ))}
              </div>
            </div>

            {/* INFO */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest px-4 mb-1">Info</p>
              <div className="space-y-0.5">
                {infoItems.map((item) => (
                  <NavRow key={item.href} {...item} onClick={closeMenu} />
                ))}
              </div>
            </div>

          </nav>

          {/* Sticky download button */}
          <div className="flex-shrink-0 px-5 py-4 border-t border-white/10" style={{ background: '#0b1120' }}>
            <a
              href="https://pokeremag.com/?from_gameid=5154838&channelCode=200000"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl font-bold text-primary text-base transition-all hover:brightness-110 active:scale-95"
              style={{ background: '#FFC107' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Free APK
            </a>
            <p className="text-center text-gray-600 text-[11px] mt-2">Android 5.0+ · Free · 2026 Update</p>
          </div>
        </div>
      )}
    </div>
  );
}
