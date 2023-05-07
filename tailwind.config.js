/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/assets/style/*.css",
    "./src/components/**/*.{vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.ts",
    "./src/app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#74b9ff",
        secondary: "#dfe6e9",
        accent: "#b3b3b3",

        dark: "#000000",
        "dark-page": "#000000",

        positive: "#21BA45",
        negative: "#C10015",
        info: "#31CCEC",
        warning: "#F2C037",
      },
    },
  },
  plugins: [],
};
