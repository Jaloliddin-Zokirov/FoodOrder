import React from "react";
import SettingOther from "./SettingOthert";
import style from "./Setting.module.scss";

const Setting = () => {
  return (
    <section className={style.setting}>
      <div className={style.settingBox}>
        <div className={style.top}>
          <div className={style.left}>
            <div className={style.titleBox}>
              <p className={style.titleName}>Setting</p>{" "}
              <time className={style.titleTime}>Tuesday, 2 Feb 2021</time>
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <SettingOther />
        </div>
      </div>
    </section>
  );
};

export default Setting;
