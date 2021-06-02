import React from "react";
import { useController } from "react-hook-form";
import InputField from "../../controls/InputField";
import { FormProps } from "../form-types";

const InputForm = (props: FormProps) => {
  const {
    control,
    name,
    errors,
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
          message: "This is a field required",
        },
      },
      { ...rules }
    ),
    defaultValue,
  });

  return (
    <InputField
      error={!!errors[name]}
      helperText={errors[name] && errors[name].message}
      {...restProps}
      {...inputProps}
      inputRef={ref}
    />
  );
};

export default InputForm;
