// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f2937", // gray-800 // projects section bg // default
        secondary: "#f3f4f6", // gray-100 instead of white color
        secondaryDark: "#4b5563", // Gray 600 // for small texts

        accentBlue: "#3b82f6", // Blue 500 // button hover blue-600
        accentBlueLight: "#dbeafe", // blue-100 // white button hover
        accentBlueDark: "#2563eb", // blue-600, button hover
      },
      borderRadius: {
        avatar: "51% 49% 28% 72% / 75% 48% 52% 25%;",
      },
    },
  },
  plugins: [],
};
