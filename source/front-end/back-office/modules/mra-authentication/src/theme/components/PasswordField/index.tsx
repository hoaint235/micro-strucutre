import { IconButton, InputAdornment, TextFieldProps } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { InputField } from "..";
import useStylesReddit from "../InputField/InputField.style";

const PasswordField = ({
  label,
  helperText,
  error,
  ...restProps
}: TextFieldProps) => {
  const { t } = useTranslation();
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
      label={t(`${label}`)}
      error={error}
      helperText={error && t(`${helperText}`)}
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
      {...restProps}
    />
  );
};

export default PasswordField;
