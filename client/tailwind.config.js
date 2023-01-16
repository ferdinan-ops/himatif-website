/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      container: {
         screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1300px",
         },
      },
      extend: {
         fontFamily: {
            sans: ["PT Sans", "sans-serif"],
            serif: ["PT Serif", "serif"],
         },
      },
   },
   plugins: [],
};
