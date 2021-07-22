import { MenuItem } from "@material-ui/core";
import React from "react";
import { Field } from "../../atoms";
import { SelectProps } from "./Select.type";

const Single = (props: SelectProps) => {
  const { items, onChange, value = "", ...restProps } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <Field.Input select value={value} onChange={handleChange} {...restProps}>
      {items.map((item: SelectionProps, index: number) => (
        <MenuItem key={`${item.key}-${index}`} value={item.key}>
          {item.value}
        </MenuItem>
      ))}
    </Field.Input>
  );
};

export default Single;
