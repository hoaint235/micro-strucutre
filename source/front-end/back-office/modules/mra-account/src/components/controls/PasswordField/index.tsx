import { IconButton, InputAdornment, TextFieldProps } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useState } from "react";
import useStylesReddit from "../control.style";
import InputField from "../InputField";

const PasswordField = (props: TextFieldProps) => {
  const [hidePassword, setHidePassword] = useState<boolean>(false);
  const classes = useStylesReddit();

  const handleClickShowPassword = () => {
    setHidePassword((value) => !value);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <InputField
      type={hidePassword ? "text" : "password"}
      InputProps={{
        classes,
        disableUnderline: true,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {hidePassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default PasswordField;
