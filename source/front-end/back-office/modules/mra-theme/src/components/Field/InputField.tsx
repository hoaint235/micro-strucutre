import {
  Box,
  Grid,
  makeStyles,
  TextField,
  TextFieldProps,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    "&> .mra-layout-MuiOutlinedInput-root": {
      borderRadius: 4,
    },
  },
}));

const InputField = (props: TextFieldProps) => {
  const { name, label, fullWidth = true, ...restProps } = props;
  const classes = useStyles();

  return (
    <Grid container>
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
          InputLabelProps={{ shrink: false }}
        />
      </Grid>
    </Grid>
  );
};

export default InputField;
