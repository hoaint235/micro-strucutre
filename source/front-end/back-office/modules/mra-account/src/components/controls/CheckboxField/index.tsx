import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormHelperText,
} from "@material-ui/core";
import React from "react";

type Props = {
  name: string;
  error?: boolean;
  helperText?: string;
  CheckBoxProps?: CheckboxProps;
  FormControlProps?: FormControlLabelProps;
};

const CheckboxField = (props: Props) => {
  const { name, error, helperText, CheckBoxProps, FormControlProps } = props;

  return (
    <FormControl component="fieldset" error={error}>
      <FormControlLabel
        control={<Checkbox color="primary" {...CheckBoxProps} />}
        label={name}
        {...FormControlProps}
      />
      {!error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default CheckboxField;
