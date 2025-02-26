import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      minWidth: {
        "screen": "100vw",
        "full": "100%",
        "half": "50%",
        "7xl": "80rem",
        "6xl": "72rem",
        "5xl": "64rem",
        "4xl": "56rem",
        "3xl": "48rem",
        "2xl": "42rem",
        "xl": "36rem",
        "lg": "32rem",
        "md": "28rem",
        "sm": "24rem",
        "xs": "20rem",
        "2xs": "18rem",
        "3xs": "16rem",
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
