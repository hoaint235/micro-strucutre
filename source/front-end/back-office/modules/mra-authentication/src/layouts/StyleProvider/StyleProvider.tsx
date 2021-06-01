import {
  StylesProvider,
  ThemeProvider,
  colors,
  createMuiTheme,
  createGenerateClassName,
} from "@material-ui/core";
import React from "react";
import MainLayout from "../MainLayout";

const theme = createMuiTheme({
  palette: {
    background: {
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: "rgb(46 91 255)",
    },
    secondary: {
      main: "#f5c1bc",
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
});

const generateClassName = createGenerateClassName({
  productionPrefix: "mra-auth",
  seed: "mra-auth",
});

const StyleProvider = (props) => {
  const { children } = props;
  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <MainLayout>{children}</MainLayout>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default StyleProvider;
