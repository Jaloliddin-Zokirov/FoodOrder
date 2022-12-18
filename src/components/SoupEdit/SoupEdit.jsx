import React from 'react';
import style from './SoupEdit.module.scss'

const SoupEdit = () => {
  return (
    <div className={style.soup}>
      <div className={style.soupBox}>
        <div className={style.soupTop}>
          <h2 className={style.title}>Soup Edit</h2>
        </div>
      </div>
    </div>
  );
}

export default SoupEdit;
