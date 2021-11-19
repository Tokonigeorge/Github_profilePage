module.exports = {
  purge: ["./src/**/*.jsx", "./src/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {},
    extend: {
      colors: {
        navbg: "#161B22",
        navIcon: "#F0F6FC",
        searchbg: "#0D1117",
        searchring: "#F0F6FC",
        bodyBg: "#0D1117",
        textColor: "#C9D1D9",
        defaultBorder: "#30363d",
        signInBg: "#2da44e",
        formBg: "#f6f8fa",
      },
      screens: {
        sm2: "527px",
        lg2: "1120px",
      },
      spacing: {
        68: "17rem",
        74: "19rem",
        88: "22rem",
      },
      width: {
        "1/7": "16.4%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
