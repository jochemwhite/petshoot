import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1600px",
      },
    },
    colors: {
      brandPrimary: "#7F54B3",
      success: "#7ad03a",
      danger: "#a00",
      warning: "#ffba00",
      info: "#2ea2cc",
      primary: "#7F54B3",
      "primary-text": "#ffffff", // Converted 'white' to hex
      secondary: "#e9e6ed",
      "secondary-text": "#515151",
      highlight: "#b3af54",
      "highlight-text": "#ffffff", // Converted 'white' to hex
      "content-bg": "#ffffff", // Converted 'white' to hex
      subtext: "#767676",
      "sub-dark": "#141414",
      "dark": "#0D0D0D",
      
    },

    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
