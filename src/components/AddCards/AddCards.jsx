import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import "./Loader.scss";
import img from "../images/x.png";
import style from "./AddCards.module.scss";

const AddCards = () => {
  let a = Math.floor(Math.random() * 100);
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [text, setText] = useState([{ img: "", meal: "", price: 0 }]);

  console.log(text);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken")
      .then((response) => response.json())
      .then((data) => setUsers(data.meals));
  }, []);


  function HandleClick() {
    if (modal === false) {
      setModal(true);
    } else {
      setModal(false);
    }
  }

  return (
    <div className={style.box}>
      {users.length === 0 ? (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <ul className={style.list}>
          <li>
            <button className={style.add} onClick={() => HandleClick()}>
              <img src="./src/assets/plus.svg" alt="" />
              <p>
                <AddIcon />
              </p>
              <p>Add new dish</p>
            </button>
          </li>

          {modal ? (
            <div className={style.modal1}>
              <img
                onClick={() => HandleClick()}
                className="exit"
                src={img}
                alt=""
                width={20}
              />
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  onChange={(e) => setText({ img: e.target.value })}
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your image url"
                />
                <input
                  onChange={(e) => setText({ meal: e.target.value })}
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your Meal type"
                />
                <input
                  onChange={(e) => setText({ price: e.target.value })}
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your Price"
                />
                <button onClick={() => HandleClick()}>Add Meal</button>
              </form>
            </div>
          ) : (
            <></>
          )}

          {users.map((item) => {
            return (
              <li key={item.strMeal}>
                <img
                  className={style.circle_img}
                  src={item.strMealThumb}
                  alt=""
                />

                <div className={style.text}>
                  <h3>Lorem, ipsum</h3>
                  <p>{a}$</p>

                  <button className={style.box}>
                    <img src="./src/assets/pen.svg" alt="" />{" "}
                    <span>Edit dish</span>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <div className={style.buttonBox}>
        <span className={style.buttonOne}>
          <Button variant="outlined">Discard Changes</Button>
        </span>
        <span className={style.buttonTwo}>
          <Button variant="contained">Save Changes</Button>
        </span>
      </div>
    </div>
  );
};

export default AddCards;
