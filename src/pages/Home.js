import React from "react";
import "./Home.css";
import Nav from "../Components/Nav";
import Sidebar from "../Components/Sidebar";
function Home() {
  return (
    <div className="containerBossHome" style={{ backgroundColor: "#F4F9F9" }}>
      <Nav />
      <Sidebar />

      <div className="mainContainerHome">
        <div
          className="TextDiv"
          style={{ position: "relative", right: "3rem" }}
        >
          <h1 className="headingOne">
            Digital Service to <span style={{ color: "#733C3C" }}>solve</span>{" "}
            business <span style={{ color: "#733C3C" }}> problems</span>
          </h1>
        </div>
        <div className="homeImgDiv">
          <img src="https://images.unsplash.com/photo-1544396821-4dd40b938ad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" />
        </div>
      </div>
    </div>
  );
}

export default Home;
