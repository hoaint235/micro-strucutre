import {
  createGenerateClassName,
  createMuiTheme,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import palette from "./Theme.palette";
import typography from "./Theme.typography";

const theme = createMuiTheme({
  palette: { ...palette },
  typography: { ...typography },
});

type Props = {
  children: React.ReactNode;
  name: string;
};

const MaterialProvider = (props: Props) => {
  const { name, children } = props;

  const generateClassName = createGenerateClassName({
    productionPrefix: name,
    seed: name,
  });

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProvider>
  );
};

export default MaterialProvider;
