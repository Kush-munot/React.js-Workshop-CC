import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function Cards(props) {
  const color = grey[500];
  return (
    <Card
      sx={{
        minWidth: 275
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>{props.skills}</Typography>
        <Typography variant="body1">{props.desc}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={props.link}>
          Visit Project
        </Button>
      </CardActions>
    </Card>
  );
}
