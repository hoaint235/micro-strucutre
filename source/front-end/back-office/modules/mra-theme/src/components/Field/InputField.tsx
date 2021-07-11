import { makeStyles, TextField, TextFieldProps } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    "&> .mra-layout-MuiOutlinedInput-root": {
      borderRadius: 4,
    },
  },
}));

const InputField = (props: TextFieldProps) => {
  const { name, fullWidth = true, ...restProps } = props;
  const classes = useStyles();

  return (
    <TextField
      classes={{ ...classes }}
      {...restProps}
      fullWidth={fullWidth}
      size="small"
      variant="outlined"
      inputProps={{
        "data-testid": `input-${name}`,
      }}
      InputLabelProps={{ shrink: false }}
    />
  );
};

export default InputField;
