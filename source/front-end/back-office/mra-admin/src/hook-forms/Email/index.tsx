import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { REGEX_EMAIL } from "../../utils";
import { InputFormProps, Rules } from "../form.type";
import Input from "../Input";

const Email = ({ rules, ...restProps }: InputFormProps) => {
  const { t } = useTranslation();
  const defaultRules = useMemo(() => {
    const defaultRule: Rules = {
      pattern: {
        value: REGEX_EMAIL,
        message: t("errors.invalidEmailFormat"),
      },
    };
    return { ...defaultRule, ...rules };
  }, [t, rules]);

  return <Input {...restProps} rules={defaultRules} />;
};

export default Email;
