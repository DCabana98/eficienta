/** @type {import('tailwindcss').Config} */
module.exports = {
  // RUTA ROBUSTA: Asegura que escanea todos los archivos React (.jsx, .tsx) 
  // en la carpeta src y el index.html principal.
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};