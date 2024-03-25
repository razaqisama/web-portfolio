import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "brand-primary": "#7672ec",
        "black-primary": "#1a1919",
        "white-primary": "#fff4ea",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(-120%)" },
          "10%, 90%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        marquee: "marquee 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
