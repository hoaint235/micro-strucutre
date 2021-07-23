import { alpha, makeStyles, Theme } from "@material-ui/core";

export const useStyleIconButton = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

export const useStyles = makeStyles((theme: Theme) => ({
  iconSecondary: {
    color: theme.palette.text.primary,
    backgroundColor: alpha(theme.palette.text.primary, 0.2),
  },
  iconPrimary: {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  },
  menuItem: {
    minHeight: theme.spacing(5),
  },
}));

export const useStylesAvatar = makeStyles(() => ({
  root: {
    borderRadius: "30%",
  },
}));
