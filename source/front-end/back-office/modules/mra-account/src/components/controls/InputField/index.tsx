import { TextField, TextFieldProps } from "@material-ui/core";
import React from "react";
import useStylesReddit from "../control.style";

const InputField = (props: TextFieldProps) => {
  const classes = useStylesReddit();

  return (
    <TextField
      id={`input-${props.name}`}
      InputProps={{ classes, disableUnderline: true }}
      {...props}
      fullWidth
      variant="filled"
    />
  );
};

export default InputField;
