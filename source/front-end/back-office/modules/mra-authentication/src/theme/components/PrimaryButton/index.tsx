import { Button, ButtonProps } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = ButtonProps & {
  label: string;
};

const PrimaryButton = ({ label, style, ...props }: Props) => {
  const { t } = useTranslation();

  return (
    <Button
      variant="contained"
      color="primary"
      {...props}
      fullWidth
      size="large"
      style={Object.assign({ textTransform: "none" }, { ...style })}
    >
      {t(label)}
    </Button>
  );
};

export default PrimaryButton;
