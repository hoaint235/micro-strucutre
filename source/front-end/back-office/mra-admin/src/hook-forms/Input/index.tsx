import { useController } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { Field } from "../../components/atoms";
import { InputFormProps } from "../form.type";
import get from "lodash/get";

const Input = (props: InputFormProps) => {
  const {
    name,
    defaultValue,
    children,
    form: {
      control,
      formState: { errors },
    },
    ...restProps
  } = props;
  const { t } = useTranslation();

  const {
    field: { ref, ...inputProps },
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
    <Field.Input
      error={!!getError()}
      helperText={!!getError() && t(getError())}
      {...restProps}
      {...inputProps}
      inputRef={ref}
    />
  );
};

export default Input;
