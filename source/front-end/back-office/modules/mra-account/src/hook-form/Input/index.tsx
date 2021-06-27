import { TextFieldProps } from "@material-ui/core";
import React from "react";
import { useController } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { InputField } from "../../theme";
import { HookFormFieldProps } from "../form-type";

export type InputProps = TextFieldProps & HookFormFieldProps;

const Input = (props: InputProps) => {
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
    field: { ref, ...inputProps },
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
    <InputField
      error={!!errors[name]}
      helperText={!!errors[name] && errors[name].message}
      {...restProps}
      {...inputProps}
      inputRef={ref}
    />
  );
};

export default Input;
