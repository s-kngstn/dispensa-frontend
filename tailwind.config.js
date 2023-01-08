const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "lime-punch": "#D6ED17FF",
        "dispensa-gray": "#606060FF",
        "dispensa-off-white": "#eff0f3",
        "dispensa-white": "#fffffe",
        "dispena-black": "#0d0d0d",
        "dispensa-text": "#2a2a2a",
        "dispensa-orange": "#ff8e3c",
        "dispensa-secondary": "#d9376e",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
      borderWidth: {
        3: "3px",
      },
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
      // borderRadius: { dispensa: "0.4rem" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
