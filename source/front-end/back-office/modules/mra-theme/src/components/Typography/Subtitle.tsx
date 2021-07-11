import { Typography } from "@material-ui/core";
import React from "react";
import { MfaTypographyProps } from "./Typography.type";

const Subtitle = (props: MfaTypographyProps) => {
  const { label, color = "textPrimary", ...restProps } = props;

  return (
    <Typography component="h6" variant="h6" color={color} {...restProps}>
      {label}
    </Typography>
  );
};

export default Subtitle;
