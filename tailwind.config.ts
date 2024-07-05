import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (max-width: 640px) { ... }

      md: "1024px",
      // => @media (max-width: 1024px) { ... }

      lg: "1280px",
      // => @media (max-width: 1280px) { ... }
    },
    extend: {
      colors: {
        obsidian: "#0b1215",
        backdrop: "#f4f4f4",
        gray: "#3d3d3d",
        orange: "#ea830b",
        smoke: "#cccac9",
        muted: "#757575",
      },
    },
  },
  plugins: [],
};
export default config;
