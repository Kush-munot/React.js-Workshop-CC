import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  Stack
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  const getCamelCase = (input) => {
    let words = input.split(" ");
    let linkWords = [];
    words.forEach((element) => {
      linkWords.push(
        element[0].toUpperCase() +
          element.slice(1, element.length).toLowerCase()
      );
    });
    return linkWords.join("");
  };
  const appBarButtons = (
    <Box sx={{ display: "flex", ml: "auto", alignItems: "center" }}>
      <Button
        variant="text"
        color="inherit"
        onClick={() => scrollTo("AboutMe")}
      >
        About Me
      </Button>
      <Button color="inherit" onClick={() => scrollTo("Education")}>
        Education
      </Button>
      <Button color="inherit" onClick={() => scrollTo("Projects")}>
        Projects
      </Button>
      <Button color="inherit" onClick={() => scrollTo("Contact")}>
        Contact
      </Button>
    </Box>
  );

  const sideDrawer = (
    <Box sx={{ display: "flex", ml: "auto", alignItems: "center" }}>
      <Drawer
        variant="temporary"
        anchor="right"
        PaperProps={{
          sx: { width: "40%", textAlign: "center" }
        }}
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
      >
        <List onClick={handleDrawerToggle}>
          {["ABOUT ME", "PROJECTS", "EDUCATION", "CONTACT"].map(
            (text, index) => (
              <ListItem
                button
                component="a"
                key={text}
                href={"#" + getCamelCase(text)}
              >
                <ListItemText sx={{ textAlign: "center" }} primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Stack direction="row" alignItems="center" gap={1} sx={{ flexGrow: 1 }}>
          <Typography variant="h6">Kush Munot</Typography>
          <CodeIcon fontSize="medium" />
        </Stack>
        <Hidden smDown>{appBarButtons}</Hidden>
        <Hidden smUp>{sideDrawer}</Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
