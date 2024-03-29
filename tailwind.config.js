/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7E00C4',
        'font-01': '#1D2939',
        'font-02': 'rgba(33, 6, 57, 0.6)',
        'font-03': '#101828',
        cyan: 'rgba(0, 204, 205, 0.2)',
        white: '#fff',
        black: '#000',
        grey: '#667085',
      },
      screens: {
        xs: '425px',
        msm: '600px',
        mlg: '855px',
      },
    },
  },
  plugins: [],
}
