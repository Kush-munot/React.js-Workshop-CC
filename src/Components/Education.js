import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Container, Grid, Divider, Chip, Typography } from "@mui/material";

export default function ColorsTimeline() {
  return (
    <div>
      <Box
        id="Education"
        sx={{
          m: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundImage: "linear-gradient(to bottom, #dbe6f6, #c5796d);",
          alignItems: "center",
          p: "20px"
        }}
      >
        <Divider sx={{ width: "20rem", display: "flex", mt: "6rem" }}>
          <Typography variant="h4" component="h4">
            Education
          </Typography>
        </Divider>

        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="error" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="h4">
                2020 - 2024
                <br />
                <Typography variant="subtitle1" component="h4">
                  Shri Ramdeobaba College of Engineering and Management, Nagpur
                  <br />
                  Pursuing B.E in Computer Science.
                </Typography>
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="h4">
                2018 - 2020
                <br />
                <Typography variant="subtitle1" component="h4">
                  M.P.Deo Dharampeth Junior Science College, Nagpur
                  <br />
                  Completed my higher studies with 90% in 12th Boards.
                </Typography>
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="h4">
                2016-2018
                <br />
                <Typography variant="subtitle1" component="h4">
                  Kendriya Vidyalaya No.1 Sector 30, Gandhinagar, Gujarat
                  <br />
                  Completed my class 10th with 94% in Boards
                </Typography>
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="error" />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="h4">
                2007 - 2016
                <br />
                <Typography variant="subtitle1" component="h4">
                  Kindergarten and Middle School
                  <br />
                  Completed schooling from Nagpur,Dubai and Raipur.
                </Typography>
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </div>
  );
}
