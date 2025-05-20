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
        tag: {
          decaf: "#166534",
          mild: "#1e40af",
          medium: "#713f12",
          strong: "#7f1d1d",
        },
        flavor: {
          fruit: "#ffb9b9",
          floral: "#d8b8fc",
          sweet: "#fde069",
          nutty: "#c8a17b",
          spicy: "#f4a851",
          herbal: "#76fabe",
          earthy: "#7cf8a8",
          roasted: "#a9a7a7",
          cereal: "#fcc48e",
        }
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(to right, #f6f3f3, #E3DEDE)", // 50 → 100
        "gradient-2": "linear-gradient(to right, #E3DEDE, #C7BDBD)", // 100 → 200
        "gradient-3": "linear-gradient(to right, #C7BDBD, #AB9B9B)", // 200 → 300
        "gradient-4": "linear-gradient(to right, #AB9B9B, #8F7A7A)", // 300 → 400
        "gradient-5": "linear-gradient(to right, #E3DEDE, #f6f3f3)", // 300 → 400
      },
    },
  },
  plugins: [],
};
