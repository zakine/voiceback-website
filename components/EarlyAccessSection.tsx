'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const EarlyAccessSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 lg:py-[90px] relative z-10">
      <div className="max-w-[640px] mx-auto px-6 text-center">

        <div className="text-[12.5px] font-bold tracking-[0.12em] uppercase text-primary mb-[14px]">
          {t.beta_label}
        </div>

        <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4 text-text">
          {t.beta_h}
        </h2>

        <p className="text-[17px] text-text-2 leading-[1.6] mb-10 max-w-[480px] mx-auto">
          {t.beta_sub}
        </p>

        <a
          href={`https://wa.me/33667271793?text=${encodeURIComponent(t.beta_wa_msg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 h-14 px-8 rounded-[14px] bg-primary text-[#062b15] font-bold text-[17px] transition-transform duration-150 hover:-translate-y-0.5"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L0 24l6.335-1.502A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.733.885.936-3.617-.235-.373A9.818 9.818 0 0112 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.421-4.398 9.818-9.818 9.818z"/>
          </svg>
          {t.beta_cta}
        </a>

        <p className="text-[13px] text-text-3 mt-5">
          {t.beta_note}
        </p>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
