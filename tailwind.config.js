/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a855f7",
        black: "#0a0a0a",
        "black-soft": "#1a1a1a",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      cursor: {
        crosshair: "crosshair",
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "spin-reverse-slow": "spin-reverse 15s linear infinite",
        "enter-up":
          "enter-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "draw-w": "draw-w 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "draw-h": "draw-h 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 8s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 4s infinite",
        scan: "scan 4s linear infinite",
        "grow-h": "grow-h 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-soft": "pulse-soft 2s infinite",
        "ring-pulse": "ring-pulse 2s ease-in-out infinite",
        "aurora-drift": "aurora-drift 16s ease-in-out infinite",
        "mobile-float": "mobile-float 3.2s ease-in-out infinite",
        "mobile-glow": "mobile-glow 2.8s ease-in-out infinite",
        "mobile-card": "mobile-card 4.5s ease-in-out infinite",
        "mobile-bob": "mobile-bob 3.6s ease-in-out infinite",
        "mobile-sheen": "mobile-sheen 3.2s linear infinite",
        "card-shimmer": "card-shimmer 5s ease-in-out infinite",
        "wiggle-soft": "wiggle-soft 3s ease-in-out infinite",
        "desktop-hover-glide":
          "desktop-hover-glide 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "desktop-reveal-stagger":
          "desktop-reveal-stagger 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "desktop-focus-expand":
          "desktop-focus-expand 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "mobile-tap-scale": "mobile-tap-scale 0.15s ease-out forwards",
        "mobile-slide-up":
          "mobile-slide-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "mobile-horizontal-scroll-hint":
          "mobile-horizontal-scroll-hint 2s ease-in-out infinite",
      },
      keyframes: {
        "desktop-hover-glide": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-8px)" },
        },
        "desktop-reveal-stagger": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "desktop-focus-expand": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        "mobile-tap-scale": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.96)" },
        },
        "mobile-slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "mobile-horizontal-scroll-hint": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
        "wiggle-soft": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-4deg)" },
          "75%": { transform: "rotate(4deg)" },
        },
        "card-shimmer": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "mobile-float": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-6px) scale(1.05)" },
        },
        "mobile-glow": {
          "0%, 100%": {
            opacity: "0.55",
            boxShadow: "0 0 0 0 rgba(168,85,247,0.25)",
          },
          "50%": {
            opacity: "1",
            boxShadow: "0 0 0 6px rgba(168,85,247,0)",
          },
        },
        "mobile-card": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "mobile-bob": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(3px)" },
        },
        "mobile-sheen": {
          "0%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "-120% 0" },
        },
        "aurora-drift": {
          "0%": {
            transform: "translate3d(-8%, -2%, 0) scale(1)",
            opacity: "0.26",
          },
          "40%": {
            transform: "translate3d(6%, 4%, 0) scale(1.08)",
            opacity: "0.38",
          },
          "70%": {
            transform: "translate3d(-2%, 7%, 0) scale(0.96)",
            opacity: "0.28",
          },
          "100%": {
            transform: "translate3d(-8%, -2%, 0) scale(1)",
            opacity: "0.26",
          },
        },
        "ring-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 0 2px rgba(168, 85, 247, 0.6)",
          },
          "50%": {
            boxShadow: "0 0 0 6px rgba(168, 85, 247, 0.2)",
          },
        },
        "pulse-soft": {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(168, 85, 247, 0.4)",
          },
          "50%": {
            transform: "scale(1.2)",
            boxShadow: "0 0 0 10px rgba(168, 85, 247, 0)",
          },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "enter-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "draw-w": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "draw-h": {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
        "grow-h": {
          "0%": { height: "0%", opacity: "0" },
          "100%": { height: "100%", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        scan: {
          "0%": { top: "-10%", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { top: "110%", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
