import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import style from "./DefaultEdit.module.scss";
import "./Links.scss";

const DefaultEdit = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <section className={style.default}>
      <div className={style.dafeultBox}>
        <div className={style.leftBox}>
          <div className={style.top}>
            <div className={style.left}>
              <div className={style.titleBox}>
                <p className={style.titleName}>Products Management</p>{" "}
              </div>
            </div>
            <div className={style.right}>
              <FormControl fullWidth color="warning">
                <InputLabel id="demo-simple-select-label">
                  Manage Categories
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Manage Categories"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
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
                    to={""}
                  >
                    Hot Dishes
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `active home-links` : `link home-links`
                    }
                    to={"cold-dishes-setting"}
                  >
                    Cold Dishes
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `active home-links` : `link home-links`
                    }
                    to={"soup-setting"}
                  >
                    Soup
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `active home-links` : `link home-links`
                    }
                    to={"grill-setting"}
                  >
                    Grill
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `active home-links` : `link home-links`
                    }
                    to={"appetizer-setting"}
                  >
                    Appetizer
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `active home-links` : `link home-links`
                    }
                    to={"dessert-setting"}
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
        <div className={style.rightBox}></div>
      </div>
    </section>
  );
};

export default DefaultEdit;
