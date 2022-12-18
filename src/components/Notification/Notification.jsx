import React from 'react';
import style from './Notification.module.scss'

const Notification = () => {
  return (
    <section className={style.notification}>
      <div className={style.notificationBox}>
        <div className={style.top}>
          <div className={style.left}>
            <div className={style.titleBox}>
              <p className={style.titleName}>Notification</p>{" "}
              <time className={style.titleTime}>Tuesday, 2 Feb 2021</time>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Notification;
