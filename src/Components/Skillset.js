import { Box, Container, Grid, Divider, Chip, Typography } from "@mui/material";
import React from "react";

const SkillSet = () => {
  const skillSetIcon = [
    "devicon-html5-plain",
    "devicon-javascript-plain",
    "devicon-typescript-plain",
    "devicon-nodejs-plain-wordmark",
    "devicon-react-original",
    "devicon-googlecloud-plain-wordmark",
    "devicon-css3-plain",
    "devicon-python-plain",
    "devicon-c-plain",
    "devicon-c++-plain"
  ];
  return (
    <Box
      id="AboutMe"
      sx={{
        m: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: "20px"
      }}
    >
      <Divider sx={{ width: "20rem", display: "flex", mt: "6rem" }}>
        <Typography variant="h4" component="h4">
          About Me
        </Typography>
      </Divider>
      <Typography
        variant="body1"
        component="h4"
        textAlign="center"
        sx={{ m: "15px" }}
      >
        I am a computer science graduate from the Shri Ramdeobaba College Of
        Engineering and Management. I love to create new and challenging stuff.{" "}
        <br />I am a self-motivated, agile and quick learner.
      </Typography>
      <Divider sx={{ width: "20rem", display: "flex", mt: "1rem" }}>
        <Typography variant="h4" component="h4">
          My Skills
        </Typography>
      </Divider>
      <Grid
        container
        spacing={5}
        padding={2}
        columnSpacing={5}
        columns={{ xs: 4, sm: 6, md: 10 }}
        rowSpacing={5}
        justifyContent="center"
        textAlign="center"
      >
        {Array.from(skillSetIcon).map((item, index) => (
          <Grid item xs={2} sm={2} md={2} key={index}>
            <i className={item} style={{ fontSize: "7rem" }}></i>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default SkillSet;
