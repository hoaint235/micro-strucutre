import { MenuItem } from "@material-ui/core";
import React from "react";
import { Field } from "../../atoms";
import { SelectProps } from "./Select.type";

const Single = (props: SelectProps) => {
  const { items, onChange, value, ...restProps } = props;
  const [defaultValue, setDefaultValue] = React.useState(value || "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setDefaultValue(selectedValue);
    onChange(selectedValue);
  };

  return (
    <Field.Input
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
    </Field.Input>
  );
};

export default Single;
