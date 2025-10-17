// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Aseguramos que escanea TODOS los archivos en src y el index.html
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};