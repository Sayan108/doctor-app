import { SearchRounded } from "@mui/icons-material";
import { Box, OutlinedInput, TextField } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <OutlinedInput
      placeholder="Search for your doctor "
      sx={{ backgroundColor: "white", width: "40%", height: "100%" }}
      endAdornment={
        <Box
          onClick={() => {
            console.log("searching");
          }}
        >
          <SearchRounded sx={{ cursor: "pointer" }} />
        </Box>
      }
    ></OutlinedInput>
  );
};

export default SearchBar;
