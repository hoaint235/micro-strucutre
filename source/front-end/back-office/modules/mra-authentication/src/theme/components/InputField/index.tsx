import { TextField, TextFieldProps } from "@mra/theme";
import React from "react";
import { useTranslation } from "react-i18next";
import useStylesReddit from "./InputField.style";

const InputField = ({
  label,
  name,
  error,
  helperText,
  ...restProps
}: TextFieldProps) => {
  const classes = useStylesReddit();
  const { t } = useTranslation();

  return (
    <TextField
      id={`input-${name}`}
      label={t(`${label}`)}
      tabIndex={-1}
      error={error}
      helperText={error && t(`${helperText}`)}
      InputProps={{ classes, disableUnderline: true }}
      {...restProps}
      fullWidth
      variant="filled"
    />
  );
};

export default InputField;
