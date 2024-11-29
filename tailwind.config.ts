import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        americana: ["americana", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/images/hero.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;

