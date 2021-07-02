import { Typography } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import { TypographyProps } from "./Typography.type";

const Label = (props: TypographyProps) => {
  const { label, ...restProps } = props;
  const { t } = useTranslation();

  return (
    <Typography
      component="p"
      variant="subtitle2"
      color="textSecondary"
      {...restProps}
    >
      {t(label)}
    </Typography>
  );
};

export default Label;
