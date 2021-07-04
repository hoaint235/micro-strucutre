import { Typography } from "@material-ui/core";
import React from "react";
import { TypographyProps } from "./Typography.type";

const Title = (props: TypographyProps) => {
  const { label, ...restProps } = props;

  return (
    <Typography component="p" variant="h4" color="textPrimary" {...restProps}>
      {label}
    </Typography>
  );
};

export default Title;
