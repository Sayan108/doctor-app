import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../routes.constants";

function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate(routes.LOGIN);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#333" }}>
      <Toolbar sx={{ color: "gray" }}>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          Doctors' App
        </Typography>
        <Stack direction={"row"} sx={{}}>
          <Link to="/">Home</Link>
          <Button
            variant="contained"
            onClick={handleLogout}
            sx={{ backgroundColor: "red", color: "#fff" }}
          >
            Log out
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
