/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'sky1': '0px 1px 24px 1px rgba(2, 2, 2, 0.1)',
      },
      textColor:{
        'sky-200' : '#000FBE',
      },
    },
  },
  plugins: [],
}