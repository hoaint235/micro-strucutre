import { alpha, makeStyles, Theme } from "@material-ui/core";

const useStyleListItem = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: 12,
    marginBottom: 5,
    paddingLeft: 23,
    fontWeight: 400,
    "&> .MuiListItemIcon-root": {
      color: theme.palette.text.primary,
    },
    "&> .MuiListItemText-root": {
      color: theme.palette.text.primary,
    },
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      color: theme.palette.primary.main,
      "&> .MuiListItemIcon-root": {
        color: alpha(theme.palette.primary.main, 0.8),
      },
      "&> .MuiListItemText-root": {
        color: alpha(theme.palette.primary.main, 0.8),
        "&> .MuiTypography-root": {
          color: alpha(theme.palette.primary.main, 0.8),
        },
      },
    },
  },
}));

const useStyleItemIcon = makeStyles((theme: Theme) => ({
  root: {
    flexShrink: 0,
    display: "inline-flex",
    minWidth: 36,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

const useStyleItemText = makeStyles(() => ({
  root: {
    flex: "1 1 auto",
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
  },
}));

const useStyles = makeStyles((theme: Theme) => ({
  activeLink: {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
    "& .MuiTypography-body1": {
      fontWeight: 700,
      color: theme.palette.primary.main,
    },
    "&> .MuiListItemIcon-root": {
      color: theme.palette.primary.main,
    },
  },
}));

export { useStyleListItem, useStyleItemIcon, useStyleItemText, useStyles };
