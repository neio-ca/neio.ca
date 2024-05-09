import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: '#E8DCFC',
          200: '#D1B9F9',
          300: '#BA96F6',
          400: '#A373F3',
          500: '#8C50F0',
          600: '#7441CA',
          700: '#5D32A4',
          800: '#45227E',
          900: '#2E1358',
        },
      },
    },
  },
  plugins: [],
};
export default config;
