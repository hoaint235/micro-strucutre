import React, { useCallback, useMemo } from "react";
import { useController } from "react-hook-form";
import { regexPassword } from "../../../utils/constants";
import PasswordField from "../../controls/PasswordField";
import { FormProps, Rules } from "../form-types";

type Props = FormProps & {
  requiredRulePassword?: boolean;
};

const PasswordForm = (props: Props) => {
  const {
    control,
    name,
    errors,
    defaultValue,
    rules,
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

    return rules;
  }, [requiredRulePassword]);

  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules: { ...defaultRules, ...rules },
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
