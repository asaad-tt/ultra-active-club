/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#a3af16",
        
"secondary": "#9cf2fc",
        
"accent": "#898ced",
        
"neutral": "#20323C",
        
"base-100": "#323B4E",
        
"info": "#7EA4E7",
        
"success": "#29C78D",
        
"warning": "#F3B768",
        
"error": "#E14161",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
