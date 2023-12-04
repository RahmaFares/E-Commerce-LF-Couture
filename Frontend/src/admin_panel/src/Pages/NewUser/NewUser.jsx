import React from "react";
import styles from "./newUser.module.css";

export default function NewUser() {
  return (
    <div className={styles.newUser}>
      <h1 className={styles.newUserTitle}>New User</h1>
      <form className={styles.newUserForm}>
        <div className={styles.newUserItem}>
          <label className={styles.newUserItemLabel}>Username</label>
          <input className={styles.newUserItemInput} type="text" placeholder="john" />
        </div>
        <div className={styles.newUserItem}>
          <label className={styles.newUserItemLabel}>Full Name</label>
          <input className={styles.newUserItemInput} type="text" placeholder="John Smith" />
        </div>
        <div className={styles.newUserItem}>
          <label className={styles.newUserItemLabel}>Email</label>
          <input className={styles.newUserItemInput} type="email" placeholder="john@gmail.com" />
        </div>
        <div className={styles.newUserItem}>
          <label className={styles.newUserItemLabel}>Password</label>
          <input className={styles.newUserItemInput} type="password" placeholder="password" />
        </div>
        <div className={styles.newUserItem}>
          <label className={styles.newUserItemLabel}>Phone</label>
          <input className={styles.newUserItemInput} type="text" placeholder="+1 123 456 78" />
        </div>
        <div className={styles.newUserItem}>
          <label className={styles.newUserItemLabel}>Address</label>
          <input className={styles.newUserItemInput} type="text" placeholder="New York | USA" />
        </div>
        <div className={styles.newUserItem}>
          <label className={styles.newUserItemLabel}>Gender</label>
          <div className={styles.newUserGender}>
            <input type="radio" name="gender" id="male" value="male" />
            <label className={styles.newUserGenderLabel} htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label className={styles.newUserGenderLabel} htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label className={styles.newUserGenderLabel} htmlFor="other">Other</label>
          </div>
        </div>
        <div className={styles.newUserItem}>
          <label className={styles.newUserItemLabel}>Active</label>
          <select className={styles.newUserSelect} name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className={styles.newUserButton}>Create</button>
      </form>
    </div>
  );
}
