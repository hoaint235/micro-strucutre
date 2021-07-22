import {
  Checkbox,
  Chip,
  ListItemText,
  makeStyles,
  MenuItem,
} from "@material-ui/core";
import React from "react";
import { Field } from "../../atoms";
import { SelectProps } from "./Select.type";

const useStyles = makeStyles({
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    marginLeft: 2,
    marginRight: 2,
  },
});

const Multiple = (props: SelectProps) => {
  const classes = useStyles();
  const { items, onChange, value = [], ...restProps } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <Field.Input
      select
      value={value}
      onChange={handleChange}
      SelectProps={{
        multiple: true,
        renderValue: (selected: any) => (
          <div className={classes.chips}>
            {(
              items.filter((x) => selected.includes(x.key)) as SelectionProps[]
            ).map((item) => (
              <Chip
                variant="outlined"
                color="primary"
                key={item.key}
                label={item.value}
                className={classes.chip}
              />
            ))}
          </div>
        ),
      }}
      {...restProps}
    >
      {items.map((item: SelectionProps, index: number) => (
        <MenuItem key={`${item.key}-${index}`} value={item.key}>
          <Checkbox
            color="primary"
            checked={(value as string[]).indexOf(item.key) > -1}
          />
          <ListItemText primary={item.value} />
        </MenuItem>
      ))}
    </Field.Input>
  );
};

export default Multiple;
