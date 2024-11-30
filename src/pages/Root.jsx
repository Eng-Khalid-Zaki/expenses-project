import * as React from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
const drawerWidth = 240;

function Root({ onChangeTheme, currentTheme }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  // const drawer = (
  //   <div>
  //     <Toolbar />
  //     <Divider />
  //     <List>
  //       {[
  //         ["Home", <HomeIcon />, "/"],
  //         ["Create", <CreateIcon />, "/create"],
  //         ["Profile", <PersonIcon />, "/profile"],
  //         ["Settings", <SettingsIcon />, "/settings"],
  //         ["Logout", <LogoutIcon />, "/"],
  //       ].map((element) => (
  //         <Link className="link" to={element[2]}>
  //           <ListItem key={element[0]} disablePadding>
  //             <ListItemButton>
  //               <ListItemIcon>{element[1]}</ListItemIcon>
  //               <ListItemText primary={element[0]} />
  //             </ListItemButton>
  //           </ListItem>
  //         </Link>
  //       ))}
  //     </List>
  //     <Divider />
  //   </div>
  // );
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header
        DrawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Sidebar
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        onChangeTheme={onChangeTheme}
        currentTheme={currentTheme}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Root;
