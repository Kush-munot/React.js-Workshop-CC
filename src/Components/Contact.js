import { Box, Divider, Typography, IconButton } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Contact = () => {
  const socialLinks = [
    {
      icon: <GitHubIcon />,
      url: "https://github.com/Kush-munot"
    },
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/kush-munot"
    },
    {
      icon: <InstagramIcon />,
      url: "https://www.instagram.com/kushjain.17/"
    }
  ];
  return (
    <Box
      id="Contact"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: "20px",
        m: "0 auto",
        backgroundColor: "rgb(0, 0, 1)"
      }}
    >
      <Divider sx={{ width: "20rem", display: "flex", mt: "3rem" }}>
        <Typography variant="h5" component="h4" color="common.white">
          Connect with me
        </Typography>
      </Divider>
      <Box
        sx={{
          mt: "1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Typography variant="h6" component="h6" color="common.white">
          Email: munot.kgm@gmail.com
        </Typography>
      </Box>
      <Divider
        sx={{
          width: "30rem",
          display: "flex",
          mt: "10px",
          mb: "10px"
        }}
        style={{ backgroundColor: "white" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {socialLinks.map((socialLink) => (
          <IconButton
            key={socialLink.url}
            onClick={() => window.open(socialLink.url)}
            color="primary"
            size="large"
            sx={{
              ":hover": {
                bgcolor: "secondary.main", // theme.palette.primary.main
                color: "white"
              }
            }}
          >
            {socialLink.icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};
export default Contact;
