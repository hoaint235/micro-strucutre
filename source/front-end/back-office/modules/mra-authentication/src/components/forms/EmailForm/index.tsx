import React, { useMemo } from "react";
import { REGEX_EMAIL } from "../../../utils/constants";
import { FieldProps, Rules } from "../form-types";
import InputForm from "../InputForm";

const EmailForm = ({ rules, ...restProps }: FieldProps) => {
  const defaultRules = useMemo(() => {
    const defaultRule: Rules = {
      pattern: {
        value: REGEX_EMAIL,
        message: "errors.invalidEmailFormat",
      },
    };
    return { ...defaultRule, ...rules };
  }, []);

  return <InputForm {...restProps} rules={defaultRules} />;
};

export default EmailForm;
