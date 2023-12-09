/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "myblue":"#3f35b0",
        "swihte":"E0F4FF",
        "c-border":"#191A19"
      }
     
    },
  },
  plugins: [],
}
