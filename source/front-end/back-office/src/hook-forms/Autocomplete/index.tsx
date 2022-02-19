import get from 'lodash/get';
import { useCallback } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Select } from '@molecules';
import { AutocompleteFormProps } from '../form.type';

const Autocomplete = (props: AutocompleteFormProps) => {
  const {
    name,
    defaultValue,
    form: {
      control,
      formState: { errors },
    },
    InputProps,
    ...restProps
  } = props;
  const { t } = useTranslation();

  const {
    field: { ref, onChange, ...inputProps },
  } = useController({
    name,
    control,
    defaultValue,
  });

  const getError = useCallback(
    () => get(errors, name)?.message,
    [errors, name]
  );

  return (
    <Select.Autocomplete
      InputProps={{
        error: !!getError(),
        helperText: !!getError() && t(getError()),
        inputRef: ref,
        ...{ ...InputProps },
      }}
      onChange={(_: any, data: any) => onChange(data)}
      {...inputProps}
      {...restProps}
    />
  );
};

export default Autocomplete;
