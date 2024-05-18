/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        orange: "#c2884f",
        "semi-black": "#444",
        "text-green": "#298a81",
      },
      backgroundImage: {
        "home-intro-bg": "url('/images/home/intro/bg-img.jpg')",
        "home-about-bg": "url('/images/home/sec2/cup.jpg')",
        "home-about-nuts": "url('/images/home/sec2/bg-img-nuts.png')",
        "home-reviews-bg": "url('/images/home/reviews/bg-img.jpg')",
      },
      fontFamily: {
        monteserat: ['"Montserrat"', "sans-serif"],
        yeseva: ["'Yeseva One'", "serif"],
      },
    },
  },
  plugins: [],
};
