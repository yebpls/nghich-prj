/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      colors: {
        gray_1: "#E8ECEF",
        gray_2: "#6C7275",

        green_1: "#CEF53D",

        pink_1: "#FF78C5",
      },
    },
  },
  plugins: [],
};
