import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        '54': '54px',
        '68': '68px',
      },
      fontFamily: {
        mulish: ['Mulish', 'sans-serif']
      },
    },
    colors: {
      'asGood': '#01ADA6',
      'asMedium': '#FFB800',
      'asLow': '#E92151',
      'primary': '#6324C6',
      'primaryLight': '#774DC5',
      'secondary': '#FFB800',
      'white': '#fff',
      'black': '#000',
      'disab': '#bbb'
    },

  },
  plugins: [],
};
export default config;
