'use client';

import React from 'react';
import GlassCard from './GlassCard';
import { useLanguage } from '@/lib/LanguageContext';

const PricingSection: React.FC = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t.p1_name,
      price: '$9',
      period: ' /mes',
      features: [t.p1_1, t.p1_2, t.p1_3, t.p1_4],
      cta: t.p1_cta,
      featured: false,
    },
    {
      name: t.p2_name,
      price: '$19',
      period: ' /mes',
      tag: t.p2_tag,
      features: [t.p2_1, t.p2_2, t.p2_3, t.p2_4, t.p2_5],
      cta: t.p2_cta,
      featured: true,
    },
  ];

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

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-[18px] max-w-[760px] mx-auto">
          {plans.map((plan, index) => (
            <GlassCard
              key={index}
              variant={plan.featured ? 'featured-price' : 'price'}
              hover={false}
            >
              {/* Featured tag */}
              {plan.tag && (
                <div className="inline-flex items-center gap-[6px] text-xs font-bold text-primary bg-primary-soft px-[10px] py-1 rounded-full mb-4 uppercase tracking-[0.05em]">
                  {plan.tag}
                </div>
              )}

              {/* Plan name */}
              <div className="text-xl font-bold mb-[6px] text-text">{plan.name}</div>

              {/* Price */}
              <div className="mb-[22px]">
                <span className="text-[42px] font-extrabold tracking-[-0.03em] text-text">{plan.price}</span>
                <span className="text-base font-medium text-text-2">{plan.period}</span>
              </div>

              {/* Features list */}
              <ul className="list-none p-0 m-0 mb-[22px] flex flex-col gap-[11px]">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-[10px] text-[14.5px] text-text">
                    <span className="text-primary flex-shrink-0 mt-[1px]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <a
                href="/download"
                className={`inline-flex items-center justify-center w-full h-[54px] px-[26px] text-base font-semibold rounded-xl cursor-pointer border-none font-sans transition-all duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  plan.featured
                    ? 'bg-primary-strong text-white shadow-vb-primary hover:-translate-y-px'
                    : 'bg-surface text-text border border-border-strong hover:border-primary'
                }`}
              >
                {plan.cta}
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;