'use client';

import { useState, useEffect, useTransition } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';

function ChevronRight() {
  return (
    <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function NavRow({ href, label, icon, onClick }: { href: string; label: string; icon: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.875rem 1rem', borderRadius: '0.75rem', textDecoration: 'none' }}
    >
      <span style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.625rem', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#FFC107' }}>
        {icon}
      </span>
      <span style={{ flex: 1, color: '#ffffff', fontSize: '15px', fontWeight: 500 }}>{label}</span>
      <ChevronRight />
    </Link>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p style={{ fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.75rem 1rem 0.25rem' }}>
      {children}
    </p>
  );
}

const Icon = ({ d }: { d: string }) => (
  <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
  </svg>
);

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => { setMounted(true); }, []);

  const openMenu  = () => startTransition(() => setIsOpen(true));
  const closeMenu = () => startTransition(() => setIsOpen(false));

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const overlay = isOpen ? (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', flexDirection: 'column',
        backgroundColor: '#0b1120',
        width: '100vw', height: '100vh',
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }}>
        <Link href="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{ position: 'relative', width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', overflow: 'hidden', backgroundColor: 'rgba(255,255,255,0.1)', flexShrink: 0 }}>
            <Image src="/poker-game-logo.webp" alt="Poker Game Logo" fill sizes="40px" style={{ objectFit: 'contain', padding: '4px' }} priority />
          </div>
          <span style={{ color: '#FFC107', fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.02em' }}>Poker Game</span>
        </Link>
        <button
          onClick={closeMenu}
          aria-label="Close menu"
          style={{ width: '2.25rem', height: '2.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.12)', border: 'none', cursor: 'pointer', color: '#fff' }}
        >
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '1.2rem', height: '1.2rem' }} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Scrollable body */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '0.5rem 0.75rem' }}>

        <SectionLabel>Main</SectionLabel>
        <NavRow href="/" label="Home" onClick={closeMenu} icon={<Icon d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />} />
        <NavRow href="/download-poker-game-apk" label="Download APK" onClick={closeMenu} icon={<Icon d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />} />

        <SectionLabel>Guides</SectionLabel>
        <NavRow href="/deposit-money-in-poker-game" label="Deposit Guide" onClick={closeMenu} icon={<Icon d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />} />
        <NavRow href="/withdraw-money-from-poker-game" label="Withdraw Guide" onClick={closeMenu} icon={<Icon d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />} />
        <NavRow href="/poker-game-for-pc" label="PC Version" onClick={closeMenu} icon={<Icon d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />} />
        <NavRow href="/blog" label="Blog" onClick={closeMenu} icon={<Icon d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />} />

        <SectionLabel>Info</SectionLabel>
        <NavRow href="/about-us" label="About Us" onClick={closeMenu} icon={<Icon d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />} />
        <NavRow href="/contact-us" label="Contact Us" onClick={closeMenu} icon={<Icon d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />} />
        <NavRow href="/privacy" label="Privacy Policy" onClick={closeMenu} icon={<Icon d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />} />
        <NavRow href="/disclaimer" label="Disclaimer" onClick={closeMenu} icon={<Icon d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />} />

      </div>

      {/* Sticky download button */}
      <div style={{ flexShrink: 0, padding: '1rem 1.25rem', borderTop: '1px solid rgba(255,255,255,0.1)', backgroundColor: '#0b1120' }}>
        <a
          href="https://pokeremag.com/?from_gameid=5154838&channelCode=200000"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', width: '100%', padding: '1rem', borderRadius: '1rem', backgroundColor: '#FFC107', color: '#000', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}
        >
          <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Free APK
        </a>
        <p style={{ textAlign: 'center', color: '#4b5563', fontSize: '11px', marginTop: '0.5rem' }}>Android 5.0+ · Free · 2026 Update</p>
      </div>
    </div>
  ) : null;

  if (!mounted) {
    return (
      <div className="md:hidden">
        <button className="flex items-center text-accent p-1" aria-label="Open menu">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="md:hidden">
      <button
        onClick={openMenu}
        className="flex items-center text-accent p-1"
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {mounted && createPortal(overlay, document.body)}
    </div>
  );
}
