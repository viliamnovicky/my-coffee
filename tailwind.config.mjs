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
          speciality: "#8bac54"
        },
        flavor: {
          fruit: "#ffb9b9",
          floral: "#d8b8fc",
          sweet: "#fde069",
          nutty: "#c8a17b",
          spicy: "#f4a851",
          herbal: "#86b339",
          earthy: "#db8b41",
          roasted: "#a9a7a7",
          cereal: "#fcc48e",
          citrus: "#fbd382",
          berries: "#f77878",
          fermented: "#b78c51",
          cocoa: "#918067",
        },
        action: {
          delete: "#f77878",
          update: "#fde069",
          add: "#86b339",
          cancel: "#a9a7a7",
        }
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(to right, #f6f3f3, #E3DEDE)", // 50 → 100
        "gradient-2": "linear-gradient(to right, #E3DEDE, #C7BDBD)", // 100 → 200
        "gradient-3": "linear-gradient(to right, #C7BDBD, #AB9B9B)", // 200 → 300
        "gradient-4": "linear-gradient(to right, #AB9B9B, #8F7A7A)", // 300 → 400
        "gradient-5": "linear-gradient(to right, #E3DEDE, #f6f3f3)", // 300 → 400
        "gradient-6": "linear-gradient(to right, transparent, #fff)", // 300 → 400
        "gradient-7": "linear-gradient(to right, #fff, transparent)", // 300 → 400
      },
    },
  },
  plugins: [],
};
