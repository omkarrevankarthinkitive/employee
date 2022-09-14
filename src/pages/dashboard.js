import React from "react";
import { TextField, Button } from "@mui/material";
import Nav from "../Components/Nav";
import Sidebar from "../Components/Sidebar";
import Home from "./Home";
function dashboard() {
  return (
    <div>
      <div className="parentDash">
        <Nav />
        <Sidebar />
      </div>
      <div></div>
    </div>
  );
}

export default dashboard;
