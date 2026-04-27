/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A96E',
        goldLight: '#E8D5B0',
        cream: '#F5EDD8',
        surface: '#131825',
        primary: '#0B0F1A',
        faint: 'rgba(201,169,110,0.12)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', '"Geist"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

