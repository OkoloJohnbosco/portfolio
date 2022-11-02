// 1. Import the extendTheme function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { colors, semanticTokens, fonts, fontSizes } from "./config";
// import components from "./components";

// DarkMode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

// Global Styles
const styles = {
  global: {
    p: {
      fontSize: "nm",
      lineHeight: "1.4",
      color: "inherit",
    },
  },
};

//  Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  fonts,
  colors,
  fontSizes,
  semanticTokens,
  styles,
  config,
});

export default theme;
