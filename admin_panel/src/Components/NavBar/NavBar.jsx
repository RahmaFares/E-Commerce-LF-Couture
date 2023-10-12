import React from "react";
import "./NavBar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import topAvatar from "../../assets/images/TopAvatar.jpg";

export default function NavBar() {
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
          <div className="navbarIconContainer">
            <Settings />
          </div>
          <img src={topAvatar} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}