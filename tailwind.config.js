/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "uni-blue": "#3caaee",
      },
      backgroundImage: {
        // logo: "url('https://www.unitellas.com.ng/images/unitellas-logo.png')",
        "home-hero":
          "url('https://www.unitellas.com.ng/images/cloud-tech-bg-3.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        display: ["Mongoose", "Arial", "sans-serif", "system-ui"],
        // body: ["Inter", "Arial", "sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
