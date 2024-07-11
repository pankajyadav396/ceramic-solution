/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "plusSans": "plus jakarta sans",
        "manrop": "manrope",
      },
      colors: {
        "lightRed": "#FF0000",
        "lightPink": "#FFEBEB",
        "darkBlue": "#1B2228",
        "lightBlack": "#141414",
        "greyBlack": "#010101",
        "footBlack": "#1B2228"
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
        "smallBlack": "0px 0px 12px 3px #B6B6B640",
        "xsmBlack": "0px 2px 44px 3px #5757571A;",
        "grey": "0px 1px 28px 1px #4747471A;"
      },
      backgroundImage: {
        "blackGrediant": "linear-gradient(90deg, rgba(22, 22, 22, 0) 0%, #696969 51.56%, rgba(22, 22, 22, 0) 100%);"
      }
    },
  },
  plugins: [],
}