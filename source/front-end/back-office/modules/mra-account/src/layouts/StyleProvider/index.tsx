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
    },
    secondary: {
      main: colors.lightBlue.A400,
    },
    text: {
      primary: colors.blueGrey[500],
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14,
    fontWeightMedium: 400,
  },
});

const generateClassName = createGenerateClassName({
  productionPrefix: "mra-account",
  seed: "mra-account",
});

const StyleProvider = (props) => {
  const { children } = props;

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProvider>
  );
};

export default StyleProvider;
