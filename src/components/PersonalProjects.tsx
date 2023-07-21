import { Circle, GitHub } from "@mui/icons-material";
import { Chip, Stack, Typography } from "@mui/material";

const PersonalProjects = () => {
  return (
    <Stack gap={2}>
      <Typography
        variant="h6"
        sx={{ textAlign: { xs: "center", md: "start" } }}
      >
        Personal Projects
      </Typography>

      <Stack gap={1}>
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

          <Chip
            icon={<GitHub />}
            label="Repository"
            size="small"
            clickable
            component="a"
            href="https://github.com/gsavvidis96/budget-calculator"
            target="_blank"
          />
        </Stack>

        <Stack sx={{ pl: "16px" }}>
          <Typography variant="body2">
            Created as a playground project for fun and showcasing purposes. The
            main technologies used include TypeScript, Next.js, Supabase and
            Prisma ORM.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PersonalProjects;
