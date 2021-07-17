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

const InputField = (props: TextFieldProps) => {
  const { name, label, fullWidth = true, ...restProps } = props;
  const classes = useStyles();
  const helperClasses = useHelperStyles();

  return (
    <Grid container xs={12}>
      {label && (
        <Grid item xs={12} md={2}>
          <Box mb={1 / 2}>{label}</Box>
        </Grid>
      )}
      <Grid item xs={12} md={10}>
        <TextField
          classes={{ ...classes }}
          {...restProps}
          fullWidth={fullWidth}
          size="small"
          variant="outlined"
          inputProps={{
            "data-testid": `input-${name}`,
          }}
          FormHelperTextProps={{
            classes: { ...helperClasses },
          }}
          InputLabelProps={{ shrink: false }}
        />
      </Grid>
    </Grid>
  );
};

export default InputField;
