/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
    },
    gridTemplateColumns: {
      '1/3': '2fr 1fr',
      '2/3': '1fr 2fr',
      '1': 'auto',
      '2': '1fr 1fr',
      '3': '1fr 1fr 1fr',
      '4': '1fr 1fr 1fr 1fr'
    },
    colors: {
      'purple':'#734fc9',
      'purple-h':'#3b805b',
      'dg-100':'#121212',
      'dg-200':'#1f1f1f',
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
