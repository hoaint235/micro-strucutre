import { Typography } from "@material-ui/core";
import React from "react";
import { TypographyProps } from "./Typography.type";

const Subtitle = (props: TypographyProps) => {
  const { label, ...restProps } = props;

  return (
    <Typography component="h6" variant="h6" color="textPrimary" {...restProps}>
      {label}
    </Typography>
  );
};

export default Subtitle;
