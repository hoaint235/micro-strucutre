import React, { useMemo } from "react";
import { useController } from "react-hook-form";
import { PasswordField } from "../../../theme";
import { regexPassword } from "../../../utils/constants";
import { FieldProps, Rules } from "../form-types";

type Props = FieldProps & {
  requiredRulePassword?: boolean;
};

const PasswordForm = (props: Props) => {
  const {
    control,
    name,
    errors,
    defaultValue,
    rules: externalRules,
    requiredField,
    children,
    requiredRulePassword = true,
    ...restProps
  } = props;

  const defaultRules = useMemo(() => {
    let rules: Rules = {
      required: {
        value: requiredField || true,
        message: "This is a field required",
      },
    };

    if (requiredRulePassword) {
      rules = {
        ...rules,
        pattern: {
          value: regexPassword,
          message: "Incorrect password format.",
        },
      };
    }

    return { ...rules, ...externalRules };
  }, [requiredRulePassword]);

  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules: defaultRules,
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
