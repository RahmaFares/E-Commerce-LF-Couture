import React from "react";
import "./GeneralSettings.css"; // Import your GeneralSettings.css

export default function GeneralSettings() {
    return (
        <div className="general-settings">
            <div className="profile-summary">
                <div className="profile-picture">
                    <img src="/assets/avatar-bbcd15aa.webp" alt="Maria Smith" />
                    <button className="change-profile-button" aria-label="Change profile picture">
                        <i className="icon-camera-solid mt-1"></i>
                    </button>
                </div>
                <h4>Maria Smith</h4>
                <span className="badge badge--square bg-red min-w-[96px] mt-2.5">Admin</span>
                <p className="subheading-2 mt-6 mb-[18px]">Last visit 15/10/2023</p>
                <button className="btn btn--secondary w-full md:max-w-[280px]">Log Out</button>
            </div>

            <div className="notifications-and-messages">
                <button className="your-button-styles">Notifications</button>
                <button className="your-button-styles">Messages</button>
            </div>
        </div>
    );
}
