'use client';

import React from 'react';
import WaveformLogo from './WaveformLogo';
import { useLanguage } from '@/lib/LanguageContext';

const PhoneMockup: React.FC = () => {
  const { language, t } = useLanguage();

  // Avatar gradients for the chat interface
  const avatarGradients = [
    ['#1DAE5A', '#0E7C3C'],
    ['#3B82F6', '#1E40AF'],
    ['#F5A524', '#C2410C'],
    ['#A855F7', '#6D28D9'],
    ['#EC4899', '#9D174D'],
    ['#06B6D4', '#0E7490'],
  ];

  // Chat rows data with multilingual messages
  const chatRows = [
    {
      ini: 'ML',
      av: 0,
      name: 'María López',
      time: '9:41',
      unread: 2,
      messages: {
        es: 'Hola! Quiero más información del producto',
        en: 'Hi! I want more info about the product',
        pt: 'Olá! Quero mais informações do produto',
      },
    },
    {
      ini: 'CR',
      av: 1,
      name: 'Carlos Ramírez',
      time: '9:30',
      unread: 1,
      messages: {
        es: 'Perfecto, lo pago hoy',
        en: "Perfect, I'll pay today",
        pt: 'Perfeito, pago hoje',
      },
    },
    {
      ini: 'TB',
      av: 2,
      name: 'Tienda Bella',
      time: '9:15',
      unread: 0,
      messages: {
        es: 'Gracias! Te avisamos del envío',
        en: "Thanks! We'll let you know",
        pt: 'Obrigada! Avisamos sobre o envio',
      },
    },
    {
      ini: 'AS',
      av: 4,
      name: 'Ana Sofía',
      time: 'Ayer',
      unread: 0,
      messages: {
        es: 'Listo, muchas gracias 🙌',
        en: 'Done, thank you 🙌',
        pt: 'Pronto, muito obrigada 🙌',
      },
    },
    {
      ini: 'PG',
      av: 2,
      name: 'Pedro Gómez',
      time: 'Lun',
      unread: 0,
      messages: {
        es: 'Me encantó el servicio 😄',
        en: 'I loved the service 😄',
        pt: 'Adorei o atendimento 😄',
      },
    },
  ];

  return (
    <div className="relative flex justify-center items-center">
      {/* Background glow */}
      <div className="absolute w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(37,211,102,0.22),transparent_65%)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0" />

      {/* Phone container */}
      <div className="relative z-10">
        <div className="relative w-[300px] h-[614px] rounded-[44px] p-[11px] bg-gradient-to-br from-[#1e2723] to-[#0d120f] border border-[rgba(255,255,255,0.1)] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]">
          {/* Phone screen */}
          <div className="w-full h-full rounded-[34px] bg-bg overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[116px] h-[26px] bg-[#0d120f] rounded-b-2xl z-10" />

            {/* Status bar */}
            <div className="flex justify-between items-center px-[22px] pt-[13px] pb-[6px] text-xs font-semibold text-text">
              <span>9:41</span>
              <span>‎ 5G  100%</span>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 pb-3 border-b border-separator">
              <div className="flex items-center gap-2">
                <WaveformLogo width={20} height={20} color="#25D366" />
                <span className="text-base font-bold tracking-tight text-text">voiceback</span>
              </div>
              <div className="w-[30px] h-[30px] rounded-full bg-primary flex items-center justify-center text-[#062b15]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </div>

            {/* Chip row */}
            <div className="flex gap-[7px] px-[14px] py-[11px]">
              <span className="h-7 px-3 rounded-full text-xs font-semibold flex items-center gap-[5px] border bg-primary-soft text-primary border-transparent">
                {t.ph_all}
              </span>
              <span className="h-7 px-3 rounded-full text-xs font-semibold flex items-center gap-[5px] border border-border text-text-2">
                {t.ph_unread} <span className="bg-primary text-[#062b15] rounded-full px-[5px] text-[10px]">3</span>
              </span>
              <span className="h-7 px-3 rounded-full text-xs font-semibold flex items-center gap-[5px] border border-border text-text-2">
                {t.ph_fav}
              </span>
            </div>

            {/* Chat list */}
            <div>
              {chatRows.map((row, index) => (
                <div key={index} className="flex items-center gap-[11px] px-[14px] py-[9px]">
                  {/* Avatar */}
                  <div
                    className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center text-white font-semibold text-[15px] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]"
                    style={{
                      background: `linear-gradient(140deg, ${avatarGradients[row.av][0]}, ${avatarGradients[row.av][1]})`,
                    }}
                  >
                    {row.ini}
                  </div>

                  {/* Message content */}
                  <div className="flex-1 min-w-0 border-b border-separator pb-[9px]">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[14.5px] font-semibold text-text">{row.name}</span>
                      <span className={`text-[11px] ${row.unread ? 'text-primary font-semibold' : 'text-text-3'}`}>
                        {row.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-[5px] mt-[2px]">
                      <span className="text-[12.5px] text-text-2 whitespace-nowrap overflow-hidden text-ellipsis flex-1">
                        {row.messages[language]}
                      </span>
                      {row.unread > 0 && (
                        <span className="bg-primary text-[#062b15] rounded-full min-w-[18px] h-[18px] text-[11px] font-bold flex items-center justify-center px-[5px] ml-auto">
                          {row.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAB */}
            <div className="absolute right-[14px] bottom-[74px] w-[50px] h-[50px] rounded-[17px] bg-gradient-to-br from-primary to-primary-strong flex items-center justify-center text-[#062b15] shadow-vb-fab">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M11 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6" />
                <path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </div>

            {/* Tab bar */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-around px-[6px] py-[9px] pb-4 bg-[rgba(12,18,15,0.9)] backdrop-blur-sm border-t border-separator">
              <div className="flex flex-col items-center gap-[3px] text-[9.5px] font-medium text-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
                <span>{t.tab_chats}</span>
              </div>
              <div className="flex flex-col items-center gap-[3px] text-[9.5px] font-medium text-text-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
                </svg>
                <span>{t.tab_calls}</span>
              </div>
              <div className="flex flex-col items-center gap-[3px] text-[9.5px] font-medium text-text-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
                </svg>
                <span>{t.tab_contacts}</span>
              </div>
              <div className="flex flex-col items-center gap-[3px] text-[9.5px] font-medium text-text-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                </svg>
                <span>{t.tab_tools}</span>
              </div>
              <div className="flex flex-col items-center gap-[3px] text-[9.5px] font-medium text-text-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 0 1-4 0v-.1A1.7 1.7 0 0 0 7 19.4a1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0-1.2-2.9H1a2 2 0 0 1 0-4h.1A1.7 1.7 0 0 0 2.6 7a1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H7a1.7 1.7 0 0 0 1-1.5V1a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V7a1.7 1.7 0 0 0 1.5 1H23a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
                </svg>
                <span>{t.tab_settings}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;