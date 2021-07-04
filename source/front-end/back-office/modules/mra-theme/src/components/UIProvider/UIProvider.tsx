import {
  createGenerateClassName,
  createMuiTheme,
  ThemeProvider,
  StylesProvider,
} from "@material-ui/core";
import React from "react";
import palette from "./UIProvider.palette";
import typography from "./UIProvider.typography";

const theme = createMuiTheme({
  palette: { ...palette },
  typography: { ...typography },
});

type Props = {
  children: any;
  name: string;
};

const UIProvider = (props: Props) => {
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

export default UIProvider;
