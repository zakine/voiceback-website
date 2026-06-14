'use client';

import React from 'react';
import WaveformLogo from './WaveformLogo';
import { useLanguage } from '@/lib/LanguageContext';

const Navigation: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { href: '#features', key: 'nav_product' as const },
    { href: '#how', key: 'nav_how' as const },
    { href: '#tools', key: 'nav_tools' as const },
    { href: '#pricing', key: 'nav_pricing' as const },
  ];

  return (
    <header className="fixed top-3 left-3 right-3 z-50 max-w-[1120px] mx-auto">
      <nav className="flex items-center justify-between px-[18px] py-[11px] pr-[14px] rounded-2xl bg-[rgba(14,20,17,0.6)] border border-border backdrop-blur-[28px] backdrop-saturate-[160%]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-[9px]" aria-label="Voiceback">
          <WaveformLogo width={26} height={26} color="#25D366" />
          <span className="text-xl font-bold tracking-tight text-text">voiceback</span>
        </a>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-[14.5px] font-medium text-text-2 transition-colors duration-200 hover:text-text"
            >
              {t[link.key]}
            </a>
          ))}
        </div>

        {/* Right side - Language toggle + Download button */}
        <div className="flex items-center gap-[10px]">
          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-[5px] h-[38px] px-3 rounded-full border border-border bg-transparent text-text-2 text-[13px] font-bold cursor-pointer font-sans tracking-[0.02em] transition-colors duration-200 hover:text-text hover:border-border-strong"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
            </svg>
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Download button */}
          <a
            href="/download"
            className="inline-flex items-center gap-2 h-[42px] px-[18px] rounded-xl text-[14.5px] font-semibold cursor-pointer border-none font-sans transition-all duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap bg-primary-strong text-white shadow-vb-primary hover:-translate-y-px"
          >
            {t.nav_cta}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;