import {
  StylesProvider,
  ThemeProvider,
  colors,
  createMuiTheme,
  createGenerateClassName,
} from "@material-ui/core";
import React from "react";

const theme = createMuiTheme({
  palette: {
    background: {
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: colors.indigo[500],
      light: colors.indigo[900],
    },
    secondary: {
      main: colors.red[500],
    },
    text: {
      primary: colors.blueGrey[500],
      secondary: colors.blueGrey[200],
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 15,
    fontWeightMedium: 400,
  },
});

const generateClassName = createGenerateClassName({
  productionPrefix: "mra-account",
  seed: "mra-account",
});

const MaterialProvider = (props) => {
  const { children } = props;

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}> {children}</ThemeProvider>
    </StylesProvider>
  );
};

export default MaterialProvider;
