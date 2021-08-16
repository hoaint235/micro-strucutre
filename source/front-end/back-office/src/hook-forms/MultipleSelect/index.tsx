import React, { useCallback } from "react";
import { Select } from "../../components/molecules";
import { useController } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { SelectFormProps } from "../form.type";
import get from "lodash/get";

const MultipleSelect = (props: SelectFormProps) => {
  const {
    name,
    defaultValue,
    children,
    items,
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
    <Select.Multiple
      error={!!getError()}
      helperText={!!getError() && t(getError())}
      onChange={onChange}
      items={items}
      {...restProps}
      {...inputProps}
      inputRef={ref}
    />
  );
};

export default MultipleSelect;
