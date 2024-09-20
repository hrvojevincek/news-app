import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        redprimary: "#BB1E1E",
        grayish: "#8D8D8C",
        cardauthor: "#1D1D1B",
        bluetitle: "#1E71BB",
        grayicon: "#979797",
        borderbottom: "#F4F5F8",
        authorgray: "#F8F5F2",
      },
    },
    screens: {
      sm: "575px",
      md: "690px",
      xl: "935px",
      lg: "1280px",
    },
  },
  plugins: [],
};
export default config;
