/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    screens: {
      sm: { min: "0px", max: "320px" },
      md: { min: "321px", max: "840px" },
      lg: { min: "841px", max: "1280px" },
    },
  },
  plugins: [],
};
