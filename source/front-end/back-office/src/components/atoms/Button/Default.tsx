import { Button, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { ButtonProps } from './Button.type';

const useStyleButton = makeStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    minWidth: 80,
  },
});

const Default = (props: ButtonProps) => {
  const { name, label = '', size = 'medium', ...restProps } = props;
  const classesButton = useStyleButton();
  const { t } = useTranslation();

  return (
    <Button
      variant="contained"
      {...restProps}
      data-testid={name}
      classes={{ ...classesButton }}
      size={size}
    >
      {t(label)}
    </Button>
  );
};

export default Default;
