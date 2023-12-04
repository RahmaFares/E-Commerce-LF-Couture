import React from "react";
import styles from "./NavBar.module.css"; // Make sure to import the styles
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import topAvatar from "../../assets/images/TopAvatar.jpg";
import { Brightness4, Brightness7 } from "@material-ui/icons"; // Import light and dark icons

export default function NavBar({ theme, toggleTheme }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarWrapper}>
        <div className={styles.logo}>Leila Fares - Admin</div>
        <div className={styles.topRight}>
          <div className={styles.navbarIconContainer}>
            <NotificationsNone />
            <span className={styles.navIconBadge}>2</span>
          </div>
          <div className={styles.navbarIconContainer}>
            <Language />
            <span className={styles.navIconBadge}>2</span>
          </div>
          <div className={styles.navbarIconContainer} onClick={toggleTheme}>
            {theme === "light" ? <Brightness4 /> : <Brightness7 />}
          </div>
          <img src={topAvatar} alt="Profile" className={styles.topAvatar} />
        </div>
      </div>
    </div>
  );
}
