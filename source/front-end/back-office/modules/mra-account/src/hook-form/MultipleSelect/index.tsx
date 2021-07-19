import { MSelect } from "@mra/theme";
import React from "react";
import { useController } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { SelectFormProps } from "../form-type";

const MultipleSelect = (props: SelectFormProps) => {
  const {
    name,
    defaultValue,
    rules,
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
    rules: Object.assign(
      {
        required: {
          value: true,
          message: t("errors.requiredField"),
        },
      },
      { ...rules }
    ),
    defaultValue,
  });

  return (
    <MSelect.Multiple
      error={!!errors[name]}
      helperText={!!errors[name] && errors[name].message}
      onChange={(data) => onChange(data)}
      items={items}
      {...restProps}
      {...inputProps}
      inputRef={ref}
    />
  );
};

export default MultipleSelect;
