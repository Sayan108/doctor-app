import { Box, Button, Stack } from "@mui/material";

const Homepage = () => {
  return (
    <Box position="relative">
      {/* Box with reduced opacity */}

      <Box
        sx={{
          position: "absolute",
          bottom: "40px", // Adjust the distance from the bottom
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ alignSelf: "center" }}
        >
          Book Appointment
        </Button>
      </Box>

      <Box
        sx={{
          position: "relative",
          height: "100vh",
          backgroundImage: "url('./assets/images/base.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          opacity: 0.5, // Adjust the opacity for the background
        }}
      >
        {/* Additional images for decoration */}
      </Box>

      {/* Button with lift effect and animation */}

      {/* Rest of your content */}
    </Box>
  );
};

export default Homepage;
