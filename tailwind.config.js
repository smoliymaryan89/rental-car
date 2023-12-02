import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#121417",
        secondary: "rgba(18, 20, 23, 0.50)",
        blue: "#3470FF",
        "light-white": "#F7F7FB",
        "dark-white": "#F9F9F9",
        dark: "#363535",
        grey: "#8A8A89",
        "grey-10": "rgba(18, 20, 23, 0.10)",
        "grey-0.05": "rgba(18, 20, 23, 0.05)",
        "grey-20": "rgba(18, 20, 23, 0.20)",
        "border-20": "rgba(138, 138, 137, 0.20)",
        hover: "#0B44CD",
      },
      boxShadow: {
        "select-shadow": "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
      },
      transitionDuration: {
        350: "350ms",
      },
      backgroundImage: {
        "hero-img":
          "linear-gradient(rgba(46, 47, 66, 0.6), rgba(46, 47, 66, 0.1)), url('./assets/images/home-page/hero.jpg')",
      },
    },
  },
  plugins: [],
};
