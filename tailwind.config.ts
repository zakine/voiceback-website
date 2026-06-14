import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Green
        primary: {
          DEFAULT: '#25D366',
          strong: '#1DAE5A',
          hover: '#199C50',
          active: '#15823f',
          soft: 'rgba(37, 211, 102, 0.14)',
          faint: 'rgba(37, 211, 102, 0.08)',
        },
        // Semantic
        success: '#25D366',
        warning: '#F5A524',
        danger: '#F0483B',
        info: '#38A3F5',
        // Backgrounds
        bg: {
          DEFAULT: '#0A0F0D',
          deep: '#060908',
        },
        surface: {
          DEFAULT: '#121A17',
          2: '#1A2521',
          3: '#233029',
        },
        // Glass
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.045)',
          strong: 'rgba(255, 255, 255, 0.075)',
        },
        // Chat bubbles
        bubble: {
          out: '#144D37',
          in: '#1C2622',
          chat: '#0A0F0D',
        },
        // Borders
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.075)',
          strong: 'rgba(255, 255, 255, 0.14)',
        },
        separator: 'rgba(255, 255, 255, 0.06)',
        // Text
        text: {
          DEFAULT: '#E9EFEC',
          2: '#8C9D96',
          3: '#5C6B65',
          on: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'vb-sm': '8px',
        'vb-md': '12px',
        'vb-lg': '18px',
        'vb-xl': '26px',
        'vb-pill': '999px',
      },
      spacing: {
        'vb-1': '4px',
        'vb-2': '8px',
        'vb-3': '12px',
        'vb-4': '16px',
        'vb-5': '20px',
        'vb-6': '24px',
        'vb-8': '32px',
        'vb-10': '40px',
        'vb-12': '48px',
      },
      boxShadow: {
        'vb-card': '0 1px 2px rgba(0,0,0,0.4)',
        'vb-elev': '0 8px 28px -8px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)',
        'vb-modal': '0 -8px 40px rgba(0,0,0,0.5)',
        'vb-fab': '0 6px 20px -4px rgba(37,211,102,0.5), 0 2px 8px rgba(0,0,0,0.35)',
        'vb-primary': '0 4px 18px -4px rgba(37,211,102,0.5)',
      },
      animation: {
        'fade-up': 'fadeUp 0.24s cubic-bezier(0.22, 1, 0.36, 1)',
        'slide-in': 'slideIn 0.24s cubic-bezier(0.22, 1, 0.36, 1)',
        'pop': 'pop 0.24s cubic-bezier(0.22, 1, 0.36, 1)',
        'sheet-up': 'sheetUp 0.38s cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeUp: {
          'from': { transform: 'translateY(9px)' },
          'to': { transform: 'none' },
        },
        slideIn: {
          'from': { transform: 'translateX(26px)' },
          'to': { transform: 'none' },
        },
        pop: {
          'from': { transform: 'scale(0.94)' },
          'to': { transform: 'scale(1)' },
        },
        sheetUp: {
          'from': { transform: 'translateY(100%)' },
          'to': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config