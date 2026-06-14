'use client';

import React from 'react';
import GlassCard from './GlassCard';
import { useLanguage } from '@/lib/LanguageContext';

const ToolsSection: React.FC = () => {
  const { language, t } = useLanguage();

  // Tools data with multilingual support
  const tools = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
          <path d="M3 9l1.5-5h15L21 9M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9M3 9h18M9 20v-6h6v6" />
        </svg>
      ),
      color: '#1DAE5A',
      titles: {
        es: ['Catálogo', 'Muestra tus productos'],
        en: ['Catalog', 'Show your products'],
        pt: ['Catálogo', 'Mostre seus produtos'],
      },
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
          <rect x="2" y="5" width="20" height="14" rx="2.5" />
          <path d="M2 10h20" />
        </svg>
      ),
      color: '#38A3F5',
      titles: {
        es: ['Pagos', 'Cobra con enlaces'],
        en: ['Payments', 'Get paid with links'],
        pt: ['Pagamentos', 'Receba com links'],
      },
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
          <path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1zM16 8a5 5 0 0 1 0 8" />
        </svg>
      ),
      color: '#F5A524',
      titles: {
        es: ['Difusión', 'Envía promociones'],
        en: ['Broadcast', 'Send promotions'],
        pt: ['Transmissão', 'Envie promoções'],
      },
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
          <path d="M9 17l-5-5 5-5M4 12h11a5 5 0 0 1 5 5v2" />
        </svg>
      ),
      color: '#A855F7',
      titles: {
        es: ['Respuestas rápidas', 'Ahorra tiempo'],
        en: ['Quick replies', 'Save time'],
        pt: ['Respostas rápidas', 'Economize tempo'],
      },
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      ),
      color: '#EC4899',
      titles: {
        es: ['Horario', 'Respuestas automáticas'],
        en: ['Business hours', 'Auto replies'],
        pt: ['Horário', 'Respostas automáticas'],
      },
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
          <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
        </svg>
      ),
      color: '#14B8A6',
      titles: {
        es: ['Asistente IA', 'Responde por ti'],
        en: ['AI assistant', 'Replies for you'],
        pt: ['Assistente IA', 'Responde por você'],
      },
    },
  ];

  return (
    <section id="tools" className="py-16 lg:py-[90px] relative z-10">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-11">
          <div className="text-[12.5px] font-bold tracking-[0.12em] uppercase text-primary mb-[14px]">
            {t.tools_label}
          </div>
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold tracking-[-0.03em] leading-[1.1] text-text">
            {t.tools_h}
          </h2>
        </div>

        {/* Tools grid */}
        <div className="grid md:grid-cols-3 gap-[14px]">
          {tools.map((tool, index) => (
            <GlassCard key={index} variant="tool">
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `${tool.color}22`,
                  color: tool.color,
                }}
              >
                {tool.icon}
              </div>

              {/* Content */}
              <div>
                <div className="text-[15.5px] font-semibold text-text">
                  {tool.titles[language][0]}
                </div>
                <div className="text-[13px] text-text-2 mt-[1px]">
                  {tool.titles[language][1]}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;