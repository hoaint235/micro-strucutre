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

const Default = (props: MfaButtonProps) => {
  const { label, size = "medium", ...restProps } = props;
  const classesButton = useStyleButton();

  return (
    <Button
      variant="contained"
      {...restProps}
      classes={{ ...classesButton }}
      size={size}
    >
      {label}
    </Button>
  );
};

export default Default;
