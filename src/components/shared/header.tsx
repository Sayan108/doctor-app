import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Stack, Box } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import ProfileModal from "./profileModal";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes.constants";

function Header() {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const toogleModalState = () => {
    setisOpen(!isOpen);
  };
  const handleLogoClick = () => {
    navigate(routes.DASHBOARD);
  };
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#333" }}>
        <Toolbar sx={{ color: "white" }}>
          <Typography
            variant="h4"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={handleLogoClick}
          >
            Doctors' App
          </Typography>
          <Stack direction={"row"} sx={{}} spacing={"4"}>
            <Box onClick={toogleModalState} sx={{ cursor: "pointer" }}>
              {" "}
              <AccountCircle />
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      <ProfileModal isOpen={isOpen} toggleModalState={toogleModalState} />
    </>
  );
}

export default Header;
