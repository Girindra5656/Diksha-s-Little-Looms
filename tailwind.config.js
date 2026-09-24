/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2A1620",
        wine: {
          DEFAULT: "#7A1E3C",
          dark: "#571028",
          light: "#9A3455",
        },
        gold: {
          DEFAULT: "#B4862F",
          soft: "#E4C989",
          pale: "#F3E6C9",
        },
        ivory: "#FBF6EF",
        cream: "#F5EBDF",
        line: "#E7D8C6",
        muted: "#8A6B60",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Jost", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wide2: "0.14em",
      },
      boxShadow: {
        soft: "0 18px 40px -24px rgba(42, 22, 32, 0.35)",
        card: "0 12px 30px -18px rgba(42, 22, 32, 0.30)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
