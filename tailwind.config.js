module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in forwards",
        fadeOut: "fadeOut 0.9s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "100%": { opacity: 0, transform: "hidden" },
          "0%": { opacity: 1, transform: "hidden" },
        },
      },
    },
  },
  variants: {
    extend: {},
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};
