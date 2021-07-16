import { MenuItem } from "@material-ui/core";
import React from "react";
import { MField } from "..";
import { MfaSelectProps } from "./Select.type";

const Single = (props: MfaSelectProps) => {
  const { items, onChange, value, ...restProps } = props;
  const [defaultValue, setDefaultValue] = React.useState(value || "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setDefaultValue(selectedValue);
    onChange(selectedValue);
  };

  return (
    <MField.Input
      select
      value={defaultValue}
      onChange={handleChange}
      {...restProps}
    >
      {items.map((item) => (
        <MenuItem key={item.key} value={item.key}>
          {item.value}
        </MenuItem>
      ))}
    </MField.Input>
  );
};

export default Single;
