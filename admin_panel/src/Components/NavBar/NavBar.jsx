import React from "react";
import "./NavBar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import topAvatar from "../../assets/images/TopAvatar.jpg";
import { Brightness4, Brightness7 } from "@material-ui/icons"; // Import light and dark icons

export default function NavBar({ theme, toggleTheme }) {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="topLeft">
          <span className="logo">Leila Fares</span>
        </div>
        <div className="topRight">
          <div className="navbarIconContainer">
            <NotificationsNone />
            <span className="navIconBadge">2</span>
          </div>
          <div className="navbarIconContainer">
            <Language />
            <span className="navIconBadge">2</span>
          </div>
          <div className="navbarIconContainer" onClick={toggleTheme}>
            {theme === "light" ? <Brightness4 /> : <Brightness7 />}
          </div>
          <img src={topAvatar} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
