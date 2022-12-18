import React from "react";
import style from "./Statistics.module.scss";

const Statistics = () => {
  return (
    <section className={style.statistic}>
      <div className={style.statisticBox}>
        <div className={style.top}>
          <div className={style.left}>
            <div className={style.titleBox}>
              <p className={style.titleName}>Statistics</p>{" "}
              <time className={style.titleTime}>Tuesday, 2 Feb 2021</time>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
