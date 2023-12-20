// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      neutral: '#111827',
      primary: '#189AD3',
      paragraph: '#374151',
      extension: '#F79898',
      video: '#EDF9FF',
      neutralBtn: '#D1D5DB',
      neutral500:'#6B7280',
      leftBtn:'#EAEAEA',
      neutral900:'#6B7280',
      neutralbold:'#111827',
      neutral300: '#D1D5DB',

    },
    extend: {
      height: {
        '300':'300px',
        '579': '579px',
        '700':'700px',
        '209':'209px',
        
      },
      width:{
        '250':'250px',
        '856':'856px',
        '523':'523px',
        '189':'189px',
        '370':'370px',
        '1216':'1216px',
      },
      screens: {
        'sm': {'max': '800px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '800px', 'max':'1500px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'max': '600px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },

    },
  },
  plugins: [],
}
