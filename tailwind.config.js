/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fcf9f4',
          100: '#f6f0e6',
          200: '#ebdcc4',
          300: '#dec0a0',
          400: '#ce9d73',
          500: '#c2804f',
          600: '#b4663f',
          700: '#954f33',
          800: '#7b422f',
          900: '#643729',
          950: '#361b14',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

