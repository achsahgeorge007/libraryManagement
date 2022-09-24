import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "./../styles/header.css";

const drawerWidth = 250;
const navItems = [
  { label: "Home", href: "/home" },
  { label: "Book", href: "/book" },
  { label: "Library", href: "/library" },
  { label: "Login", href: "/login" },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerOpener = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={drawerOpener} sx={{ textAlign: "center" }}>
      <img src="./globe.png" width="50px" />
      <Typography variant="h6" sx={{ my: 2 }}>
        BookWorld
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ label, href }) => (
          <NavLink to={href} className="nav" key={label}>
            <MenuItem>{label}</MenuItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={drawerOpener}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
      <img src="./globe.png" width="50px" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BookWorld
          </Typography>
          <Box className="contents">
            {navItems.map(({ label, href }) => (
              <NavLink to={href} className="nav" key={label}>
                <MenuItem sx={{ color: "#fff" }}>{label}</MenuItem>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={drawerOpener}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;
