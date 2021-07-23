import { IconButton, InputAdornment, TextFieldProps } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Field from ".";

const Password = ({
  label,
  helperText,
  error,
  ...restProps
}: TextFieldProps) => {
  const { t } = useTranslation();
  const [hidePassword, setHidePassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setHidePassword((value) => !value);
  };

  const handleMouseDownPassword = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <Field.Input
      type={hidePassword ? "text" : "password"}
      label={t(`${label}`)}
      tabIndex={-1}
      error={error}
      helperText={error && t(`${helperText}`)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              tabIndex={-1}
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {hidePassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...restProps}
    />
  );
};

export default Password;
