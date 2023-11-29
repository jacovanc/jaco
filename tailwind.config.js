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
  safelist: [
    // Safelist classes that include 'primary' in their names
    {
      pattern: /accent|primary|secondary/, // This is needed for the dynamic color class on the custom package
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // For body text
        heading: ["Montserrat", "sans-serif"], // For headings
        // heading: ["Open Sans", "sans-serif"], // For headings
      },

      colors: {
        neutral: "#ff0000", // Off-White
      },
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
      tn: "440px",
      sm: "640px",
      md: "840px",
      lg: "1024px",
    },
  },
  daisyui: {
    themes: [
      // "synthwave",
      // "retro",
      // "valentine",
      // "lofi",
      // "pastel",
      // "black",
      // "dracula",
      // "autumn",
      // "business",
      // "winter",
      // "dim",
      // "sunset",
      // "cmyk",
      // "night",
      // "nord",
      {
        mytheme: {
          // ...require("daisyui/src/theming/themes")["synthwave"], // Dark mode?
          // ...require("daisyui/src/theming/themes")["dracula"], // Dark mode?
          // ...require("daisyui/src/theming/themes")["nord"], // Light mode?
          // ...require("daisyui/src/theming/themes")["dim"], // Dark mode?
          ...require("daisyui/src/theming/themes")["winter"], // Light Mode?
          // ...require("daisyui/src/theming/themes")["light"], // Light mode
          primary: "#2980B9",
          // primary: "#003478",
          "primary-content": "#FDFEFE",
          // secondary: "#1ABC9C",
          secondary: "#008264",
          "secondary-content": "#FDFEFE",
          accent: "#E67E22",
          "accent-content": "#FDFEFE",

          // info: "#3498DB",
          info: "#1c92f2",
          success: "#22c55e",
          warning: "#ff9900",
          error: "#ff5724",

          // "base-content": "#4B5563",
          // "base-100": "#FDFEFE",
          // "base-100-content": "#ff0000",
          // "base-200": "#D6E4FF",
          // "base-200-content": "#FFFFFF",
          // "base-300": "#ffe8ed",
          // "base-300-content": "#FFFFFF",

          // "--border-btn": "2px",
        },
      },
      // other built-in themes...
    ],
  },
  plugins: [require("daisyui")],
};
