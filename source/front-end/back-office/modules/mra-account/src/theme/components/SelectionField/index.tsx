import { Checkbox, Chip, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { useTranslation } from "react-i18next";

type Props = {
  options: Array<any>;
  label?: string;
};

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const SelectionField = (props: Props) => {
  const { t } = useTranslation();
  const { options, label } = props;

  return (
    <Autocomplete
      multiple
      closeIcon
      fullWidth
      disableCloseOnSelect
      options={options}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            color="primary"
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </React.Fragment>
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            key={index}
            color="primary"
            variant="outlined"
            label={option}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          size="small"
          fullWidth
          {...params}
          label={t(label)}
          variant="outlined"
        />
      )}
    />
  );
};

export default SelectionField;
