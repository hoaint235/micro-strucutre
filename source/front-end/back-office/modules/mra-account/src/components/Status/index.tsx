import { Chip, ChipProps, makeStyles, Theme } from "@mra/theme";
import React from "react";
import { useTranslation } from "react-i18next";

const useStyleChip = makeStyles((theme: Theme) => ({
  root: {
    border: `1px solid ${theme.palette.text.primary}`,
    borderLeft: `5px solid ${theme.palette.text.primary}`,
    borderRadius: 4,
    minWidth: theme.spacing(10),
  },
  label: {
    color: theme.palette.text.primary,
  },
}));

const Status = (props: ChipProps) => {
  const { label, ...restProps } = props;
  const { t } = useTranslation();
  const classesStyleChip = useStyleChip();
  return (
    <Chip
      classes={{ ...classesStyleChip }}
      variant="outlined"
      {...restProps}
      label={t(`${label}`)}
    />
  );
};

export default Status;
