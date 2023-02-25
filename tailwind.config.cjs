/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#892CDC',
        'primary-200': '#BC6FF1',
        'primary-300': '#fdf6fd',
        'accent-100': '#D9ACF5',
        'accent-200': '#fff4ff',
        'text-100': '#EEEEEE',
        'text-200': '#FDEBED',
        'bg-100': '#222831',
        'bg-200': '#393E46',
        'bg-300': '#454e59'
      }
    }
  },
  plugins: []
}
