module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        
        mytheme: {
        
   primary: "#EBA10F",
        
  secondary: "#F000B8",
        
"accent": "#37CDBE",
        
"neutral": "#3D4451",
        
"base-100": "#FFFFFF",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
 
  plugins: [require("daisyui"), require('tw-elements/dist/plugin'),  require('tailwind-scrollbar-hide')],
}