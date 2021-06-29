import React from "react";
import { useController } from "react-hook-form";
import { InputField } from "../../../theme";
import { FieldProps } from "../form-types";

const InputForm = (props: FieldProps) => {
  const {
    form: {
      control,
      formState: { errors },
    },
    name,
    defaultValue,
    rules,
    requiredField,
    children,
    ...restProps
  } = props;

  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules: Object.assign(
      {
        required: {
          value: requiredField || true,
          message: "errors.requiredField",
        },
      },
      { ...rules }
    ),
    defaultValue,
  });

  return (
    <InputField
      error={!!errors[name]}
      helperText={errors[name]?.message}
      {...restProps}
      {...inputProps}
      inputRef={ref}
    />
  );
};

export default InputForm;
