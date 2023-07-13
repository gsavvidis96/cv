import { ThemeProvider } from "@mui/material/styles";
import { useMemo, useState } from "react";
import createCustomTheme from "./theme";
import {
  Container,
  CssBaseline,
  Divider,
  IconButton,
  Paper,
  Stack,
} from "@mui/material";
import { useMount } from "react-use";
import { LightMode } from "@mui/icons-material";
import GeneralInfo from "./components/GeneralInfo";
import Skills from "./components/Skills";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Education from "./components/Education";
import PersonalProjects from "./components/PersonalProjects";
import Hobbies from "./components/Hobbies";

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
          minHeight: "100vh",
          justifyContent: "start",
          alignItems: "center",
          py: 3,
        }}
      >
        <Container
          sx={{ display: "flex", flexDirection: "column" }}
          component={Stack}
          gap={3}
        >
          <IconButton
            sx={{
              backgroundColor: "primary.main",
              alignSelf: "start",
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

          <Stack
            sx={{
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
            gap={3}
          >
            <Stack gap={3}>
              <GeneralInfo />

              <Skills />
            </Stack>

            <Paper
              sx={{ backgroundColor: "cardBg.main", p: 3, flexGrow: 1 }}
              elevation={2}
              component={Stack}
              gap={3}
            >
              <ProfessionalExperience />

              <Divider />

              <Education />

              <Divider />

              <PersonalProjects />

              <Divider />

              <Hobbies />
            </Paper>
          </Stack>
        </Container>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
