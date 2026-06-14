import { Metadata } from 'next';
import WaveformLogo from '@/components/WaveformLogo';

export const metadata: Metadata = {
  title: 'Support - Voiceback Help Center',
  description: 'Get help with your Voiceback professional business number. Find answers to common questions about WhatsApp, calls, payments, and more.',
};

export default function SupportPage() {
  const faqs = [
    {
      question: '¿Cómo funciona el número profesional?',
      answer: 'Tu número profesional de Voiceback te permite recibir llamadas y WhatsApp de clientes sin usar tu línea personal. Es completamente independiente y está diseñado para negocios.',
    },
    {
      question: '¿Puedo usar WhatsApp Business?',
      answer: 'Sí, Voiceback se integra perfectamente con WhatsApp Business API para que puedas gestionar todos tus chats de clientes desde una sola app.',
    },
    {
      question: '¿Cómo configuro los pagos?',
      answer: 'Conecta tu cuenta de Mercado Pago, Wompi, Clip u otros procesadores. Luego podrás enviar enlaces de pago directamente en los chats.',
    },
    {
      question: '¿El AI asistente habla español?',
      answer: 'Sí, el asistente de IA está entrenado específicamente para LATAM y puede responder en español de manera natural y profesional.',
    },
    {
      question: '¿Hay contrato o permanencia?',
      answer: 'No, todos nuestros planes son sin contrato. Puedes cancelar en cualquier momento desde la app.',
    },
    {
      question: '¿En qué países está disponible?',
      answer: 'Voiceback está disponible en México, Colombia, Argentina, Brasil, Chile y Perú, con números locales en cada país.',
    },
  ];

  return (
    <div className="min-h-screen px-6 py-20 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <WaveformLogo width={28} height={28} color="#25D366" />
            <span className="text-xl font-bold tracking-tight text-text">voiceback</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-text">
            Centro de Ayuda
          </h1>
          <p className="text-lg text-text-2">
            Encuentra respuestas a las preguntas más frecuentes sobre Voiceback
          </p>
        </div>

        {/* FAQ */}
        <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-glass border border-border rounded-vb-xl p-6 backdrop-blur-md"
            >
              <h3 className="text-lg font-semibold text-text mb-3">
                {faq.question}
              </h3>
              <p className="text-text-2 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="text-center mt-16">
          <div className="bg-glass border border-border rounded-vb-xl p-8 backdrop-blur-md max-w-lg mx-auto">
            <h2 className="text-xl font-bold text-text mb-4">
              ¿Necesitas más ayuda?
            </h2>
            <p className="text-text-2 mb-6">
              Nuestro equipo está aquí para ayudarte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hola@voiceback.co"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-primary-strong text-white font-semibold transition-all duration-150 hover:-translate-y-px"
              >
                📧 hola@voiceback.co
              </a>
              <a
                href="https://wa.me/5215512345678"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-surface border border-border-strong text-text font-semibold transition-all duration-150 hover:border-primary"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Back to home */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="text-primary hover:text-primary-hover transition-colors"
          >
            ← Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}