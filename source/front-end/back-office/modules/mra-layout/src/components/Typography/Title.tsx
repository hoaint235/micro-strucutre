import { Typography } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import { TypographyProps } from "./Typography.type";

const Title = (props: TypographyProps) => {
  const { label, ...restProps } = props;
  const { t } = useTranslation();

  return (
    <Typography component="p" variant="h4" color="textPrimary" {...restProps}>
      {t(label)}
    </Typography>
  );
};

export default Title;
