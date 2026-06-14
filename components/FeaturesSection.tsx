'use client';

import React from 'react';
import GlassCard from './GlassCard';
import { useLanguage } from '@/lib/LanguageContext';

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
        </svg>
      ),
      iconBg: 'rgba(37,211,102,0.14)',
      iconColor: 'var(--vb-primary)',
      title: t.feat1_h,
      description: t.feat1_p,
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
          <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.9-.9L3 20l1.3-3.1A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z" />
        </svg>
      ),
      iconBg: 'rgba(56,163,245,0.14)',
      iconColor: 'var(--vb-info)',
      title: t.feat2_h,
      description: t.feat2_p,
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
          <rect x="2" y="5" width="20" height="14" rx="2.5" />
          <path d="M2 10h20" />
        </svg>
      ),
      iconBg: 'rgba(245,165,36,0.14)',
      iconColor: 'var(--vb-warning)',
      title: t.feat3_h,
      description: t.feat3_p,
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-[90px] relative z-10">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="text-[12.5px] font-bold tracking-[0.12em] uppercase text-primary mb-[14px]">
            {t.feat_label}
          </div>
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4 text-text">
            {t.feat_h}
          </h2>
          <p className="text-[17px] text-text-2 leading-[1.6] max-w-[560px] mx-auto">
            {t.feat_intro}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-[18px]">
          {features.map((feature, index) => (
            <GlassCard key={index} variant="feature">
              {/* Icon */}
              <div
                className="w-[50px] h-[50px] rounded-[14px] flex items-center justify-center mb-[18px]"
                style={{
                  background: feature.iconBg,
                  color: feature.iconColor,
                }}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold tracking-tight mb-[9px] text-text">
                {feature.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-text-2 m-0">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;