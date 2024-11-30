import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const drawerWidth = 240;

function Sidebar({
  open,
  onTransitionEnd,
  onClose,
  onChangeTheme,
  currentTheme,
}) {
  const drawer = (
    <Box>
      <Toolbar
        sx={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
      >
        {currentTheme.palette.mode === "dark" ? (
          <DarkModeIcon onClick={onChangeTheme} />
        ) : (
          <LightModeIcon onClick={onChangeTheme} />
        )}
      </Toolbar>
      <Divider />
      <List>
        {[
          ["Home", <HomeIcon />, "/"],
          ["Create", <CreateIcon />, "/create"],
          ["Profile", <PersonIcon />, "/profile"],
          ["Settings", <SettingsIcon />, "/settings"],
          ["Logout", <LogoutIcon />, "/"],
        ].map((element) => (
          <Link className="link" to={element[2]}>
            <ListItem key={element[0]} disablePadding>
              <ListItemButton>
                <ListItemIcon>{element[1]}</ListItemIcon>
                <ListItemText primary={element[0]} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={open}
        onTransitionEnd={onTransitionEnd}
        onClose={onClose}
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
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
