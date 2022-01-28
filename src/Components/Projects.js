import * as React from "react";
import { Box, Divider, Typography, Grid } from "@mui/material";
import Cards from "./Card";

export default function Projects() {
  return (
    <div>
      <Box
        id="Projects"
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
            My Projects
          </Typography>
        </Divider>
        <br />
        <br />
        <Grid container spacing={24}>
          <Grid item md={3}>
            <Cards
              name="Codechef Chapters RCOEM Event Page"
              skills="HTML SCSS Javascript"
              link="https://rcoem-codechef-chapter.github.io/react-portfolio-workshop/"
              desc="It was the recently held React.js Workshop's Event page. I had encorporated a javascript code to make a timer by validating the current date then converting it into seconds. Doing the same process with the event date and then finding the difference and converting it back to seconds, minutes, hours and days. I used SCSS for having multiple browser compatibilty and creating different styles sheet "
            />
          </Grid>
          <Grid item md={3}>
            <Cards
              name="Backgroung Changing Weather App"
              skills="HTML CSS Javascript API Javascript-DOM"
              link="https://csb-87be7.netlify.app/"
              desc="This project is a Background Changing Weather App which uses Open weather API for getting current weather data and render it. I have encorporated a samll Javascript logic to render the backgroung image according to the current weather. I learnt working on APIs from this project. The Javascript DOM helped me change the styles and render a new Backgroung Image"
            />
          </Grid>
          <Grid item md={3}>
            <Cards
              name="Simple Portfolio Website"
              skills="HTML CSS Javascript Bootstrap"
              link="https://csb-3ct19.netlify.app/"
              desc="This was my first Project where I implemented a sample portfolio website as a task of Technical Club Interview Process. I had used Grid to make the website responsive. I made two different style sheets to toggle between Light Mode and Dark Mode. This toggling feature was enabled using Javascript. I used Bootstrap to get different components like progress bars, Nav bar, Card sections, etc.  "
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
