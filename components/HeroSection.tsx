'use client';

import React from 'react';
import PhoneMockup from './PhoneMockup';
import { useLanguage } from '@/lib/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  // Avatar gradients for social proof
  const avatarGradients = [
    ['#1DAE5A', '#0E7C3C'],
    ['#3B82F6', '#1E40AF'],
    ['#F5A524', '#C2410C'],
    ['#A855F7', '#6D28D9'],
    ['#EC4899', '#9D174D'],
    ['#06B6D4', '#0E7490'],
  ];

  const socialAvatars = [
    { initials: 'ML', gradient: 0 },
    { initials: 'CR', gradient: 1 },
    { initials: 'AS', gradient: 4 },
    { initials: 'PG', gradient: 2 },
  ];

  return (
    <section className="pt-[124px] pb-[60px] lg:pt-[150px] lg:pb-20 relative z-10">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-[50px] lg:gap-10 items-center">
          {/* Hero copy */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 h-8 px-[14px] mb-[26px] rounded-full bg-primary-soft border border-[rgba(37,211,102,0.25)] text-[13px] font-semibold text-primary">
              <span className="w-[7px] h-[7px] rounded-full bg-primary shadow-[0_0_8px_theme(colors.primary.DEFAULT)]" />
              <span>{t.hero_eyebrow}</span>
            </span>

            {/* Main heading */}
            <h1 className="text-[clamp(38px,5.4vw,62px)] leading-[1.04] font-extrabold tracking-[-0.035em] mb-[22px]">
              <span className="text-text">{t.hero_h1a}</span>
              <br />
              <span className="text-primary">{t.hero_h1b}</span>
            </h1>

            {/* Subtext */}
            <p className="text-[clamp(17px,2.1vw,20px)] leading-[1.55] text-text-2 max-w-[480px] mx-auto lg:mx-0 mb-[34px]">
              {t.hero_sub}
            </p>

            {/* Store buttons */}
            <div className="flex gap-3 flex-wrap justify-center lg:justify-start mb-[26px]">
              <a
                href="/download"
                className="inline-flex items-center gap-[11px] h-14 px-5 rounded-[14px] bg-white text-[#0A0F0D] transition-transform duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5"
              >
                {/* App Store icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A0F0D">
                  <path d="M17.05 12.6c0-2 1.6-2.95 1.67-3-.91-1.33-2.33-1.51-2.83-1.53-1.2-.12-2.35.71-2.96.71-.61 0-1.55-.69-2.55-.67-1.31.02-2.52.76-3.2 1.94-1.36 2.37-.35 5.87.98 7.79.65.94 1.42 2 2.43 1.96.97-.04 1.34-.63 2.52-.63 1.17 0 1.5.63 2.53.61 1.04-.02 1.7-.96 2.34-1.9.73-1.09 1.04-2.14 1.05-2.2-.02-.01-2.02-.77-2.04-3.07zM15.1 5.94c.54-.65.9-1.56.8-2.46-.78.03-1.71.51-2.27 1.16-.5.58-.93 1.5-.81 2.39.86.06 1.74-.44 2.28-1.09z" />
                </svg>
                <div>
                  <div className="text-[11px] font-medium opacity-70 leading-none mb-[3px]">{t.store_app_sub}</div>
                  <div className="text-[18px] font-bold leading-none tracking-tight">App Store</div>
                </div>
              </a>

              <a
                href="/download"
                className="inline-flex items-center gap-[11px] h-14 px-5 rounded-[14px] bg-white text-[#0A0F0D] transition-transform duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5"
              >
                {/* Google Play icon */}
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path d="M3.6 2.4c-.3.3-.5.8-.5 1.4v16.4c0 .6.2 1.1.5 1.4l.1.1L13 12.1v-.2L3.7 2.3l-.1.1z" fill="#00D2FF" />
                  <path d="M16.3 15.3l-3.3-3.2v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2-.1.1z" fill="#FFCE00" />
                  <path d="M16.4 15.2L13 11.9 3.6 21.4c.4.4 1 .4 1.7.1l11.1-6.3" fill="#00F076" />
                  <path d="M16.4 8.6L5.3 2.4c-.7-.4-1.3-.3-1.7.1L13 11.9l3.4-3.3z" fill="#FF3A44" />
                </svg>
                <div>
                  <div className="text-[11px] font-medium opacity-70 leading-none mb-[3px]">{t.store_play_sub}</div>
                  <div className="text-[18px] font-bold leading-none tracking-tight">Google Play</div>
                </div>
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-[13px] justify-center lg:justify-start">
              {/* Avatar stack */}
              <div className="flex">
                {socialAvatars.map((avatar, index) => (
                  <div
                    key={index}
                    className={`w-[34px] h-[34px] rounded-full border-2 border-bg-deep flex items-center justify-center text-xs font-semibold text-white ${index > 0 ? '-ml-[10px]' : ''}`}
                    style={{
                      background: `linear-gradient(140deg, ${avatarGradients[avatar.gradient][0]}, ${avatarGradients[avatar.gradient][1]})`,
                    }}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>

              {/* Rating and text */}
              <div>
                <div className="text-primary text-sm tracking-[2px] mb-0">★★★★★</div>
                <div className="text-[13px] text-text-2 leading-[1.4]">
                  <b className="text-text">+2.400 negocios</b> <span>{t.social_txt}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;