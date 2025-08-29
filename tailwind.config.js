/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        desktop: "1280px",
      },
      fontFamily: {
        JosefinSans: ["'Josefin+Sans'", "sans-serif"],
      },
      backgroundImage: {
        gradientMain:
          "linear-gradient(135deg, hsl(0, 80%, 86%),hsl(0, 74%, 74%))",

        gradientHover:
          "linear-gradient(135deg,hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
      },
    },
  },
  plugins: [],
};
