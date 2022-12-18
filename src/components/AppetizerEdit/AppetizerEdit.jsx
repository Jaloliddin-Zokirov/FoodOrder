import React from 'react';
import style from './AppetizerEdit.module.scss'

const AppetizerEdit = () => {
  return (
    <div className={style.appetizer}>
      <div className={style.appetizerBox}>
        <div className={style.appetizerTop}>
          <h2 className={style.title}>Appetizer Edit</h2>
        </div>
      </div>
    </div>
  );
}

export default AppetizerEdit;
