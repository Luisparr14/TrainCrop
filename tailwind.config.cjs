/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#2563eb',
        'primary-200': '#598EF3',
        'primary-300': '#D3E6FE',
        'accent-100': '#d946ef',
        'accent-200': '#fae8ff',
        'text-100': '#cbd5e1',
        'text-200': '#94a3b8',
        'bg-100': '#1e293b',
        'bg-200': '#334155',
        'bg-300': '#475569'
      }
    }
  },
  plugins: []
}
