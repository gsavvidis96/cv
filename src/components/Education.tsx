import { Circle } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

const Education = () => {
  return (
    <Stack gap={2}>
      <Typography variant="h6">Education</Typography>

      <Stack>
        <Stack direction="row" sx={{ alignItems: "center" }} gap={1}>
          <Circle sx={{ height: "8px", width: "8px" }} />

          <Typography
            variant="body1"
            component="a"
            href="http://www.ice.uniwa.gr"
            sx={{ color: "linkColor.main" }}
            target="_blank"
          >
            University of West Attica Department of Informatics and Computer
            Engineering
          </Typography>
        </Stack>

        <Stack sx={{ pl: "16px" }}>
          <Typography variant="body2" color="text.secondary">
            Athens, GR
          </Typography>

          <Typography variant="body2" color="text.secondary">
            September 2014 (Not Graduated)
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Education;
