import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        background: "hsl(var(--bg-background), <alpha-value>)",
        primary: "hsl(var(--bg-primary), <alpha-value>)",
        secondary: "hsl(var(--bg-secondary), <alpha-value>)",
        third: "hsl(var(--bg-third), <alpha-value>)",

        customShadow:"hsl(var(--custom-shadow), <alpha-value>)",
        customGreen:"hsl(var(--custom-green), <alpha-value>)",
        customBlue:"hsl(var(--custom-blue), <alpha-value>)",
        customYellow:"hsl(var(--custom-yellow), <alpha-value>)",
        customRed:"hsl(var(--custom-red), <alpha-value>)",
      },
      backgroundColor: {
        
      },
      textColor:{
        primary: "hsl(var(--text-primary), <alpha-value>)",
        secondary: "hsl(var(--text-secondary), <alpha-value>)",
        third: "hsl(var(--text-third), <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
