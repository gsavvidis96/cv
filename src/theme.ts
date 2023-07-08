import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    cardBg: Palette["primary"];
    linkColor: Palette["primary"];
  }

  interface PaletteOptions {
    cardBg?: PaletteOptions["primary"];
    linkColor?: PaletteOptions["primary"];
  }
}

const createCustomTheme = (prefersDarkMode: boolean) => {
  return createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
      ...(prefersDarkMode
        ? {
            // dark mode pallete
            primary: {
              main: "#fafafa",
            },
            secondary: {
              main: "#212121",
            },
            cardBg: {
              main: "#212121",
            },
            linkColor: {
              main: "#2196f3",
            },
          }
        : {
            // light mode pallete
            primary: {
              main: "#212121",
            },
            secondary: {
              main: "#fafafa",
            },
            cardBg: {
              main: "#ffffff",
            },
            linkColor: {
              main: "#2196f3",
            },
          }),
    },
  });
};

export default createCustomTheme;
