import React from 'react';
import style from './Grill.module.scss'

const Grill = () => {
  return (
    <div className={style.grill}>
      <div className={style.grillBox}>
        <div className={style.grillTop}>
          <h2 className={style.title}>Grill</h2>
        </div>
      </div>
    </div>
  );
}

export default Grill;
