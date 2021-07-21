import { ThemeProvider } from "@material-ui/core";
import theme from "./themes";
import "./i18n";
import AxiosInterceptor from "./utils/http-interceptor";
import { CognitoService } from "./services";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AuthTemplate, DefaultTemplate } from "./components/templates";
import { ListUsers, SignIn } from "./pages";

function App() {
  useEffect(() => {
    CognitoService.initialize();
    AxiosInterceptor.setup();
  }, []);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/sign-in" exact>
              <DefaultTemplate>
                <SignIn />
              </DefaultTemplate>
            </Route>

            <Route path={["/users", "/products"]} component={AuthTemplate}>
              <Route path="/users" exact component={ListUsers} />
              <Route path="/products" exact>
                <div>This is a list product</div>
              </Route>
            </Route>

            <Route path="/">
              <Redirect to="/admin/users" />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
