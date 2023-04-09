import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    blue: {
      light: "#05d3f8",
      mediumLight: "#009ddd",
      mediumDark: "#386dbd",
      dark: "#363199",
    },
    black: "#3a3132",
    white: "#f9f9f1",
    red: "#f60000",
    yellow: "#FFCE31"
  },
  styles: {
    global: () => ({
      "body": {
        fontFamily: "VT323, monospace",
        background: "linear-gradient(to bottom, #05d3f8, #363199 80%)",
        minHeight: "100vh",     
      },
    }),
  },
});

export default theme;
