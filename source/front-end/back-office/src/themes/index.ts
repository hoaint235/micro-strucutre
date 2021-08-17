import { unstable_createMuiStrictModeTheme as createTheme } from '@material-ui/core';
import palette from './theme.palette';
import typography from './theme.typography';

const theme = createTheme({
  palette: { ...palette },
  typography: { ...typography },
});

export default theme;
