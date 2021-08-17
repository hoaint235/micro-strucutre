import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { TypographyProps } from './Typography.type';

const Title = (props: TypographyProps) => {
  const { label, color = 'textPrimary', ...restProps } = props;
  const { t } = useTranslation();

  return (
    <Typography component="p" variant="h4" color={color} {...restProps}>
      {t(label)}
    </Typography>
  );
};

export default Title;
