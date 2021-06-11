import { Button, ButtonProps } from "@material-ui/core";
import React from "react";

const SecondaryButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button variant="contained" color="secondary" {...props}>
      {children}
    </Button>
  );
};

export default SecondaryButton;
