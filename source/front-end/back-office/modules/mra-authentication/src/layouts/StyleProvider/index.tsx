import {
  StylesProvider,
  ThemeProvider,
  colors,
  createMuiTheme,
  createGenerateClassName,
  makeStyles,
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
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14,
    fontWeightMedium: 400,
  },
});

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    backgroundColor: "rgb(227, 242, 253)",
    height: "100%",
    minHeight: "100vh",
    width: "100%",
    maxWidth: "calc(100% + 16px)",
  },
}));

const generateClassName = createGenerateClassName({
  productionPrefix: "mra-auth",
  seed: "mra-auth",
});

const StyleProvider = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>{children}</div>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default StyleProvider;
