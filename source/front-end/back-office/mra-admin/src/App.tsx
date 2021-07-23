import { ThemeProvider } from "@material-ui/core";
import theme from "./themes";
import "./i18n";
import AxiosInterceptor from "./utils/http-interceptor";
import { CognitoService } from "./services";
import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Routes } from "./configurations";

const App = () => {
  useEffect(() => {
    CognitoService.initialize();
    AxiosInterceptor.setup();
  }, []);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router>{renderRoutes(Routes)}</Router>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
