/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: " #5E6282",
        orange: "#DF6951",
        yellow: "#F1A501",
      },
      fontFamily: {
        volkhov: ["Volkhov", "serif"],
      },
    },
  },
  plugins: [],
};
