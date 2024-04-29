/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      'purple':'#734fc9',
      'purple-h':'#3b805b',
      'dg-100':'#131419',
      'dg-200':'#1c1c24',
      'dg-300': '#2d2d3a',
      'dg-400': '#5f5f6e',
      'dg-500': '#7A7A8A',
      'white':'#fff',
      'gr': '#373737',
      'black':'#000'
    },
    boxShadow: {
      'nav':'1px 1px 8px 2px #0c0c0c'
    },
    screens: {
      'sm': '600px',
      'md': '1024px',
      'lg': '1440px'
    },
  },
  plugins: [],
}
