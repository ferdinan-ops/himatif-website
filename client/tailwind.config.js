/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1300px'
      }
    },
    extend: {
      colors: {
        primary: '#085186',
        // primary: '#30ced0',
        // 'primary-dark': '#0597f7',
        'primary-dark': '#023d69',
        'font-black': '#29384E',
        'font-gray': '#535961'
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        logo: ['Source Sans Pro', 'sans-serif'],
        title: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
