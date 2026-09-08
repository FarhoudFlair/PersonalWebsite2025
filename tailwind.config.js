const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: 'rgb(var(--canvas) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        slate: {
          DEFAULT: 'rgb(var(--slate) / <alpha-value>)',
          ...defaultTheme.colors.slate,
        },
        trace: 'rgb(var(--trace) / <alpha-value>)',
        signal: 'rgb(var(--signal) / <alpha-value>)',
        safety: 'rgb(var(--safety) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
