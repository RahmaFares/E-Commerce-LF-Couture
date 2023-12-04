// GeneralSettings.jsx
import React from "react";
import styles from "./GeneralSettings.module.css";
import TopAvatar from '../../assets/images/TopAvatar.jpg';
export default function GeneralSettings() {
    return (
        <div className={styles.generalSettings}>
            <div className={styles.profileSummary}>
                <div className={styles.profilePicture}>
                    <img src={TopAvatar} alt="Rahma Fares" />
                    <button className={styles.changeProfileButton} aria-label="Change profile picture">
                        <i className={`${styles.iconCameraSolid} mt-1`}></i>
                    </button>
                </div>
                <h4>Rahma Fares</h4>
                <span className={`${styles.badge} ${styles.badgeSquare} ${styles.bgRed} ${styles.minW96} ${styles.mt25}`}>Admin</span>
                <p className={`${styles.subheading2} ${styles.mt6} ${styles.mb18}`}>Last visit 29/11/2023</p>
                <button className={`${styles.btn} ${styles.btnSecondary} ${styles.wFull} ${styles.mdMaxW280}`}>Log Out</button>
            </div>

            <div className={styles.notificationsAndMessages}>
                <button className={styles.yourButtonStyles}>Notifications</button>
                <button className={styles.yourButtonStyles}>Messages</button>
            </div>
        </div>
    );
}
