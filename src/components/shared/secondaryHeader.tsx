import { Home } from "@mui/icons-material";
import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./searchBar";

const SecondaryHeader = () => {
  const navigate = useNavigate();
  const handleBoxClick = (e: React.MouseEvent<HTMLElement>) => {
    navigate(e.currentTarget.id);
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "#333" }}>
      <Toolbar sx={{ color: "white" }}>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {" "}
          <Stack direction={"row"} gap="20px">
            <Box id="/" onClick={handleBoxClick}>
              <Home sx={{ color: "white", cursor: "pointer" }} />
            </Box>
            <Box id="/services" onClick={handleBoxClick}>
              <Typography sx={{ color: "white", cursor: "pointer" }}>
                Services
              </Typography>
            </Box>
            <Box id="/blogs" onClick={handleBoxClick}>
              <Typography sx={{ color: "white", cursor: "pointer" }}>
                Blogs
              </Typography>
            </Box>
            <Box id="/testimonials" onClick={handleBoxClick}>
              <Typography sx={{ color: "white", cursor: "pointer" }}>
                Testimonials
              </Typography>
            </Box>
            <Box id="/contact" onClick={handleBoxClick}>
              <Typography sx={{ color: "white", cursor: "pointer" }}>
                Contact Us
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default SecondaryHeader;
