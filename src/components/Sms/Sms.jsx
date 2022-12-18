import React from 'react';
import style from "./Sms.module.scss";

const Sms = () => {
  return (
    <section className={style.sms}>
      <div className={style.smsBox}>
        <div className={style.top}>
          <div className={style.left}>
            <div className={style.titleBox}>
              <p className={style.titleName}>Sms</p>{" "}
              <time className={style.titleTime}>Tuesday, 2 Feb 2021</time>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sms;
