import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import style from "./HotDishesEdit.module.scss";
import AddCards from "../AddCards/AddCards";
import DefaultEdit from "../DefaultEdit/DefaultEdit";

const HotDishesEdit = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={style.hotDishes}>
      <div className={style.hotDishesBox}>
        <div className={style.hotDishesTop}>
          <h2 className={style.title}>Choose Dishes Edit</h2>
          <div className={style.select}>
            <FormControl
              variant="filled"
              sx={{ minWidth: 120 }}
              color="warning"
            >
              <InputLabel id="demo-simple-select-filled-label">
                Dine In
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className={style.hotDishesBottom}>
          <DefaultEdit />
          <AddCards />
        </div>
      </div>
    </div>
  );
};

export default HotDishesEdit;
