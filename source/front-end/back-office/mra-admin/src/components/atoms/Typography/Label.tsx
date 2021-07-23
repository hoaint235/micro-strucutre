import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const Label = (props: TypographyProps) => {
  const { label, color = "textSecondary", ...restProps } = props;
  const { t } = useTranslation();

  return (
    <Typography component="p" variant="subtitle2" color={color} {...restProps}>
      {t(label)}
    </Typography>
  );
};

export default Label;
