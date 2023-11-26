/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js,css}",
    "./public/*.{html,js,css}",
    "./views/*.ejs",
    "./views/**/*.ejs"
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
}