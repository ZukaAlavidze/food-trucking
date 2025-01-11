/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        transform: 'transform',
      },
    },
  },
  plugins: [],
  safelist: [
    'rotate-y-180',
    'preserve-3d',
    'backface-hidden',
    'perspective-1000'
  ]
};
