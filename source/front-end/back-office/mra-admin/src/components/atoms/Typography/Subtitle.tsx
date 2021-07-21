import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const Subtitle = (props: TypographyProps) => {
  const { label, color = "textPrimary", ...restProps } = props;
  const { t } = useTranslation();

  return (
    <Typography component="h6" variant="h6" color={color} {...restProps}>
      {t(label)}
    </Typography>
  );
};

export default Subtitle;
