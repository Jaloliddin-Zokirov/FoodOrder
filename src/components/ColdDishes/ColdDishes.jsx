import React from 'react';
import style from './ColdDishes.module.scss'

const ColdDishes = () => {
  return (
    <div className={style.coldDishes}>
      <div className={style.coldDishesBox}>
        <div className={style.coldDishesTop}>
          <h2 className={style.title}>Cold Dishes</h2>
        </div>
      </div>
    </div>
  );
}

export default ColdDishes;
