/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "640px",
      lg: "1220px",
      xl: "2400px",
    },
    borderRadius: {
      sm: "0.2rem",
      md: "0.8rem",
      lg: "1.6rem",
      full: "9999px",
    },
    colors: {
      primary: "#E54B4B",
      white: "#f2f2f2",
      accent: "#FFCA3A",
      black: "#313131",
      blue: "#4ECDC4",
      dark_blue: "#1A535C",

      warning: "#FFCA3A",
      error: "#E54B4B",
      success: "#8AC926",

      transparent: "hsl(0,0%,0%,0)",
    },
    variants: {
      animation: ["motion-safe"],
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
  },
};
