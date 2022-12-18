import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import style from "./Default.module.scss";
import "./Links.scss";

const Default = () => {
  const storageName = window.localStorage.getItem("name");
  const [count, setCount] = useState(1)
  const [istr, settr] = useState('d-flex')



  function increment() {
    setCount(count => count + 1)
  }

  function del() {
    settr("d-none")
  }

  function decrement() {
    if (count === 1) {
      setCount(count => count -= 0)
    } else {
      setCount(count => count -= 1)
    }
  }
  // console.log(storage);
  return (
    <section className={style.default}>
      <div className={style.dafeultBox}>
        <div className={style.leftBox}>
          <div className={style.top}>
            <div className={style.left}>
              {storageName ? (
                <div className={style.titleBox}>
                  <p className={style.titleName}>{storageName}</p>{" "}
                  <time className={style.titleTime}>Tuesday, 2 Feb 2021</time>
                </div>
              ) : (
                <Link className={style.buttonLink} to={"/login"}>
                  <Button variant="contained">Log In</Button>
                </Link>
              )}
            </div>
            <div className={style.right}>
              <label className={style.label}>
                <span className={style.icon}>
                  <SearchIcon sx={{ color: "white" }} />
                </span>
                <input
                  className={style.searchInput}
                  type="search"
                  placeholder="Search for food, coffe, etc.."
                />
              </label>
            </div>
          </div>
          <div className="links">
            <div className="top">
              <ul className="list">
                <li className="item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `active home-links` : `link home-links`
                    }
                    to={"/"}
                  >
                    Hot Dishes
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `active home-links` : `link home-links`
                    }
                    to={"cold-dishes"}
                  >
                    Cold Dishes
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `active home-links` : `link home-links`
                    }
                    to={"soup"}
                  >
                    Soup
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `active home-links` : `link home-links`
                    }
                    to={"grill"}
                  >
                    Grill
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `active home-links` : `link home-links`
                    }
                    to={"appetizer"}
                  >
                    Appetizer
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `active home-links` : `link home-links`
                    }
                    to={"dessert"}
                  >
                    Dessert
                  </NavLink>
                </li>
              </ul>
              <div className="line"></div>
            </div>
            <div className={style.bottom}>
              <Outlet />
            </div>
          </div>
        </div>
        <div className={style.rightBox}>
          <h2 className="text-white">
            Orders #34562
          </h2>

          <div className={`${style.rightBoxInner} w-50 d-flex align-items-center justify-content-between gap-3 mx-2`}>
            <Link to={'/'} className="w-100">
              <button className="w-100">
                Dine In
              </button>
            </Link>
            <Link to={'/'} className="w-100">
              <button className="w-100">
                Dine In
              </button>
            </Link>
            <Link to={'/'} className="w-100">
              <button className="w-100">
                Dine In
              </button>
            </Link>
          </div>


          <div className={style.rightTitles}>
            <p>item</p>

            <div>
              <p>Qty</p>
              <p>Price</p>
            </div>
          </div>

          <ul className={style.rightList}>
            <li className={`${istr} w-100 align-items-center justify-content-between`}>
              <div className="w-100">
                <div className={style.right1}>
                  <div>
                    <img src="https://www.themealdb.com/images/media/meals/020z181619788503.jpg" alt="" />
                    <div className={style.box}>
                      <h4>Spicy seasoned sea...</h4>
                      <p>$ 2.29</p>
                    </div>
                  </div>
                  <div className={`${style.box2} d-flex w-25`}>
                    <button onClick={() => increment()}>+</button>
                    <p>{count}</p>
                    <button onClick={() => decrement()}>-</button>
                  </div>
                </div>

                <input className="w-75 form-control" type="text" name="" id="" placeholder="Please, just a little bit spicy only." />
              </div>
              <div className={style.priceq}>
                <h3 className="m-0 p-0">
                  44.56$
                </h3>

                <button onClick={() => del()}>
                  <img src="./assets/images/Vector.svg" alt="" />
                </button>
              </div>
            </li>

            <li className={`d-flex w-100 align-items-center justify-content-between`}>
              <div className="w-100">
                <div className={style.right1}>
                  <div>
                    <img src="https://www.themealdb.com/images/media/meals/020z181619788503.jpg" alt="" />
                    <div className={style.box}>
                      <h4>Spicy seasoned sea...</h4>
                      <p>$ 2.29</p>
                    </div>
                  </div>
                  <div className={`${style.box2} d-flex w-25`}>
                    <button>+</button>
                    <p>2</p>
                    <button>-</button>
                  </div>
                </div>

                <input className="w-75 form-control" type="text" name="" id="" placeholder="Please, just a little bit spicy only." />
              </div>
              <div className={style.priceq}>
                <h3 className="m-0 p-0">
                  44.56$
                </h3>

                <button>
                  <img src="./assets/images/Vector.svg" alt="" />
                </button>
              </div>
            </li>

            <li className={`d-flex w-100 align-items-center justify-content-between`}>
              <div className="w-100">
                <div className={style.right1}>
                  <div>
                    <img src="https://www.themealdb.com/images/media/meals/020z181619788503.jpg" alt="" />
                    <div className={style.box}>
                      <h4>Spicy seasoned sea...</h4>
                      <p>$ 2.29</p>
                    </div>
                  </div>
                  <div className={`${style.box2} d-flex w-25`}>
                    <button>+</button>
                    <p>2</p>
                    <button>-</button>
                  </div>
                </div>

                <input className="w-75 form-control" type="text" name="" id="" placeholder="Please, just a little bit spicy only." />
              </div>
              <div className={style.priceq}>
                <h3 className="m-0 p-0">
                  44.56$
                </h3>

                <button>
                  <img src="./assets/images/Vector.svg" alt="" />
                </button>
              </div>
            </li>


            <li className={`d-flex w-100 align-items-center justify-content-between`}>
              <div className="w-100">
                <div className={style.right1}>
                  <div>
                    <img src="https://www.themealdb.com/images/media/meals/020z181619788503.jpg" alt="" />
                    <div className={style.box}>
                      <h4>Spicy seasoned sea...</h4>
                      <p>$ 2.29</p>
                    </div>
                  </div>
                  <div className={`${style.box2} d-flex w-25`}>
                    <button>+</button>
                    <p>2</p>
                    <button>-</button>
                  </div>
                </div>

                <input className="w-75 form-control" type="text" name="" id="" placeholder="Please, just a little bit spicy only." />
              </div>
              <div className={style.priceq}>
                <h3 className="m-0 p-0">
                  44.56$
                </h3>

                <button>
                  <img src="./assets/images/Vector.svg" alt="" />
                </button>
              </div>
            </li>

            <li className={`d-flex w-100 align-items-center justify-content-between`}>
              <div className="w-100">
                <div className={style.right1}>
                  <div>
                    <img src="https://www.themealdb.com/images/media/meals/020z181619788503.jpg" alt="" />
                    <div className={style.box}>
                      <h4>Spicy seasoned sea...</h4>
                      <p>$ 2.29</p>
                    </div>
                  </div>
                  <div className={`${style.box2} d-flex w-25`}>
                    <button>+</button>
                    <p>2</p>
                    <button>-</button>
                  </div>
                </div>

                <input className="w-75 form-control" type="text" name="" id="" placeholder="Please, just a little bit spicy only." />
              </div>
              <div className={style.priceq}>
                <h3 className="m-0 p-0">
                  44.56$
                </h3>

                <button>
                  <img src="./assets/images/Vector.svg" alt="" />
                </button>
              </div>
            </li>

            <li className={`d-flex w-100 align-items-center justify-content-between`}>
              <div className="w-100">
                <div className={style.right1}>
                  <div>
                    <img src="https://www.themealdb.com/images/media/meals/020z181619788503.jpg" alt="" />
                    <div className={style.box}>
                      <h4>Spicy seasoned sea...</h4>
                      <p>$ 2.29</p>
                    </div>
                  </div>
                  <div className={`${style.box2} d-flex w-25`}>
                    <button>+</button>
                    <p>2</p>
                    <button>-</button>
                  </div>
                </div>

                <input className="w-75 form-control" type="text" name="" id="" placeholder="Please, just a little bit spicy only." />
              </div>
              <div className={style.priceq}>
                <h3 className="m-0 p-0">
                  44.56$
                </h3>

                <button>
                  <img src="./assets/images/Vector.svg" alt="" />
                </button>
              </div>
            </li>


            <li className={`d-flex w-100 align-items-center justify-content-between`}>
              <div className="w-100">
                <div className={style.right1}>
                  <div>
                    <img src="https://www.themealdb.com/images/media/meals/020z181619788503.jpg" alt="" />
                    <div className={style.box}>
                      <h4>Spicy seasoned sea...</h4>
                      <p>$ 2.29</p>
                    </div>
                  </div>
                  <div className={`${style.box2} d-flex w-25`}>
                    <button>+</button>
                    <p>2</p>
                    <button>-</button>
                  </div>
                </div>

                <input className="w-75 form-control" type="text" name="" id="" placeholder="Please, just a little bit spicy only." />
              </div>
              <div className={style.priceq}>
                <h3 className="m-0 p-0">
                  44.56$
                </h3>

                <button>
                  <img src="./assets/images/Vector.svg" alt="" />
                </button>
              </div>
            </li>


            <li className={`d-flex w-100 align-items-center justify-content-between`}>
              <div className="w-100">
                <div className={style.right1}>
                  <div>
                    <img src="https://www.themealdb.com/images/media/meals/020z181619788503.jpg" alt="" />
                    <div className={style.box}>
                      <h4>Spicy seasoned sea...</h4>
                      <p>$ 2.29</p>
                    </div>
                  </div>
                  <div className={`${style.box2} d-flex w-25`}>
                    <button>+</button>
                    <p>2</p>
                    <button>-</button>
                  </div>
                </div>

                <input className="w-75 form-control" type="text" name="" id="" placeholder="Please, just a little bit spicy only." />
              </div>
              <div className={style.priceq}>
                <h3 className="m-0 p-0">
                  44.56$
                </h3>

                <button>
                  <img src="./assets/images/Vector.svg" alt="" />
                </button>
              </div>
            </li>


            <li className={`d-flex w-100 align-items-center justify-content-between`}>
              <div className="w-100">
                <div className={style.right1}>
                  <div>
                    <img src="https://www.themealdb.com/images/media/meals/020z181619788503.jpg" alt="" />
                    <div className={style.box}>
                      <h4>Spicy seasoned sea...</h4>
                      <p>$ 2.29</p>
                    </div>
                  </div>
                  <div className={`${style.box2} d-flex w-25`}>
                    <button>+</button>
                    <p>2</p>
                    <button>-</button>
                  </div>
                </div>

                <input className="w-75 form-control" type="text" name="" id="" placeholder="Please, just a little bit spicy only." />
              </div>
              <div className={style.priceq}>
                <h3 className="m-0 p-0">
                  44.56$
                </h3>

                <button>
                  <img src="./assets/images/Vector.svg" alt="" />
                </button>
              </div>
            </li>


            <li className={`d-flex w-100 align-items-center justify-content-between`}>
              <div className="w-100">
                <div className={style.right1}>
                  <div>
                    <img src="https://www.themealdb.com/images/media/meals/020z181619788503.jpg" alt="" />
                    <div className={style.box}>
                      <h4>Spicy seasoned sea...</h4>
                      <p>$ 2.29</p>
                    </div>
                  </div>
                  <div className={`${style.box2} d-flex w-25`}>
                    <button>+</button>
                    <p>2</p>
                    <button>-</button>
                  </div>
                </div>

                <input className="w-75 form-control" type="text" name="" id="" placeholder="Please, just a little bit spicy only." />
              </div>
              <div className={style.priceq}>
                <h3 className="m-0 p-0">
                  44.56$
                </h3>

                <button>
                  <img src="./assets/images/Vector.svg" alt="" />
                </button>
              </div>
            </li>

          </ul>

          <div className={style.btnBox}>
            <ul>
              <li>
                <h4>
                  Discount
                </h4>
                <p>
                  0$
                </p>
              </li>
              <li>
                <h4>
                  Sub total
                </h4>
                <p> $ 21,03</p>
              </li>
            </ul>

            <button>
              Continue to Payment
            </button>
          </div>
        </div>

        <div className={style.right_pay}>
          <h2 className="text-white">
            Orders #34562
          </h2>
          <p>3 payment method available</p>

          <h3>Payment Method</h3>

          <ul>
            <li>
              <img src="" alt="" />
              <p></p>
            </li>
            <li>
              <img src="" alt="" />
              <p></p>
            </li>
            <li>
              <img src="" alt="" />
              <p></p>
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default Default;
