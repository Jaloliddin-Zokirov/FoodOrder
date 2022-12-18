import React from 'react';
import style from './Dessert.module.scss'

const Dessert = () => {
  return (
    <div className={style.dessert}>
      <div className={style.dessertBox}>
        <div className={style.dessertTop}>
          <h2 className={style.title}>Dessert</h2>
        </div>
      </div>
    </div>
  );
}

export default Dessert;
