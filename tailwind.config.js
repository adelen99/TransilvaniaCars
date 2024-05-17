const { default: daisyui } = require("daisyui");

// tailwind.config.js
module.exports = {
  daisyui: {
    themes: ["bumblebee"],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
