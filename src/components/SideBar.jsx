import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

import React from "react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const SideBar = (props) => {
  const { window } = props;
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate=useNavigate()
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const handleGoToHome=()=>{
    navigate("/home")
  }
  const handleGoToStudent=()=>{
    navigate("/student")
  }
  const handleGoToTeacher=()=>{
    navigate("/teacher")
  }
  const handleLogOut=()=>{
    navigate("/")
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div>
        <List style={{ padding: "13px 16px " }}>
          <Typography variant="h6" sx={{ fontWeight: "700" }}>
            Collage management
          </Typography>
          {/* <img src={logo} alt="LOGO" style={{ height: "2rem" }} /> */}
        </List>
        <Divider />
        <List>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => {
              handleListItemClick(event, 1)
              handleGoToHome()
            }}
            key={1}
          >
            <ListItemIcon>
              {/* <HomeOutlinedIcon sx={{ fontSize: { uxl: "28px" } }} /> */}
            </ListItemIcon>
            <ListItemText
              primary="Class"
              primaryTypographyProps={{ fontSize: { uxl: "20px" } }}
            />
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => {
              handleListItemClick(event, 2);
              handleGoToStudent()
              
            }}
            key={2}
          >
            <ListItemIcon>
              {/* <EmojiEventsOutlinedIcon sx={{ fontSize: { uxl: "28px" } }} /> */}
            </ListItemIcon>
            <ListItemText
              primary="Student"
              primaryTypographyProps={{ fontSize: { } }}
            />
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => {
              handleListItemClick(event, 3);
              handleGoToTeacher()
            }}
            key={3}
          >
            <ListItemIcon>
              {/* <EmojiEventsOutlinedIcon sx={{ fontSize: { uxl: "28px" } }} /> */}
            </ListItemIcon>
            <ListItemText
              primary="Teacher"
              primaryTypographyProps={{ fontSize: {  } }}
            />
          </ListItemButton>

        </List>
        <Divider />
        <List>
          <Button 
          onClick={handleLogOut}
          >Logout</Button>
        </List>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <div className="SideBar">
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              backgroundColor: "#ffffff",
              color: "#000",
              boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1);",
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar sx={{ display: { md: "none", lg: "none", sm: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  display: { sm: "none" },
                  justifyContent: "left",
                  ml: 1,
                }}
              >
                {/* <MenuIcon /> */}
              </IconButton>
              {/* <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography> */}
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <Toolbar sx={{ display: { md: "none", lg: "none", sm: "none" } }} />

            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
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
                  width: { sm: drawerWidth, uxl: 350 },
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 0,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            {/* show here components */}
          </Box>
        </Box>
      </div>
    </>
  );
};
SideBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SideBar;
