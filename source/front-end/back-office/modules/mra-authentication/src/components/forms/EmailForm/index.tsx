import React, { useMemo } from "react";
import { regexEmail } from "../../../utils/constants";
import { FieldProps, Rules } from "../form-types";
import InputForm from "../InputForm";

const EmailForm = ({ rules, ...restProps }: FieldProps) => {
  const defaultRules = useMemo(() => {
    const defaultRule: Rules = {
      pattern: {
        value: regexEmail,
        message: "Incorrect email format",
      },
    };
    return { ...defaultRule, ...rules };
  }, []);

  return <InputForm {...restProps} rules={defaultRules} />;
};

export default EmailForm;
