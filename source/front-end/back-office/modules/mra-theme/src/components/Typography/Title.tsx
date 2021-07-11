import { Typography } from "@material-ui/core";
import React from "react";
import { MfaTypographyProps } from "./Typography.type";

const Title = (props: MfaTypographyProps) => {
  const { label, color = "textPrimary", ...restProps } = props;

  return (
    <Typography component="p" variant="h4" color={color} {...restProps}>
      {label}
    </Typography>
  );
};

export default Title;
