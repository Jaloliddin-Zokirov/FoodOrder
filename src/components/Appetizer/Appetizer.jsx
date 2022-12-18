import React from 'react';
import style from './Appetizer.module.scss'

const Appetizer = () => {
  return (
    <div className={style.appetizer}>
      <div className={style.appetizerBox}>
        <div className={style.appetizerTop}>
          <h2 className={style.title}>Appetizer</h2>
        </div>
      </div>
    </div>
  );
}

export default Appetizer;
