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
        md:"1156px",
        lg:"1200px",
        xs:"496px",
        sm:"800px",
        smm:"1060px", //slider nokta koyma için koydum
        xsss:"370px",
        xss:"330px"
      },
      colors:{
        navBlack: '#322460', 
      }
    },
  },
  plugins: [],
}
