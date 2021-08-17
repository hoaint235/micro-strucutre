import { useController } from 'react-hook-form';
import { Switch as Control } from '../../components/atoms';
import { SwitchFormProps } from '../form.type';

const Switch = (props: SwitchFormProps) => {
  const {
    name,
    onChange: onExtendChange,
    form: { control },
    ...restProps
  } = props;

  const {
    field: { ref, onChange, ...inputProps },
  } = useController({
    control,
    name,
  });

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    onExtendChange && onExtendChange(!!event.target.value);
  };
  return (
    <Control
      inputRef={ref}
      onChange={handlerChange}
      {...restProps}
      {...inputProps}
    />
  );
};

export default Switch;
