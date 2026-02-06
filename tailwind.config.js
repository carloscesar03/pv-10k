/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          green: '#00D05E',
          dark: '#0a0a0a',
          card: '#121212',
          border: '#1F1F1F'
        }
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.95)), url('https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?q=80&w=1920&auto=format&fit=crop')",
      }
    },
  },
  plugins: [],
}