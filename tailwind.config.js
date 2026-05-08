
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'minder-yellow': '#FFC300',
        'minder-black': '#0A0A0A',
        'minder-gray': '#777777',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
      boxShadow: {
        'hard-black': '6px 6px 0px #0A0A0A',
        'hard-yellow': '6px 6px 0px #FFC300',
        'hard-black-hover': '10px 10px 0px #0A0A0A',
        'hard-yellow-hover': '10px 10px 0px #FFC300',
      }
    },
  },
  plugins: [],
}
