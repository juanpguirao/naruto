/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'naruto': "url('./img/fondo2.webp')",
      },
      fontFamily:{
        'Naruto':['Naruto']
      }
    },
  },
  plugins: [],
}
