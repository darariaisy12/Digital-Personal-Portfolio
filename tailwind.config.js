/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        argine: ["'Argine'", "cursive"],
        mono: ["'Intel One Mono'", "monospace"],
      },
      keyframes: {
        modalPop: {
          "0%": { opacity: "0", transform: "scale(0.85) translateY(20px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        cardIn: {
          "0%": { opacity: "0", transform: "translateY(14px) scale(0.93)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        filePopup: {
          "0%": { transform: "scale(1)" },
          "30%": { transform: "scale(1.15)" },
          "50%": { transform: "scale(0.92)" },
          "70%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        modalPop: "modalPop 0.32s cubic-bezier(0.34,1.4,0.64,1) forwards",
        cardIn: "cardIn 0.28s cubic-bezier(0.34,1.3,0.64,1) forwards",
        filePopup: "filePopup 0.5s cubic-bezier(0.34,1.4,0.64,1)",
      },
    },
  },
  plugins: [],
}
