import { Circle, GitHub } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

const PersonalProjects = () => {
  return (
    <Stack gap={2}>
      <Typography variant="h6">Personal Projects</Typography>

      <Stack>
        <Stack direction="row" sx={{ alignItems: "center" }} gap={1}>
          <Circle sx={{ height: "8px", width: "8px" }} />

          <Typography
            variant="body1"
            component="a"
            href="https://budget.gsavvidis.com/"
            sx={{ color: "linkColor.main" }}
            target="_blank"
          >
            Budget Calculator
          </Typography>
        </Stack>

        <Stack sx={{ pl: "16px" }}>
          <Stack
            direction="row"
            sx={{ mb: 1, alignItems: "center", color: "linkColor.main" }}
            gap={1}
            component="a"
            href="https://github.com/gsavvidis96/budget-calculator"
            target="_blank"
          >
            <GitHub sx={{ height: "14px", width: "14px" }} />

            <Typography variant="body2">GitHub Repo</Typography>
          </Stack>

          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            laborum pariatur illum dolores perspiciatis explicabo excepturi
            accusantium nesciunt. Exercitationem magni facere laboriosam nobis
            laborum libero possimus debitis doloremque voluptates porro.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PersonalProjects;
