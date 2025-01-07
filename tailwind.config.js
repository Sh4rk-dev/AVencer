/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        normal: ["Jost_400Regular"],
        medium: ["Jost_500Medium"],
        semiBold: ["Jost_600SemiBold"],
        bold: ["Jost_700Bold"],
      },
      colors: {
        background: "#1E1E1E",
        primary: "#FC5404",
        secondary: "#3A3A3A",
      },
    },
  },
  plugins: [],
};
