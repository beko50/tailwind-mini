/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: { 
      sm: '480px',
      md: '768px', 
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightOrange: '#ea580c',
        lightOrange: '#d98c3f',
        deepBlue: '#0369a1',
        seaBlue: '#38bdf8',
        teal: '#0d9488',
        hoverTeal: '#54998e',
        lightGrey: '#ced9d7',
        greyBlue: '#1f2937',
      },
    },
  },
  plugins: [],
}
