import { Metadata } from 'next';
import WaveformLogo from '@/components/WaveformLogo';

export const metadata: Metadata = {
  title: 'Download Voiceback - Professional Business Number App',
  description: 'Download Voiceback for iOS and Android. Get your professional business number and manage WhatsApp, calls, and AI assistant in one app.',
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
      <div className="max-w-lg text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <WaveformLogo width={32} height={32} color="#25D366" />
          <span className="text-2xl font-bold tracking-tight text-text">voiceback</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-text">
          Download Voiceback
        </h1>
        <p className="text-lg text-text-2 mb-8">
          Get your professional business number and start managing customer communications with AI.
        </p>

        {/* Store buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://apps.apple.com/app/voiceback"
            className="inline-flex items-center gap-3 h-14 px-6 rounded-xl bg-white text-[#0A0F0D] transition-transform duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A0F0D">
              <path d="M17.05 12.6c0-2 1.6-2.95 1.67-3-.91-1.33-2.33-1.51-2.83-1.53-1.2-.12-2.35.71-2.96.71-.61 0-1.55-.69-2.55-.67-1.31.02-2.52.76-3.2 1.94-1.36 2.37-.35 5.87.98 7.79.65.94 1.42 2 2.43 1.96.97-.04 1.34-.63 2.52-.63 1.17 0 1.5.63 2.53.61 1.04-.02 1.7-.96 2.34-1.9.73-1.09 1.04-2.14 1.05-2.2-.02-.01-2.02-.77-2.04-3.07zM15.1 5.94c.54-.65.9-1.56.8-2.46-.78.03-1.71.51-2.27 1.16-.5.58-.93 1.5-.81 2.39.86.06 1.74-.44 2.28-1.09z" />
            </svg>
            <div className="text-left">
              <div className="text-xs font-medium opacity-70">Download on the</div>
              <div className="text-lg font-bold">App Store</div>
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.voiceback.app"
            className="inline-flex items-center gap-3 h-14 px-6 rounded-xl bg-white text-[#0A0F0D] transition-transform duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5"
          >
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path d="M3.6 2.4c-.3.3-.5.8-.5 1.4v16.4c0 .6.2 1.1.5 1.4l.1.1L13 12.1v-.2L3.7 2.3l-.1.1z" fill="#00D2FF" />
              <path d="M16.3 15.3l-3.3-3.2v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2-.1.1z" fill="#FFCE00" />
              <path d="M16.4 15.2L13 11.9 3.6 21.4c.4.4 1 .4 1.7.1l11.1-6.3" fill="#00F076" />
              <path d="M16.4 8.6L5.3 2.4c-.7-.4-1.3-.3-1.7.1L13 11.9l3.4-3.3z" fill="#FF3A44" />
            </svg>
            <div className="text-left">
              <div className="text-xs font-medium opacity-70">Get it on</div>
              <div className="text-lg font-bold">Google Play</div>
            </div>
          </a>
        </div>

        {/* Features */}
        <div className="text-sm text-text-2">
          <p>✓ Professional business number</p>
          <p>✓ WhatsApp + Calls + AI assistant</p>
          <p>✓ Payment links and catalog</p>
          <p>✓ Built for LATAM entrepreneurs</p>
        </div>

        {/* Back to home */}
        <div className="mt-8">
          <a
            href="/"
            className="text-primary hover:text-primary-hover transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}