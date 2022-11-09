/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-100": "#8284FA",
        "purple-200": "#5E60CE",
        "blue-100": "#4EA8DE",
        "blue-200": "#1E6F9F",
        "grey-100": "#F2F2F2",
        "grey-200": "#D9D9D9",
        "grey-300": "#808080",
        "grey-400": "#333333",
        "grey-500": "#262626",
        "grey-600": "#0D0D0D",
        "grey-700": "#0D0D0D",
        danger: "#E25858",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
