import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Stack, Box } from "@mui/material";
import { AccountCircle, Email, Phone } from "@mui/icons-material";
import ProfileModal from "./profileModal";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes.constants";
import { headerText } from "../../languages/header";

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
            <Stack direction={"row"}>
              {" "}
              <a
                style={{ marginRight: "20px", textDecoration: "none" }}
                href={`tel:${headerText.phone}`}
              >
                <Stack direction={"row"}>
                  {" "}
                  <Phone sx={{ color: "white" }} />
                  <Typography sx={{ color: "white" }}>
                    {headerText.phone}
                  </Typography>
                </Stack>
              </a>
              <a
                href={`mailto:${headerText.email}`}
                style={{
                  marginRight: "20px",

                  textDecoration: "none",
                }}
              >
                <Stack direction={"row"}>
                  {" "}
                  <Email sx={{ color: "white" }} />
                  <Typography sx={{ color: "white" }}>
                    {headerText.email}
                  </Typography>
                </Stack>
              </a>
            </Stack>

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
