module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "orange": {
          100: "#FFEDD5"
        },
        "cool-gray": {
          50: "#F9FAFB",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          mid: "#E4E7EB",
        },
        "tag-orange": "#F97318",
        "tag-orange-light": "#EC975E",
        "orange-light": "#FFECD5",
        "navy": "#121927",
      },
    },
  },
  variants: {
    extend: {},
  },
  fontFamily: {
    body: ["Monsterrat", "sans-serif"],
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
