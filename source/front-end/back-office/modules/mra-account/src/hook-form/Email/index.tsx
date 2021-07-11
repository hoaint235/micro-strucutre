import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "..";
import { REGEX_EMAIL } from "../../utils";
import { Rules } from "../form-type";
import { InputProps } from "../Input";

const Email = ({ rules, ...restProps }: InputProps) => {
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
