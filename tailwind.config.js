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
        '700':'700px'
      },
      width:{
        '250':'250px',
        '856':'856',
        '523':'523px',
        '189':'189px',
      }

    },
  },
  plugins: [],
}
