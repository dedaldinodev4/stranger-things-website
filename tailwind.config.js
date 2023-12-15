/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('../assets/st/banner2.jpg')", 
        'logo': "url('../assets/st/logo.png')",
      },
    },
  },
  plugins: [],
};
