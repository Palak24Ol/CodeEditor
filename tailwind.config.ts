import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "var(--navy)",
        teal: "var(--teal)",
        cyan: "var(--cyan)",
        "dark-green": "var(--dark-green)",
        green: "var(--green)",
        "light-green": "var(--light-green)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        "card-bg": "var(--card-bg)",
        border: "var(--border)",
      },
    },
  },
  plugins: [],
} satisfies Config;
