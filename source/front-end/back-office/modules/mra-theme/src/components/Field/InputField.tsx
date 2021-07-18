import {
  Box,
  Grid,
  makeStyles,
  TextField,
  TextFieldProps,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    "&> .mra-layout-MuiOutlinedInput-root": {
      borderRadius: 4,
    },
  },
});

const useHelperStyles = makeStyles({
  error: {
    marginLeft: 0,
    marginRight: 0,
  },
});

type Props = TextFieldProps & {
  maxLength?: number;
};

const InputField = (props: Props) => {
  const { name, maxLength, fullWidth = true, ...restProps } = props;
  const classes = useStyles();
  const helperClasses = useHelperStyles();

  return (
    <TextField
      classes={{ ...classes }}
      {...restProps}
      fullWidth={fullWidth}
      size="small"
      variant="outlined"
      inputProps={{
        "data-testid": `input-${name}`,
        maxLength: maxLength,
      }}
      FormHelperTextProps={{
        classes: { ...helperClasses },
      }}
    />
  );
};

export default InputField;
