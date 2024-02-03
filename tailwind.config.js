/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        H1: '67px',
        H2: '51px',
        H3: '38px',
        H4: '28px',
        H5: '22px',
      },
      colors: {
        background: '#2B2B2B',
        background2: '#3B3B3B',
        text1: '#FFFFFF',
        text2: '#858584',
        buttonBackground: '#A259FF',
      },
      screens: {
        sm: '375px',
        md: '834px',
      },
    },
    fontFamily: {
      sans: ['Work Sans'],
    },
  },
  plugins: [],
};
