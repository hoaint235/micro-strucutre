import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { MfaButtonProps } from "./Button.type";

const useStyleButton = makeStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    minWidth: 80,
  },
});

const Default = ({ label, ...props }: MfaButtonProps) => {
  const classesButton = useStyleButton();

  return (
    <Button
      variant="contained"
      {...props}
      classes={{ ...classesButton }}
      size="large"
    >
      {label}
    </Button>
  );
};

export default Default;
