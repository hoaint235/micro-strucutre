import { Typography } from "@material-ui/core";
import React from "react";

const Subtitle = (props: TypographyProps) => {
  const { label, color = "textPrimary", ...restProps } = props;

  return (
    <Typography component="h6" variant="h6" color={color} {...restProps}>
      {label}
    </Typography>
  );
};

export default Subtitle;
