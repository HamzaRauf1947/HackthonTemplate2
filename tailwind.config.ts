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
        pupleText:"#22202E",
        lightPurple:"#726E8D",
        darkPurple:"#2A254B",
        newColor:"#F9F9F926",
        lightGray:"#F9F9F9",
        textp:"#505977",
        BorderGrey:"#EBE8F4",
        Primary:"#4E4D93",
      },
      fontFamily:{
        clash:["var(--font-clash)"],
        satoshi:["var(--font-satoshi)"],
      
      },
      backgoundImage:{
        bannerImg:"url('/banner.png')",
      }

    },
  },
  plugins: [],
};
export default config;
