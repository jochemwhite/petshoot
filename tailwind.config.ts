import type { Config } from "tailwindcss";

const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const colors = require("tailwindcss/colors");

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

    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
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
        dark: "#0D0D0D",
      },
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
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}

export default config;
