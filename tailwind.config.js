/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
      },
      backgroundImage: {
        explosion: 'url("./src/images/bg-explosion.png")',
        circles: 'url("./src/images/bg-circles.png")',
        circleStar: 'url("./src/images/circle-star.svg")',
        site: 'url("./src/images/site-bg.svg")',
        TopLeftImg: 'url("./src/images/top-left-img.png")',
        
      },
      height:{
        '400':'25rem',
        '200':'12.5rem'

      },
      width:{
        '400':'25rem',
        '200':'12.5rem',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      
      
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [require('tailwind-scrollbar')],
}