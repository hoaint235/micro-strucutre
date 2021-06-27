import { Button, ButtonProps, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";

const useStyleButton = makeStyles((theme: Theme) => ({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    minWidth: theme.spacing(10),
  },
}));

type Props = ButtonProps & {
  label?: string;
};

const PrimaryButton = ({ label, ...props }: Props) => {
  const classesButton = useStyleButton();
  const { t } = useTranslation();

  return (
    <Button variant="contained" {...props} classes={{ ...classesButton }}>
      {t(label)}
    </Button>
  );
};

export default PrimaryButton;
