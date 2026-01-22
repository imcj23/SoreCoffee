module.exports = {
  theme: {
    extend: {
      colors: {
        dark: {
          main: "#07080B",
          card: "#181819",
          secondary: "#383632",
        },
        text: {
          primary: "#E8E6E6",
          muted: "#726D64",
        },
        accent: {
          primary: "#CB8236",
          secondary: "#D3B881",
          dark: "#8C4821",
        },
      },

      keyframes: {
        slideUp: {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideDown: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
        },
      },
      animation: {
        slideUp: "slideUp 0.3s ease-out",
        slideDown: "slideDown 0.25s ease-in",
      },
    },
  },
  plugins: [],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
};
