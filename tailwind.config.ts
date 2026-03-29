import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        subtle: "var(--color-subtle)",
        border: "var(--color-border)",
        surface: "var(--color-surface)",
        surfaceAlt: "var(--color-surface-alt)",
        accent: "var(--color-accent)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"]
      },
      borderRadius: {
        soft: "1.5rem",
        panel: "1.9rem"
      }
    }
  },
  plugins: []
};

export default config;
