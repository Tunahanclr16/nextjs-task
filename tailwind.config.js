/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens:{
        md:"1137px",
        lg:"1200px",
        xs:"496px",
        sm:"800px",
        xss:"330px"
      },
      colors:{
        navBlack: '#322460', // Özel rengi tanımlayın
      }
    },
  },
  plugins: [],
}
