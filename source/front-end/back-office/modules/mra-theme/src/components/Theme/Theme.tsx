import {
  createGenerateClassName,
  createMuiTheme,
  ThemeProvider,
  StylesProvider,
} from "@material-ui/core";
import React from "react";
import palette from "./Theme.palette";
import typography from "./Theme.typography";

const theme = createMuiTheme({
  palette: { ...palette },
  typography: { ...typography },
});

export type MfaThemeProps = {
  children: any;
  name: string;
};

const Theme = (props: MfaThemeProps) => {
  const { name, children } = props;

  const generateClassName = createGenerateClassName({
    seed: name,
    productionPrefix: name,
  });

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProvider>
  );
};

export default Theme;
