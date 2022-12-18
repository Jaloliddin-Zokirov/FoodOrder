import React from "react";
import "./style.scss";
const MostOrderInfo = ({ MostImg, MostTitle, MostDescription }) => {
  return (
    <>
      <div className="MostOrderInfo d-flex">
        <div className="MostOrderInfo__img">
          <img src={MostImg} alt="img" />
        </div>
        <div className="MostOrderInfo__texts">
          <h4>{MostTitle}</h4>
          <p>{MostDescription}</p>
        </div>
      </div>
    </>
  );
};

export default MostOrderInfo;
