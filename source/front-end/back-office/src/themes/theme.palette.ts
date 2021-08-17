import { colors } from '@material-ui/core';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

const palette: PaletteOptions = {
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
};

export default palette;
