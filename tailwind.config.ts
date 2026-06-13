import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f5f0e8', // cream — texto sobre fondo oscuro
          100: '#d8d5ce',
          200: '#b8b5ae',
          300: '#888780', // stone — texto secundario
          400: '#68675f',
          500: '#4a4840',
          600: '#3a3830',
          700: '#2a2820', // graphite — bordes y separadores
          800: '#1f1d19',
          900: '#1a1814', // carbon — fondos de tarjetas
          950: '#0a0908', // night — fondo base
        },
        accent: {
          300: '#e8d5a3', // dorado claro
          400: '#d4b86a', // dorado medio
          500: '#c9a84c', // gold — color principal de marca
          600: '#a8882a',
          700: '#8a6e1a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow-accent': '0 0 20px rgba(201, 168, 76, 0.25)',
        'glow-accent-lg': '0 0 40px rgba(201, 168, 76, 0.35)',
      },
    },
  },
  plugins: [],
}

export default config
