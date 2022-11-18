/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: { max: '600px' },
        sm: '320px',
        ...defaultTheme.screens
      },
      colors: {
        primary: "#E5E5E5",
        secondary: "#535353",
        ...defaultTheme.colors
      }
    }
  },
  plugins: []
}
