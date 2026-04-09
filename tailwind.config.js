
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: ".5rem",
        sm: "1rem",
      },
    },
    extend: {
      keyframes: {
        slideIn: {
          "0%": {
            opacity: 0,
            // transform: "translateX(-20px)",
          },
          "100%": {
            opacity: 1,
            // transform: "translateX(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        "slide-in": "slideIn .4s ease-in-out forwards",
        "fad-in": "fadeIn .4s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};