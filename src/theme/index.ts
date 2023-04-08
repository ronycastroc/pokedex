import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    blue: {
      light: "#05d3f8",
      mediumLight: "#009ddd",
      mediumDark: "#386dbd",
      dark: "#0f4571",
    },
    black: "#3a3132",
    white: "#f9f9f1",
    red: "#f60000",
  },
  styles: {
    global: () => ({
      "body": {
        fontFamily: "VT323, monospace",
        background: "linear-gradient(to bottom, #05d3f8, #f60000)",
        minHeight: "100vh"        
      },
    }),
  },
});

export default theme;
