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
        'kepler-std': 'kepler-std',
        'acumin-pro-condensed': 'acumin-pro-condensed',
        'hwt-aetna-streamer-outline': 'hwt-aetna-streamer-outline',
        'operetta-32': 'operetta-32',
        'acier-bat-gris': 'acier-bat-gris',
      },
    },
  },
  plugins: [],
};
