import { Checkbox, FormControl, FormControlLabel } from "@material-ui/core";
import React from "react";

const CheckboxField = () => {
  return (
    <FormControl component="fieldset">
      <FormControlLabel
        control={<Checkbox color="primary" />}
        label="Remember me"
      />
      {/* <FormHelperText>Be careful</FormHelperText> */}
    </FormControl>
  );
};

export default CheckboxField;
