/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Franklin Gothic Medium"', '"Arial Narrow"', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'custom-image': "url('/bg.jpg')",
      },
    },
  },
  plugins: [],
}

