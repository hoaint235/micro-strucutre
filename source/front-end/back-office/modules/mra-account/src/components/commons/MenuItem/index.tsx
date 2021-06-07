import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";
import { t } from "@mra/utility";
import { NavLink } from "react-router-dom";

const useStyleListItem = makeStyles((theme: Theme) => ({
  selected: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    backgroundColor: "rgb(237, 231, 246)",
    "&:hover": {
      color: "rgb(237, 231, 246)",
    },
  },
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
        color: theme.palette.primary.main,
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

type MenuItemProps = {
  label: string;
  icon: any;
  path?: string;
  exact?: boolean;
};

const MenuItem = ({ label, path, icon: Icon }: MenuItemProps) => {
  const classesListItem = useStyleListItem();
  const classesItemIcon = useStyleItemIcon();
  const classesItemText = useStyleItemText();
  const classes = useStyles();

  return (
    <ListItem
      button
      component={NavLink}
      classes={{ ...classesListItem }}
      to={path}
      activeClassName={classes.activeLink}
    >
      <ListItemIcon classes={{ ...classesItemIcon }}>
        <Icon />
      </ListItemIcon>
      <ListItemText classes={{ ...classesItemText }}>{t(label)}</ListItemText>
    </ListItem>
  );
};

export default MenuItem;
