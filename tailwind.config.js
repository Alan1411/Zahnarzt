/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50: '#eef9f8',
          100: '#d6f0ee',
          200: '#b0e1de',
          300: '#7ccbc7',
          400: '#44aaa6',
          500: '#2b8d8a',
          600: '#1f716e',
          700: '#1c5a58',
          800: '#1a4947',
          900: '#173d3c',
          950: '#0b2625',
        },
        sand: {
          50: '#fbf9f7',
          100: '#f4efe9',
          200: '#e9dfd2',
          300: '#d9c8b4',
          400: '#c5a98c',
          500: '#b3916f',
          600: '#a07d5e',
          700: '#85664e',
          800: '#6e5544',
          900: '#5b473a',
          950: '#332719',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.6s ease-out both',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
