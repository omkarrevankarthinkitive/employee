import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "./Nav.css";
import { Link } from "react-router-dom";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Dashboard", "Logout"];

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className="imageInNav">
            <img src="https://cdn.worldvectorlogo.com/logos/lorem-lorem.svg" />
          </div>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <Box sx={{ flexGrow: 0 }} className="absoluteToTheRight">
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <Link to="/profile">profile</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">dashboard</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;

// import {
//   AppBar,
//   Toolbar,
//   Container,
//   Typography,
//   Box,
//   Tooltip,
//   IconButton,
//   Avatar,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import React from "react";
// import "./Nav.css";

// const settings = ["profile", "dashboard", "logout"];

// function Nav() {
//   return (
//     <div>
//       <AppBar position="static">
//         <Container maxWidth="xl">
//           <Toolbar>
//             <div className="imageInNav">
//               <img src="https://cdn.worldvectorlogo.com/logos/lorem-lorem.svg" />
//             </div>
//             <div>
//               <Box sx={{ flexGrow: 0 }}>
//                 <Tooltip title="open settings">
//                   <IconButton>
//                     <Avatar
//                       alt="image"
//                       src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
//                     />
//                   </IconButton>
//                 </Tooltip>
//                 <Menu
//                   anchorOrigin={{
//                     vertical: "top",
//                     horiontal: "right",
//                   }}
//                   keepMounted
//                   transformOrigin={{
//                     vertical: "top",
//                     horizontal: "right",
//                   }}
//                 >
//                   {settings.map((setting) => {
//                     <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                       <Typography textAlign="center">{setting}</Typography>;
//                     </MenuItem>;
//                   })}
//                 </Menu>
//               </Box>
//             </div>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </div>
//   );
// }

// export default Nav;
