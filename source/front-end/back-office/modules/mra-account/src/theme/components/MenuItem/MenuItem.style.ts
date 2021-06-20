import { fade, makeStyles, Theme } from "@material-ui/core";

const useStyleListItem = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: 12,
    marginBottom: 5,
    paddingLeft: 23,
    fontWeight: 400,
    "&> .mra-account-MuiListItemIcon-root": {
      color: theme.palette.text.primary,
    },
    "&> .mra-account-MuiListItemText-root": {
      color: theme.palette.text.primary,
    },
    "&:hover": {
      backgroundColor: "rgb(237, 231, 246)",
      color: theme.palette.primary.main,
      "&> .mra-account-MuiListItemIcon-root": {
        color: fade(theme.palette.primary.main, 0.8),
      },
      "&> .mra-account-MuiListItemText-root": {
        color: fade(theme.palette.primary.main, 0.8),
        "&> .mra-account-MuiTypography-root": {
          color: fade(theme.palette.primary.main, 0.8),
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
    backgroundColor: "rgb(237, 231, 246)",
    "& .mra-account-MuiTypography-root": {
      fontWeight: 700,
      color: theme.palette.primary.main,
    },
    "&> .mra-account-MuiListItemIcon-root": {
      color: theme.palette.primary.main,
    },
  },
}));

export { useStyleListItem, useStyleItemIcon, useStyleItemText, useStyles };
