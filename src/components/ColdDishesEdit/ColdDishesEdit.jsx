import React from 'react';
import style from './ColdDishesEdit.module.scss'

const ColdDishesEdit = () => {
  return (
    <div className={style.coldDishes}>
      <div className={style.coldDishesBox}>
        <div className={style.coldDishesTop}>
          <h2 className={style.title}>Cold Dishes Edit</h2>
        </div>
      </div>
    </div>
  );
}

export default ColdDishesEdit;
