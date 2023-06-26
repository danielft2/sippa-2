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
               400: '#00AF8F',
               600: '#017863'
            },
            zync: {
               100: '#F3F3F9'
            }
         },
         gridTemplateColumns: {
            dashboard: '1fr 2fr',
            activity: '1.5fr 1fr'
         },
         screens: {
            lg_p: { max: '1400px' },
            md_p: { max: '820px' }
         }
      }
   },
   plugins: []
};
