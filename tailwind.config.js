/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7E00C4',
        'font-01': '#1D2939',
        'font-02': 'rgba(33, 6, 57, 0.6)',
        cyan: 'rgba(0, 204, 205, 0.2)',
        white: '#fff',
        black: '#000',
      },
      screens: {
        xs: { max: '425px' },
        sm: { max: '600px' },
        md: { max: '765px' },
        mlg: { max: '855px' },
        lg: { max: '1024px' },
        xl: { max: '1024px' },
      },
    },
  },
  plugins: [],
}
