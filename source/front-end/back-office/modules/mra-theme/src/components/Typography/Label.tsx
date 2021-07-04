import { Typography } from "@material-ui/core";
import React from "react";
import { TypographyProps } from "./Typography.type";

const Label = (props: TypographyProps) => {
  const { label, ...restProps } = props;

  return (
    <Typography
      component="p"
      variant="subtitle2"
      color="textSecondary"
      {...restProps}
    >
      {label}
    </Typography>
  );
};

export default Label;
