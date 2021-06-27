import { makeStyles, TextField, TextFieldProps } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";

const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 12,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${theme.palette.primary.main} 0 0 0 1px`,
      borderColor: theme.palette.primary.main,
    },
  },
  error: {
    borderColor: theme.palette.error.main,
  },
  focused: {
    "&$error": {
      boxShadow: "none",
      borderColor: theme.palette.error.main,
    },
  },
}));

const InputField = ({ label, name, ...props }: TextFieldProps) => {
  const classes = useStylesReddit();
  const { t } = useTranslation();

  return (
    <TextField
      size="small"
      label={t(`${label}`)}
      id={`input-${name}`}
      InputProps={{ classes, disableUnderline: true }}
      {...props}
      fullWidth
      variant="filled"
    />
  );
};

export default InputField;
