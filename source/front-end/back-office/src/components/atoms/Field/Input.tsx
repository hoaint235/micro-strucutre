import { makeStyles, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { InputProps } from './Field.type';

const useStyles = makeStyles({
  root: {
    '&> .MuiOutlinedInput-root': {
      borderRadius: 4,
    },
  },
});

const useHelperStyles = makeStyles({
  error: {
    marginLeft: 0,
    marginRight: 0,
  },
});

const Input = (props: InputProps) => {
  const {
    name,
    label,
    maxLength,
    placeholder = '',
    fullWidth = true,
    range,
    inputProps,
    ...restProps
  } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const helperClasses = useHelperStyles();

  return (
    <TextField
      classes={{ ...classes }}
      {...restProps}
      fullWidth={fullWidth}
      size="small"
      variant="outlined"
      label={t(`${label}`)}
      placeholder={t(placeholder)}
      inputProps={{
        'data-testid': `input-${name}`,
        maxLength,
        max: range?.max,
        min: range?.min,
        ...{ ...inputProps },
      }}
      FormHelperTextProps={{
        classes: { ...helperClasses },
      }}
    />
  );
};

export default Input;
