import { useController } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useCallback, useMemo } from "react";
import { Field } from "../../components/atoms";
import { InputFormProps, Rules } from "../form.type";
import get from "lodash/get";

const Password = (props: InputFormProps) => {
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
    <Field.Password
      error={!!getError()}
      helperText={!!getError() && t(getError())}
      {...restProps}
      {...inputProps}
      inputRef={ref}
    />
  );
};

export default Password;
