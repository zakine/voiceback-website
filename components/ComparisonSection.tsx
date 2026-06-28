'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const CHECK = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const CROSS = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const PARTIAL = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14" />
  </svg>
);

export default function ComparisonSection() {
  const { t } = useLanguage();

  const rows = [
    { feature: t.cmp_f1, personal: 'check',   business: 'check',   voiceback: 'check'   },
    { feature: t.cmp_f2, personal: 'cross',   business: 'check',   voiceback: 'check'   },
    { feature: t.cmp_f3, personal: 'cross',   business: 'partial', voiceback: 'check'   },
    { feature: t.cmp_f4, personal: 'cross',   business: 'cross',   voiceback: 'check'   },
    { feature: t.cmp_f5, personal: 'cross',   business: 'cross',   voiceback: 'check'   },
    { feature: t.cmp_f6, personal: 'cross',   business: 'cross',   voiceback: 'check'   },
    { feature: t.cmp_f7, personal: 'cross',   business: 'partial', voiceback: 'check'   },
    { feature: t.cmp_f8, personal: 'cross',   business: 'cross',   voiceback: 'check'   },
    { feature: t.cmp_f9, personal: 'check',   business: 'check',   voiceback: 'check'   },
  ];

  const Cell = ({ value, highlight }: { value: string; highlight?: boolean }) => {
    const color =
      value === 'check'   ? (highlight ? '#25D366' : '#6b8f74') :
      value === 'cross'   ? '#4a4a4a' :
      '#8a7a3a';

    const bg =
      value === 'check'   ? (highlight ? 'rgba(37,211,102,0.12)' : 'rgba(37,211,102,0.06)') :
      value === 'cross'   ? 'rgba(255,255,255,0.03)' :
      'rgba(245,165,36,0.08)';

    return (
      <td className="py-[14px] px-3 text-center">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto"
          style={{ backgroundColor: bg, color }}
        >
          {value === 'check'   && <CHECK />}
          {value === 'cross'   && <CROSS />}
          {value === 'partial' && <PARTIAL />}
        </div>
      </td>
    );
  };

  return (
    <section className="py-16 lg:py-[90px] relative z-10">
      <div className="max-w-[1120px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-11">
          <div className="text-[12.5px] font-bold tracking-[0.12em] uppercase text-primary mb-[14px]">
            {t.cmp_label}
          </div>
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4 text-text">
            {t.cmp_h}
          </h2>
          <p className="text-[17px] text-text-2 leading-[1.6] max-w-[560px] mx-auto">
            {t.cmp_sub}
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-separator">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-separator">
                <th className="py-4 px-5 text-left text-[13px] font-semibold text-text-2 w-[40%]">
                  {t.cmp_feature}
                </th>
                <th className="py-4 px-3 text-center text-[13px] font-semibold text-text-2">
                  {t.cmp_col1}
                </th>
                <th className="py-4 px-3 text-center text-[13px] font-semibold text-text-2">
                  {t.cmp_col2}
                </th>
                <th className="py-4 px-3 text-center min-w-[130px]"
                  style={{ background: 'rgba(37,211,102,0.06)' }}>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[13px] font-bold text-primary">Voiceback</span>
                    <span className="text-[10px] font-semibold text-primary bg-primary-soft px-2 py-0.5 rounded-full uppercase tracking-wide">
                      {t.cmp_recommended}
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-separator last:border-0"
                  style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}
                >
                  <td className="py-[14px] px-5 text-[14.5px] text-text font-medium">
                    {row.feature}
                  </td>
                  <Cell value={row.personal} />
                  <Cell value={row.business} />
                  <Cell value={row.voiceback} highlight />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-5 flex-wrap">
          {[
            { icon: <CHECK />, color: '#25D366', label: t.cmp_yes },
            { icon: <PARTIAL />, color: '#F5A524', label: t.cmp_partial },
            { icon: <CROSS />, color: '#4a4a4a', label: t.cmp_no },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-[13px] text-text-2">
              <span style={{ color: item.color }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
