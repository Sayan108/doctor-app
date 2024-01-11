import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export interface Props {
  children: React.ReactNode;
}

const AuthLayOut: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 5,
        }}
      >
        <Typography variant="h5">Doctor's App</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // Stack children vertically on small screens
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Stack
          spacing={4}
          direction={{ xs: "column", sm: "row" }} // Stack children vertically on small screens, horizontally on larger screens
        >
          {props.children}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: { xs: "100%", sm: "50%" }, // Take full width on small screens, 50% width on larger screens
            }}
          >
            <img
              src="./doctors-app-base.jpg"
              alt="doctor-app-base.png"
              style={{ width: "100%", height: "auto" }} // Make the image responsive
            />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default AuthLayOut;
