'use client';

import React from 'react';
import WaveformLogo from './WaveformLogo';
import { useLanguage } from '@/lib/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const linkSections = [
    {
      title: t.foot_product,
      links: [
        { href: '#features', label: t.foot_features },
        { href: '#how', label: t.foot_how },
        { href: '#pricing', label: t.foot_pricing },
        { href: '/download', label: t.foot_download },
      ],
    },
    {
      title: t.foot_company,
      links: [
        { href: '#', label: t.foot_about },
        { href: '#', label: t.foot_blog },
        { href: '/support', label: 'Soporte' },
        { href: '#', label: t.foot_contact },
      ],
    },
    {
      title: t.foot_legal,
      links: [
        { href: '#', label: t.foot_privacy },
        { href: '#', label: t.foot_terms },
      ],
    },
  ];

  return (
    <footer className="pt-14 pb-10 border-t border-separator relative z-10">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Main footer content */}
        <div className="flex justify-between gap-10 flex-wrap mb-10">
          {/* Brand section */}
          <div className="max-w-[260px]">
            <div className="flex items-center gap-[9px] mb-[14px]">
              <WaveformLogo width={24} height={24} color="#5C6B65" />
              <span className="text-xl font-bold tracking-tight text-text">voiceback</span>
            </div>
            <p className="text-sm text-text-2 leading-[1.6] m-0">
              {t.foot_tag}
            </p>
          </div>

          {/* Link sections */}
          {linkSections.map((section, index) => (
            <div key={index} className="foot-col">
              <h4 className="text-[12.5px] font-bold uppercase tracking-[0.08em] text-text-3 mb-[14px]">
                {section.title}
              </h4>
              {section.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.href}
                  className="block text-[14.5px] text-text-2 mb-[10px] transition-colors duration-200 hover:text-text"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Footer bottom */}
        <div className="flex justify-between items-center pt-6 border-t border-separator flex-wrap gap-4">
          <span className="text-[13px] text-text-3">
            © 2026 Voiceback · <span>{t.foot_rights}</span> 💚 <span>{t.foot_latam}</span>
          </span>
          <span className="text-[13px] text-text-3">hola@voiceback.co</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;