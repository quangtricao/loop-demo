/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        heading1: '51px',
        heading2: '22px',
      },
      colors: {
        background: '#2B2B2B',
        buttonBackground: '#A259FF',
      },
    },
  },
  plugins: [],
};
