import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-base':       '#F8F3F6',
        'text-main':     '#5C4B51',
        'text-sub':      '#9E8F96',
        'accent-pink':   '#ECAEBB',
        'accent-blue':   '#B5CBE8',
        'accent-purple': '#CDBFE3',
        'outer-bg':      '#E2D7DB',
      },
      fontFamily: {
        sans:  ['var(--font-gowun)', 'sans-serif'],
        cute:  ['var(--font-jua)',   'sans-serif'],
      },
      borderRadius: {
        'cloud':  '14px',
        'essay':  '10px',
        'media':  '8px',
        'pill':   '18px',
      },
      boxShadow: {
        'soft':  '0 10px 30px rgba(180, 160, 170, 0.2)',
        'inner': 'inset 0 2px 10px rgba(255,255,255,0.8)',
        'card':  '0 8px 20px rgba(0,0,0,0.06)',
        'btn':   '0 8px 20px rgba(181, 203, 232, 0.5)',
      },
      backdropBlur: {
        'glass': '8px',
      },
    },
  },
  plugins: [],
}

export default config
