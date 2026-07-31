import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        dark: "#0A0A0A",
        navy: "#1A1A2E",
        "navy-light": "#16213E",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "flow1": "flow1 8s ease-in-out infinite",
        "flow2": "flow2 10s ease-in-out infinite",
        "flow3": "flow3 12s ease-in-out infinite",
        "flow4": "flow4 7s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        flow1: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)", opacity: "0.3" },
          "50%": { transform: "translateY(-30px) translateX(20px)", opacity: "0.5" },
        },
        flow2: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)", opacity: "0.2" },
          "50%": { transform: "translateY(20px) translateX(-15px)", opacity: "0.4" },
        },
        flow3: {
          "0%, 100%": { transform: "translateY(0px)", opacity: "0.1" },
          "50%": { transform: "translateY(-20px)", opacity: "0.2" },
        },
        flow4: {
          "0%, 100%": { transform: "translateX(0px)", opacity: "0.15" },
          "50%": { transform: "translateX(30px)", opacity: "0.3" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)", boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.7)" },
          "50%": { opacity: "0.8", transform: "scale(1.1)", boxShadow: "0 0 0 8px rgba(34, 197, 94, 0)" },
        },
        shimmer: {
          "0%": { opacity: "0.8" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.8" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}

export default config
