import React from "react";
import { Link } from "react-router-dom";
import { Dashboard, PeopleAlt, Storefront, TrendingUp, Equalizer, Settings, Assessment, Email, Feedback, Sms, Notifications, Help, ExitToApp, } from "@material-ui/icons";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <Dashboard className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Equalizer className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">User Management</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PeopleAlt className="sidebarIcon" />
                User List
              </li>
            </Link>
            <li className="sidebarListItem">
              <PeopleAlt className="sidebarIcon" />
              Add User
            </li>
            <li className="sidebarListItem">
              <PeopleAlt className="sidebarIcon" />
              User Permissions
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Product Management</h3>
          <ul className="sidebarList">
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Product List
              </li>
            </Link>
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              Add Product
            </li>
            {/* <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              Categories
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Analytics</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Assessment className="sidebarIcon" />
              Analytics
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Settings</h3>
          <ul className="sidebarList">
            <Link to="/general-settings" className="link">
              <li className="sidebarListItem">
                <Settings className="sidebarIcon" />
                General Settings
              </li>
            </Link>
            <li className="sidebarListItem">
              <Settings className="sidebarIcon" />
              Security Settings
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Reports</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Assessment className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Messages</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Email className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <Feedback className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <Sms className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Notifications className="sidebarIcon" />
              Notifications
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Support/Help</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Help className="sidebarIcon" />
              Support/Help
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Log Out</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ExitToApp className="sidebarIcon" />
              Log Out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
