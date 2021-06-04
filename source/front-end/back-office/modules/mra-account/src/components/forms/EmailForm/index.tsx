import React, { useMemo } from "react";
import { regexEmail } from "../../../utils/constants";
import { FormProps, Rules } from "../form-types";
import InputForm from "../InputForm";

const EmailForm = ({ rules, ...restProps }: FormProps) => {
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
