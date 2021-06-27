import {
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  withStyles,
} from "@material-ui/core";
import React from "react";
import { InputField } from "..";

const SelectField = () => {
  return (
    <FormControl variant="filled" fullWidth>
      <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectField;
