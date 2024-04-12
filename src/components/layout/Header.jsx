import React from "react";
import {
  Toolbar,
  AppBar,
  Typography,
  Box,
  IconButton,
  Tooltip,
  Avatar,
  Stack
} from "@mui/material";
import { Menu as MenuIcon, Logout as LogoutIcon, Home as HomeIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Home from "../../pages/Home";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
        }}
        height={"4rem"}
      >

      <AppBar
      >
        <Toolbar sx={{
            position: "relative"
        }}>
          <Typography
            variant="p"
            fontSize={"1.5rem"}
            sx={{ cursor: "pointer", fontFamily: "sans-serif" }}
          >
            TodoApp
          </Typography>

          <Box
            sx={{
              display: { xs: "block", sm: "none" },
                position: "absolute",
                right: "1rem"
            }}
          >
            <IconButton color="inherit" size="large" sx={{
                
            }}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
            }}
          />

          <Box 
            sx={{
                display: {xs: "none", sm: "block"}
            }}
          >
            
            <Stack direction={"row"}
                spacing={"3rem"}
            >

            <Tooltip title="Home">
                <IconButton color="inherit" size="large">
                    <HomeIcon />
                </IconButton>   
            </Tooltip>

            <Tooltip title="Logout">
              <IconButton color="inherit" size="large">
                <LogoutIcon />
              </IconButton>
            </Tooltip>

            <Avatar 
                    src={"https://www.w3schools.com/howto/img_avatar.png"}
                    sx={{
                        marginRight: "2rem"
                    }}
              />

            </Stack>

              
          </Box> 
        </Toolbar>
      </AppBar>

      </Box>
    </>
  );
};

export default Header;
