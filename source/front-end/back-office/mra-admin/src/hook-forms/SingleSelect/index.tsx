import get from "lodash/get";
import { useCallback } from "react";
import { useController } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Select } from "../../components/molecules";
import { SelectFormProps } from "../form.type";

const SingleSelect = (props: SelectFormProps) => {
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
    <Select.Single
      error={!!getError()}
      helperText={!!getError() && t(getError())}
      onChange={(data) => onChange(data)}
      {...restProps}
      {...inputProps}
      inputRef={ref}
    />
  );
};

export default SingleSelect;
