import React from "react";
import { useController } from "react-hook-form";
import { regexPassword } from "../../../utils/constants";
import PasswordField from "../../controls/PasswordField";
import { FormProps } from "../form-types";

const PasswordForm = (props: FormProps) => {
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
        pattern: {
          value: regexPassword,
          message: "Incorrect password format.",
        },
      },
      { ...rules }
    ),
    defaultValue,
  });

  return (
    <PasswordField
      error={!!errors[name]}
      helperText={errors[name] && errors[name].message}
      {...restProps}
      {...inputProps}
      inputRef={ref}
    />
  );
};

export default PasswordForm;
