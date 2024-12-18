import type { Config } from "tailwindcss";
import { fontFamily }  from  "tailwindcss/defaultTheme";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:'#1B365D',
        secondary:'#D4AA4F',
        accent:'#7C9885',
      },
      fontFamily: {
        sans: ['var(--font-source-sans-pro)', ...fontFamily.sans],
        custom: ['var(--font-plantin-mt-pro)', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config;
