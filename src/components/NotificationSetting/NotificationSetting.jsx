import React from "react";
import style from "./Notification.module.scss"

const NotificationSetting = () => {
  return (
    <div className={style.notificationSetting}>
      <div className={style.top}>
        <h2 className={style.title}>Notification Setting</h2>
      </div>
    </div>
  );
};

export default NotificationSetting;
