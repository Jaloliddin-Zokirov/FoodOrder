import React from "react";
import SettingList from "./SettingList";
import { Outlet } from "react-router-dom";
import "./style.scss";
const SettingOther = () => {
  return (
    <section className="settingLists">
      <div className="settingBox">
        <div className="settingLeft">
          <SettingList
            link={"appereance-setting"}
            icon="bi bi-heart"
            title={"Appereance"}
            desc="Dark and Light mode, Font size"
          />
          <SettingList
            link={"restaurant-setting"}
            icon="bi bi-house-heart"
            title={"Your Restaurant"}
            desc="Dark and Light mode, Font size"
          />

          <SettingList
            link={"management-setting"}
            icon="bi bi-percent"
            title={"Products Management"}
            desc="Manage your product, pricing, etc"
          />
          <SettingList
            link={"notification-setting"}
            icon="bi bi-bell"
            title={"Notifications"}
            desc="Customize your notifications"
          />
          <SettingList
            link={"security-setting"}
            icon="bi bi-lock"
            title={"Securty"}
            desc="Configure Password, PIN, etc"
          />
          <SettingList
            link={"about-setting"}
            icon="bi bi-file-person"
            title={"About Us"}
            desc="Configure Password, PIN, etc"
          />
        </div>
        <div className="settingRight">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default SettingOther;
