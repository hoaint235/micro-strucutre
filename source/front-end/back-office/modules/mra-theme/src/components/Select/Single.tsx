import { makeStyles, MenuItem } from "@material-ui/core";
import React from "react";
import { MField } from "..";
import { MfaSelectProps } from "./Select.type";

const Multiple = (props: MfaSelectProps) => {
  const { items, onChange, defaultValue, ...restProps } = props;
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(value);
  };

  return (
    <MField.Input select value={value} onChange={handleChange} {...restProps}>
      {items.map((item) => (
        <MenuItem key={item.key} value={item.value}>
          {item.value}
        </MenuItem>
      ))}
    </MField.Input>
  );
};

export default Multiple;
