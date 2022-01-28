import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      light: "#e5ffff",
      main: "#ffffff",
      dark: "#82ada9"
    },
    secondary: {
      light: "#62727b",
      main: "#0f607d",
      dark: "#102027"
    },
    background: {
      default: "linear-gradient(to right, #2bc0e4, #eaecc6)"
    }
  }
});

export default theme;
