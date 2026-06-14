'use client';

import React from 'react';
import GlassCard from './GlassCard';
import { useLanguage } from '@/lib/LanguageContext';

const HowItWorksSection: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: 1,
      title: t.how1_h,
      description: t.how1_p,
    },
    {
      number: 2,
      title: t.how2_h,
      description: t.how2_p,
    },
    {
      number: 3,
      title: t.how3_h,
      description: t.how3_p,
    },
  ];

  return (
    <section id="how" className="py-16 lg:py-[90px] relative z-10">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="text-[12.5px] font-bold tracking-[0.12em] uppercase text-primary mb-[14px]">
            {t.how_label}
          </div>
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold tracking-[-0.03em] leading-[1.1] text-text">
            {t.how_h}
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-[18px]">
          {steps.map((step, index) => (
            <GlassCard key={index} variant="step">
              {/* Step number */}
              <div className="w-[38px] h-[38px] rounded-[11px] bg-primary-soft text-primary text-[17px] font-extrabold flex items-center justify-center mb-[18px]">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="text-[19px] font-bold tracking-tight mb-2 text-text">
                {step.title}
              </h3>
              <p className="text-[14.5px] leading-[1.55] text-text-2 m-0">
                {step.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;