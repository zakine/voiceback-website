'use client';

import React from 'react';
import GlassCard from './GlassCard';
import { useLanguage } from '@/lib/LanguageContext';

const PricingSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [t.p2_1, t.p2_2, t.p2_3, t.p2_4, t.p2_5];

  return (
    <section id="pricing" className="py-16 lg:py-[90px] relative z-10">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-11">
          <div className="text-[12.5px] font-bold tracking-[0.12em] uppercase text-primary mb-[14px]">
            {t.price_label}
          </div>
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4 text-text">
            {t.price_h}
          </h2>
          <p className="text-[17px] text-text-2 leading-[1.6] max-w-[560px] mx-auto">
            {t.price_intro}
          </p>
        </div>

        {/* Single plan card */}
        <div className="max-w-[480px] mx-auto">
          <GlassCard variant="featured-price" hover={false}>
            {/* Plan name */}
            <div className="text-xl font-bold mb-[6px] text-text">Voiceback</div>

            {/* Price */}
            <div className="mb-3">
              <span className="text-[52px] font-extrabold tracking-[-0.03em] text-text">{t.price_amount}</span>
              <span className="text-base font-medium text-text-2">{t.price_period}</span>
            </div>

            {/* Trial badge */}
            <div className="inline-flex items-center gap-[6px] text-xs font-bold text-primary bg-primary-soft px-[10px] py-1 rounded-full mb-6 uppercase tracking-[0.05em]">
              {t.price_trial}
            </div>

            {/* Features list */}
            <ul className="list-none p-0 m-0 mb-[22px] flex flex-col gap-[11px]">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-[10px] text-[14.5px] text-text">
                  <span className="text-primary flex-shrink-0 mt-[1px]">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <a
              href="/download"
              className="inline-flex items-center justify-center w-full h-[54px] px-[26px] text-base font-semibold rounded-xl cursor-pointer border-none font-sans transition-all duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] bg-primary-strong text-white shadow-vb-primary hover:-translate-y-px"
            >
              {t.p2_cta}
            </a>

            {/* Sub-CTA */}
            <p className="text-[12px] text-text-3 text-center mt-3">
              {t.price_cancel} · {t.price_managed}
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
