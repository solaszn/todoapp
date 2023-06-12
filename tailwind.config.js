/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      screens: {
        'lg-1100': '1100px',
        'lg-1260': '1260px',
        'lg-1100_xl-1379': {'min': '1100px', 'max': '1379px'},
        '_xl-1379': {'max': '1379px'},
        '_lg-1259': {'max': '1259px'},
        '_lg-1099': {'max': '1099px'},
        '_lg-1075': {'max': '1075px'},
        '_md-949': {'max': '949px'},
        '_sm-700': {'max': '700px'},
      },
    },
  },
    
    

  plugins: [require("daisyui")],
}

