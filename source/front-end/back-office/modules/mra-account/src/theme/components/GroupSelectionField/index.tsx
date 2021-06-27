import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormGroup,
  FormHelperText,
  FormControlLabel,
  Grid,
} from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";

export type GroupSelectionProps = {
  error?: boolean;
  helperText?: string;
  source: Array<SelectProps<string>>;
  onSelect?: (key: string) => any;
  CheckboxProps?: CheckboxProps;
};

const GroupSelectionField = (props: GroupSelectionProps) => {
  const { t } = useTranslation();
  const { error, helperText, source, onSelect, CheckboxProps } = props;

  return (
    <FormControl error={error} fullWidth>
      <FormGroup>
        <Grid container>
          {source.map((item) => (
            <Grid item md={3} sm={4} xs={12} key={item.key}>
              <FormControlLabel
                label={t(item.value)}
                onChange={() => onSelect(item.key)}
                control={
                  <Checkbox
                    color="primary"
                    value={item.key}
                    {...CheckboxProps}
                  />
                }
              />
            </Grid>
          ))}
        </Grid>
      </FormGroup>
      {!!error && <FormHelperText>{t(helperText)}</FormHelperText>}
    </FormControl>
  );
};

export default GroupSelectionField;
