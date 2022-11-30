/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: { max: '600px' },
        sm: '320px',
        formWidth: {max: "948px"}, 
        ...defaultTheme.screens
      },
      colors: {
        primary: "#ffffff",
        secondary: "#535353",
        disabled: "#CACACA",
        ...defaultTheme.colors
      },
      fontFamily: {
        'inter': ['Inter', ...defaultTheme.fontFamily.sans],
        'lato': ['Lato', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: []
}
