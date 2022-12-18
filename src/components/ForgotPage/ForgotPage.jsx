import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import style from "./ForgotPage.module.scss";

const ForgotPage = () => {
  return (
    <div className={style.forgot}>
      <div className={style.container}>
        <h2 className={style.title}>Forgot password</h2>
        <div className={style.forgotBox}>
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
                label="Email"
                type="email"
                variant="filled"
                color="warning"
              />
            </div>
            <div className={style.labelBox}>
              <TextField
                id="outlined-password-input"
                label="New password"
                type="password"
                variant="filled"
                color="warning"
              />
            </div>
            <div className={style.buttonBox}>
              <Button variant="contained">Submit</Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ForgotPage;
