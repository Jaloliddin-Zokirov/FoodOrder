import React from 'react';
import style from './GrillEdit.module.scss'

const GrillEdit = () => {
  return (
    <div className={style.grill}>
      <div className={style.grillBox}>
        <div className={style.grillTop}>
          <h2 className={style.title}>Grill Edit</h2>
        </div>
      </div>
    </div>
  );
}

export default GrillEdit;
