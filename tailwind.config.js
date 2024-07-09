/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.bg-rotate-90': {
          'transform': 'rotate(90deg)',
          'transform-origin': 'center center'
        },
        '.bg-rotate-0': {
          'transform': 'rotate(0deg)',
          'transform-origin': 'center center'
        },
      });
    },
  ],
}