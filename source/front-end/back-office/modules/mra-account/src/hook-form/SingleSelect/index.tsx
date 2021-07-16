import { MSelect } from "@mra/theme";
import React from "react";
import { useController } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { SelectFormProps } from "../form-type";

const SingleSelect = (props: SelectFormProps) => {
  const {
    name,
    defaultValue,
    rules,
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
    <MSelect.Single
      error={!!errors[name]}
      helperText={!!errors[name] && errors[name].message}
      onChange={(data) => {
        console.log(data);
        onChange(data);
      }}
      {...restProps}
      {...inputProps}
      inputRef={ref}
    />
  );
};

export default SingleSelect;
