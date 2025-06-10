/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#3b82f6',
          600: '#2563eb',
          900: '#1e3a8a'
        },
        background: {
          light: '#ffffff',
          dark: '#0a0a0a'
        },
        surface: {
          light: '#f8fafc',
          dark: '#1a1a1a'
        },
        text: {
          primary: {
            light: '#1f2937',
            dark: '#f9fafb'
          },
          secondary: {
            light: '#6b7280',
            dark: '#9ca3af'
          }
        },
        gradient: {
          from: '#3b82f6',
          via: '#8b5cf6',
          to: '#ec4899'
        }
      },
      animation: {
        'gradient-text': 'gradient-text 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'draw-line': 'draw-line 2s ease-out forwards'
      },
      keyframes: {
        'gradient-text': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'draw-line': {
          '0%': { strokeDasharray: '0 100%' },
          '100%': { strokeDasharray: '100% 0' }
        }
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)'
      }
    }
  },
  plugins: []
}; 