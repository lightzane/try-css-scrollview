import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{tsx,css}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        enter: 'enter .5s ease-in-out forwards',
      },
      keyframes: {
        enter: {
          from: {
            opacity: 0,
            filter: 'blur(12px)',
            transform: 'translateY(1.25rem)',
          },
          to: {
            opacity: 1,
            filter: 'blur(0)',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
