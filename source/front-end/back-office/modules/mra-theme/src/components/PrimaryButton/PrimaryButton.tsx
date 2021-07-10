import { Button, ButtonProps, makeStyles, Theme } from "@material-ui/core";
import React from "react";

const useStyleButton = makeStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    minWidth: 80,
  },
});

type Props = ButtonProps & {
  label?: string;
};

const PrimaryButton = ({ label, ...props }: Props) => {
  const classesButton = useStyleButton();

  return (
    <Button variant="contained" {...props} classes={{ ...classesButton }}>
      {label}
    </Button>
  );
};

export default PrimaryButton;
