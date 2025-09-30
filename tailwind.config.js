/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F8F3EA",
        text: "#3B2F2F",
        accent: "#FF8A3D",
        cta: "#E34C36",
        ctaText: "#FFFFFF",
        muted: "#E8DED0",
        ok: "#2F6F4F"
      }
    },
  },
  plugins: [],
};
