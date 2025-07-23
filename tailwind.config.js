/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./.eleventy.js"],
  theme: {
    extend: {
      colors: {
        header: '#f1c232',
        link: '#f1c232',
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#f595ac",
          "secondary": "#c8f599",
          "accent": "#bf8c00",
          "neutral": "#07101c",
          "base-100": "#262626",
          "info": "#00b9ff",
          "success": "#009000",
          "warning": "#bd8400",
          "error": "#ff0037",
        },
        light: {
          "primary": "#ffe4e6",
          "secondary": "#0095ff",
          "accent": "#bf8c00",
          "neutral": "#07101c",
          "base-100": "#1d1d1d",
          "info": "#00b9ff",
          "success": "#009000",
          "warning": "#bd8400",
          "error": "#ff0037",
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
}