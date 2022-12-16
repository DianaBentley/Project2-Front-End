/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        'book-bg': "url('/src/img/bookbg.jpg')",
      }
    },
  },
  plugins: [],
}
