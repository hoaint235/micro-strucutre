import { ThemeProvider } from "@material-ui/core";
import theme from "./themes";
import "./i18n";
import AxiosInterceptor from "./utils/http-interceptor";
import { CognitoService } from "./services";
import React, { useEffect } from "react";
import Routes from "./routes";

const App = () => {
  useEffect(() => {
    CognitoService.initialize();
    AxiosInterceptor.setup();
  }, []);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
