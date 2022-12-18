import React, { useRef } from "react";
import DashboardBottom from "./DashboardBottom";
import MostOrderInfo from "./MostOrderInfo";
import style from "./Dashboard.module.scss";

const Dashboard = () => {
  const MostCards2 = useRef();
  return (
    <section className={style.dashboard}>
      <div className={style.dashboardBox}>
        <div className={style.dashboardLeft}>
          <div className={style.top}>
            <div className={style.left}>
              <div className={style.titleBox}>
                <p className={style.titleName}>Dashboards</p>
                <time className={style.titleTime}>Tuesday, 2 Feb 2021</time>
              </div>
            </div>
          </div>
          <div className={style.dashboardBottom}>
            <DashboardBottom />
          </div>
        </div>
        <div className={style.dashboardRight}>
          <div className="col-12 MustOrder">
            <div className="MustOrder__orderTitle d-flex justify-content-between">
              <h2>Most Ordered</h2>
              <select>
                <option value="today">Today</option>
              </select>
            </div>
            <div className="MostCards mt-5">
              <MostOrderInfo
                MostImg="https://picsum.photos/id/13/61/55"
                MostTitle="Spicy seasoned seafood noodles"
                MostDescription="200 dishes ordered"
              />
              <MostOrderInfo
                MostImg="https://picsum.photos/id/14/61/55"
                MostTitle="Salted pasta with mushroom sauce"
                MostDescription="120 dishes ordered"
              />
              <MostOrderInfo
                MostImg="https://picsum.photos/id/15/61/55"
                MostTitle="Beef dumpling in hot and sour soup"
                MostDescription="80 dishes ordered"
              />
            </div>
            <div className="MostCards MostCards2 mt-5" ref={MostCards2}>
              <MostOrderInfo
                MostImg="https://picsum.photos/id/13/61/55"
                MostTitle="Spicy seasoned seafood noodles"
                MostDescription="200 dishes ordered"
              />
              <MostOrderInfo
                MostImg="https://picsum.photos/id/14/61/55"
                MostTitle="Salted pasta with mushroom sauce"
                MostDescription="120 dishes ordered"
              />
            </div>
            <div className="viewAll">
              <button
                href="#"
                className="w-100 text-center"
                onClick={(e) => {
                  MostCards2.current.classList.toggle("MostCards2-blobk");
                }}
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
