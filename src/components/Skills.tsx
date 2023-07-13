import { Chip, Paper, Stack, Typography } from "@mui/material";

const Skills = () => {
  return (
    <Paper
      sx={{ backgroundColor: "cardBg.main", p: 3 }}
      elevation={2}
      gap={1}
      component={Stack}
    >
      <Typography variant="h6">Core Skills</Typography>

      <Stack gap={1} sx={{ maxWidth: 240 }}>
        <Chip label="Typescript" />
        <Chip label="React" />
        <Chip label="Next" />
        <Chip label="Vue" />
        <Chip label="NodeJS" />
        <Chip label="PostgreSQL" />
        <Chip label="MongoDB" />
        <Chip label="AWS" />
      </Stack>
    </Paper>
  );
};

export default Skills;
