import { ThemeProvider } from "@material-ui/core";
import theme from "./themes";
import "./i18n";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AuthTemplate, DefaultTemplate } from "./components/templates";
import AxiosInterceptor from "./utils/http-interceptor";
import { ForgotPassword, SignIn } from "./pages";

function App() {
  AxiosInterceptor.setup();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/admin">
          <AuthTemplate>
            <Switch>
              <Route exact path="/users"></Route>
            </Switch>
          </AuthTemplate>
        </Route>

        <Route path="/">
          <DefaultTemplate>
            <Switch>
              <Route exact path="/sign-in">
                <SignIn />
              </Route>
              <Route exact path="/forgot-password">
                <ForgotPassword />
              </Route>
              <Route exact path="/">
                <Redirect to="/admin/users" />
              </Route>
            </Switch>
          </DefaultTemplate>
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;
