/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #030516, #0C2645, #030516)',
        'gradient-radial': 'radial-gradient(circle, rgba(255,255,255,0.8) 20%, rgba(0,0,0,0) 70%)',
      },
      keyframes: {
        moveLight: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      'animation': {
  'move-light': 'moveLight 2s infinite linear',
},

    },
  },
  plugins: [],
};
