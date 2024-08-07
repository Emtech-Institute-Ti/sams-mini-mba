/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primaryBlue: '#0067A0',
        primaryPurple: '#000054',
        primaryViolet: '#7865EE',
        secondaryPurple: '#3339A3',
        scarlet: '#491B56',
        secondaryBlue: '#7BAEEE',
        gray: '#1A1A1A',
        customBlack: '#000000',
        customBlue: '#000054',
        customWhite: '#F5F5F5',
        customGray: '#D9D9D9',
        thirdBlue: '#0068A2',
        primaryGray: '#D1D1D1',
        secondaryWhite: '#EBECFF',
        thirdWhite: '#F8F8F8',
      },
    },
  },
  plugins: [],
};
