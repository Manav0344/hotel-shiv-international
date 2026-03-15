/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        accent: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        gold: {
          50: '#fdf8ee',
          100: '#f9edcf',
          200: '#f3d99a',
          300: '#edc063',
          400: '#e8a83d',
          500: '#d4891f',
          600: '#b86a17',
          700: '#934f16',
          800: '#783f18',
          900: '#643517',
        },
        charcoal: {
          800: '#1a1a2e',
          900: '#0d0d1a',
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        }
      }
    },
  },
  plugins: [],
}
