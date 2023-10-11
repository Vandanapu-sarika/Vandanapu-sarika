import React from "react";
import "./SidePage.css";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LockResetIcon from "@mui/icons-material/LockReset";
import { Route, Routes, Link } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
import Home from "./Home";
import Forgot from "./Forgot";
function SidePage() {
  return (
    <div>
      <div class="side">
        <div class="items">
          <HomeIcon />
          <Link to="/Home" class="lin">
            Home
          </Link>
        </div>
        <br></br>
        <br></br>

        <div class="items">
          <LoginIcon />
          <Link to="/Login" class="lin">
            Login
          </Link>
        </div>
        <br></br>
        <br></br>

        <div class="items">
          <HowToRegIcon />
          <Link to="/Registration" class="lin">
            Registration
          </Link>
        </div>
        <br></br>
        <br></br>

        <div class="items">
          <LockResetIcon />
          <Link to="/Forgot" class="lin">
            Forgot Password
          </Link>
        </div>
        <br></br>
        <br></br>
      </div>
      <Routes>
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Forgot" element={<Forgot />} />
      </Routes>
    </div>
  );
}

export default SidePage;
