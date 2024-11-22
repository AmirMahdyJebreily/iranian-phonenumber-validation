/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/*.js"],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 500ms ease-in-out',
      },
      keyframes:{
        wiggle:{
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(2deg)' },
          '75%': { transform: 'rotate(-2deg)' },
        }
      }
    },
  },
  plugins: [],
}

