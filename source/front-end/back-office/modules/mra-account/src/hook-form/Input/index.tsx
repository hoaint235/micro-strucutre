import { InputProps, Rules } from "../form-type";
import { MField } from "@mra/theme";
import React from "react";
import { useController } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

const Input = (props: InputProps) => {
  const {
    name,
    defaultValue,
    rules,
    children,
    useDefaultRules = true,
    form: {
      control,
      formState: { errors },
    },
    ...restProps
  } = props;
  const { t } = useTranslation();

  const defaultRules = useMemo(() => {
    let rules: Rules = {};
    if (useDefaultRules) {
      rules = {
        required: {
          value: true,
          message: t("errors.requiredField"),
        },
      };
    }

    return rules;
  }, [rules, useDefaultRules]);

  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules: Object.assign({ ...defaultRules }, { ...rules }),
    defaultValue,
  });

  return (
    <MField.Input
      error={!!errors[name]}
      helperText={!!errors[name] && errors[name].message}
      {...restProps}
      {...inputProps}
      inputRef={ref}
    />
  );
};

export default Input;
