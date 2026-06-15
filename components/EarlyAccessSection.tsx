'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const EarlyAccessSection: React.FC = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [spotsData, setSpotsData] = useState({
    spotsLeft: 47,
    totalSpots: 100,
    loading: true
  });

  // Charger le compteur réel depuis Supabase
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch('/api/early-access/count');
        const data = await response.json();
        setSpotsData({
          spotsLeft: data.spotsLeft,
          totalSpots: data.total,
          loading: false
        });
      } catch (error) {
        console.error('Erreur chargement compteur:', error);
        setSpotsData(prev => ({ ...prev, loading: false }));
      }
    };

    fetchCount();
  }, []);

  const content = {
    es: {
      badge: '🚀 PREVIEW ACCESS',
      title: 'Sé de los primeros en usar Voiceback',
      subtitle: 'Inscríbete ahora y obtén 1 año GRATIS cuando lancemos',
      spotsText: 'Quedan solo',
      spotsLeft: 'lugares',
      emailPlaceholder: 'tu@email.com',
      ctaButton: 'Reservar mi lugar gratis',
      benefits: [
        '✨ Acceso anticipado a la app',
        '🎁 1 año de plan Pro completamente gratis',
        '🏆 Status de miembro fundador',
        '📞 Tu número profesional antes que nadie'
      ],
      successTitle: '¡Genial! Tu lugar está reservado',
      successMessage: 'Te contactaremos cuando esté listo el early access.',
      disclaimer: 'Sin spam. Solo te contactamos cuando esté listo. ✌️'
    },
    en: {
      badge: '🚀 PREVIEW ACCESS',
      title: 'Be among the first to use Voiceback',
      subtitle: 'Sign up now and get 1 year FREE when we launch',
      spotsText: 'Only',
      spotsLeft: 'spots left',
      emailPlaceholder: 'your@email.com',
      ctaButton: 'Reserve my free spot',
      benefits: [
        '✨ Early access to the app',
        '🎁 1 year of Pro plan completely free',
        '🏆 Founding member status',
        '📞 Your professional number before everyone'
      ],
      successTitle: 'Great! Your spot is reserved',
      successMessage: 'We\'ll contact you when early access is ready.',
      disclaimer: 'No spam. We only contact you when it\'s ready. ✌️'
    },
    pt: {
      badge: '🚀 PREVIEW ACCESS',
      title: 'Seja um dos primeiros a usar a Voiceback',
      subtitle: 'Cadastre-se agora e ganhe 1 ano GRÁTIS quando lançarmos',
      spotsText: 'Restam apenas',
      spotsLeft: 'vagas',
      emailPlaceholder: 'seu@email.com',
      ctaButton: 'Reservar minha vaga grátis',
      benefits: [
        '✨ Acesso antecipado ao app',
        '🎁 1 ano do plano Pro completamente grátis',
        '🏆 Status de membro fundador',
        '📞 Seu número profissional antes de todos'
      ],
      successTitle: 'Ótimo! Sua vaga está reservada',
      successMessage: 'Entraremos em contato quando o early access estiver pronto.',
      disclaimer: 'Sem spam. Só entramos em contato quando estiver pronto. ✌️'
    }
  };

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          language
        })
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        // Mettre à jour le compteur après inscription
        setSpotsData(prev => ({
          ...prev,
          spotsLeft: Math.max(0, prev.spotsLeft - 1)
        }));
      } else {
        console.error('Erreur inscription:', result.error);
        // Tu peux ajouter un état pour afficher l'erreur à l'utilisateur
        alert(result.error || 'Erreur lors de l\'inscription');
      }

    } catch (error) {
      console.error('Erreur réseau:', error);
      alert('Erreur de connexion. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-16 lg:py-20 relative z-10">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center py-16 px-8 rounded-vb-xl bg-gradient-to-br from-[rgba(37,211,102,0.14)] to-[rgba(20,77,55,0.18)] border border-[rgba(37,211,102,0.3)] relative overflow-hidden">
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(37,211,102,0.25),transparent_70%)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none" />

            <div className="relative z-10">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-3xl font-bold text-text mb-4">{t.successTitle}</h2>
              <p className="text-lg text-text-2">{t.successMessage}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-20 relative z-10">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="relative py-12 px-8 lg:py-16 lg:px-12 rounded-vb-xl bg-gradient-to-br from-[rgba(37,211,102,0.12)] to-[rgba(20,77,55,0.15)] border border-[rgba(37,211,102,0.3)] overflow-hidden">
          {/* Background effects */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(37,211,102,0.2),transparent_65%)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />
          <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-[radial-gradient(circle,rgba(37,211,102,0.15),transparent_70%)] pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-[#062b15] font-bold text-sm mb-6 uppercase tracking-wider">
                {t.badge}
              </div>

              {/* Title */}
              <h2 className="text-3xl lg:text-4xl font-extrabold text-text mb-4 tracking-tight">
                {t.title}
              </h2>

              <p className="text-lg text-text-2 mb-8">
                {t.subtitle}
              </p>

              {/* Compteur */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-glass border border-border rounded-full">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-text-2 text-sm">{t.spotsText}</span>
                  <span className="text-primary font-bold text-lg">
                    {spotsData.loading ? '...' : spotsData.spotsLeft}
                  </span>
                  <span className="text-text-2 text-sm">/{spotsData.totalSpots} {t.spotsLeft}</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-3 mb-10 max-w-lg mx-auto">
                {t.benefits.map((benefit, index) => (
                  <div key={index} className="text-sm text-text-2 text-left">
                    {benefit}
                  </div>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  required
                  className="flex-1 h-12 px-4 rounded-xl bg-surface border border-border-strong text-text placeholder-text-3 focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="h-12 px-6 rounded-xl bg-primary text-black font-bold transition-all duration-150 hover:-translate-y-0.5 hover:shadow-vb-primary disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg border border-black/20"
                >
                  {isSubmitting ? '...' : t.ctaButton}
                </button>
              </form>

              <p className="text-xs text-text-3 mt-4">
                {t.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;