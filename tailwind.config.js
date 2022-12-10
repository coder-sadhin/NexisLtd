/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1170px'
    },
   extend: {
    colors: {
      'theme-primary': '#1678CB',
      'theme-secondary': '#3B8BEA',
      'theme-text': '#242424',
    },
    boxShadow: {
      'shadow': '1px -10px 25px rgba(201, 201, 201, 0.25), -1px 10px 25px rgba(147, 147, 147, 0.25)',
      'shadow-tow': '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
   },
  },
  plugins: [],
}