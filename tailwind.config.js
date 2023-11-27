/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // For body text
        heading: ["Montserrat", "sans-serif"], // For headings
      },

      // colors: {
      //   primary: "#2980B9", // Deep Blue
      //   secondary: "#1ABC9C", // Vibrant Teal
      //   accent: "#E67E22", // Warm Orange
      //   neutral: "#FDFEFE", // Off-White
      //   text: "#34495E", // Dark Grey
      // },
    },

    container: {
      center: true, // This is optional and defaults to true. It centers the container.
      padding: "1rem", // Optional padding on the left and right
      screens: {
        sm: "100%", // On small screens, the container takes up the full width.
        md: "640px", // On medium screens, max width of the container is 640.
        lg: "840px", // On large screens, max width is 840px.
        // xl: "1140px", // On extra large screens, max width is 1140px.
      },
    },
    screens: {
      sm: "640px",
      md: "960px",
    },
  },
  daisyui: {
    themes: [
      // "cmyk",
      // "night",
      // "nord",
      {
        mytheme: {
          ...require("daisyui/src/theming/themes")["nord"],
          primary: "#2980B9",
          "primary-content": "#FDFEFE",
          secondary: "#1ABC9C",
          "secondary-content": "#FDFEFE",
          accent: "#E67E22",
          "accent-content": "#FDFEFE",

          // neutral: "#FDFEFE",
          // base-100: "#FDFEFE",
          // other colors...

          "--border-btn": "2px",
        },
      },
      // other built-in themes...
    ],
  },
  plugins: [require("daisyui")],
};
