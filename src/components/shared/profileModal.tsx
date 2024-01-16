import { Box, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes.constants";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/silces/auth.silce";

const ProfileModal = (props: any) => {
  const dispatch = useDispatch();
  const { isOpen, toggleModalState } = props;
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOut());
    navigate(routes.LOGIN);
  };
  return (
    <Box>
      <Menu
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        open={isOpen}
        onClose={toggleModalState}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Appoinments</MenuItem>
        <MenuItem>Reports</MenuItem>
        <MenuItem onClick={handleLogout}>Log out</MenuItem>
      </Menu>
    </Box>
  );
};

export default ProfileModal;
