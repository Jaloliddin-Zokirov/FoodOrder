import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import style from "./RegisterPage.module.scss";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const storage = window.localStorage;
  const navigate = useNavigate();
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");

  const handleClick = () => {
    storage.setItem("name", userName);
    storage.setItem("email", userEmail);
    storage.setItem("password", userPassword);
    setUserName("");
    setUserEmail("");
    setUserPassword("");
    navigate("/");
  };

  return (
    <div className={style.register}>
      <div className={style.container}>
        <h2 className={style.title}>Register</h2>
        <div className={style.registerBox}>
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
                type="text"
                variant="filled"
                color="warning"
                value={userName}
                onChange={(evt) => setUserName(evt.target.value)}
              />
            </div>
            <div className={style.labelBox}>
              <TextField
                id="outlined-basic"
                label="Email"
                type="email"
                variant="filled"
                color="warning"
                value={userEmail}
                onChange={(evt) => setUserEmail(evt.target.value)}
              />
            </div>
            <div className={style.labelBox}>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                variant="filled"
                color="warning"
                value={userPassword}
                onChange={(evt) => setUserPassword(evt.target.value)}
              />
            </div>
            <div className={style.buttonBox}>
              <Button variant="contained" onClick={() => handleClick()}>
                SingIn
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
