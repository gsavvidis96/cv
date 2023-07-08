import { ThemeProvider } from "@mui/material/styles";
import { useMemo, useState } from "react";
import createCustomTheme from "./theme";
import { CssBaseline, IconButton, Stack } from "@mui/material";
import { useMount } from "react-use";
import { LightMode } from "@mui/icons-material";
import GeneralInfo from "./components/GeneralInfo";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = useMemo(() => {
    return createCustomTheme(isDarkMode);
  }, [isDarkMode]);

  useMount(() => {
    const isDarkModeLocalStorage = JSON.parse(
      localStorage.getItem("isDarkMode")!
    ); // get prefered mode from local storage

    if (isDarkModeLocalStorage === null) {
      // if prefered mode is not set
      const isSystemDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme:dark)").matches; // check if system mode is dark mode;

      setIsDarkMode(isSystemDarkMode); // set theme mode without setting local storage.
    } else {
      setIsDarkMode(isDarkModeLocalStorage); // else set the mode from local storage
    }
  });

  const toggleIsDarkMode = (
    isDarkMode: boolean,
    saveToLocalStorage?: boolean
  ) => {
    setIsDarkMode(isDarkMode);

    if (saveToLocalStorage) {
      localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Stack
        sx={{
          height: "100vh",
          padding: "20px",
          justifyContent: "center",
          alignItems: "start",
        }}
        direction="row"
      >
        <GeneralInfo />

        <Stack sx={{ width: "1000px" }}>
          <IconButton
            sx={{
              backgroundColor: "primary.main",
              alignSelf: "start",
              ml: "auto",
              "&:hover": {
                backgroundColor: "primary.main",
              },
            }}
            size="small"
            color="primary"
            onClick={() => toggleIsDarkMode(!isDarkMode, true)}
          >
            <LightMode color="secondary" />
          </IconButton>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
