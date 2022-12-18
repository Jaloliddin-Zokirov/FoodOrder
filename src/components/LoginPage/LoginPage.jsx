import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import style from "./LoginPage.module.scss";

const LoginPage = () => {
  const storage = window.localStorage;
  const navigate = useNavigate();
  const [userValue, setUserValue] = React.useState({
    name: "",
    password: "",
  });

  const handleClick = () => {
    if (storage.getItem("token") === userValue.password) {
      navigate("/");
      setUserValue({
        name: "",
        password: "",
      });
    } else {
      console.log("error");
      setUserValue({
        name: "",
        password: "",
      });
    }
  };

  return (
    <div className={style.login}>
      <div className={style.container}>
        <h2 className={style.title}>LogIn</h2>
        <div className={style.loginBox}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <div className={style.labelBox}>
              <TextField
                id="outlined-basic"
                label="User Name"
                variant="filled"
                color="warning"
                value={userValue.name}
                onChange={(evt) => setUserValue({ name: evt.target.value })}
              />
            </div>
            <div className={style.labelBox}>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                variant="filled"
                color="warning"
                value={userValue.password}
                onChange={(evt) => setUserValue({ password: evt.target.value })}
              />
            </div>
            <div className={style.buttonBox}>
              <Button variant="contained" onClick={() => handleClick()}>
                LogIn
              </Button>
            </div>
            <p className={style.registerText}>
              To register, go to the <Link to={"/register"}>Register</Link>{" "}
              section, Or have you forgotten{" "}
              <Link to={"/forgot"}>your password?</Link>
            </p>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
