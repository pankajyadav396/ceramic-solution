/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "plus-sans": "plus jakarta sans",
        "manrop": "manrope",
      },
      colors: {
        "light-red": "#FF0000",
        "light-pink": "#FFEBEB",
        "light-grey": "#E0E0E0",
        "dark-blue": "#1B2228",
        "light-black": "#141414",
        "grey-black": "#010101",
        "foot-black": "#1B2228"
      },
      fontSize: {
        "5xxl": "64px",
        "4xxl": "56px",
        "2xxl": "32px",
      },
      lineHeight: {
        "160": "160%",
        "150": "150%",
        "127": "127%",
      },
      boxShadow: {
        "small-black": "0px 0px 12px 3px #B6B6B640",
        "xs-black": "0px 2px 44px 3px #5757571A;",
        "grey": "0px 1px 28px 1px #4747471A;",
        "lg-black": "0px 2px 44px 3px #5757575D;"
      },
      backgroundImage: {
        "black-grediant": "linear-gradient(90deg, rgba(22, 22, 22, 0) 0%, #696969 51.56%, rgba(22, 22, 22, 0) 100%);",
      },
      screens: {
        "678": "678px",
        "430": "430px",
        "460": "460px",
        "450": "450px",
      },
      borderRadius: {
        "62": "62px",
        "56": "56px",
      }
    },
  },
  plugins: [],
}