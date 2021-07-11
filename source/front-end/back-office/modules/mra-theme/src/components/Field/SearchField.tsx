import {
  InputAdornment,
  makeStyles,
  TextField,
  TextFieldProps,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    "&> .mra-layout-MuiOutlinedInput-root": {
      borderRadius: 12,
    },
  },
}));

const SearchField = (props: TextFieldProps) => {
  const classes = useStyles();

  return (
    <TextField
      classes={{ ...classes }}
      id={`input-${props.name}`}
      {...props}
      fullWidth
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchField;
