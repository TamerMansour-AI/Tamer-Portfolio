/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1016",
        sand: "#E8E0D4",
        gold: "#C8A56A",
        "gold-soft": "#E2C48E"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(200, 165, 106, 0.25), 0 12px 40px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};
