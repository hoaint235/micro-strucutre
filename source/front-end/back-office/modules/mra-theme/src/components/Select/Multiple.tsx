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
  const { items, onChange, value = [], ...restProps } = props;
  const [defaultValue, setDefaultValue] = React.useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDefaultValue(value);
    onChange(value);
  };

  return (
    <MField.Input
      select
      value={defaultValue}
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
          <Checkbox
            color="primary"
            checked={
              defaultValue && (defaultValue as string[]).indexOf(item.key) > -1
            }
          />
          <ListItemText primary={item.value} />
        </MenuItem>
      ))}
    </MField.Input>
  );
};

export default Multiple;
