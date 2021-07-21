import { Typography } from "@material-ui/core";
import React from "react";

const Caption = (props: TypographyProps) => {
  const { label, color = "textPrimary", ...restProps } = props;

  return (
    <Typography component="p" variant="caption" color={color} {...restProps}>
      {label}
    </Typography>
  );
};

export default Caption;
