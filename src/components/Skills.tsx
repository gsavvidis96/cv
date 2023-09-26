import { Chip, Paper, Stack, Typography } from "@mui/material";

const Skills = () => {
  return (
    <Paper
      sx={{ backgroundColor: "cardBg.main", p: 3, alignItems: "center" }}
      elevation={2}
      gap={1}
      component={Stack}
    >
      <Typography variant="h6">Core Skills</Typography>

      <Stack gap={1} sx={{ width: 240 }}>
        <Chip label="Typescript" />
        <Chip label="Vue" />
        <Chip label="React" />
        <Chip label="Nuxt.js" />
        <Chip label="Gatsby.js" />
        <Chip label="Node.js" />
        <Chip label="PostgreSQL" />
        <Chip label="MongoDB" />
        <Chip label="AWS" />
      </Stack>
    </Paper>
  );
};

export default Skills;
