import { Circle } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

const PersonalProjects = () => {
  return (
    <Stack gap={2}>
      <Typography variant="h6">Hobbies</Typography>

      <Stack direction="row" sx={{ alignItems: "center" }} gap={1}>
        <Circle sx={{ height: "8px", width: "8px" }} />

        <Typography variant="body1">Fitness</Typography>
      </Stack>

      <Stack direction="row" sx={{ alignItems: "center" }} gap={1}>
        <Circle sx={{ height: "8px", width: "8px" }} />

        <Typography variant="body1">Football</Typography>
      </Stack>
    </Stack>
  );
};

export default PersonalProjects;
