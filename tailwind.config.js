module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#4a16b9",

          "secondary": "#FFFFFF",

          "accent": "#8A8A8A",

          "neutral": "#F3F4F6",

          // "base-100": "#FFFFFF",
          "base-100": "#252B2F" ,

          "base-200": "#383E44" ,

          "info": "#98A8DD",

          "success": "#1BBB70",

          "warning": "#DF7E07",

          "error": "#FA5C5C",
        },
      }
      
    ],
  },
  plugins: [require("daisyui")],
}