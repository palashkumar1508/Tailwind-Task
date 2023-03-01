/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        'xs': '500px',
        '2xs': '400px',
      },
      spacing: {
        '5px': '5px',
        '22px': '22px',
      },
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        pink: {
          50: '#ffe6ee',
          100: '#ffccdd',
          200: '#ff99bb',
          300: '#ff6699',
          400: '#ff3377',
          500: '#ff0055',
          600: '#cc0044',
          700: '#990033',
          800: '#660022',
          900: '#4d0019',
        },
      },
    },
    container:{
      center:true,
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],


}
