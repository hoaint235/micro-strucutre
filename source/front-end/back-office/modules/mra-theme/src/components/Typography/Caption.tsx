import { Typography } from "@material-ui/core";
import React from "react";
import { MfaTypographyProps } from "./Typography.type";

const Caption = (props: MfaTypographyProps) => {
  const { label, color = "textPrimary", ...restProps } = props;

  return (
    <Typography component="p" variant="caption" color={color} {...restProps}>
      {label}
    </Typography>
  );
};

export default Caption;
