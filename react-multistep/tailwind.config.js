/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    color: {
      // "marine-blue": "#02295A",
      // "purplish-blue": "#473DFF",
      // "pastel-blue": "#ADBEFF",
      // "light-blue": "#BFE2FD",
      // "strawberry-red": "#ED3548",
      // "cool-gray": "#9699AB",
      // "light-gray": "#D6D9E6",
      // magnolia: "#F0F6FF",
      // alabaster: "#FAFBFF",
    },
    extend: {
      backgroundImage: {
        "sidebar-desktop": "url('/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
};
