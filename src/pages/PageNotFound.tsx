import { Box, Typography } from "@mui/material";
import React from "react";
import { PageNotFoundText } from "../languages/PageNotFound";
const PageNotFound = () => {
  return (
    <>
      <Box sx={{}}>
        <Typography variant="h1">{PageNotFoundText.text}</Typography>
      </Box>
    </>
  );
};

export default PageNotFound;
