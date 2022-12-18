import React from 'react';
import style from './Soup.module.scss'

const Soup = () => {
  return (
    <div className={style.soup}>
      <div className={style.soupBox}>
        <div className={style.soupTop}>
          <h2 className={style.title}>Soup</h2>
        </div>
      </div>
    </div>
  );
}

export default Soup;
