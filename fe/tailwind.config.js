/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
      },
      colors: {
        gray_1: "#6C7275",
      },
    },
  },
  plugins: [],
};
