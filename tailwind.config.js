/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    screens: {
      sm: {'min': '640px', 'max':'767px' },
      md: {'min': '768px', 'max':'1023px' },
      lg: {'min': '1024px', 'max':'1279px' },
      xl: {'min': '1280px', 'max':'1535px' },
      // '2xl': {'min': '1280px', 'max':'1535px' },
    },
    extend: {
      colors:{
        uiblue:{
          100: '#6979F8',
          200: '#384DF8',
          300: '#384DF8',          
        },
        uired:{
          100: '#F33B62',
          200: '#FF5F5F',
        }
      },
      
    },
  },
  plugins: [],
}

