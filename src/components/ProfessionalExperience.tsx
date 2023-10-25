import { Circle } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

const ProfessionalExperience = () => {
  return (
    <Stack gap={2}>
      <Typography
        variant="h6"
        sx={{ textAlign: { xs: "center", md: "start" } }}
      >
        Professional Experience
      </Typography>

      <Stack>
        <Stack direction="row" sx={{ alignItems: "center" }} gap={1}>
          <Circle sx={{ height: "8px", width: "8px" }} />

          <Typography
            variant="body1"
            component="a"
            href="https://www.slashdata.co/"
            sx={{ color: "linkColor.main" }}
            target="_blank"
          >
            SlashData
          </Typography>
        </Stack>

        <Stack sx={{ pl: "16px" }}>
          <Typography variant="body2" color="text.secondary">
            Manchester, UK (Remote)
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            September 2022 - Present
          </Typography>

          <Typography variant="body2">
            Involved in applications developed in-house, serving both
            customer-facing and back-office needs, using React, Node.js,
            MongoDB, AWS Lambda and the Serverless Framework.
          </Typography>
        </Stack>
      </Stack>

      <Stack>
        <Stack direction="row" sx={{ alignItems: "center" }} gap={1}>
          <Circle sx={{ height: "8px", width: "8px" }} />

          <Typography
            variant="body1"
            component="a"
            href="https://codefactory.gr/"
            sx={{ color: "linkColor.main" }}
            target="_blank"
          >
            CodeFactory
          </Typography>
        </Stack>

        <Stack sx={{ pl: "16px" }}>
          <Typography variant="body2" color="text.secondary">
            Athens, GR (Hybrid)
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            June 2019 - July 2022
          </Typography>

          <Typography variant="body2">
            Involved in a diverse range of projects, using various technologies.
            The most notable ones include Vue, Node.js, Capacitor.js, and
            PostgreSQL for developing web and mobile clients, as well as backend
            APIs.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProfessionalExperience;
