import { Checkbox, FormControl, FormControlLabel } from "@material-ui/core";
import React from "react";

const CheckboxField = () => {
  return (
    <FormControl component="fieldset">
      <FormControlLabel control={<Checkbox />} label="Custom size" />
      {/* <FormHelperText>Be careful</FormHelperText> */}
    </FormControl>
  );
};

export default CheckboxField;
