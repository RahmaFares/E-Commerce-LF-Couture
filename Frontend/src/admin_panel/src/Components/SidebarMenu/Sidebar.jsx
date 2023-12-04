import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Dashboard, PeopleAlt, Storefront, Equalizer, Settings,
  ExitToApp
} from "@material-ui/icons";
import styles from './Sidebar.module.css'; // Make sure this path is correct

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
    navigate("/login");
  };

  // This is a placeholder. You should replace it with the actual theme state from your application
  const theme = 'light'; // or 'dark'

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        {/* Dashboard Menu */}
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Dashboard</h3>
          <ul className={styles.sidebarList}>
            <Link to="/admin" className={styles.link}>
              <li className={`${styles.sidebarListItem} ${styles.active}`}>
                <Dashboard className={styles.sidebarIcon} />
                Home
              </li>
            </Link>
          </ul>
        </div>

        {/* User Management Menu */}
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>User Management</h3>
          <ul className={styles.sidebarList}>
            <Link to="/admin/users" className={styles.link}>
              <li className={styles.sidebarListItem}>
                <PeopleAlt className={styles.sidebarIcon} />
                User List
              </li>
            </Link>
            <Link to="/admin/users/add" className={styles.link}>
              <li className={styles.sidebarListItem}>
                <PeopleAlt className={styles.sidebarIcon} />
                Add User
              </li>
            </Link>
          </ul>
        </div>

        {/* Product Management Menu */}
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Product Management</h3>
          <ul className={styles.sidebarList}>
            <Link to="/admin/products" className={styles.link}>
              <li className={styles.sidebarListItem}>
                <Storefront className={styles.sidebarIcon} />
                Product List
              </li>
            </Link>
            <Link to="/admin/products/add" className={styles.link}>
              <li className={styles.sidebarListItem}>
                <Storefront className={styles.sidebarIcon} />
                Add Product
              </li>
            </Link>
          </ul>
        </div>

        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Settings</h3>
          <ul className={styles.sidebarList}>
            <Link to="/admin/general-settings" className={styles.link}>
              <li className={styles.sidebarListItem}>
                <Settings className={styles.sidebarIcon} />
                General Settings
              </li>
            </Link>
          </ul>
        </div>

        {/* Logout Menu */}
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Log Out</h3>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem} onClick={handleLogout}>
              <ExitToApp className={styles.sidebarIcon} />
              Log Out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
