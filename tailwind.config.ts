import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      "ipadmini": "698px",
      "md" : "821px",
      "tablet" : "1020px"

    },
    variants: {
      display:['group-hover']
     },
    extend: {
      fontFamily: {
        inter: ["Inter, sans-serif"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "background-gradient" : "url(public/Background.png)"
      },
    },
    colors: {
      darkish: "#18181D",
      lightish: "#f1f5f9",
      darkGray: "#555050",
      lightGray: "#8c8484"
    }
  },
  plugins: [],
};
export default config;
