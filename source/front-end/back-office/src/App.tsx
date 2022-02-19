import { ThemeProvider } from '@material-ui/core';
import theme from './themes';
import './i18n';
import Routes from './routes';
import '@extensions';

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default App;
