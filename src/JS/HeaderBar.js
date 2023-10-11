import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Routes, Route, Link } from "react-router-dom";
import SidePage from "./SidePage";
import Login from "./Login";
function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Button style={{ color: "white" }}>
              <Link to="/SidePage">
                <MenuIcon style={{ color: "white" }} />
              </Link>
            </Button>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Student Profile
          </Typography>
          <Button style={{ backgroundColor: "#0ca678" }}>
            <Link to="/Login" style={{ color: "white" }}>
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SidePage" element={<SidePage />} />
      </Routes>
    </Box>
  );
}
export default HeaderBar;
