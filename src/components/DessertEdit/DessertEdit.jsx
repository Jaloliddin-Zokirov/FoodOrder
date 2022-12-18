import React from 'react';
import style from './DessertEdit.module.scss'

const DessertEdit = () => {
  return (
    <div className={style.dessert}>
      <div className={style.dessertBox}>
        <div className={style.dessertTop}>
          <h2 className={style.title}>Dessert Edit</h2>
        </div>
      </div>
    </div>
  );
}

export default DessertEdit;
