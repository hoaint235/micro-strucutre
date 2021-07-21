import { Typography } from "@material-ui/core";

const Label = (props: TypographyProps) => {
  const { label, color = "textSecondary", ...restProps } = props;

  return (
    <Typography component="p" variant="subtitle2" color={color} {...restProps}>
      {label}
    </Typography>
  );
};

export default Label;
