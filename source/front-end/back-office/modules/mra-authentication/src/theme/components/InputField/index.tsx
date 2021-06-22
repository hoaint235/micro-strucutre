import { TextField, TextFieldProps } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import useStylesReddit from "./InputField.style";

const InputField = ({ label, name, ...restProps }: TextFieldProps) => {
  const classes = useStylesReddit();
  const { t } = useTranslation();

  return (
    <TextField
      id={`input-${name}`}
      label={t(`${label}`)}
      InputProps={{ classes, disableUnderline: true }}
      {...restProps}
      fullWidth
      variant="filled"
    />
  );
};

export default InputField;
