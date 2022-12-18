import React, { useEffect, useState } from "react";
import style from "./Cards.module.scss";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken")
      .then((response) => response.json())
      .then((data) => setData(data.meals));
  }, []);

  return (
    <ul className={style.list}>
      {data.length === 0 ? (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <></>
      )}

      {data.map((data) => {
        return (
          <li key={data.id} className={style.item}>
            <img
              src={data.strMealThumb}
              width={"132px"}
              height={"132px"}
              alt=""
            />
            <div>
              <h3 className={style.title}>Lorem, ipsum.</h3>
              <p className={style.price}>$ {data.idMeal}</p>
              <p className={style.desc}>{data.strMeal}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default Cards;
