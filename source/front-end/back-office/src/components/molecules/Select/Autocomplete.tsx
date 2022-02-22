import { Autocomplete as Control } from '@material-ui/lab';
import { Field } from '@atoms';
import { AutocompleteProps } from './Select.type';

const Autocomplete = (props: AutocompleteProps) => {
  const { items, label, name, value, InputProps, ...restProps } = props;

  return (
    <Control
      options={items}
      value={value}
      getOptionLabel={(option) => option?.value || ''}
      getOptionSelected={(option, value) => option.key === value.key}
      renderInput={(params) => (
        <Field.Input
          {...params}
          label={label}
          name={name}
          InputProps={{
            ...params.InputProps,
          }}
          {...InputProps}
        />
      )}
      {...restProps}
    />
  );
};

export default Autocomplete;
