/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        "uni-blue": "#3caaee",
      },
      backgroundImage: {
        "home-hero":
          "url('https://www.unitellas.com.ng/images/cloud-tech-bg-3.jpg')",
      },
      fontFamily: {
        display: ["Mongoose", "Arial", "sans-serif", "system-ui"],
      },
    },
    keyframes: {
      scroll: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(calc(-100% - 3rem))" },
      },
    },
    animation: {
      scroll: "scroll 30s linear infinite",
    },
  },
  plugins: [],
};
