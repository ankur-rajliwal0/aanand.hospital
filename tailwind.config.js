/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: '#1D70B8',
        brandLight: '#E8F5E9',
        textDark: '#333333',
        textLight: '#666666',
      }
    },
  },
  plugins: [],
}
