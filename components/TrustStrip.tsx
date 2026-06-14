'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const TrustStrip: React.FC = () => {
  const { t } = useLanguage();

  const countries = [
    { flag: '🇧🇷', name: t.c_brazil },
    { flag: '🇨🇴', name: 'Colombia' },
    { flag: '🇲🇽', name: 'México' },
    { flag: '🇦🇷', name: 'Argentina' },
    { flag: '🇨🇱', name: 'Chile' },
    { flag: '🇵🇪', name: 'Perú' },
  ];

  return (
    <div className="py-7 border-t border-b border-separator">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex items-center justify-center gap-[18px] sm:gap-[38px] flex-wrap gap-y-[18px]">
          {/* Lead text */}
          <span className="flex items-center text-[14.5px] font-bold text-text">
            {t.trust_lead}
          </span>

          {/* Country flags and names */}
          {countries.map((country, index) => (
            <span key={index} className="flex items-center gap-[9px] text-[14.5px] font-medium text-text-2">
              <span className="text-[22px]">{country.flag}</span>
              <span>{country.name}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;