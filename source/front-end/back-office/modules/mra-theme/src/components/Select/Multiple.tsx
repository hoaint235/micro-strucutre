import {
  Checkbox,
  Chip,
  ListItemText,
  makeStyles,
  MenuItem,
} from "@material-ui/core";
import React from "react";
import { MField } from "..";
import { MfaSelectProps, Select } from "./Select.type";

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

const Multiple = (props: MfaSelectProps) => {
  const classes = useStyles();
  const { items, onChange, defaultValue, ...restProps } = props;
  const [value, setValue] = React.useState(defaultValue || []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
    onChange(value);
  };

  return (
    <MField.Input
      select
      value={value}
      onChange={handleChange}
      SelectProps={{
        multiple: true,
        renderValue: (selected: string[]) => (
          <div className={classes.chips}>
            {(items.filter((x) => selected.includes(x.key)) as Select[]).map(
              (item) => (
                <Chip
                  variant="outlined"
                  color="primary"
                  key={item.key}
                  label={item.value}
                  className={classes.chip}
                />
              )
            )}
          </div>
        ),
      }}
      {...restProps}
    >
      {items.map((item) => (
        <MenuItem key={item.key} value={item.key}>
          <Checkbox color="primary" checked={value.indexOf(item.key) > -1} />
          <ListItemText primary={item.value} />
        </MenuItem>
      ))}
    </MField.Input>
  );
};

export default Multiple;
