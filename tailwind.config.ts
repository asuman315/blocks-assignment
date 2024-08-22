import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      screens: {
        xs: "360px", // Extra small devices (phones, portrait mode)
        sm: "480px", // Small devices (phones, landscape mode)
        md: "560px", // Medium devices (tablets, portrait mode)
        lg: "820px", // Large devices (tablets, landscape mode)
        xl: "1000px", // Extra large devices (small laptops)
        "2xl": "1280px", // 2x extra large devices (laptops, desktops)
        "3xl": "1536px", // 3x extra large devices (large desktops)
        "4xl": "1680px", // 4x extra large devices (larger desktops)
        "5xl": "1920px", // 5x extra large devices (ultra-wide desktops)
      },
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        black: "#000000",
        primary: {
          25: "#FCFAFF",
          50: "#F9F5FF",
          100: "#F4EBFF",
          200: "#E9D7FE",
          300: "#D6BBFB",
          400: "#B692F6",
          500: "#8000FF",
          600: "#6800CF",
          700: "#50009F",
          800: "#38016D",
          900: "#2F005C",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#cdcdcd",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
        },
        red: {
          400: '#e60023',
          600: '#b60000'
        } 
      },
    },
    boxShadow: {
      shadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
      "custom-one":
        "7.27734899520874px 7.27734899520874px 65.49613952636719px rgba(0, 0, 0, 0.05)",
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
