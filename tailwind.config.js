/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "rgb(var(--c-navy) / <alpha-value>)",
          deep: "rgb(var(--c-navy-deep) / <alpha-value>)",
          card: "rgb(var(--c-navy-card) / <alpha-value>)",
          card2: "rgb(var(--c-navy-card2) / <alpha-value>)",
          border: "rgb(var(--c-navy-border) / <alpha-value>)",
        },
        ice: {
          DEFAULT: "rgb(var(--c-ice) / <alpha-value>)",
          blue: "rgb(var(--c-ice-blue) / <alpha-value>)",
          white: "rgb(var(--c-ice-white) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--c-ink) / <alpha-value>)",
          muted: "rgb(var(--c-ink-muted) / <alpha-value>)",
        },
        surface: "rgb(var(--c-surface) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0px 10px 15px -3px rgba(15, 146, 247, 0.20), 0px 4px 6px -4px rgba(15, 146, 247, 0.20)",
        "glow-lg": "0px 25px 50px -12px rgba(15, 146, 247, 0.30)",
      },
      keyframes: {
        "slide-down": {
          "0%": { transform: "translateY(-12px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "slide-down": "slide-down 0.3s ease-out",
        float: "float 4s ease-in-out infinite",
        "spin-slow": "spin-slow 14s linear infinite",
      },
    },
  },
  plugins: [],
}
