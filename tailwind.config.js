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
        explosion: 'url("../../images/bg-explosion.png")',
        circles: 'url("../../images/circles.png")',
        circleStar: 'url("../../images/circle-star.svg")',
        site: 'url("../../images/site-bg.svg")',
        TopLeftImg: 'url("../../images/top-left-img.png")',
        RoundedText: 'url("../../images/rounded-text.png")',
        Cruz: 'url("../../images/cruz-inicio.png")',
        Avatar: 'url("../../images/avatar.png")',       
        bulb: 'url("../../images/bulb.png")',       
        
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