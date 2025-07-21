/** @type {import('tailwindcss').Config} */
import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f43f5e", // Tailwind pink-500
        secondary: "#6366f1", // Tailwind indigo-500
        accent: "#facc15", // Tailwind yellow-400
        bgDark: "#0f172a", // Tailwind slate-900
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #f43f5e 0%, #6366f1 100%)",
      },
      keyframes: {
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-scale": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.8s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "pulse-scale": "pulse-scale 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
});
