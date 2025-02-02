/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f6f3f3",
          100: "#E3DEDE",
          200: "#C7BDBD",
          300: "#AB9B9B",
          400: "#8F7A7A",
          500: "#735858",
          600: "#594545",
          700: "#6D5858",
          800: "#4C3E3E",
          900: "#332929",
          950: "#1A1414",
        },
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(to right, #f6f3f3, #E3DEDE)", // 50 → 100
        "gradient-2": "linear-gradient(to right, #E3DEDE, #C7BDBD)", // 100 → 200
        "gradient-3": "linear-gradient(to right, #C7BDBD, #AB9B9B)", // 200 → 300
        "gradient-4": "linear-gradient(to right, #AB9B9B, #8F7A7A)", // 300 → 400
      },
    },
  },
  plugins: [],
};
