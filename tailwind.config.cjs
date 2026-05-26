/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0f",
        secondary: "#94a3b8",
        tertiary: "#111118",
        accent: "#06b6d4",
        "accent-light": "#22d3ee",
        "black-100": "#0f0f17",
        "black-200": "#0a0a0f",
        "white-100": "#f1f5f9",
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(6, 182, 212, 0.2)",
        glow: "0 0 20px rgba(6, 182, 212, 0.3)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
