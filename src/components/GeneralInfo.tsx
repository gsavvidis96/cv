import { CloudDownload, GitHub, LinkedIn } from "@mui/icons-material";
import { Button, Divider, Paper, Stack, Typography } from "@mui/material";

const currentYear = new Date().getFullYear();

const GeneralInfo = () => {
  return (
    <Paper
      sx={{ backgroundColor: "cardBg.main", py: 3 }}
      elevation={2}
      component={Stack}
      gap={3}
    >
      <Stack sx={{ px: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 500 }}>
          Giannis Savvidis
        </Typography>

        <Typography variant="body2">Fullstack web developer</Typography>
      </Stack>

      <Divider />

      <Stack sx={{ px: 3 }} gap={1}>
        <Stack direction="row" sx={{ alignItems: "center" }} gap={1}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Age:
          </Typography>

          <Typography variant="body2">{currentYear - 1996}</Typography>
        </Stack>

        <Stack direction="row" sx={{ alignItems: "center" }} gap={1}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Location:
          </Typography>

          <Typography variant="body2">Athens, Greece</Typography>
        </Stack>

        <Stack direction="row" sx={{ alignItems: "center" }} gap={1}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Email:
          </Typography>

          <Typography
            variant="body2"
            component="a"
            href="mailto:gsavvidis96@gmail.com"
            sx={{ color: "linkColor.main" }}
          >
            gsavvidis96@gmail.com
          </Typography>
        </Stack>

        <Stack sx={{ pt: 1 }}>
          <Stack gap={1} sx={{ maxWidth: 240 }}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<GitHub />}
              sx={{ textTransform: "none" }}
              component="a"
              href="https://github.com/gsavvidis96"
              target="_blank"
            >
              GitHub
            </Button>

            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<LinkedIn />}
              sx={{ textTransform: "none" }}
              component="a"
              href="https://www.linkedin.com/in/giannis-savvidis-22340a188/"
              target="_blank"
            >
              LinkedIn
            </Button>

            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<CloudDownload />}
              sx={{ textTransform: "none" }}
              href="giannis_savvidis_cv.pdf"
              target="_blank"
            >
              Download CV
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default GeneralInfo;
