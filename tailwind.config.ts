import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "navy-dark": "#050816",
        "navy": "#0b1b33",
        "navy-light": "#1b2b45",
        "gold": "#d4af37",
        "gold-soft": "#f3e6b3"
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"],
        serif: ["'Playfair Display'", "ui-serif", "serif"]
      },
      boxShadow: {
        "soft-elevated": "0 18px 45px rgba(0, 0, 0, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
