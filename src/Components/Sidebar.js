import React from "react";
import "./Sidebar.css";
import SidebarData from "./SidebarData.js";
import { NavLink, Link } from "react-router-dom";
import Nav from "./Nav";

function Sidebar() {
  return (
    <div>
      <div className="sidebarParent">
        <ul className="sidebarList">
          {SidebarData.map((data, index) => (
            <li key={index} className="row">
              <div className="sideIcon">{data.icon}</div>
              <div className="rowLink">
                <Link to={data.link}>{data.name}</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
