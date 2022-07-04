module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "360px",
      // => @media (min-width: 360px) { ... }

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1440px",
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        p: "#7C3E66",
        b: "#243A73",
        g: "#A5BECC",
        s: "#F2EBE9",
      },
    },
  },
  plugins: [],
};
