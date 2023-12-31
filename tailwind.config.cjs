/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          100: "#F2F7F5",
          200: "#E6F0EB",
          300: "#CCE1D7",
          500: "#475D5B",
          700: "#004643",
          900: "#00332C",
        },
        orange: "#F9BC60",
        white: "#FFFFFF",
        black: "#000000",
        paragraph: "#475d5b",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
