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
        "regal-blue": "#243c5a",
      },
      backgroundImage: {
        homeIntroBg: "url('/images/home/intro/bg-img.jpg')",
      },
      fontFamily: {
        monteserat: ['"Montserrat"', "sans-serif"],
        yeseva: ["'Yeseva One'", "serif"],
      },
    },
  },
  plugins: [],
};
