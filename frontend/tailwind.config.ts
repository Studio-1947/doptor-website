import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366f1",
          dark: "#4f46e5",
        },
        secondary: {
          DEFAULT: "#8b5cf6",
        },
        background: {
          DEFAULT: "#ffffff",
          light: "#f9fafb",
          dark: "#0f172a",
          darker: "#020617",
        },
        foreground: {
          DEFAULT: "#0f172a",
          light: "#64748b",
          dark: "#f8fafc",
        },
        accent: {
          blue: "#3b82f6",
          pink: "#ec4899",
          green: "#10b981",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(116.26deg, #6366F1 0%, #F43F5E 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
