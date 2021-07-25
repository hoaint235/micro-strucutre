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

const useStyleItemIconParent = makeStyles((theme: Theme) => ({
  root: {
    flexShrink: 0,
    display: "inline-flex",
    minWidth: theme.spacing(4),
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

const useStyleItemIconChildren = makeStyles((theme: Theme) => ({
  root: {
    flexShrink: 0,
    display: "inline-flex",
    minWidth: theme.spacing(3),
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
    "& .MuiTypography-body1": {
      fontWeight: "bold",
      color: theme.palette.primary.main,
    },
    "&> .MuiListItemIcon-root": {
      color: theme.palette.primary.main,
    },
  },
  iconChildren: {
    width: 8,
    height: 8,
  },
  parentMenu: {
    "&:after": {
      top: 0,
      left: 32,
      width: 1,
      height: "100%",
      content: "''",
      opacity: 1,
      position: "absolute",
      background: "#e3f2fd",
    },
  },
  parent: {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
    "&> .MuiSvgIcon-root": {
      color: alpha(theme.palette.primary.main, 0.8),
    },
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
}));

export {
  useStyleListItem,
  useStyleItemIconParent,
  useStyleItemIconChildren,
  useStyleItemText,
  useStyles,
};
