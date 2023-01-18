/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        carina: "url('/carina_nircam.jpg')",
      },
      fontFamily: {
        inter: 'Inter',
        'acumin-pro-condensed': 'acumin-pro-condensed',
      },
    },
  },
  plugins: [],
};
