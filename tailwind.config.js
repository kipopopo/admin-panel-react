module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      "400%": "400%",
    },
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      animation: {
        "gradient-color": "gradientChange 15s ease infinite",
      },
      keyframes: {
        gradientChange: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
