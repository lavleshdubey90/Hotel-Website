/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: 
    {
      fontFamily:
      {
        "roboto": ['roboto'],
        "worksans": ['Work Sans']
      },

      screens:
      {
        '2xl': '1320px',
        'xl': '1140px',
        'lg': '960px',
        'md': '720px',
        'sm': '540px'
      }
    },
  },
  plugins: [],
}

