import React, { useMemo } from "react";
import { useController } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { GroupSelectionField, GroupSelectionProps } from "../../theme";
import { HookFormFieldProps, Rules } from "../form-type";

type Props = GroupSelectionProps & HookFormFieldProps;

const GroupSelect = (props: Props) => {
  const {
    name,
    form: {
      control,
      getValues,
      formState: { errors },
    },
    defaultValue,
    rules,
    useDefaultRules = true,
    ...restControl
  } = props;
  const { t } = useTranslation();

  const defaultRules = useMemo(() => {
    let internalRules: Rules = {};
    if (useDefaultRules) {
      internalRules = {
        required: {
          value: true,
          message: t("errors.requiredField"),
        },
      };
    }

    return { ...internalRules, ...rules };
  }, [useDefaultRules]);

  const {
    field: { ref, onChange, ...rest },
  } = useController({
    name,
    control,
    rules: { ...defaultRules },
    defaultValue,
  });

  const handleCheck = (checkedId) => {
    const { [name]: ids } = getValues();
    const newIds = ids?.includes(checkedId)
      ? ids?.filter((id) => id !== checkedId)
      : [...(ids ?? []), checkedId];
    return newIds;
  };

  return (
    <GroupSelectionField
      {...restControl}
      CheckboxProps={{ inputRef: ref, ...rest }}
      error={!!errors[name]}
      helperText={!!errors[name] && errors[name].message}
      onSelect={(key) => onChange(handleCheck(key))}
    />
  );
};

export default GroupSelect;
