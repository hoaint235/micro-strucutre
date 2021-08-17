import { makeStyles, Theme } from '@material-ui/core';

export const useStylesSortLabel = makeStyles((theme: Theme) => ({
  icon: {
    color: `${theme.palette.text.primary} !important`,
  },
}));

export const useStylesTableCell = makeStyles((theme: Theme) => ({
  root: {
    fontWeight: theme.typography.fontWeightBold,
    position: 'relative',
  },
}));

export const useStyles = makeStyles({
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
});
