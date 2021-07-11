import { InputAdornment, makeStyles, TextFieldProps } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import InputField from "./InputField";

const SearchField = (props: TextFieldProps) => {
  return (
    <InputField
      {...props}
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
