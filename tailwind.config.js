/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/app/**/*.tsx',
      './src/pages/**/*.tsx',
      './src/components/**/*.tsx'
   ],
   theme: {
      extend: {
         colors: {
            green: {
               100: '#E5F5F2',
               200: '#D9F1ED',
               300: '#A1D4CB',
               400: '#00AF8F'
            }
         },
         gridTemplateColumns: {
            dashboard: '1fr 2fr'
         }
      }
   },
   plugins: []
};
